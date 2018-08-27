const exit = document.getElementById('exit');
exit.addEventListener('click', event => {
  location.href = '../index.html'
});

let miBitacora = document.getElementById('miBitacora');
let misNotas = document.getElementById('misNotas');
let miGaleria = document.getElementById('miGaleria');

miBitacora.addEventListener('click', event => {
  location.href = '../views/view.html';
});

misNotas.addEventListener('click', event => {
  location.href = '../views/notes.html';

});

miGaleria.addEventListener('click', event => {
  location.href = '../views/galery.html';
});

const showPictures = () => {
  let galery = document.getElementById('galery');
  let files = document.getElementById('fileButton').files;
  for (i = 0; i < files.length; i++) {
    imgTag = document.createElement('img');
    imgTag.src = URL.createObjectURL(files[i]);
    galery.appendChild(imgTag);
  }
};