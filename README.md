# PLANTera - Chatbot da FURIA

**PLANTera** é um projeto de chatbot não-oficial desenvolvido para fornecer informações rápidas e eficientes sobre o time de CS:GO da FURIA. O projeto é dividido em duas partes principais: o **frontend**, que é a interface do usuário, e o **backend**, que processa as mensagens e retorna as respostas.

## 🎨 Protótipo no Figma

Você pode visualizar o protótipo do chatbot PLANTera no Figma clicando no link abaixo:

🔗 [Acessar protótipo no Figma](https://www.figma.com/design/MW0BZq6IXoPjfngmfDBfNs/PLANTera?node-id=0-1&p=f&t=ISuGpzG7iY9K18df-0)


---

## 🌐 Acesse o Chatbot

O **frontend** do chatbot está disponível online em:  
🔗 **[https://plan-tera-chatbot.vercel.app](https://plan-tera-chatbot.vercel.app)**

> ⚠️ **Atenção:** Somente o frontend está hospedado.  
> O **backend ainda não está deployado**, então algumas funcionalidades que dependem de respostas do servidor podem não funcionar corretamente nesta versão online.


---

## 📁 Estrutura do Projeto

### Diretórios Principais

- **`chatbot-front/`**: Contém o código do frontend, desenvolvido em React e configurado com Vite.
- **`chatbot-backend/`**: Contém o código do backend, desenvolvido em Node.js com Express.

---

## 💬 Frontend

O frontend é responsável por exibir a interface do chatbot e gerenciar a interação do usuário. Ele utiliza bibliotecas como Material-UI para estilização e React para a construção de componentes.

### Estrutura de Arquivos

- **`src/`**: Contém o código principal do frontend.
  - **`App.jsx`**: Componente principal que organiza a interface do chatbot e da apresentação.
  - **`Components/`**: Contém os componentes reutilizáveis:
    - **`ChatBot/`**: Gerencia a interface do chatbot.
    - **`Presentation/`**: Exibe a apresentação inicial do projeto.
  - **`assets/`**: Contém imagens e ícones utilizados no projeto.
  - **`index.css`**: Estilização global do projeto.
  - **`main.jsx`**: Ponto de entrada do React.

### Tecnologias Utilizadas

- **React**
- **Vite**
- **Material-UI**
- **CSS**

### Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a build de produção.
- `npm run preview`: Visualiza a build de produção.
- `npm run lint`: Executa o ESLint para verificação.

---

## 🧠 Backend

O backend processa as mensagens enviadas pelo usuário, analisa o conteúdo e retorna respostas apropriadas. Utiliza a biblioteca HLTV para buscar informações sobre o time da FURIA.

### Estrutura de Arquivos

- **`index.js`**: Configura o servidor Express e define as rotas.
- **`utils/analisarPergunta.js`**: Analisa as mensagens enviadas pelo usuário.
- **`responses/`**: Contém funções com respostas específicas:
  - **`aboutFuria.js`**: Informações gerais sobre a FURIA.
  - **`aboutPlayer.js`**: Informações sobre jogadores.
  - **`lastGame.js`**: Detalhes sobre o último jogo.
  - **`news.js`**: Últimas notícias.
  - **`nextGame.js`**: Informações sobre o próximo jogo.
  - **`players.js`**: Lista de jogadores atuais.

### Tecnologias Utilizadas

- **Node.js**
- **Express**
- **HLTV**
- **CORS**

### Scripts Disponíveis

- `npm start`: Inicia o servidor backend.

---

## ▶️ Como Executar o Projeto Localmente

### Pré-requisitos

- Node.js instalado.
- Gerenciador de pacotes (npm ou yarn).

### Passos

1. Clone o repositório:
   ```bash
   git clone <url-do-repositório>
   ```

2. Instale as dependências:
   ```bash
   cd chatbot-front
   npm install

   cd ../chatbot-backend
   npm install
   ```

3. Inicie o backend:
   ```bash
   cd chatbot-backend
   npm start
   ```

4. Inicie o frontend:
   ```bash
   cd chatbot-front
   npm run dev
   ```

5. Acesse o frontend no navegador:  
   **http://localhost:5173**

---

## 🔧 Funcionalidades

- **Chatbot Interativo**: Responde perguntas sobre o time da FURIA, incluindo próximos jogos, últimos resultados, lineup atual e notícias.
- **Animações e Estilização**: Interface moderna com design responsivo.
- **Integração com HLTV**: Busca informações em tempo real sobre o time de CS:GO.

---

## 🚀 Melhorias Futuras

- Suporte a múltiplos idiomas.
- Implementar autenticação de usuários.
- Melhor tratamento de erros no backend.
- Adição de testes automatizados.

---

## 🤝 Contribuição

Contribuições são bem-vindas!  
Sinta-se à vontade para abrir issues ou enviar pull requests.

---

## 📜 Licença

Este projeto é de uso **não-oficial** e **não está associado à organização FURIA**.  
O código está disponível sob a licença **ISC**.
