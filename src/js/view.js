const exit = document.getElementById('exit');
exit.addEventListener('click', event => {
  location.href = '../index.html'
});

let miBitacora = document.getElementById('miBitacora');
let misNotas = document.getElementById('misNotas');
let miGaleria = document.getElementById('miGaleria');
let miReproductor = document.getElementById('miReproductor');
let initialCard = document.getElementById('initialCard');
let finalCard = document.getElementById('finalCard');


miBitacora.addEventListener('click', event => {
  location.href = '../views/view.html'
});

misNotas.addEventListener('click', event => {
  location.href = '../views/notes.html';

});

miGaleria.addEventListener('click', event => {
  location.href = '../views/galery.html';
});

miReproductor.addEventListener('click', event => {
  location.href = '../views/notes.html'
});
