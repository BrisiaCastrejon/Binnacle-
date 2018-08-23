const saveText = document.getElementById('saveText');
saveText.addEventListener('click', event => {
const title = document.getElementById('title').value;
const binnacle = document.getElementById('binnacle').value;
if (title == '' || binnacle == '') {
  alert('debes llenar todos los campos');
} else {
  firestore.collection("Blogs").add({
    title: title,
    binnacle: binnacle
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById('title').value='';
    document.getElementById('binnacle').value='';
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});  
}  
});

// leer data
//let finalCard = document.getElementById('finalCard');
firestore.collection("Blogs").onSnapshot((querySnapshot) => {
  finalCard.innerHTML='';
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
 /*  boton de editar
 <a href="#" class="btn btn-primary" onclick="editar('${doc.id}', '${doc.data().title}', '${doc.data().binnacle}')" > <span class="icon-pencil"></span> Editar</a>
 */
const borrar = (numeroUnico) => {
  firestore.collection("Blogs").doc(numeroUnico).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}
 /*
const editar = (numeroUnico, title, binnacle) => {
  document.getElementById('title').value = title;
  document.getElementById('binnacle').value = binnacle;
  let otroBoton = document.getElementById('editar');
  //otroBoton.onclick = () => {
    let editFirestone = firestore.collection("Blogs").doc(numeroUnico);    
  const title = document.getElementById('title').value;
  const binnacle = document.getElementById('binnacle').value;

    return editFirestone.update({
        title: title,
        binnacle: binnacle
    })
    .then(function() {
        console.log("Document successfully updated!");
        document.getElementById('title').value='';
        document.getElementById('binnacle').value='';
    })
    .catch(function(error) {
        console.error("Error updating document: ", error);
    });
 // }

 
}


*/
