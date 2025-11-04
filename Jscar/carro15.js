const imagens = ['imagemcar/caravan1.jpg', 'imagemcar/caravan2.jpg', 'imagemcar/caravan3.jpg', 'imagemcar/caravan4.jpg', 'imagemcar/caravan5.jpg', 'imagemcar/caravan6.jpg', 'imagemcar/caravan7.jpg', 'imagemcar/caravan8.jpg', ];
let indiceAtual = 0;

function mostrarImagem() {
  document.getElementById('slider').src = imagens[indiceAtual];
}

function nextImage() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  mostrarImagem();
}

function prevImage() {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  mostrarImagem();
}

window.onload = mostrarImagem;