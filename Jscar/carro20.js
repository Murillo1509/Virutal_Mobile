const imagens = ['imagemcar/mercedesbenz-amg1.webp', 'imagemcar/mercedesbenz-amg2.webp', 'imagemcar/mercedesbenz-amg3.webp', 'imagemcar/mercedesbenz-amg4.webp', 'imagemcar/mercedesbenz-amg5.webp', 'imagemcar/mercedesbenz-amg6.webp', 'imagemcar/mercedesbenz-amg7.webp', 'imagemcar/mercedesbenz-amg9.webp', 'imagemcar/mercedesbenz-amg10.webp', 'imagemcar/mercedesbenz-amg11.webp', 'imagemcar/mercedesbenz-amg12.webp', 'imagemcar/mercedesbenz-amg13.webp', 'imagemcar/mercedesbenz-amg14.webp', 'imagemcar/mercedesbenz-amg15.webp', 'imagemcar/mercedesbenz-amg16.webp', 'imagemcar/mercedesbenz-amg17.webp', 'imagemcar/mercedesbenz-amg18.webp', 'imagemcar/mercedesbenz-amg19.webp', 'imagemcar/mercedesbenz-amg20.webp', ];
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