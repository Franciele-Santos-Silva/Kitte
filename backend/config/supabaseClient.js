// Este arquivo carrega variaveis de ambiente e exporta o cliente do Supabase.
import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'

const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    'Variaveis SUPABASE_URL e SUPABASE_ANON_KEY nao encontradas. Configure o arquivo .env.'
  )
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
