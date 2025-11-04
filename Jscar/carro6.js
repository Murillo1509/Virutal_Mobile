const imagens = ['imagemcar/chevrolet1.jpg', 'imagemcar/chevrolet2.jpg', 'imagemcar/chevrolet3.jpg', 'imagemcar/chevrolet4.jpg', 'imagemcar/chevrolet5.jpg', 'imagemcar/chevrolet6.jpg', 'imagemcar/chevrolet7.jpg', 'imagemcar/chevrolet8.jpg', 'imagemcar/chevrolet9.jpg', 'imagemcar/chevrolet10.jpg', 'imagemcar/chevrolet11.jpg', 'imagemcar/chevrolet12.jpg', 'imagemcar/chevrolet13.jpg', 'imagemcar/chevrolet14.jpg', 'imagemcar/chevrolet15.jpg', ];
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