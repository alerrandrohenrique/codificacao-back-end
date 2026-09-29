📤 Aula 11 — API de Upload de Imagens no NestJS
===

🎯 Objetivo
---
Desenvolver uma API para upload de imagens com validação de tipo, limite de tamanho, armazenamento personalizado e tratamento de erros — seguindo a estrutura modular do NestJS.

📋 O que foi feito
---

### 1. Estrutura do Projeto
- Criado módulo específico para gerenciar upload de imagens
- Implementado controlador com rota `POST /imagem/upload`
- Configurado armazenamento em disco na pasta `uploads/`
- Adicionada validação de formato e tamanho de arquivo
- Nomeação automática com UUID para evitar conflitos
- Configurada rota de acesso aos arquivos enviados

### 2. Padrões Utilizados
| Componente | Função |
|---|---|
| `@Controller()` | Define o prefixo da rota (`/imagem`) |
| `@Post()` | Cria o endpoint de recebimento de arquivo |
| `FileInterceptor` | Captura e processa o arquivo enviado |
| `diskStorage` | Define pasta de destino e nome do arquivo |
| `fileFilter` | Restringe tipos de arquivo permitidos |
| `ParseFilePipe` / validação | Garante integridade e limites do upload |
| `BadRequestException` | Retorna erro 400 com mensagem personalizada |
| `useStaticAssets` | Disponibiliza arquivos da pasta `uploads` via URL |

### 3. Rotas Implementadas
| Método | Rota | Ação |
|---|---|---|
| GET | `/` | Verifica se a API está ativa |
| POST | `/imagem/upload` | Envia e armazena uma imagem |
| GET | `/uploads/:nome-do-arquivo` | Acessa imagem enviada pelo navegador |

### 4. Funcionalidades Detalhadas

✅ **GET — Status da API**
- Retorna mensagem de confirmação: `"Hello World!"`
- Confirma que o servidor está rodando corretamente

📤 **POST — Upload de Imagem**
- Recebe o arquivo pelo campo `file`
- Valida se algum arquivo foi enviado → lança erro se vazio
- Aceita apenas: `.jpg .jpeg .png .gif .webp`
- Tamanho máximo: **2 MB**
- Gera nome único: `UUID.extensaoOriginal`
- Salva em `./uploads/`
- Retorna: `{ filename, size, url }` com link de acesso

⚠️ **Tratamento de Erros**
- Nenhum arquivo enviado → `"Nenhum arquivo enviado."`
- Tipo não permitido → `"Apenas arquivos jpg, jpeg, png, gif, webp são suportados!"`
- Arquivo muito grande → erro de limite do Multer

### 5. Arquivos Criados
| Arquivo | Função |
|---|---|
| `src/main.ts` | Ponto de entrada → configura arquivos estáticos e inicia na porta 3000 |
| `src/app.module.ts` | Módulo raiz → registra AppController e ImagemModule |
| `src/app.controller.ts` | Rota raiz de verificação da API |
| `src/app.service.ts` | Lógica de status da aplicação |
| `src/imagem.module.ts` | Módulo isolado do recurso de upload |
| `src/imagem.controller.ts` | Endpoint POST com toda lógica de recebimento e validação |
| `src/app.controller.spec.ts` | Teste unitário do controlador principal |

💡 Conceitos Aprendidos
---
- Como receber arquivos em requisições com `FileInterceptor`
- Configuração de `diskStorage` → `destination` e `filename`
- Geração de nomes únicos com `uuidv4()`
- Filtro de tipos MIME com `mimetype.match()`
- Limite de tamanho via `limits: { fileSize }`
- Uso de exceções para respostas padronizadas
- Disponibilização de arquivos estáticos com `useStaticAssets`
- Resposta estruturada com URL de acesso ao recurso
- Separação de responsabilidades em módulos próprios