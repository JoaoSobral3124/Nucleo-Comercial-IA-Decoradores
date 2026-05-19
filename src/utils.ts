import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Inicialização padrão do cliente para o Frontend (Tabelas com RLS)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Cliente administrativo opcional (Apenas para funções de Servidor/Backend)
 * Ele tenta usar a sua nova chave manual segura criada na Vercel; se não achar, usa a padrão.
 */
const supabaseSecretKey = process.env.PROD_SUPABASE_SECRET_KEY || process.env.SUPABASE_SECRET_KEY

export const getSupabaseAdmin = () => {
  if (typeof window !== 'undefined') {
    throw new Error("O cliente Admin só pode ser executado no lado do Servidor!")
  }
  if (!supabaseSecretKey) {
    throw new Error("Chave secreta do Supabase não foi encontrada nas variáveis de ambiente.")
  }
  return createClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}