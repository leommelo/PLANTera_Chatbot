# PLANTera - Frontend

**PLANTera** é um chatbot não-oficial desenvolvido para fornecer informações rápidas e eficientes sobre o time de CS:GO da FURIA.  
Este repositório contém o **frontend** do projeto, construído utilizando **React** com **Vite** para um desenvolvimento rápido e eficiente.

---

## 📁 Estrutura de Arquivos

Abaixo está a estrutura principal do diretório `chatbot-front`:

```
chatbot-front/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/
    │   ├── LogoFuria.svg
    │   ├── PLANTera1.svg
    │   ├── PLANTera2.svg
    │   ├── react.svg
    │   └── TimeCsFuria.png
    └── Components/
        ├── ChatBot/
        │   ├── ChatBot.css
        │   ├── ChatBot.jsx
        │   └── Mensagem.jsx
        └── Presentation/
            ├── Presentation.css
            └── Presentation.jsx
```

---

## 💡 Principais Componentes

### `App.jsx`
Componente principal que organiza a interface do chatbot e da apresentação.  
Utiliza os componentes `ChatBot` e `Presentation` para estruturar a aplicação.

### `Presentation`
- **Arquivo:** `src/Components/Presentation/Presentation.jsx`
- **Descrição:** Exibe a apresentação inicial do projeto, com animações e informações sobre o chatbot.
- **Estilização:** Arquivo `Presentation.css` com animações como `fadeInUp`, `typing` e `bounceIn`.

### `ChatBot`
- **Arquivo:** `src/Components/ChatBot/ChatBot.jsx`
- **Descrição:** Gerencia a interface do chatbot, incluindo envio e exibição de mensagens.
- **Estilização:** Definida em `ChatBot.css`, com barra de rolagem personalizada.

### `Mensagem`
- **Arquivo:** `src/Components/ChatBot/Mensagem.jsx`
- **Descrição:** Renderiza as mensagens do usuário e do bot com estilos diferenciados.

---

## 🎨 Estilização

A estilização é feita com **CSS puro**, incluindo animações e fontes personalizadas:

- `index.css`: Estilos globais do projeto.
- `App.css`: Layout principal da aplicação.
- `Presentation.css`: Estilos específicos para a apresentação.
- `ChatBot.css`: Estilização do chatbot, incluindo barra de rolagem customizada.

---

## 🛠️ Tecnologias Utilizadas

- **React**
- **Vite**
- **Material-UI**
- **CSS**

---

## 📦 Scripts Disponíveis

No arquivo `package.json`:

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a build de produção.
- `npm run preview`: Visualiza a build de produção.
- `npm run lint`: Verifica problemas no código com ESLint.

---

## ▶️ Como Executar o Frontend

### Pré-requisitos

- Node.js instalado.
- npm ou yarn.

### Passos

1. Acesse o diretório do frontend:
   ```bash
   cd chatbot-front
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse no navegador:  
   **http://localhost:5173**

---

## ⚙️ Funcionalidades

- **Interface Responsiva**: Adapta-se a diferentes dispositivos.
- **Animações**: Transições suaves para melhor experiência do usuário.
- **Chatbot Interativo**: Envia e recebe mensagens em tempo real.

---

## 🚀 Melhorias Futuras

- Suporte a múltiplos idiomas.
- Testes automatizados.
- Melhorar a acessibilidade da interface.

---

## 📜 Licença

Este projeto é de uso **não-oficial** e **não está associado à organização FURIA**.  
Disponível sob a licença **ISC**.