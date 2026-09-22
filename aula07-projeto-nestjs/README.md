🚀 Aula 07 - Introdução ao Framework NestJS

Este repositório contém o projeto desenvolvido na Aula 07, onde demos os primeiros passos com o NestJS, um framework Node.js progressivo para a construção de aplicações back-end eficientes, confiáveis e escaláveis.

🎯 O que foi feito nesta aula

Durante esta aula, criamos a base de uma aplicação NestJS e realizamos algumas customizações para entender o fluxo de requisições entre Controladores (Controllers) e Serviços (Services). As principais etapas foram:

Criação do Projeto: Inicialização de um novo projeto NestJS (aula-07-projeto-nestjs) utilizando a CLI do framework.

Limpeza de Diretório: Uso do comando Remove-Item -Recurse -Force .git no terminal (PowerShell) para remover o repositório git inicializado automaticamente pelo Nest, evitando conflitos de repositórios aninhados na pasta da disciplina.

Modificação de Rotas (Controller):

Edição do arquivo app.controller.ts.

Alteração do decorator do controlador principal para responder no endpoint /status em vez da rota raiz (@Controller('status')).

Modificação da Regra de Negócio (Service):

Edição do arquivo app.service.ts.

Customização do método getHello() para retornar a string personalizada: 'Servidor Nest.JS Ativo [Aula 07]'.

Execução da Aplicação: Inicialização do servidor em modo de observação (watch mode), mapeando a rota GET /status.

📂 Estrutura do Projeto

A estrutura padrão gerada pelo NestJS e explorada nesta aula foi:

/
├── src/
│   ├── app.controller.spec.ts  # Arquivo de testes do controller
│   ├── app.controller.ts       # Controlador (Lida com as rotas HTTP, ex: /status)
│   ├── app.module.ts           # Módulo principal da aplicação
│   ├── app.service.ts          # Serviço (Contém as regras de negócio)
│   └── main.ts                 # Arquivo de entrada (Inicia a aplicação e a porta)
├── test/                       # Testes End-to-End (E2E)
├── package.json                # Dependências e scripts
├── tsconfig.json               # Configurações do TypeScript
└── nest-cli.json               # Configurações da CLI do Nest


🛠️ Tecnologias Utilizadas

Node.js

TypeScript

NestJS (Framework)

⚙️ Como executar este projeto

Siga os passos abaixo para rodar a aplicação localmente:

Acesse a pasta do projeto:

cd aula-07-projeto-nestjs


Instale as dependências (caso ainda não estejam instaladas):

npm install


Execute o servidor em modo de desenvolvimento:

npm run start:dev


Teste a rota:
Abra o seu navegador ou uma ferramenta como Insomnia/Postman e acesse:
http://localhost:3000/status

A Mensagem que deverá aparecer: Servidor Nest.JS Ativo [Aula 07]