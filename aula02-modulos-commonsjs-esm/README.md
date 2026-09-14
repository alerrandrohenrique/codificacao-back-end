# 📘 Projeto - Aula 2: Criação dos Arquivos Base

> Projeto desenvolvido durante a **Aula 2** do curso de desenvolvimento back-end, com foco na estruturação inicial de um projeto Node.js e organização de arquivos essenciais.

---

## 📝 Sobre a Aula

Na **Aula 2**, o objetivo principal foi aprender a estruturar um projeto do zero, criando os arquivos fundamentais que dão base para qualquer aplicação back-end com Node.js e JavaScript.

Foram criados e configurados **3 arquivos essenciais** que formam a espinha dorsal do projeto:

1. 📄 `index.js` — Arquivo principal de entrada da aplicação
2. 📦 `package.json` — Arquivo de configuração e gerenciamento do projeto
3. 🛠️ `utilitario.js` — Arquivo com funções utilitárias reutilizáveis

---

## 📁 Estrutura de Arquivos

```
projeto-aula-02/
├── index.js          # Arquivo principal / ponto de entrada
├── package.json      # Configurações e dependências do projeto
├── utilitario.js     # Funções utilitárias reutilizáveis
└── README.md         # Documentação do projeto (este arquivo)
```

---

## 📄 Descrição dos Arquivos Criados

### 1. `index.js`
É o **arquivo principal** da aplicação, o ponto de entrada onde tudo começa.
- Responsável por inicializar a aplicação
- Importa e utiliza as funções do arquivo utilitário
- Contém a lógica principal de execução do programa

### 2. `package.json`
Arquivo de configuração gerado com o comando `npm init`. Ele armazena:
- Nome, versão e descrição do projeto
- Informações do autor
- Scripts de execução (ex: `npm start`)
- Lista de dependências e dependências de desenvolvimento
- Versão do Node.js utilizada

### 3. `utilitario.js`
Arquivo de **ferramentas auxiliares**, com funções que podem ser reutilizadas em várias partes do projeto.
- Contém funções genéricas e independentes
- Facilita a organização e manutenção do código
- É importado no `index.js` sempre que necessário

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- ✅ Node.js instalado
- ✅ NPM (Gerenciador de Pacotes do Node)

### Passo a passo
1. **Inicializar o projeto** (caso ainda não tenha feito):
```bash
npm init -y
```

2. **Executar a aplicação**:
```bash
node index.js
```

3. **Usar scripts personalizados** (se configurados no `package.json`):
```bash
npm start
```

---

## 💻 Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| 🟢 **Node.js** | Ambiente de execução JavaScript server-side |
| 🟨 **JavaScript** | Linguagem de programação utilizada |
| 📦 **NPM** | Gerenciador de pacotes e dependências |

---

## 🎯 Objetivos Alcançados

Ao final da aula, foram aprendidos e praticados os seguintes conceitos:

✅ Como estruturar um projeto Node.js do zero
✅ A função e importância do arquivo `package.json`
✅ Como criar um ponto de entrada com `index.js`
✅ Como organizar funções reutilizáveis em um arquivo utilitário
✅ Como importar e exportar módulos em JavaScript
✅ Boas práticas de organização de arquivos

---

## 📚 Aprendizados Principais

> A Aula 2 foi fundamental para entender que **um projeto bem organizado começa pela estrutura correta dos arquivos base**. Separar responsabilidades (arquivo principal, configurações e utilitários) facilita muito a manutenção, a escalabilidade e o entendimento do código ao longo do desenvolvimento.

Esses arquivos formam a base sólida sobre a qual serão adicionadas novas funcionalidades, dependências e frameworks (como o Express) nas próximas aulas.

---

## ✨ Próximos Passos

- [ ] Adicionar dependências (ex: Express)
- [ ] Criar rotas e servidores HTTP
- [ ] Implementar middlewares
- [ ] Conectar com banco de dados
- [ ] Expandir as funções do arquivo utilitário

---

**📖 Documentação criada para registrar e acompanhar o desenvolvimento do projeto ao longo do curso.**