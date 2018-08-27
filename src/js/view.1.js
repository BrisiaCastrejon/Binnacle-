const saveText = document.getElementById('saveText');
saveText.addEventListener('click', event => {
  const title = document.getElementById('title').value;
  const binnacle = document.getElementById('binnacle').value;
  if (title == '' || binnacle == '') {
    alert('debes llenar todos los campos');
  } else {
    firestore.collection('Blogs').add({
      title: title,
      binnacle: binnacle
    })
      .then(function(docRef) {
        console.log('ID:', docRef.id);
        document.getElementById('title').value = '';
        document.getElementById('binnacle').value = '';
      })
      .catch(function(error) {
        console.error('No se pudo añadir el archivo:', error);
      });
  }
});

// leer data
//let finalCard = document.getElementById('finalCard');
firestore.collection('Blogs').onSnapshot((querySnapshot) => {
  finalCard.innerHTML = '';
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    finalCard.innerHTML +=
      `<div class="row justify-content-center">
        <div class="col-sm-8">
          <section class="card">
            <article class="card-body">
              <h5 class="card-title">${doc.data().title}</h5>
              <p class="card-text">${doc.data().binnacle}</p>              
              <a href="#" class="btn btn-primary" onclick="borrar('${doc.id}')"> <span class="icon-trash"></span> Eliminar</a>
            </article>
          </section>
        </div>
      </div>  
      <br>  
        `;
  });
});

const borrar = (numeroUnico) => {
  firestore.collection('Blogs').doc(numeroUnico).delete().then(function() {
    console.log('Se borro el archivo');
  }).catch(function(error) {
    console.error('No se pudo borrar el. archivo:', error);
  });
};