let slideIndex = 1;
mostrarSlides(slideIndex);

function mudarSlide(n) {
  mostrarSlides(slideIndex += n);
}

function slideAtual(n) {
  mostrarSlides(slideIndex = n);
}

function mostrarSlides(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

function mostrarServicos() {
  document.querySelector("ul").scrollIntoView({ behavior: "smooth" });
}

function mostrarPrecos() {
  document.querySelector("table").scrollIntoView({ behavior: "smooth" });
}

function redirecionarContato() {
  window.location.href = "contato.html";
}

// Auto-play (troca de slide a cada 5 segundos)
setInterval(() => {
  slideIndex++;
  mostrarSlides(slideIndex);
}, 5000);