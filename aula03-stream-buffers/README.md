# Aula 03 — Streams e Buffers

## 📝 Descrição
Projeto desenvolvido na Aula 03 do curso de Programador Full Stack, demonstrando o uso de **Streams** no Node.js para leitura, escrita e processamento eficiente de arquivos grandes.

---

## 🎯 Objetivos da Aula
- Compreender o conceito de **Streams** e sua importância no tratamento de dados
- Ler arquivos linha por linha sem carregar todo o conteúdo na memória
- Filtrar informações específicas de um arquivo de log
- Demonstrar o consumo de memória durante o processamento
- Escrever resultados em um novo arquivo de forma eficiente

---

## 📁 Estrutura de Arquivos

| Arquivo | Função |
|---|---|
| `gerarLogGigante.js` | Gera um arquivo de log simulado com 4.000 linhas |
| `processLogs.js` | Lê o log, filtra as linhas com `ERROR` e salva em um arquivo separado |
| `servidor.log` | Arquivo de log gerado com dados de teste |
| `apenas_erros.log` | Arquivo de saída contendo SOMENTE as linhas com erro |
| `package.json` | Configurações do projeto (ESM habilitado) |

---

## ⚙️ Funcionamento

### 1. Gerar Log
O arquivo `gerarLogGigante.js` cria um log com data, hora, número da linha e tipo (`INFO` ou `ERROR`):
- 4.000 linhas geradas
- Alternância entre tipos de informação
- Escrita via `createWriteStream`

### 2. Processar e Filtrar
O arquivo `processLogs.js` faz:
- ✅ Leitura do log com `createReadStream`
- ✅ Leitura linha por linha com `readline`
- ✅ Filtragem: captura apenas linhas que contêm `ERROR`
- ✅ Contagem total de erros encontrados
- ✅ Escrita das linhas filtradas em `apenas_erros.log`
- ✅ Monitoramento de **consumo de memória** antes e depois

---

## 📊 Resultado Obtido
- Arquivo original: **4.000 linhas**
- Arquivo filtrado: **apenas linhas com ERROR**
- Processamento com **baixo consumo de memória** (graças ao uso de Streams)

---

## 🛠️ Tecnologias Utilizadas
- **Node.js** — Ambiente de execução
- **Módulo `fs`** — Sistema de arquivos
- **Módulo `readline`** — Leitura linha por linha
- **ESM (ECMAScript Modules)** — `import` / `export`
- **Streams** — Leitura e escrita eficiente de dados

---

## 🧠 Conceitos Aprendidos
- ✅ Streams processam dados **em partes**, não tudo de uma vez
- ✅ Ideal para arquivos grandes → **economiza memória**
- ✅ `for await...of` → percorre linhas de forma assíncrona
- ✅ `process.memoryUsage()` → monitora consumo real de memória
- ✅ `createReadStream` + `createWriteStream` → fluxo contínuo de dados

---

## 📌 Execução
```bash
# Gera o arquivo de log
node gerarLogGigante.js

# Processa e filtra os erros
node processLogs.js