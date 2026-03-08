# Backend do projeto kitte

Este backend foi feito com Node.js e JavaScript simples para conectar ao Supabase e acessar a tabela `animais`.

## Variaveis de ambiente (.env)

Para nao expor credenciais no GitHub, este projeto usa arquivo `.env`.

1. Crie o arquivo `.env` dentro da pasta `backend`.
2. Copie os valores de `backend/.env.example`.
3. Preencha com suas credenciais reais do Supabase.

Exemplo:

```env
SUPABASE_URL=https://zwqswablniuywocnwysc.supabase.co/
SUPABASE_ANON_KEY=sua_chave_anon_aqui
```

O arquivo `.env` esta no `.gitignore` e nao deve ser versionado.

## Estrutura

- `config/supabaseClient.js`: cria e exporta o cliente do Supabase.
- `services/animaisService.js`: contem funcoes para listar, criar, atualizar e deletar animais.
- `tests/testeSupabase.js`: faz um teste simples chamando `listarAnimais()` e imprime o resultado.

## Como rodar

1. Entre na pasta backend:

```bash
cd backend
```

2. Instale as dependencias:

```bash
npm install
```

3. Crie e configure o arquivo `.env` (baseado no `.env.example`).

4. Rode o teste de conexao com o Supabase:

```bash
node tests/testeSupabase.js
```

Se a conexao estiver correta e a tabela `animais` existir, os registros serao exibidos no console.
