# CP1---WebDev---CRUD

# ⚽ CP1 - WebDev - CRUD (Cadastro de Jogadoras de Futebol Feminino)

Este projeto foi desenvolvido como parte da **CP1 da disciplina de Web Development (FIAP)**.  
A aplicação é um sistema simples de **cadastro, listagem, edição e exclusão** de jogadoras de futebol feminino, utilizando **HTML, CSS e JavaScript** com **LocalStorage** como base de dados simulada.

---

## 🚀 Funcionalidades

- **CRUD Completo**:
  - ➕ **Adicionar jogadora** (com validação dos campos obrigatórios).
  - 📋 **Listar jogadoras** em formato de cards.
  - ✏️ **Editar jogadora** (inclusive foto).
  - ❌ **Excluir jogadora** com confirmação.
- ⭐ **Favoritar jogadora** (ícone de estrela que salva no LocalStorage).
- 💾 **Persistência no LocalStorage**: dados salvos permanecem mesmo após recarregar a página.
- 🎨 **Interface responsiva** e organizada, com cards exibindo:
  - Foto
  - Nome
  - Posição
  - Clube
  - Estatísticas (gols, assistências e jogos)

---

## 📂 Estrutura do Projeto

```
📦 cp1-webdev-crud
 ┣ 📜 index.html       # Estrutura principal da página
 ┣ 📜 style.css        # Estilização da interface
 ┣ 📜 script.js        # Lógica em JavaScript (CRUD + LocalStorage)
 ┗ 📜 README.md        # Documentação do projeto
```

---

## 🗄️ Base de Dados (JSON inicial)

Na primeira execução, o sistema carrega no **LocalStorage** o seguinte conjunto de jogadoras:

```json
[
  {
    "nome": "Andressa Alves",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://example.com/andressa.jpg",
    "gols": 15,
    "assistencias": 10,
    "jogos": 28,
    "favorita": false
  },
  {
    "nome": "Dayana Rodríguez",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://example.com/dayana.jpg",
    "gols": 5,
    "assistencias": 12,
    "jogos": 30,
    "favorita": false
  },
  {
    "nome": "Mariza",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://example.com/mariza.jpg",
    "gols": 2,
    "assistencias": 1,
    "jogos": 32,
    "favorita": false
  },
  {
    "nome": "Thaís Regina",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://example.com/thais.jpg",
    "gols": 1,
    "assistencias": 2,
    "jogos": 25,
    "favorita": false
  },
  {
    "nome": "Letícia Teles",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://example.com/leticia.jpg",
    "gols": 0,
    "assistencias": 0,
    "jogos": 18,
    "favorita": false
  }
]
```

---

## 🌐 Publicação no GitHub Pages

O projeto foi publicado no **GitHub Pages** e pode ser acessado no link:  
👉 [Acessar aplicação online](https://seu-usuario.github.io/cp1-webdev-crud)

---

## 👨‍💻 Integrantes

- **Gustavo Cavalcanti** - RM: 565601  
- **Tomas Antonio** - RM: 563295  
- **Mateus Macedo** - RM: 563294  

---

## 📌 Observações

- Projeto desenvolvido para fins acadêmicos, seguindo as orientações da **CP1 - WebDev - CRUD (FIAP)**.  
- O sistema não utiliza backend ou banco de dados real, apenas **LocalStorage** para simulação.
