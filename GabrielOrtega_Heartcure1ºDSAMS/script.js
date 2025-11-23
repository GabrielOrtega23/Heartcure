
const imagens = [
  {
    src: "cardio1.jpg",
    acao: () => window.location.href = "contato.html"
  },
  {
    src: "cardio2.jpg",
    acao: () => {
      const tabela = document.querySelector("table");
      if (tabela) {
        tabela.scrollIntoView({ behavior: "smooth" });
      }
    }
  },
  {
    src: "cardio3.jpg",
    acao: () => {
      const servicos = document.querySelector("ul");
      if (servicos) {
        servicos.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
];

let index = 0;


const carrossel = document.createElement("div");
carrossel.id = "carrossel";
carrossel.style.position = "relative";
carrossel.style.width = "100%";
carrossel.style.maxWidth = "800px";
carrossel.style.margin = "20px auto";
carrossel.style.overflow = "hidden";
carrossel.style.borderRadius = "10px";
carrossel.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";

// Imagem principal
const img = document.createElement("img");
img.style.width = "100%";
img.style.display = "block";
img.style.cursor = "pointer";
carrossel.appendChild(img);

// Botões inferiores
const botoes = document.createElement("div");
botoes.style.textAlign = "center";
botoes.style.marginTop = "10px";

imagens.forEach((_, i) => {
  const btn = document.createElement("button");
  btn.textContent = i + 1;
  btn.style.margin = "5px";
  btn.style.padding = "8px 14px";
  btn.style.border = "none";
  btn.style.borderRadius = "5px";
  btn.style.background = "#00acc1";
  btn.style.color = "white";
  btn.style.cursor = "pointer";
  btn.style.fontSize = "14px";

  btn.addEventListener("click", () => {
    index = i;
    atualizarCarrossel();
  });

  botoes.appendChild(btn);
});

carrossel.appendChild(botoes);


document.querySelector("section").prepend(carrossel);


function atualizarCarrossel() {
  img.src = imagens[index].src;
  img.onclick = imagens[index].acao;
}


setInterval(() => {
  index = (index + 1) % imagens.length;
  atualizarCarrossel();
}, 5000);

atualizarCarrossel();
