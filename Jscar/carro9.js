const imagens = ['imagemcar/ferrari1.webp', 'imagemcar/ferrari2.webp', 'imagemcar/ferrari3.webp', 'imagemcar/ferrari4.webp', 'imagemcar/ferrari5.webp', 'imagemcar/ferrari6.webp', 'imagemcar/ferrari7.webp', 'imagemcar/ferrari8.webp', 'imagemcar/ferrari9.webp', 'imagemcar/ferrari10.webp', 'imagemcar/ferrari11.webp', 'imagemcar/ferrari12.webp', 'imagemcar/ferrari13.webp', ];
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