// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDFSxH5EIB5y87q9EElxpKte6pkK7-J5Lg',
  authDomain: 'draganddrop-be29f.firebaseapp.com',
  databaseURL: 'https://draganddrop-be29f.firebaseio.com',
  projectId: 'draganddrop-be29f',
  storageBucket: 'draganddrop-be29f.appspot.com',
  messagingSenderId: '478345660279'
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
