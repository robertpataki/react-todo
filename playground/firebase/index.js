import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBs8ixgH20TeGoNksp8L54Gf3HoUtkbPGg",
    authDomain: "todo-app-72636.firebaseapp.com",
    databaseURL: "https://todo-app-72636.firebaseio.com",
    storageBucket: "todo-app-72636.appspot.com",
    messagingSenderId: "727450085075"
};
firebase.initializeApp(config);

const firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '0.0.1'
  },
  isRunning: true,
  user: {
    name: 'Rob',
    age: 32
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (data) => {
  console.log('child_added: ', data.key, data.val());
})

todosRef.on('child_changed', (data) => {
  console.log('child_changed: ', data.key, data.val());
})

todosRef.on('child_removed', (data) => {
  console.log('child_removed: ', data.key, data.val());
})

todosRef.push({
  text: 'cat'
});

todosRef.push({
  text: 'dog'
});
