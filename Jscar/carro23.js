const imagens = ['imagemcar/ferrari-458-italia-1.webp', 'imagemcar/ferrari-458-italia-2.webp', 'imagemcar/ferrari-458-italia-3.webp', 'imagemcar/ferrari-458-italia-4.webp', 'imagemcar/ferrari-458-italia-5.webp', 'imagemcar/ferrari-458-italia-6.webp', 'imagemcar/ferrari-458-italia-7.webp', 'imagemcar/ferrari-458-italia-8.webp', 'imagemcar/ferrari-458-italia-9.webp', 'imagemcar/ferrari-458-italia-10.webp', 'imagemcar/ferrari-458-italia-11.webp', 'imagemcar/ferrari-458-italia-12.webp', 'imagemcar/ferrari-458-italia-13.webp', 'imagemcar/ferrari-458-italia-14.webp', 'imagemcar/ferrari-458-italia-15.webp', 'imagemcar/ferrari-458-italia-16.webp', 'imagemcar/ferrari-458-italia-17.webp', 'imagemcar/ferrari-458-italia-18.webp', 'imagemcar/ferrari-458-italia-19.webp', ];
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