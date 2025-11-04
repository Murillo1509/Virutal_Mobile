const imagens = ['imagemcar/porsche-718-1.webp', 'imagemcar/porsche-718-2.webp', 'imagemcar/porsche-718-3.webp', 'imagemcar/porsche-718-4.webp', 'imagemcar/porsche-718-5.webp', 'imagemcar/porsche-718-6.webp', 'imagemcar/porsche-718-7.webp', 'imagemcar/porsche-718-8.webp', 'imagemcar/porsche-718-9.webp', 'imagemcar/porsche-718-10.webp', 'imagemcar/porsche-718-11.webp', 'imagemcar/porsche-718-12.webp', 'imagemcar/porsche-718-13.webp', 'imagemcar/porsche-718-14.webp', 'imagemcar/porsche-718-15.webp', 'imagemcar/porsche-718-16.webp', ];
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