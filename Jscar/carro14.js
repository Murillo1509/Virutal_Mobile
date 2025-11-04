const imagens = ['imagemcar/opala1.jpg', 'imagemcar/opala2.jpg', 'imagemcar/opala3.jpg', 'imagemcar/opala4.jpg', 'imagemcar/opala5.jpg', 'imagemcar/opala6.jpg', 'imagemcar/opala7.jpg', 'imagemcar/opala8.jpg', ];
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