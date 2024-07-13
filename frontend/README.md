## Projeto Descobridor

### Visão Geral

O Projeto Descobridor de Viagens é uma aplicação web desenvolvida para ajudar usuários a planejar e organizar viagens, facilitando o gerenciamento de destinos, datas de viagem, atividades planejadas e lista de convidados. A aplicação permite criar novas viagens, adicionar atividades específicas para cada dia da viagem e convidar pessoas para participar.

### Tecnologias Utilizadas

O projeto utiliza diversas tecnologias modernas para o desenvolvimento da aplicação:

- **Frontend:**
  - **React**: Biblioteca JavaScript para construção de interfaces de usuário.
  - **React Router DOM**: Para roteamento na aplicação cliente-side.
  - **Tailwind CSS**: Framework CSS para desenvolvimento de estilos utilizando classes utilitárias.
  - **Date-fns**: Biblioteca JavaScript para manipulação de datas.
  - **Lucide Icons**: Conjunto de ícones SVG utilizados na interface.
  - **axios**: Cliente HTTP baseado em Promises para fazer requisições à API backend.
  
- **Backend:**
  - **Node.js**: Ambiente de execução JavaScript do lado do servidor.
  - **Express**: Framework web para Node.js para criação de APIs RESTful.
  - **MongoDB**: Banco de dados NoSQL utilizado para armazenamento dos dados da aplicação.
  
### Desafios Enfrentados

#### Aprendizado de React

Um dos principais desafios enfrentados foi aprender e dominar o uso do React, especialmente no contexto de desenvolvimento de aplicações SPA (Single Page Application). Alguns pontos específicos foram:

- **Componentização**: Compreender a filosofia de componentização do React e como dividir a interface em componentes reutilizáveis.
- **Estado e Ciclo de Vida**: Entender o conceito de estado (`state`) e ciclo de vida dos componentes no React, garantindo uma manipulação eficiente do estado da aplicação.
- **Hooks**: Aprender e utilizar hooks como `useState`, `useEffect` e `useParams` para gerenciar o estado e efeitos colaterais na aplicação.

#### Integração com APIs

Outro desafio foi integrar o frontend React com o backend Node.js utilizando APIs RESTful. Isso envolveu:

- **Configuração do axios**: Configurar e utilizar o axios para realizar requisições HTTP ao servidor backend, garantindo comunicação eficiente entre os dois sistemas.
- **Gerenciamento de Estado**: Implementar um gerenciamento eficaz do estado da aplicação no frontend para garantir que os dados fossem recuperados e exibidos corretamente.

#### Estilização com Tailwind CSS

A utilização do Tailwind CSS também trouxe desafios interessantes:

- **Abordagem de Estilo Utilitário**: Adotar uma nova abordagem de estilo baseada em classes utilitárias do Tailwind CSS, que difere da metodologia tradicional de estilos em CSS.
- **Personalização de Estilos**: Aprender a personalizar e estender o Tailwind CSS para se adequar aos requisitos específicos de design da aplicação.

### Estrutura do Projeto

A estrutura do projeto é organizada em componentes reutilizáveis e páginas específicas que compõem a aplicação. Aqui está uma visão geral da estrutura:

- **`/src`**: Pasta raiz do código-fonte do frontend.
  - **`/components`**: Componentes reutilizáveis da aplicação.
  - **`/pages`**: Páginas principais da aplicação, como página de criação de viagem e página de detalhes da viagem.
  - **`/lib`**: Utilitários e configurações globais, como configuração do axios.
  - **`/assets`**: Recursos estáticos, como imagens e ícones.

### Instruções de Execução

Para executar o projeto localmente, siga os passos abaixo:

1. **Pré-requisitos**:
   - Certifique-se de ter Node.js e npm (ou yarn) instalados globalmente em seu ambiente de desenvolvimento.

2. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/eng-joaoelias/descobridor.git
   cd descobridor
   ```

3. **Instalar Dependências**:
   ```bash
   npm install   # ou yarn install
   ```

4. **Configuração do Backend**:
   - Certifique-se de que o backend (Node.js + Express + MongoDB) esteja configurado e em execução.

5. **Executar a Aplicação**:
   ```bash
   npm start   # ou yarn start
   ```

6. **Acessar a Aplicação**:
   Acesse a aplicação através do navegador no endereço `http://localhost:3000`.

### Conclusão

O projeto Descobridor de Viagens demonstra a aplicação prática de tecnologias modernas para desenvolvimento web, desde o frontend com React até o backend com Node.js e MongoDB. Superar os desafios de aprendizado e integração foi essencial para a entrega de uma aplicação robusta e funcional. A estrutura organizada e a escolha cuidadosa das tecnologias garantiram uma experiência de desenvolvimento eficiente e uma aplicação final que atende às necessidades de seus usuários.
