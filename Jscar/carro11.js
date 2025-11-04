const imagens = ['imagemcar/bmw-m3-1.jpg', 'imagemcar/bmw-m3-2.jpg', 'imagemcar/bmw-m3-3.jpg', 'imagemcar/bmw-m3-4.jpg', 'imagemcar/bmw-m3-5.jpg', 'imagemcar/bmw-m3-6.jpg', 'imagemcar/bmw-m3-7.jpg', 'imagemcar/bmw-m3-8.jpg', 'imagemcar/bmw-m3-9.jpg', 'imagemcar/bmw-m3-10.jpg', 'imagemcar/bmw-m3-11.jpg', 'imagemcar/bmw-m3-12.jpg', 'imagemcar/bmw-m3-13.jpg', 'imagemcar/bmw-m3-14.jpg', 'imagemcar/bmw-m3-15.jpg', 'imagemcar/bmw-m3-16.jpg', ];
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