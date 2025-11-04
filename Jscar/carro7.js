const imagens = ['imagemcar/fusca1.webp', 'imagemcar/fusca2.webp', 'imagemcar/fusca3.webp', 'imagemcar/fusca4.webp', 'imagemcar/fusca5.webp', 'imagemcar/fusca6.webp', 'imagemcar/fusca7.webp', 'imagemcar/fusca8.webp', 'imagemcar/fusca9.webp', 'imagemcar/fusca10.webp', 'imagemcar/fusca11.webp', 'imagemcar/fusca12.webp', 'imagemcar/fusca13.webp', 'imagemcar/fusca14.webp', 'imagemcar/fusca15.webp', 'imagemcar/fusca16.webp', 'imagemcar/fusca17.webp', 'imagemcar/fusca18.webp', 'imagemcar/fusca19.webp', 'imagemcar/fusca20.webp', ];
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