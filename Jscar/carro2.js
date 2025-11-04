const imagens = ['imagemcar/ford1.webp', 'imagemcar/ford2.webp',  'imagemcar/ford3.webp', 'imagemcar/ford4.webp', 'imagemcar/ford5.webp', 'imagemcar/ford6.webp', 'imagemcar/ford7.webp', 'imagemcar/ford8.webp', 'imagemcar/ford9.webp', 'imagemcar/ford10.webp', 'imagemcar/ford11.webp', 'imagemcar/ford12.webp', 'imagemcar/ford13.webp', 'imagemcar/ford14.webp', 'imagemcar/ford15.webp', 'imagemcar/ford16.webp',];
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