```
Aula 17 — Documentação Interativa com Swagger no NestJS
====================================================================

🎯 Objetivo
Implementar documentação técnica interativa para API construída no NestJS, descrevendo rotas, dados esperados, respostas e códigos de retorno — seguindo o padrão OpenAPI 3.0 e boas práticas de documentação viva.

---

📝 O que foi feito
-------------------

📂 1. Estrutura do Projeto
  • criar-produto.dto.ts      → Modelo de dados com descrições e exemplos
  • produtos.controller.ts    → Rota de cadastro com anotações de documentação
  • app.module.ts             → Registro do controlador e configuração do módulo
  • main.ts                   → Configuração geral e inicialização do Swagger

📋 2. Definição do DTO
  • Criação de classe com campos: nome, preço e categoria
  • Uso de @ApiProperty() para cada campo:
    → exemplo de valor esperado
    → descrição clara do propósito
  • Tipagem estrita: string e number conforme dado

🔌 3. Rota Implementada
  Método  | Rota          | Ação
  --------|---------------|-----------------------------------
  POST    | /produtos     | Cadastrar um novo produto no estoque

📄 4. Documentação e Descrições
  • Título e versão da API
  • Descrição geral do propósito
  • Agrupamento por tag: "Produtos"
  • @ApiOperation() → resumo do que a rota faz
  • @ApiResponse() → descrição de cada código:
    → 201: cadastro realizado com sucesso
    → 400: dados enviados inválidos ou mal formatados
  • Suporte a autenticação preparado para uso futuro

✅ 5. Funcionamento
  • Servidor disponível na porta 3000
  • Documentação acessível em /docs
  • Interface interativa com campos preenchíveis
  • Botão "Execute" para testar direto na página
  • Atualização automática conforme código é alterado

🧠 6. Conceitos Aprendidos
  • Documentação não é algo separado: faz parte do código
  • @ApiProperty() → descreve cada campo do modelo
  • @ApiOperation() → explica o propósito da rota
  • @ApiResponse() → padroniza o que esperar de retorno
  • SwaggerModule.createDocument() → geração automática da especificação
  • Documentação viva = sempre atualizada com o código
  • Clareza para quem consome: formato, exemplo e descrição juntos

📦 7. Exemplos Visíveis
  ✅ Corpo esperado na requisição:
     {
       "nome": "Café Grão de Ouro 500g",
       "preco": 9.99,
       "categoria": "Alimentos"
     }

  ✅ Resposta de sucesso (201):
     {
       "id": 67,
       "nome": "Café Grão de Ouro 500g",
       "preco": 9.99,
       "categoria": "Alimentos",
       "criadoEm": "16/10/2026"
     }

  ⚠️ Requisição com dados inválidos (400):
     Playload enviado contém dados mal formatados e/ou inválidos.

  💡 Página pronta e funcional:
     → Interface visual organizada
     → Validação em tempo real dos campos
     → Esquema (Schema) visível para conferência
     → Versão OpenAPI 3.0 identificada

---

✅ Aplicação funcionando com documentação completa: rota descrita, campos explicados, exemplos preenchidos e testes executáveis diretamente pelo navegador.