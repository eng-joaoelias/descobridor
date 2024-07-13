# Projeto Descobridor

O Descobridor é uma aplicação web desenvolvida para facilitar a organização e gestão de viagens em grupo. A aplicação permite criar novas viagens, gerenciar participantes, atividades e links úteis, além de enviar convites por e-mail para confirmação de participação.

## Tecnologias Utilizadas

### Backend:

- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Fastify**: Framework web para Node.js conhecido por sua performance e eficiência.
- **Prisma**: ORM para Node.js e TypeScript, utilizado para facilitar operações no banco de dados PostgreSQL.
- **Zod**: Biblioteca para validação de esquemas de dados no TypeScript.
- **Nodemailer**: Módulo para envio de e-mails no Node.js.
- **dayjs**: Biblioteca para manipulação de datas no JavaScript.

### Frontend:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router DOM**: Para roteamento na aplicação cliente-side.
- **Tailwind CSS**: Framework CSS para desenvolvimento de estilos utilizando classes utilitárias.
- **Date-fns**: Biblioteca JavaScript para manipulação de datas.
- **Lucide Icons**: Conjunto de ícones SVG utilizados na interface.
- **axios**: Cliente HTTP baseado em Promises para fazer requisições à API backend.

## Funcionalidades Implementadas

- **Backend:**
  - **Criar Viagem**: Permite criar uma nova viagem especificando destino, datas, informações do dono da viagem e e-mails dos participantes.
  - **Confirmar Participação**: Endpoint para que os participantes confirmem sua presença na viagem através de um link enviado por e-mail.
  - **Gerenciar Atividades**: Permite adicionar atividades específicas para cada dia da viagem.
  - **Gerenciar Links Úteis**: Permite adicionar links úteis relacionados à viagem.
  - **Listar Participantes**: Lista todos os participantes de uma viagem específica.
  - **Enviar Convites por E-mail**: Envia convites personalizados por e-mail para os participantes da viagem.
  
- **Frontend:**
  - **Interface de Usuário Intuitiva**: Desenvolvida com React para facilitar a interação do usuário.
  - **Roteamento com React Router DOM**: Navegação fluida entre diferentes telas da aplicação.
  - **Estilização com Tailwind CSS**: Design responsivo e moderno utilizando classes utilitárias do Tailwind.
  - **Integração com Backend**: Comunicação eficiente com o backend utilizando axios para realizar requisições HTTP.

## Setup do Ambiente

Para rodar o projeto localmente, siga os passos abaixo:

1. **Pré-requisitos:**
   - Certifique-se de ter Node.js instalado na sua máquina.
   - Tenha um banco de dados PostgreSQL configurado e acessível.

2. **Configuração do Backend:**
   - Clone o repositório do projeto do GitHub: `git clone https://github.com/eng-joaoelias/descobridor.git`
   - Navegue até o diretório do backend: `cd descobridor/backend`
   - Instale as dependências: `npm install`
   - Configure as variáveis de ambiente criando um arquivo `.env` com as seguintes variáveis:
     ```
     DATABASE_URL=postgres://user:password@localhost:5432/planner_db
     API_BASE_URL=http://localhost:3333
     PORT=3333
     ```
   - Execute o backend: `npm start`

3. **Configuração do Frontend:**
   - Siga as instruções fornecidas no README do frontend para configurar e executar o frontend.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues relatando problemas encontrados ou sugestões para melhorias. Pull requests também são encorajados para corrigir problemas, adicionar novas funcionalidades ou melhorar a documentação.

## Autor

João Elias Ferraz Santana - [GitHub](https://github.com/eng-joaoelias)
