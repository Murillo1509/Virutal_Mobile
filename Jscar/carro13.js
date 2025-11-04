const imagens = ['imagemcar/ford-mustang1.jpg', 'imagemcar/ford-mustang2.jpg', 'imagemcar/ford-mustang3.jpg', 'imagemcar/ford-mustang4.jpg', 'imagemcar/ford-mustang5.jpg', ];
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