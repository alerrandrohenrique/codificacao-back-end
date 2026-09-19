# Aula 06 - Servidor Web Nativo com Módulo HTTP

## 📋 O que foi feito
Nesta aula foi criado um **servidor web sem usar frameworks externos**, utilizando apenas o módulo nativo `http` do Node.js. O projeto implementa rotas, cabeçalhos de segurança, respostas em JSON e tratamento de caminho não encontrado.

## 🛠️ O que foi utilizado
- **Node.js** — ambiente de execução JavaScript
- **Módulo `http` (nativo)** — cria servidor e gerencia requisições
- **Módulos ES6 (`import`)** — padrão de importação moderna
- **Operador Spread (`...`)** — reutilização de objetos de cabeçalho

## 📂 Estrutura do Projeto
## 🚀 Funcionalidades Implementadas

### Servidor
- Criado com `http.createServer()`
- Rodando na **porta 3000**
- Registra no console: método HTTP e rota acessada

### Rotas
| Caminho | Resposta | Status |
|---|---|---|
| `/status` | `{ "servidorWeb": "Online" }` | **200 OK** |
| Qualquer outro | `{ "erro": "Página não encontrada!" }` | **404 Not Found** |

### Segurança
Cabeçalhos aplicados em TODAS as respostas:
- `X-Content-Type-Options: nosniff` → protege contra interpretação incorreta de arquivos
- `X-Frame-Options: DENY` → impede que a página seja exibida em iframes (clique-jacking)
- `Content-Type: application/json` → define formato de resposta

## ⚙️ Como Executar
```bash
node servidor.js
Saída no terminal:
Servidor Web ativo!
Porta: 3000