const imagens = ['imagemcar/kombi1.jpg', 'imagemcar/kombi2.jpg', 'imagemcar/kombi3.jpg', 'imagemcar/kombi4.jpg', 'imagemcar/kombi5.jpg', 'imagemcar/kombi6.jpg', 'imagemcar/kombi7.jpg', 'imagemcar/kombi8.jpg', 'imagemcar/kombi9.jpg', 'imagemcar/kombi10.jpg', 'imagemcar/kombi11.jpg', 'imagemcar/kombi12.jpg', 'imagemcar/kombi13.jpg', 'imagemcar/kombi14.jpg', 'imagemcar/kombi15.jpg', 'imagemcar/kombi16.jpg', 'imagemcar/kombi17.jpg', 'imagemcar/kombi18.jpg', 'imagemcar/kombi19.jpg', ];
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