# Blog de estudos - Criando um portfólio atrativo

Este projeto foi cuidadosamente criado como parte do programa FuturoDEV, com o propósito principal de oferecer aos alunos uma plataforma robusta para exibirem e consolidarem o conhecimento adquirido ao longo das aulas. Além disso, visa auxiliar na construção de um portfólio impactante, fundamental para o desenvolvimento profissional dos estudantes.

### 🛠️ Tecnologias Utilizadas

[![ReactJs](https://img.shields.io/badge/ReactJs-18.2.0-blue?logo=react)](https://reactjs.org/)
[![React Router DOM](https://img.shields.io/badge/React%20Router%20DOM-6.22.3-blue?logo=react-router)](https://reactrouter.com/)
[![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-7.51.3-blue?logo=react-hook-form)](https://react-hook-form.com/)
[![Node](https://img.shields.io/badge/Node-20.12.2-green?logo=node)](https://nodejs.org/)
[![NPM](https://img.shields.io/badge/NPM-10.4.9-red?logo=npm)](https://www.npmjs.com/)
[![Javascript](https://img.shields.io/badge/Javascript-ES6-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Prettier](https://img.shields.io/badge/Prettier-Code%20Formatter-orange?logo=prettier)](https://prettier.io/)
[![EsLint](https://img.shields.io/badge/EsLint-Code%20Linter-orange?logo=eslint)](https://eslint.org/)

## 🏗️ Estrutura da Aplicação

- **/src**: Esta é a pasta principal onde todo o código-fonte da aplicação é armazenado.
  - **/components**: Aqui, encontramos todos os componentes reutilizáveis da aplicação. Esses componentes são responsáveis por renderizar elementos visuais na interface do usuário.
  - **/hooks**: Nesta pasta, são armazenados os hooks customizados. Os hooks são funções especiais do React que permitem adicionar funcionalidades a componentes funcionais.
  - **/services**: Esta pasta contém os serviços utilizados para realizar comunicação com servidores externos, como APIs, ou para manipular dados localmente.
  - **App.js**: Este arquivo é o ponto de entrada da aplicação. Nele, definimos as configurações gerais da aplicação, como as rotas utilizadas.
  - **index.css**: Aqui são definidos os estilos globais da aplicação, que serão aplicados em todos os componentes.
  - **main.jsx**: Este é o arquivo principal onde a aplicação é inicializada.
- **/public**: Esta pasta funciona como um "servidor" interno da aplicação. Todo o conteúdo colocado nesta pasta fica disponível publicamente quando a aplicação é executada. É comum colocar imagens e outros arquivos estáticos aqui, pois é o único local acessível por meio de URLs na aplicação.
- **/node_modules**: Aqui ficam todas as dependências do projeto, ou seja, as bibliotecas e códigos de terceiros que são instalados quando executamos o comando `npm install`.
- **/dist**: Quando realizamos o build da aplicação, os arquivos resultantes são colocados nesta pasta.
- **.eslintrc.json**: Este arquivo contém as configurações do ESLint, uma ferramenta de análise de código que ajuda a identificar erros e boas práticas.
- **.gitignore**: Aqui podemos listar os arquivos e pastas que não queremos que sejam versionados pelo Git.
- **.prettierrc**: Neste arquivo são definidas as configurações de formatação de código para o Prettier, uma ferramenta de formatação automática.
- **changelog.config.js**: Este arquivo contém as configurações para padronizar os commits a serem enviados ao Git.
- **index.html**: Este é o arquivo HTML onde a aplicação React é inicializada.
- **package.json**: Aqui são definidas as dependências do projeto e outras configurações gerais.
- **vite.config.js**: Este arquivo contém as configurações do Vite, uma ferramenta de build rápida para projetos JavaScript.

## 🚀 Executando o projeto

1. Instale as dependências: `npm install`.
2. Inicie o servidor: `npm run dev`.
3. Observe a saída do console para verificar a porta onde o servidor foi iniciado e acesse a URL gerada em seu navegador.

## 🎯 Recursos

### Semana 9: Explorando o Mundo JavaScript 🌐

Nesta fase, concentramo-nos em explorar conceitos fundamentais do JavaScript, permitindo aos alunos uma compreensão sólida das bases da linguagem. Os tópicos abordados incluem:

- **BrowserAPI**: Exploração das APIs disponíveis nos navegadores para interagir com elementos da página, manipular eventos e realizar operações diversas.
- **Fetch**: Introdução ao Fetch API para realizar requisições HTTP e obter dados de servidores remotos.
- **JSON**: Compreensão do formato JSON e sua utilização para troca de dados entre cliente e servidor.
- **LocalStorage**: Exploração do localStorage como uma forma de armazenar dados localmente no navegador do usuário.
- **Promises**: Introdução ao conceito de Promises para lidar com operações assíncronas de forma mais eficiente.

### Semana 11: Avançando com React ⚛️

Nesta etapa, avançamos para o mundo do React, uma biblioteca JavaScript popular para a construção de interfaces de usuário interativas. Os tópicos abordados incluem:

- **Hooks (useState, useRef e useEffect)**: Exploração dos hooks mais comuns do React para gerenciamento de estado, referências e efeitos colaterais.
- **Hooks customizados**: Criação de hooks personalizados para reutilização de lógica entre componentes.
- **Efeito colateral**: Compreensão e gestão de efeitos colaterais em aplicações React.
- **Componentes controlados e não controlados**: Diferenciação e utilização de componentes controlados e não controlados para capturar e manipular dados de formulários.

### Semana 13: Dominando React Avançado 🚀

Nesta fase final, mergulhamos em conceitos mais avançados do React, capacitando os alunos a desenvolverem aplicações mais complexas e robustas. Os tópicos abordados incluem:

- **Estado global e ContextAPI**: Utilização do ContextAPI para gerenciar o estado global da aplicação e compartilhá-lo entre componentes.
- **Formulários com React Hook Form**: Exploração da biblioteca React Hook Form para simplificar o gerenciamento de formulários.
- **Build e Deploy do projeto**: Orientações sobre como realizar o build e o deploy de uma aplicação React em ambientes de produção.
- **Configurando git-cz no projeto**: Padronização e simplificação dos commits no Git através da configuração do git-cz no projeto.
