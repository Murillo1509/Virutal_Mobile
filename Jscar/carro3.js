const imagens = ['imagemcar/chevrolet-opala1.webp', 'imagemcar/chevrolet-opala2.webp', 'imagemcar/chevrolet-opala3.webp', 'imagemcar/chevrolet-opala4.webp', 'imagemcar/chevrolet-opala5.webp', 'imagemcar/chevrolet-opala6.webp', 'imagemcar/chevrolet-opala7.webp', 'imagemcar/chevrolet-opala8.webp', 'imagemcar/chevrolet-opala9.webp', 'imagemcar/chevrolet-opala10.webp', 'imagemcar/chevrolet-opala11.webp', ];
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