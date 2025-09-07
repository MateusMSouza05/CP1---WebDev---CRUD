let posts = [
  {
    "nome": "Andressa Alves",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://cdn.meutimao.com.br/fotos-do-corinthians/w614/2025/07/03/andressa_alves_em_treino_do_corinthians_p40y.jpg",
    "gols": 15,
    "assistencias": 10,
    "jogos": 28,
    "favorita": false
  },
  {
    "nome": "Dayana Rodríguez",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://cdn.meutimao.com.br/fotos-do-corinthians/w614/2025/01/15/dayana_rodriguez_no_treino_da_pre-temporada_vqbo.jpg",
    "gols": 5,
    "assistencias": 12,
    "jogos": 30,
    "favorita": false
  },
  {
    "nome": "Mariza",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://cdn.meutimao.com.br/_upload/jogador/mariza-nascimento-silva-no-corinthians_l_corinthians.jpg",
    "gols": 2,
    "assistencias": 1,
    "jogos": 32,
    "favorita": false
  },
  {
    "nome": "Thaís Regina",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://cdn.meutimao.com.br/_upload/jogador/thais-regina-da-silva-no-corinthians_x_corinthians.jpg",
    "gols": 1,
    "assistencias": 2,
    "jogos": 25,
    "favorita": false
  },
  {
    "nome": "Letícia Teles",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://cdn.meutimao.com.br/_upload/jogador/leticia-teles-da-silva-no-corinthians_4_corinthians.jpg",
    "gols": 0,
    "assistencias": 0,
    "jogos": 18,
    "favorita": false
  }
];


window.onload = function(){
    mostrarPosts();

    document.querySelector("#form-adicionar").addEventListener("submit", addPost);
};


// ---- Função para renderizar os cards ----
function mostrarPosts() {
    const container = document.getElementById("cards-container");
    container.innerHTML = ""; // limpa antes de renderizar

    posts.forEach((post, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${post.foto}" alt="${post.nome}" class="card-img">
            <div class="card-body">
                <div class="card-header">
                    <h3>${post.nome}</h3>
                    <i class="fa-star fas ${post.favorita ? 'favorita' : ''}" data-index="${index}"></i>
                </div>
                <div class="card-info">
                    <p><strong>Posição:</strong> ${post.posicao}</p>
                    <p><strong>Clube:</strong> ${post.clube}</p>
                </div>
                <div class="card-stats">
                    <div class="stat"><span>${post.gols}</span> Gols</div>
                    <div class="stat"><span>${post.assistencias}</span> Assist.</div>
                    <div class="stat"><span>${post.jogos}</span> Jogos</div>
                </div>
            </div>
            <div class="card-actions">
                <button class="action-btn edit" data-index="${index}"><i class="fas fa-edit"></i></button>
                <button class="action-btn delete" data-index="${index}"><i class="fas fa-trash"></i></button>
            </div>
        `;

        container.appendChild(card);
    });
}


// ---- Modal de Adicionar ----
const btnAdicionar = document.getElementById("btnAdicionar");
const modalAdicionar = document.getElementById("modal-adicionar");
const closeAdicionar = document.getElementById("adicionar");

btnAdicionar.addEventListener("click", () => {
    modalAdicionar.style.display = "block";
});

closeAdicionar.addEventListener("click", () => {
    modalAdicionar.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modalAdicionar) {
        modalAdicionar.style.display = "none";
    }
});


function addPost(event) {
    event.preventDefault(); // impede reload da página

    const novo = {
        nome: document.getElementById("add-nome").value,
        posicao: document.getElementById("add-posicao").value,
        clube: document.getElementById("add-clube").value,
        foto: document.getElementById("add-foto").value,
        gols: parseInt(document.getElementById("add-gols").value),
        assistencias: parseInt(document.getElementById("add-assistencias").value),
        jogos: parseInt(document.getElementById("add-jogos").value),
        favorita: false
    };

    posts.push(novo);               
    mostrarPosts();                 
    modalAdicionar.style.display = "none"; 
    event.target.reset();           
    alert("Jogadora adicionada com sucesso! ✅"); 
}

