import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
// NOME OBRIGATÓRIO: A função DEVE se chamar 'middleware'
export async function middleware(request: NextRequest) {

  // 1. Prepara a resposta inicial

  let response = NextResponse.next({

    request: {

      headers: request.headers,

    },

  })



  // 2. Cria o cliente Supabase

  const supabase = createServerClient(

    process.env.NEXT_PUBLIC_SUPABASE_URL!,

    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,

    {

      cookies: {

        // MÉTODO CORRETO: getAll (com letras 'L', não número 1)

        getAll() {

          return request.cookies.getAll()

        },

        // MÉTODO CORRETO: setAll (com letras 'L', não número 1)

        setAll(cookiesToSet) {

          // Atualiza os cookies na requisição

          cookiesToSet.forEach(({ name, value }) =>

            request.cookies.set(name, value)

          )

         

          // Recria a resposta

          response = NextResponse.next({

            request: {

              headers: request.headers,

            },

          })

         

          // Atualiza os cookies na resposta

          cookiesToSet.forEach(({ name, value, options }) =>

            response.cookies.set(name, value, options)

          )

        },

      },

    }

  )



  // 3. Importante: Atualiza a sessão

  await supabase.auth.getUser()



  return response

}



// Configuração do Matcher

export const config = {

  matcher: [

    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',

  ],

}