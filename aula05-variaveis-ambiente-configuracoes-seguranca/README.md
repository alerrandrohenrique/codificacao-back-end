# Aula 05 - Variáveis de Ambiente, Configuração e Segurança

## 📋 Descrição
Projeto desenvolvido na aula com o objetivo de aprender a usar **variáveis de ambiente** em aplicações Node.js, garantindo mais segurança, organização e proteção de dados sensíveis como chaves de API e credenciais de banco de dados.

## 🛠️ Tecnologias Utilizadas
- **Node.js** — Ambiente de execução JavaScript no lado do servidor
- **dotenv** — Biblioteca que carrega variáveis de ambiente do arquivo `.env` para `process.env`

## 📂 Estrutura Completa do Projeto
## 🚀 Funcionalidades Implementadas
- ✅ Carregamento automático das variáveis de ambiente usando `dotenv`
- ✅ Configuração da porta com valor padrão: `process.env.PORT || 8080`
- ✅ Leitura de credenciais: `API_KEY_PAGAMENTO` e `DATABASE_URL`
- ✅ Validação obrigatória: a aplicação é encerrada com código de erro se `API_KEY_PAGAMENTO` não estiver definida
- ✅ Exibição organizada das configurações no console
- ✅ Verificação do tamanho e status da chave de API

## 📝 Conteúdo dos Arquivos

### app.js
```javascript
import dotenv from 'dotenv';
dotenv.config();

function iniciarAplicacao() {
  const porta = process.env.PORT || 8080;
  const apiKey = process.env.API_KEY_PAGAMENTO;
  const dbUrl = process.env.DATABASE_URL;

  if (!apiKey) {
    console.error('[ERRO CRÍTICO]: a chave API_KEY_PAGAMENTO não está definida nas variaveis de ambiente!');
    process.exit(1);
  }

  console.log('=== ||| SERVIÇO DE CONFIGURAÇÃO CARREGADO ||| ===');
  console.log(`Serviço rodando na porta ${porta}`);
  console.log(`Banco de Dados: ${dbUrl}`);
  console.log(`API Key: ${apiKey}`);
  console.log(`Status da Chave: de tamanho ${apiKey.length} autenticada.`);
}

iniciarAplicacao();