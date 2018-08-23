let fileButton = document.getElementById('fileButton');
let uploader = document.getElementById('uploader');

fileButton.addEventListener('change', event => {
 let file = event.target.files[0];
 const storage = firebase.storage().ref('images/' + file.name);

 let task = storage.put(file);
 task.on('state_changed', 
 progress = (snapshot) => {
  let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
  uploader.value = percentage;
})

});