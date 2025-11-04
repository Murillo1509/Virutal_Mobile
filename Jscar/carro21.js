const imagens = ['imagemcar/ram-1500-1.webp', 'imagemcar/ram-1500-2.webp', 'imagemcar/ram-1500-3.webp', 'imagemcar/ram-1500-4.webp', 'imagemcar/ram-1500-5.webp', 'imagemcar/ram-1500-6.webp', 'imagemcar/ram-1500-7.webp', 'imagemcar/ram-1500-8.webp', 'imagemcar/ram-1500-9.webp', 'imagemcar/ram-1500-10.webp', 'imagemcar/ram-1500-11.webp', 'imagemcar/ram-1500-12.webp', 'imagemcar/ram-1500-13.webp', 'imagemcar/ram-1500-14.webp', 'imagemcar/ram-1500-15.webp', ];

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