const imagens = ['imagemcar/ford-corcel1.webp', 'imagemcar/ford-corcel2.webp', 'imagemcar/ford-corcel3.webp', 'imagemcar/ford-corcel4.webp', 'imagemcar/ford-corcel6.webp', 'imagemcar/ford-corcel7.webp', 'imagemcar/ford-corcel8.webp', 'imagemcar/ford-corcel9.webp', 'imagemcar/ford-corcel10.webp', 'imagemcar/ford-corcel11.webp', 'imagemcar/ford-corcel12.webp', 'imagemcar/ford-corcel13.webp', 'imagemcar/ford-corcel14.webp', 'imagemcar/ford-corcel15.webp', 'imagemcar/ford-corcel16.webp', 'imagemcar/ford-corcel17.webp', 'imagemcar/ford-corcel18.webp', 'imagemcar/ford-corcel19.webp', ];

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