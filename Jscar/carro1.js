const imagens = ['imagemcar/chevette1.webp', 'imagemcar/chevette2.webp', 'imagemcar/chevette3.webp', 'imagemcar/chevette4.webp', 'imagemcar/chevette5.webp', 'imagemcar/chevette6.webp', 'imagemcar/chevette7.webp', 'imagemcar/chevette8.webp', 'imagemcar/chevette9.webp', 'imagemcar/chevette10.webp', 'imagemcar/chevette11.webp', 'imagemcar/chevette12.webp', 'imagemcar/chevette13.webp', 'imagemcar/chevette14.webp', 'imagemcar/chevette15.webp', 'imagemcar/chevette16.webp'];
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