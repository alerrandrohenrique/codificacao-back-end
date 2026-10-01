# 🎓 Aula 13 — Middlewares no NestJS

## 🎯 Objetivo
Implementar **middlewares** para interceptação de requisições, registro de logs e controle de acesso — aplicando de forma global e por rota no ecossistema NestJS.

---

## ✅ O que foi feito

### 1. Estrutura do Projeto
- Criado `LoggerMiddleware` — middleware personalizado para captura de requisições
- Aplicado middleware de forma **global** para todas as rotas
- Implementada lógica de autorização para rota administrativa
- Registradas rotas pública e protegida no controlador
- Configurado bootstrap com porta dinâmica via variável de ambiente

### 2. Padrões Utilizados

| Componente | Função |
|---|---|
| `NestMiddleware` | Interface que define o contrato de um middleware |
| `@Injectable()` | Marca a classe como provedora injetável |
| `use(req, res, next)` | Método de execução — intercepta a requisição |
| `MiddlewareConsumer` | Responsável por registrar e aplicar middlewares |
| `.forRoutes('*')` | Define aplicação para todas as rotas |
| `req.originalUrl / req.url` | Acessa dados da requisição |
| `res.status().json()` | Define código de status e corpo da resposta |
| `next()` | Libera o fluxo para o próximo passo |
| `process.env.PORT ?? 3000` | Porta dinâmica com valor padrão |

### 3. Rotas Implementadas

| Método | Rota | Ação |
|---|---|---|
| `GET` | `/` | Retorna mensagem de sucesso + data atual |
| `GET` | `/admin` | Valida cabeçalho de acesso → concede ou nega permissão |

### 4. Funcionalidades Detalhadas

#### 🟢 Rota Pública — `/`
- Qualquer requisição é registrada no log
- Retorna:
```json
{
  "mensagem": "rota publica acessada com exito",
  "data": "2026-09-30T21:40:00.000Z"
}
#### 🟢 Rota Privada sem a chave de acesso ou caso tenha sido digitada errada — `/`
{
  "Codigo": 403,
  "mensagem": "Acesso Negado: Previlégio de Administrador necessário",
  "registro": "2026-10-01T00:44:17.118Z"
}