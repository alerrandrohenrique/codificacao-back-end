📡 Aula 12 — Requisição e Resposta Avançada no NestJS
===

🎯 Objetivo
---
Trabalhar com cabeçalhos HTTP, parâmetros de requisição, códigos de status personalizados e validação de acesso por chave de API — controlando diretamente a resposta do cliente.

📋 O que foi feito
---

### 1. Estrutura do Projeto
- Mantida rota `/status` para verificação do servidor
- Criado controlador `SegurancaController` com rota protegida `/secret`
- Implementada validação por cabeçalho `x-api-key`
- Respostas com códigos de status **200 (Sucesso)** e **403 (Proibido)**
- Incluídos cabeçalhos personalizados no retorno
- Suporte a porta dinâmica via variável de ambiente

### 2. Padrões Utilizados
| Componente | Função |
|---|---|
| `@Headers()` | Captura valores enviados nos cabeçalhos da requisição |
| `@Res()` | Acessa o objeto de resposta para definir cabeçalhos e status |
| `Response` | Tipo do Express para tipagem forte |
| `res.setHeader()` | Adiciona cabeçalho personalizado na resposta |
| `res.status().json()` | Define código HTTP + corpo da resposta |
| `process.env.PORT ?? 3000` | Porta dinâmica com valor padrão |

### 3. Rotas Implementadas
| Método | Rota | Ação |
|---|---|---|
| GET | `/status` | Retorna confirmação de que o servidor está ativo |
| GET | `/secret` | Valida chave de API e concede ou nega acesso à área secreta |

### 4. Funcionalidades Detalhadas

✅ **GET — Status do Servidor**
- Rota `/status` retorna `"Status: servidor ativo!"`
- Confirma que a aplicação está rodando corretamente

🔐 **GET — Área Secreta /secret**
- Recebe a chave pelo cabeçalho: `x-api-key`
- Valor esperado: `FULLSTACK-2026`
- ✅ **Chave correta:**
  - Código **200 OK**
  - Cabeçalho `x-auth-status: verificado`
  - Mensagem: `"Acesso concedido a Área Secreta!"`
- ❌ **Chave errada ou ausente:**
  - Código **403 Forbidden**
  - Mensagem de erro: `"Chave API inválida ou ausente"`
  - Registro de data/hora da tentativa no retorno

⚙️ **Configuração do Servidor**
- Porta definida pela variável de ambiente `PORT` ou usa `3000` como padrão
- Inicialização assíncrona com `bootstrap()`

### 5. Arquivos Criados
| Arquivo | Função |
|---|---|
| `src/main.ts` | Ponto de entrada → inicializa na porta definida (padrão 3000) |
| `src/app.module.ts` | Módulo raiz → registra AppController e SegurancaController |
| `src/app.controller.ts` | Rota `/status` de verificação da API |
| `src/app.service.ts` | Lógica de status da aplicação |
| `src/seguranca.controller.ts` | Rota `/secret` com validação de cabeçalho e respostas personalizadas |
| `src/app.controller.spec.ts` | Teste unitário do controlador de status |

💡 Conceitos Aprendidos
---
- Leitura de cabeçalhos com `@Headers()`
- Modificação direta da resposta com `@Res()`
- Definição de códigos de status HTTP: **200** e **403**
- Cabeçalhos personalizados como mecanismo de comunicação entre cliente e servidor
- Validação de autorização sem banco de dados (chave fixa)
- Uso de operador de coalescência nula `??` para valor padrão
- Tipagem de resposta com `Response` do Express
- Separação de responsabilidades em controladores distintos