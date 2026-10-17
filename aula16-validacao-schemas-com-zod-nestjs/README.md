```
Aula 16 — Validação de Schemas com Zod no NestJS
===================================================

🎯 Objetivo
Implementar validação de dados de entrada usando schemas declarativos com a biblioteca Zod, garantindo que apenas informações corretas cheguem à lógica da aplicação — com mensagens claras e tratamento padronizado de erros.

---

📝 O que foi feito
-------------------

📂 1. Estrutura do Projeto
  • colaborador.schema.ts        → Definição das regras e formatos esperados
  • colaboradores.controller.ts  → Rota de cadastro aplicando a validação
  • zod-validation.pipe.ts       → Pipe personalizado para integrar Zod ao NestJS
  • app.module.ts                → Registro de controladores e pipes
  • main.ts                      → Inicialização da aplicação

📋 2. Definição do Schema com Zod
  • Importação da biblioteca 'zod'
  • Criação do objeto colaboradorSchema com regras:
    → nome: texto, no mínimo 3 caracteres
    → email: formato válido de e-mail
    → idade: número inteiro entre 18 e 65 anos
    → departamento: valor fixo entre TI, RH, Comercial ou Financeiro
  • Mensagens personalizadas para cada falha de validação
  → Inferência automática do TypeScript: type colaborador = z.infer<typeof schema>

🔌 3. Rota Implementada
  Método  | Rota               | Ação
  --------|--------------------|-----------------------------------
  POST    | /colaboradores     | Cadastrar novo colaborador validado

🔧 4. Pipe de Validação Personalizado
  • Classe ZodValidationPipe reutilizável
  • Recebe o schema no momento de uso
  • Verifica se o valor é do tipo esperado
  • Executa safeParse() → não quebra a aplicação
  • Em caso de falha: formata cada erro com "campo" e "mensagem"
  • Lança BadRequestException (400) com lista de problemas
  • Em caso de sucesso: retorna os dados validados

✅ 5. Integração e Uso
  • @UsePipes() aplicado diretamente na rota
  • Novo ZodValidationPipe(colaboradorSchema)
  • Dados validados chegam prontos ao controller
  • Resposta de sucesso retorna mensagem + dados recebidos
  • Resposta de erro retorna lista organizada de campos inválidos

🧠 6. Conceitos Aprendidos
  • Validação antes de chegar à lógica de negócio
  • Zod = declaração do que se espera, em código
  • Reutilização: um schema serve para rota, tipo e validação
  • Pipe = camada de transformação/verificação do NestJS
  • safeParse() → validação sem lançar erro imediato
  • Inferência: o TypeScript entende o tipo a partir do schema
  • Mensagens claras = o consumidor sabe exatamente o que ajustar

📦 7. Exemplos de Resultado
  ✅ Dados válidos → Status 200:
     {
       "Mensagem": "Colaborador cadastrado com sucesso",
       "dados": {
         "nome": "Maria Souza",
         "email": "maria@empresa.com",
         "idade": 32,
         "departamento": "TI"
       }
     }

  ⚠️ Dados inválidos → Status 400:
     {
       "statusCode": 400,
       "errors": [
         {
           "campo": "nome",
           "mensagem": "O nome deve ter no mínimo 3 letras!"
         },
         {
           "campo": "idade",
           "mensagem": "A idade deve ser igual ou maior que 18 anos!"
         }
       ]
     }

💡 8. Instalação
  • Comando: npm install zod
  • Sem configuração extra: basta importar e usar
  • Funciona junto com o TypeScript sem conflitos

---

✅ Aplicação funcionando com validação completa: regras declaradas, dados verificados, erros organizados e mensagens explicativas para cada campo — tudo pronto para evoluir com novas rotas e schemas.