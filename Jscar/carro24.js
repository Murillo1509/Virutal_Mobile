const imagens = ['imagemcar/audi-rs4-1.webp', 'imagemcar/audi-rs4-2.webp', 'imagemcar/audi-rs4-3.webp', 'imagemcar/audi-rs4-4.webp', 'imagemcar/audi-rs4-5.webp', 'imagemcar/audi-rs4-6.webp', 'imagemcar/audi-rs4-7.webp', 'imagemcar/audi-rs4-8.webp', 'imagemcar/audi-rs4-9.webp', 'imagemcar/audi-rs4-10.webp', 'imagemcar/audi-rs4-11.webp', 'imagemcar/audi-rs4-12.webp', 'imagemcar/audi-rs4-13.webp', 'imagemcar/audi-rs4-14.webp', 'imagemcar/audi-rs4-15.webp', 'imagemcar/audi-rs4-16.webp', ];
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