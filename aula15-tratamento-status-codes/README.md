```
📊 Aula 15 — Tratamento de Códigos de Status e Exceções no NestJS

🎯 Objetivo
Implementar rotas de listagem e busca de produtos com validação de parâmetros, tratamento personalizado de erros e retorno de códigos HTTP adequados, seguindo as boas práticas de APIs REST no ecossistema NestJS.

---

✅ O que foi feito

📂 1. Estrutura do Projeto
• `app.controller.ts` — Controlador principal com rota raiz de verificação
• `produtos.controller.ts` — Controlador de rotas de produtos com parâmetro dinâmico
• `produtos.service.ts` — Serviço com lista de produtos em memória e regra de negócio
• `app.module.ts` — Módulo raiz registrando controladores e provedores

🔧 2. Serviço de Produtos
• Criação de lista com produtos contendo `id`, `nome` e `preco`
• Método `listaProdutos()` que retorna todos os cadastrados
• Dados de exemplo: Arroz Namorados, Feijão Timbiras, Macarrão Galo, Açúcar União e Sal Lebre

🛣️ 3. Rotas Implementadas

| Método | Rota | Ação |
|---|---|---|
| GET | / | Mensagem de confirmação da aplicação |
| GET | /produtos | Retorna todos os produtos cadastrados |
| GET | /produtos/:id | Busca produto pelo ID informado na URL |

✅ 4. Validações e Tratamento de Erros

🔹 Validação de Tipo do ID
• Conversão do parâmetro `:id` para número
• Se não for numérico → registro de aviso no log + `BadRequestException` (400)
• Mensagem: "O ID do produto deve ser um número inteiro."

🔹 Validação de Existência
• Busca na lista comparando `id === valorConvertido`
• Se não encontrado → registro de aviso no log + `NotFoundException` (404)
• Mensagem personalizada com o ID não localizado

🔹 Logs Informativos
• Uso de `Logger` nativo do NestJS para registrar tentativas inválidas
• Mensagens com nível `warn` para rastreabilidade sem interromper a execução

🧪 5. Testes Realizados
• Requisição `GET /produtos/1` → Status 200 OK, retorno dos dados do produto
• Requisição com ID não numérico → Retorno 400 Bad Request
• Requisição com ID inexistente (ex: 6) → Retorno 404 Not Found
• Visualização no terminal: rotas mapeadas e mensagens de aviso registradas

📚 6. Padrões e Recursos Utilizados

| Componente | Função |
|---|---|
| `@Controller()` | 📦 Define prefixo e agrupa endpoints relacionados |
| `@Get()` | 📡 Mapeia método HTTP GET para a função |
| `@Param('id')` | 🔗 Extrai valor dinâmico da URL |
| `BadRequestException` | ⚠️ Retorna status 400 — requisição inválida |
| `NotFoundException` | 🔍 Retorna status 404 — recurso não encontrado |
| `Logger` | 📋 Registra mensagens categorizadas no terminal |
| `@Injectable()` | 🧩 Marca classe como provedora de serviço |
| `find()` | 🔎 Pesquisa elemento em array por condição |

📋 7. Exemplos de Resposta

✅ Sucesso — `/produtos/1`:
{
  "id": 1,
  "nome": "Feijão Timbiras",
  "preco": 9.90
}

⚠️ Requisição Inválida — `/produtos/texto`:
{
  "statusCode": 400,
  "mensagem": "O ID do produto deve ser um número inteiro."
}

🔴 Não Encontrado — `/produtos/6`:
{
  "statusCode": 404,
  "mensagem": "Produto com ID 6 não encontrado"
}

💡 Conceitos Aprendidos
• Separação de responsabilidades: Controller (rotas) ↔ Service (dados e lógica)
• Uso de exceções nativas do NestJS para códigos HTTP padronizados
• Validação de tipo antes de usar o valor recebido
• Registro de eventos com `Logger` para depuração e monitoramento
• Mensagens claras e objetivas para o consumidor da API
• Estrutura de módulo centralizando dependências e instâncias
• Respostas consistentes em caso de sucesso e falha

---

🏁 Aplicação funcionando com tratamento completo de fluxos: dados encontrados, ID inválido e produto inexistente — todos com retorno padronizado e logs no terminal.