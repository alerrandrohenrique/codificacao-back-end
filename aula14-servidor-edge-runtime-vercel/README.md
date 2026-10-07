```
🌐 Aula 14 — Servidor com Edge Runtime na Vercel

🎯 Objetivo
Implementar e implantar uma função de servidor executada na borda da rede (Edge Runtime) utilizando a plataforma Vercel, demonstrando o fluxo de autenticação, configuração do projeto, implantação e verificação de funcionamento local e em produção.

---

✅ O que foi feito

📂 1. Estrutura do Projeto
• Criação do diretório `api/` com a função `hora-servidor.ts`
• Definição de configuração com `runtime: 'edge'` para execução na borda
• Arquivo `package.json` com metadados e configuração do projeto
• Arquivo `.gitignore` protegendo a pasta `.vercel` de versionamento
• Arquivo `project.json` gerado automaticamente ao vincular o projeto à Vercel

🔧 2. Implementação da Função
• Criação de função assíncrona que recebe a requisição (`Request`)
• Captura do horário de início da execução
• Construção de resposta em formato JSON com:
  - Mensagem de confirmação de execução na borda
  - Horário do servidor em formato ISO
  - Identificação do ambiente de execução
  - Tempo de processamento em milissegundos
• Definição de status HTTP 200 e cabeçalho `Content-Type: application/json`

☁️ 3. Configuração e Implantação na Vercel
• Autenticação via CLI (`vercel login`) com confirmação de dispositivo
• Criação do projeto vinculando repositório Git
• Definição de nome do projeto e diretório de implantação
• Primeira implantação automática em ambiente de produção
• Geração de URLs de acesso: padrão e personalizada
• Execução local com `vercel dev` para testes na porta 3000

🧪 4. Teste e Validação
• Requisição `GET` para o endpoint `/api/hora-servidor` em ambiente local
• Confirmação de retorno com status 200 OK
• Verificação dos dados retornados: horário, região e tempo de execução
• Validação de funcionamento na URL de produção

📚 5. Conceitos e Padrões Utilizados

| Componente/Conceito | Função |
|---|---|
| Edge Runtime | ⚡ Ambiente de execução distribuído na borda da rede |
| `runtime: 'edge'` | 🔌 Define que a função será executada nos servidores de borda |
| `Request` / `Response` | 📤 API padrão para tratamento de requisições e respostas |
| `Date.now()` / `getTime()` | ⏱️ Medição de tempo de execução |
| `toISOString()` | 📅 Formatação padronizada de data e horário |
| `vercel login` / `link` | 🔐 Autenticação e vínculo do projeto com a conta |
| `vercel` / `vercel --prod` | 🚀 Implantação em ambiente de visualização e produção |
| `.vercel/` | 🔑 Pasta com configurações locais — **não deve ser versionada** |

📋 6. Respostas Obtidas

Ao acessar o endpoint, a função retorna:

{
  "mensagem": "Função executada na borda de rede",
  "horarioDoServidor": "2026-10-07T00:06:13.768Z",
  "regiao": "local-dev",
  "tempoDeExecucao": "0 ms"
}

💡 Conceitos Aprendidos
• Diferença entre Edge Runtime e ambiente tradicional de servidor
• Como funções são distribuídas e executadas próximo ao usuário final
• Fluxo completo: código local → configuração → implantação na nuvem
• Uso da CLI da Vercel para autenticação, vinculação e deploy
• Proteção de arquivos sensíveis com `.gitignore`
• Medição e retorno de métricas de desempenho em tempo real
• Teste local com `vercel dev` antes de publicar em produção
• Estrutura de pastas reconhecida automaticamente pela Vercel (`api/`)

---

🏁 Projeto implantado e funcionando em produção, com endpoint respondendo corretamente e demonstrando o comportamento de funções na borda da rede.
```