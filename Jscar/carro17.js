const imagens = ['imagemcar/aston1.webp', 'imagemcar/aston2.webp', 'imagemcar/aston3.webp', 'imagemcar/aston4.webp', 'imagemcar/aston5.webp', 'imagemcar/aston6.webp', 'imagemcar/aston7.webp', 'imagemcar/aston8.webp', 'imagemcar/aston9.webp', 'imagemcar/aston10.webp', 'imagemcar/aston11.webp', 'imagemcar/aston12.webp', ];
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