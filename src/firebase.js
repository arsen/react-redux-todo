import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCZCCOqhTOVqKmugphr8mqF8Zre6Ma-X4c",
  authDomain: "material-todo-fa2eb.firebaseapp.com",
  databaseURL: "https://material-todo-fa2eb.firebaseio.com",
  storageBucket: "material-todo-fa2eb.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
let itemsRef = firebaseApp.database();


export default itemsRef;