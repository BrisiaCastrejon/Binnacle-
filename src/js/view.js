const exit = document.getElementById('exit');
exit.addEventListener('click', event => {
  location.href = '../index.html'
});

let miBitacora = document.getElementById('miBitacora');
let misNotas = document.getElementById('misNotas');
let miGaleria = document.getElementById('miGaleria');

miBitacora.addEventListener('click', event => {
  location.href = '../views/view.html'
});

misNotas.addEventListener('click', event => {
  location.href = '../views/notes.html';

});

miGaleria.addEventListener('click', event => {
  location.href = '../views/galery.html';
});

let save = document.getElementById('save');
save.addEventListener('click', event => {
  let urlYouTube = document.getElementById('urlYouTube').value;
  if (urlYouTube == '') {
    alert('debes llenar el campo');
  } else {
    firestore.collection('Videos').add({
      uri: urlYouTube
    })
      .then(function(docRef) {
        console.log('Id:', docRef.id);
        document.getElementById('urlYouTube').value = '';
      })
      .catch(function (error) {
        console.error('No se añadio el documento:', error);
      });
  };
});

let miVideo = document.getElementById('miVideo');
firestore.collection('Videos').onSnapshot((querySnapshot) => {
  //miVideo.innerHTML = '';
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    miVideo.innerHTML +=
      ` <iframe width="300" height="200"
      src="${doc.uri}controls=0">
      </iframe> 
      <button class="btn" onclick="borrar('${doc.id}')">Borrar</button> `;
  });
});

const borrar = (numeroUnico) => {
  firestore.collection('Videos').doc(numeroUnico).delete().then(function() {
    console.log('Se borro el archivo!');
  }).catch(function(error) {
    console.error('No se pudo borrar el archivo:', error);
  });
};