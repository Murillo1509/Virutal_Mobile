const imagens = ['imagemcar/mclaren1.jpg', 'imagemcar/mclaren2.jpg', 'imagemcar/mclaren3.jpg', 'imagemcar/mclaren4.jpg', 'imagemcar/mclaren5.jpg', 'imagemcar/mclaren6.jpg', 'imagemcar/mclaren7.jpg', 'imagemcar/mclaren8.jpg', 'imagemcar/mclaren9.jpg', 'imagemcar/mclaren10.jpg', 'imagemcar/mclaren11.jpg', 'imagemcar/mclaren12.jpg', 'imagemcar/mclaren13.jpg', 'imagemcar/mclaren14.jpg', 'imagemcar/mclaren15.jpg', 'imagemcar/mclaren16.jpg', ];
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