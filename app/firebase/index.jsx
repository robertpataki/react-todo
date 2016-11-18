import firebase from 'firebase';

try {
  const config = {
      apiKey: "AIzaSyBs8ixgH20TeGoNksp8L54Gf3HoUtkbPGg",
      authDomain: "todo-app-72636.firebaseapp.com",
      databaseURL: "https://todo-app-72636.firebaseio.com",
      storageBucket: "todo-app-72636.appspot.com",
      messagingSenderId: "727450085075"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;
