# PLANTera - Backend

**PLANTera** é um chatbot não-oficial desenvolvido para fornecer informações rápidas e eficientes sobre o time de CS:GO da FURIA.  
Este repositório contém o **backend** do projeto, construído utilizando **Node.js** com **Express** e integrado à biblioteca **HLTV** para dados em tempo real.

---

## 📁 Estrutura de Arquivos

Abaixo está a estrutura principal do diretório `chatbot-backend`:

```
chatbot-backend/
├── index.js
├── package.json
├── responses/
│   ├── aboutFuria.js
│   ├── aboutPlayer.js
│   ├── lastGame.js
│   ├── news.js
│   ├── nextGame.js
│   └── players.js
└── utils/
    └── analisarPergunta.js
```

---

## 💡 Principais Arquivos

### `index.js`

Arquivo principal que configura o servidor Express e define as rotas.  
Processa as mensagens enviadas pelo frontend, analisa o conteúdo e retorna respostas apropriadas.

### `utils/analisarPergunta.js`

Função que analisa o texto enviado pelo usuário e identifica o tipo de pergunta com base em padrões predefinidos.

### Diretório `responses/`

Contém funções que retornam respostas específicas:

- `aboutFuria.js`: Estatísticas gerais da FURIA.
- `aboutPlayer.js`: Dados sobre um jogador específico.
- `lastGame.js`: Informações do último jogo.
- `news.js`: Últimas notícias.
- `nextGame.js`: Próximo jogo agendado.
- `players.js`: Lineup atual da equipe.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Express**
- **HLTV**
- **CORS**

---

## 📦 Scripts Disponíveis

No `package.json`:

- `npm start`: Inicia o servidor backend.

---

## ▶️ Como Executar o Backend

### Pré-requisitos

- Node.js instalado.
- npm ou yarn.

### Passos

1. Acesse o diretório do backend:
   ```bash
   cd chatbot-backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```

4. O backend estará disponível em:  
   **http://localhost:3001**

---

## ⚙️ Funcionalidades

- **Processamento de Mensagens**: Analisa perguntas e responde dinamicamente.
- **Integração com HLTV**: Busca dados atualizados sobre o time da FURIA.
- **Respostas Dinâmicas**: Informações em tempo real sobre lineup, jogos e estatísticas.

---

## 🔧 Melhorias Futuras

- Suporte a múltiplos idiomas.
- Melhor tratamento de erros.
- Testes automatizados.

---

## 📜 Licença

Este projeto é de uso **não-oficial** e **não está associado à organização FURIA**.  
Disponível sob a licença **ISC**.