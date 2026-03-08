// Este arquivo roda um teste rapido chamando o service e imprimindo o retorno no console.
import { listarAnimais } from '../services/animaisService.js'

async function testarConexaoSupabase() {
  const { data, error } = await listarAnimais()

  if (error) {
    console.error('Erro ao listar animais:', error)
    return
  }

  console.log('Animais encontrados:')
  console.log(data)
}

testarConexaoSupabase()
