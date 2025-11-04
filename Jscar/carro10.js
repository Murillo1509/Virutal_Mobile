const imagens = ['imagemcar/honda1.webp', 'imagemcar/honda2.webp', 'imagemcar/honda3.webp', 'imagemcar/honda4.webp', 'imagemcar/honda5.webp', 'imagemcar/honda6.webp', 'imagemcar/honda7.webp', 'imagemcar/honda8.webp', 'imagemcar/honda9.webp', 'imagemcar/honda10.webp', 'imagemcar/honda11.webp', 'imagemcar/honda12.webp', 'imagemcar/honda13.webp', 'imagemcar/honda14.webp', 'imagemcar/honda15.webp', 'imagemcar/honda16.webp', 'imagemcar/honda17.webp', 'imagemcar/honda18.webp', 'imagemcar/honda19.webp', ];
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