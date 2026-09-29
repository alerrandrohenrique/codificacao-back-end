# 📚 Aula 08-09 — Métodos GET, POST, PATCH e DELETE no NestJS

## 🎯 Objetivo
Desenvolver uma API utilizando os principais métodos HTTP, praticando a estrutura completa de um módulo no NestJS — Controller, Service e DTO.

## 📋 O que foi feito

### 1. Estrutura do Projeto
- Criado o módulo principal da aplicação com `AppModule`
- Configurados controladores e provedores
- Implementado o sistema de convidados com operações completas

### 2. Padrões Utilizados
- **Controller**: define as rotas e recebe as requisições
- **Service**: contém a lógica de negócio e manipula os dados
- **DTO (Data Transfer Object)**: valida e tipa os dados de entrada

### 3. Métodos HTTP Implementados

| Método | Rota | Ação |
|---|---|---|
| `GET` | `/convidados` | Lista todos os convidados cadastrados |
| `POST` | `/convidados` | Cadastra um novo convidado (recebe `nome` e `idade`) |
| `PATCH` | `/convidados/:id` | Atualiza a idade de um convidado específico |
| `DELETE` | `/convidados/:id` | Remove um convidado da lista |

### 4. Funcionalidades Detalhadas

#### 📖 GET — Listar convidados
- Retorna a lista completa de convidados em memória
- Dados de exemplo pré-cadastrados para teste

#### ✏️ POST — Adicionar convidado
- Recebe os dados via `Body`: `nome` (texto) e `idade` (número)
- Exibe no console os dados recebidos
- Retorna mensagem de confirmação com os dados cadastrados

#### 🔄 PATCH — Atualizar idade
- Recebe o `id` pela URL e a nova `idade` pelo corpo
- Busca o convidado, valida se existe e atualiza
- Lança erro personalizado se o convidado não for encontrado

#### 🗑️ DELETE — Remover convidado
- Recebe o `id` pela URL
- Remove da lista usando `splice`
- Retorna status `204 No Content` em caso de sucesso
- Lança erro se o registro não existir

### 5. Tratamento de Erros
- Utilização de `NotFoundException` para recurso não encontrado
- Mensagens claras no console com prefixos `[Operador]` e `[Administrador]`
- Respostas padronizadas com mensagem e dados

### 6. Arquivos Criados
- `app.module.ts` → Módulo raiz da aplicação
- `app.service.ts` → Serviço inicial de verificação
- `convidados.controller.ts` → Rotas e métodos HTTP
- `convidados.service.ts` → Lógica de manipulação dos dados
- `criar-convidado.dto.ts` → Modelo de dados para cadastro

## 🧠 Conceitos Aprendidos
- Diferença entre `GET`, `POST`, `PATCH` e `DELETE`
- Separação de responsabilidades: Controller vs Service
- Uso de DTO para tipagem e organização
- Parâmetros de rota (`:id`) e corpo da requisição (`@Body()`)
- Manipulação de arrays em memória
- Códigos de status HTTP
- Tratamento de exceções no NestJS
