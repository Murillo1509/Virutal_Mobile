const imagens = ['imagemcar/dodge-challenger1.jpg', 'imagemcar/dodge-challenger2.jpg', 'imagemcar/dodge-challenger3.jpg', 'imagemcar/dodge-challenger4.jpg', 'imagemcar/dodge-challenger5.jpg', 'imagemcar/dodge-challenger6.jpg', 'imagemcar/dodge-challenger7.jpg', 'imagemcar/dodge-challenger8.jpg', 'imagemcar/dodge-challenger9.jpg', 'imagemcar/dodge-challenger10.jpg', ];
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