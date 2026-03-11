# AI Chat Test (Node + Cloudflare AI)

Um projeto simples para testar um **chat com Inteligência Artificial** usando:

* Node.js
* Express
* HTML / CSS / JavaScript
* API de IA da Cloudflare

O objetivo do projeto é apenas **demonstrar a IA respondendo mensagens em um site**, sem foco em produção.

---

# 📦 Tecnologias utilizadas

* Node.js
* Express
* JavaScript (Fetch API)
* Cloudflare Workers AI
* HTML / CSS

---

# 📁 Estrutura do projeto

```
ai-chat
 ├ package.json
 ├ server.js
 └ public
     ├ index.html
     ├ script.js
     └ style.css
```

---

# ⚙️ Instalação

Clone o repositório:

```
git clone https://github.com/UltimateStrength/ai-test.git
cd ai-test
```

Instale as dependências:

```
npm install
```

---

# 🔑 Configurar variáveis de ambiente

Crie as seguintes variáveis:

```
API_KEY=seu_token_cloudflare
ACCOUNT_ID=seu_account_id
```

Esses dados podem ser obtidos no painel da Cloudflare.

---

# ▶️ Executar localmente

```
npm server.js
```

O servidor iniciará em:

```
http://localhost:3000
```

---

# ☁️ Deploy

O projeto pode ser facilmente hospedado em plataformas como:

* Render
* Railway
* Vercel (backend serverless adaptado)

No Render, configure:

Build Command:

```
npm install
```

Start Command:

```
npm server.js
```

---

# ⚠️ Observações

Este projeto é apenas para **teste e aprendizado**.

* Não possui autenticação
* Não possui controle de limite de requisições
* A API Key deve ser protegida em variáveis de ambiente

---

# 📜 Licença

Projeto livre para uso educacional.
