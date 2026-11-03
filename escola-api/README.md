```
# Construção de API RESTful para Gestão de Alunos com NestJS e MongoDB
===================================================================

🎯 **Objetivo**
Desenvolver e estruturar uma API RESTful completa para a gestão de alunos utilizando o ecossistema NestJS integrado ao MongoDB via Mongoose. A aplicação foca na validação estrita de dados de entrada através de DTOs (Data Transfer Objects), garantindo a integridade dos dados e o tratamento adequado de exceções.

---

📋 **O que foi feito**

📄 **1. Arquitetura e Estrutura da Aplicação**
* **Camada de Validação (DTOs):** Implementação do `CreateAlunoDto` e `UpdateAlunoDto` com regras declarativas do `class-validator` para assegurar o formato dos dados recebidos nas requisições HTTP.
* **Modelo de Dados (Schema):** Criação do `AlunoSchema` utilizando decoradores do Mongoose (`@Schema`, `@Prop`), estabelecendo a estrutura da coleção de alunos no banco de dados e definindo restrições como campos obrigatórios e unicidade.
* **Controlador (Controller):** Mapeamento das rotas HTTP no `AlunosController` (`@Post`, `@Get`, `@Patch`, `@Delete`) para gerenciar as rotas de criação, leitura, atualização e remoção de registos.
* **Serviço (Service):** Implementação das regras de negócio e persistência no `AlunosService` utilizando a injeção de modelo do Mongoose (`@InjectModel`) para executar operações do CRUD no MongoDB.
* **Módulos:** Configuração do `AlunosModule` registando a coleção com `MongooseModule.forFeature()` e conexão global do MongoDB (`escola_dbn`) no `AppModule` via `MongooseModule.forRoot()`.
* **Configuração Global (Bootstrap):** Ativação do `ValidationPipe` global no `main.ts` com as opções `whitelist: true`, `forbidNonWhitelisted: true` e `transform: true` para sanitização e validação automática do payload.

📝 **2. Definição e Validação dos DTOs**
* Aplicação das anotações `@IsString()`, `@IsInt()`, `@Min()`, `@IsNotEmpty()`, `@IsArray()` e `@ArrayMinSize()`.
* Definição de mensagens de erro personalizadas para retornar respostas amigáveis ao cliente em caso de erro de validação.
* Bloqueio automático de propriedades não permitidas enviadas no corpo da requisição através das configurações do `ValidationPipe`.

⚡ **3. Rotas Implementadas**
| Método | Rota | Ação |
|---|---|---|
| POST | `/alunos` | Cadastrar um novo aluno |
| GET | `/alunos` | Listar todos os alunos cadastrados |
| GET | `/alunos/:id` | Buscar um aluno específico pelo ID |
| PATCH | `/alunos/:id` | Atualizar dados de um aluno existente |
| DELETE | `/alunos/:id` | Remover um aluno do sistema |

💡 **4. Validações e Persistência de Dados**
* Garantia de preenchimento dos campos obrigatórios (`nome`, `idade`, `matricula`, `curso`).
* Configuração de restrição de valor único para a `matricula` diretamente no Schema do Mongoose (`unique: true`).
* Tratamento de erros com lançamento de `NotFoundException` para recursos não localizados por ID.

✅ **5. Funcionamento**
* Servidor NestJS a rodar no ambiente local na porta 3000.
* Integração e persistência ativas no banco de dados MongoDB (`escola_dbn`).
* Testes das rotas executados e validados via Postman/Compass.
* Retorno de respostas com erro HTTP 400 (Bad Request) quando os dados enviados não cumprem as regras dos DTOs.

🧠 **6. Conceitos Aprendidos**
* **Injeção de Dependências:** Uso da anotação `@InjectModel()` no serviço para manipular a coleção do Mongoose de forma desacoplada.
* **DTOs & Pipes:** Separação das responsabilidades de validação de dados de entrada da lógica principal do serviço.
* **Mongoose Schema Decorators:** Modelagem declarativa de documentos no MongoDB usando TypeScript (`@Schema`, `@Prop`, `SchemaFactory`).
* **Tratamento de Exceções HTTP:** Uso dos filtros e exceções nativas do NestJS para padronizar respostas de erro.

---

📊 **7. Exemplos da Aplicação**

✅ **Corpo esperado na requisição (POST /alunos):**
```json
{
  "nome": "Gabriel Cardoso Rodrigues",
  "idade": 19,
  "matricula": "556",
  "curso": [
    "Engenharia",
    "Robotização"
  ]
}
✅ Resposta de sucesso (201 Created):
{
  "nome": "Gabriel Cardoso Rodrigues",
  "idade": 19,
  "matricula": "556",
  "Cursos": [],
  "_id": "6aea57bfb1d900c9b8933254",
  "__v": 0
}
⚠️ Requisição com dados inválidos (400 Bad Request):
{
  "message": [
    "a matricula é obrigatória e unica!!"
  ],
  "error": "Bad Request",
  "statusCode": 400
}

💡 Aplicação Pronta e Funcional:
➔ Servidor compilado e iniciado sem erros no modo watch.
➔ Persistência confirmada e visível no MongoDB Compass.
➔ Ciclo completo do CRUD funcional com validação e segurança dos dados.

✅ Aplicação funcionando com validações completas: rotas, DTOs validados e persistência em banco de dados.