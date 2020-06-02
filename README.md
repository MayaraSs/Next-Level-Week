# 01/06 ACelerando sua evolução

# 1 Dia: Conceitos e ambiente

- [x] Apresentação da aplicação

  - Será desenvolvido uma aplicação para coleta de resíduos chamado Ecoleta.

  - [x] Ambiente de desenvolvimento

    - Instalar o Nodejs e npm

  - [x] Por que criaremos uma API?

    - API RESTfull
    - Back-end (Nodejs) - responsável pela regra de negócio, conexão com o banco de dados, conexão com serviços externos, autenticação e autorização dos usuários, criptografia e segurança.

    - Front-end (ReactJS) - responsável pelas listagem de usuários (html, css),

    - Mobile (React Native)

- [x] Conceitos de TypeScript

  - É o Javascript com tipagem. O editor consegue saber exatamente os dados que o usuário pode ter e oferecer inteligência de IDE.

- [x] Criar base do projeto com Nodejs

  - Criei uma pasta chamada backend onde será armazenados todos arquivos responsável pela regra de negócio, conexão com o banco de dados, conexão com serviços externos, autenticação e autorização dos usuários, criptografia e segurança.

  - Executei o comando npm init -y

  - Instalei a biblioteca express utilizando o comando npm install express.

  - Criei a pasta src

  - Importei o express e como estou usando Typescript é necessário importar os códigos da biblioteca e os tipos, como o express separa os dois é necessário instalar o npm install @types/express.

  - Para rodar o código necessário instalar o npm install ts-node -D

  - Instalei o typescript com o comando npm install typescript -D. Agora consigo executar o programa com o comando npx ts-node src/server.ts

  - Quando executei o programa deu um erro porque toda vez que criar um aplicação com com ts é necessário ter um arquivo para configuração do ts que define quais features do ts vai ser utilizadas. Crio esse arquivo com o comando npx tsc --init .

  - Instalei com o comando npm install ts-node-dev -D, para os servidor rodar automaticamente quando realizar modificações.

  - No json adicionei uma script ts-node-dev src/server.ts e executei o servidor npm run dev. Deeu um erro
    {
    TypeError [ERR_FEATURE_UNAVAILABLE_ON_PLATFORM]: The feature watch recursively is unavailable on the current platform, which is being used to run Node.js
    }

  procurei uma solução e achei no link https://github.com/whitecolor/ts-node-dev/issues/143 e basicamente add um "dev": "ts-node-dev --poll src/server.ts" no json mas me parece problema da versao q estou usando que foi a v14 do nodejs.

- [x] React & SPA (Single Page Applications)

  - React é uma biblioteca para construção de interfaces. É utilizado para construção de Single-Page Applications consegue manter o layout da página intacto e mudar apenas as informações necessárias. React é subdividido em vários pacotes ReactJS (web) / React Native (mobile).

  - Vantagens:
    1. Organização do código: COmponentização.
    2. Divisão de responsabilidade: Backend (regra de negócio) Frontend (Interface).
    3. COnsigo ter uma única API e múltiplos clientes.

- [x] Criar projeto com React

  - Executei o comando npx create-react-app web --template-typescript para criar o projeto.

- [x] React Native & Expo

  - Expo é utilizado para não precisar instalar em nosso sistema tanto o android studio para obter o sdk de desenvolvimento do android e o Xcode para obter o sdk do IOS. Com o expo nós instalamos um app no celular chamado Expo e dentro dele tudo o que precisamos para desenvolver no React Native já está instalado. Com isso, não precisamos nós preocupar em gerar app pra Android e IOS.
