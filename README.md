# Meu Projeto Supabase - Registro de Animais

**Trabalho da Faculdade** - Aplicação web para cadastro e listagem de animais de estimação, construída com **React** e **Supabase**.

[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-2.45.4-orange)](https://supabase.com/)

## Funcionalidades

- Cadastro de animais (nome, idade, raça, peso, sexo, dono)
- Lista em tempo real dos animais cadastrados
- Integração com Supabase (banco PostgreSQL serverless)
- Desenvolvimento rápido com Create React App

## Tech Stack

- **Frontend**: React 19+, React Scripts 5.0.1
- **Backend/DB**: Supabase (PostgreSQL + Auth/Storage opcional)
- **Estilos**: CSS inline (expansível para Tailwind/Stitches)

## Pré-requisitos

- Node.js 18+ 
- Conta no [Supabase](https://supabase.com) com projeto criado
- Tabela `animais` no Supabase com colunas: `id` (uuid), `nome`, `idade`, `raca`, `peso`, `sexo`, `dono` (permitir inserts públicos)

## Como Executar

1. Clone o repositório:
   ```bash
   git clone <seu-repo-url>
   cd Kitte/front-end
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie arquivo `.env` na pasta `front-end/`:
   ```
   REACT_APP_SUPABASE_URL=seu_url_supabase
   REACT_APP_SUPABASE_ANON_KEY=sua_anon_key_supabase
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

   Abra [http://localhost:3000](http://localhost:3000)

## Como Usar

1. Preencha o formulário com dados do animal
2. Clique em **Registrar**
3. Veja a lista atualizada abaixo!

## Testes

```bash
npm test
```
npm run build
```
