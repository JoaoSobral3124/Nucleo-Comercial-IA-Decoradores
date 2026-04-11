import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // 1. Cria uma resposta inicial preservando a request completa
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // 2. Proteção de Variáveis de Ambiente
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    // Se faltar variáveis, retorna a resposta padrão sem autenticação
    return response
  }

  try {
    const supabase = createServerClient(
      supabaseUrl,
      supabaseAnonKey,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            // Atualiza os cookies na requisição original
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            )
            
            // CORREÇÃO CRÍTICA AQUI:
            // Passa o objeto 'request' completo, não apenas os headers.
            // Isso evita erros de contexto no Edge Runtime.
            response = NextResponse.next({
              request,
            })
            
            // Define os cookies na resposta final
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options)
            )
          },
        },
      }
    )

    // 3. Atualiza a sessão
    // IMPORTANTE: Isso deve ser chamado para que o Supabase possa
    // atualizar o token de refresh se necessário.
    await supabase.auth.getUser()

  } catch (e) {
    console.error('Erro no Middleware Supabase:', e)
    // Em caso de erro, retorna a resposta que temos para não quebrar o site
    return response
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Ignora rotas estáticas e imagens.
     * Mantido o seu matcher original.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}