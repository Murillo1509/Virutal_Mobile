const imagens = ['imagemcar/lamborghini-revuelto-1.jpg', 'imagemcar/lamborghini-revuelto-2.jpg', 'imagemcar/lamborghini-revuelto-3.jpg', 'imagemcar/lamborghini-revuelto-4.jpg', 'imagemcar/lamborghini-revuelto-5.jpg', 'imagemcar/lamborghini-revuelto-6.jpg', 'imagemcar/lamborghini-revuelto-7.jpg', 'imagemcar/lamborghini-revuelto-8.jpg', 'imagemcar/lamborghini-revuelto-9.jpg', 'imagemcar/lamborghini-revuelto-10.jpg', 'imagemcar/lamborghini-revuelto-11.jpg', 'imagemcar/lamborghini-revuelto-12.jpg', 'imagemcar/lamborghini-revuelto-13.jpg', 'imagemcar/lamborghini-revuelto-14.jpg', 'imagemcar/lamborghini-revuelto-15.jpg', 'imagemcar/lamborghini-revuelto-16.jpg', 'imagemcar/lamborghini-revuelto-17.jpg', 'imagemcar/lamborghini-revuelto-18.jpg', 'imagemcar/lamborghini-revuelto-19.jpg', ];
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