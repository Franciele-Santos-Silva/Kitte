// Este arquivo contem funcoes simples para acessar a tabela `animais` no Supabase.
import { supabase } from '../config/supabaseClient.js'

export async function listarAnimais() {
  return supabase.from('animais').select('*')
}

export async function criarAnimal(animal) {
  return supabase.from('animais').insert(animal).select()
}

export async function atualizarAnimal(id, dados) {
  return supabase.from('animais').update(dados).eq('id', id).select()
}

export async function deletarAnimal(id) {
  return supabase.from('animais').delete().eq('id', id)
}
