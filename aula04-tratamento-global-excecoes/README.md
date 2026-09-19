# Aula 04 - Tratamento Global de Exceções

## 📋 O que foi feito
Nesta aula foi criada uma aplicação com **Express.js** com foco no **tratamento centralizado de erros**, cobrindo situações de sucesso, erros síncronos e erros assíncronos, com um middleware global que captura e responde todos os erros.

## 🛠️ O que foi utilizado
- **Node.js** — ambiente para executar JavaScript no servidor
- **Express.js v5.2.1** — framework para criar rotas e gerenciar requisições
- **Módulos ES6 (`import/export`)** — padrão de importação moderna
- **Middleware de tratamento de erros** — recurso do Express para centralizar respostas de erro

## 📂 Estrutura
## 🚀 Funcionamento

### Rotas implementadas
| Rota | Ação |
|---|---|
| `GET /sucesso` | Retorna mensagem de operação realizada com sucesso |
| `GET /erro-sicrono` | Dispara erro manualmente, captura com `try/catch` e encaminha com `next(erro)` |
| `GET /erro-assincrono` | Simula falha em operação assíncrona (`Promise.reject`), captura e encaminha para tratamento global |

### Tratamento de erros
- Foi criado um **middleware com 4 parâmetros** `(err, req, res, next)` — o Express reconhece isso como tratador de erros
- O erro é **registrado no console** com o rastreamento completo (`err.stack`)
- Retorna **código de status** (padrão 500) e mensagem amigável em JSON
- Assim **toda a aplicação** responde erros do mesmo jeito, sem repetir código

## ⚙️ Como rodar
```bash
# Instala as dependências (cria node_modules)
npm install

# Liga o servidor
node server.js
