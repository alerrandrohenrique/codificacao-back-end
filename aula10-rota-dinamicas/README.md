🗺️ Aula 10 — Rotas Dinâmicas no NestJS
===

🎯 Objetivo
---
Desenvolver rotas dinâmicas no NestJS, capturando parâmetros pela URL, validando dados com pipes e implementando busca com tratamento de erro — seguindo a estrutura Controller, Service e Módulo.

📋 O que foi feito
---

### 1. Estrutura do Projeto
- Criado serviço de catálogo de jogos com dados em memória
- Implementada rota com parâmetro dinâmico (`:id`)
- Configurado pipe de conversão de tipo (`ParseIntPipe`)
- Adicionado tratamento de recurso não encontrado
- Organizado tudo no módulo raiz da aplicação

### 2. Padrões Utilizados
| Componente | Função |
|---|---|
| `@Controller()` | Define o prefixo da rota e agrupa os endpoints |
| `@Get(':parametro')` | Captura valores variáveis pela URL |
| `@Param()` | Extrai o valor enviado na rota |
| `ParseIntPipe` | Converte automaticamente de texto para número |
| `NotFoundException` | Retorna erro **404** com mensagem amigável |

### 3. Rotas Implementadas
| Método | Rota | Ação |
|---|---|---|
| GET | `/status` | Verifica se o servidor está ativo |
| GET | `/jogos/:id` | Busca um jogo pelo ID informado na URL |

### 4. Funcionalidades Detalhadas

📟 **GET — Status do Servidor**
- Retorna mensagem de confirmação de que a API está rodando
- Controlador separado em `/status` para verificação rápida

🎮 **GET — Buscar Jogo por ID**
- Recebe o `id` diretamente pela URL → ex: `/jogos/1`
- Converte o valor de texto para número automaticamente
- Pesquisa na lista interna de jogos
- Se encontrar → retorna os dados do jogo
- **Se não encontrar** → lança erro 404 com mensagem personalizada

### 5. Tratamento de Erros
- Uso de `NotFoundException` para recurso inexistente
- Mensagem clara informando qual ID não foi localizado
- Resposta com código **HTTP 404 Not Found**

### 6. Arquivos Criados
| Arquivo | Função |
|---|---|
| `app.module.ts` | Módulo raiz → reúne controladores e serviços |
| `app.controller.ts` | Rota de verificação do servidor |
| `app.service.ts` | Lógica do status da API |
| `jogos.controller.ts` | Endpoint de busca dinâmica de jogos |
| `jogos.service.ts` | Dados e regra de negócio do catálogo |
| `app.controller.spec.ts` | Teste unitário de exemplo |

💡 Conceitos Aprendidos
---
- O que são e para que serve **rotas dinâmicas**
- Sintaxe `:nome-do-parametro` para capturar valores na URL
- Uso de `@Param()` e pipes de transformação
- Diferença entre valor recebido (texto) e tipo esperado (número)
- Busca em array com `.find()`
- Lançamento de exceções personalizadas no NestJS
- Mensagens de erro úteis para quem consome a API