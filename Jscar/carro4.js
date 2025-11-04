const imagens = ['imagemcar/cross1.webp', 'imagemcar/cross2.webp', 'imagemcar/cross3.webp', 'imagemcar/cross4.webp', 'imagemcar/cross5.webp', 'imagemcar/cross6.webp', 'imagemcar/cross7.webp', 'imagemcar/cross8.webp', 'imagemcar/cross9.webp', 'imagemcar/cross10.webp', 'imagemcar/cross11.webp', 'imagemcar/cross12.webp', 'imagemcar/cross13.webp', 'imagemcar/cross14.webp', 'imagemcar/cross15.webp', 'imagemcar/cross16.webp', 'imagemcar/cross17.webp', 'imagemcar/cross18.webp', 'imagemcar/cross19.webp', ];
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