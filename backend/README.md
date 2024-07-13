# Backend do Projeto Descobridor

Este é o backend do projeto plann.er, uma aplicação web desenvolvida para facilitar a organização e gestão de viagens em grupo. O backend é responsável por fornecer APIs RESTful para criar e gerenciar viagens, participantes, atividades, links úteis, enviar convites por e-mail e outras funcionalidades relacionadas.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Fastify**: Framework web para Node.js conhecido por sua performance e eficiência.
- **Prisma**: ORM para Node.js e TypeScript, utilizado para facilitar operações no banco de dados PostgreSQL.
- **Zod**: Biblioteca para validação de esquemas de dados no TypeScript.
- **Nodemailer**: Módulo para envio de e-mails no Node.js.
- **dayjs**: Biblioteca para manipulação de datas no JavaScript.

## Funcionalidades Implementadas

### 1. Gerenciamento de Viagens

- **Criar Viagem**: Endpoint para criar uma nova viagem especificando destino, datas, informações do dono da viagem e e-mails dos participantes.
- **Atualizar Viagem**: Endpoint para atualizar informações de uma viagem existente, como destino e datas.

### 2. Gerenciamento de Participantes

- **Listar Participantes**: Endpoint para listar todos os participantes de uma viagem específica.
- **Detalhes do Participante**: Endpoint para obter detalhes de um participante específico por ID.

### 3. Gerenciamento de Atividades

- **Adicionar Atividade**: Endpoint para adicionar uma nova atividade específica para um dia da viagem.

### 4. Gerenciamento de Links Úteis

- **Adicionar Link**: Endpoint para adicionar um novo link útil relacionado à viagem.

### 5. Envio de Convites por E-mail

- **Enviar Convite**: Endpoint para enviar convites personalizados por e-mail para os participantes da viagem.

## Setup do Ambiente

Para rodar o backend localmente, siga os passos abaixo:

1. **Pré-requisitos:**
   - Certifique-se de ter Node.js instalado na sua máquina.
   - Tenha um banco de dados PostgreSQL configurado e acessível.

2. **Configuração:**
   - Clone o repositório do projeto do GitHub: `git clone https://github.com/eng-joaoelias/descobridor.git`
   - Navegue até o diretório do backend: `cd plann.er/backend`
   - Instale as dependências: `npm install`
   - Configure as variáveis de ambiente criando um arquivo `.env` com as seguintes variáveis:
     ```
     DATABASE_URL=postgres://user:password@localhost:5432/planner_db
     API_BASE_URL=http://localhost:3333
     PORT=3333
     ```
   - Execute o backend: `npm start`

3. **Documentação da API:**
   - Acesse a documentação detalhada da API em [localhost:3333/docs](http://localhost:3333/docs) após iniciar o servidor.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues relatando problemas encontrados ou sugestões para melhorias. Pull requests também são encorajados para corrigir problemas, adicionar novas funcionalidades ou melhorar a documentação.
