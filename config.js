import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyAJ7kAKN4_exu_AcsJ1R0KShPEYWCG0zII",
  authDomain: "complaint-f.firebaseapp.com",
  projectId: "complaint-f",
  storageBucket: "complaint-f.appspot.com",
  messagingSenderId: "182793778253",
  appId: "1:182793778253:web:85f54fafe81a48ef999804"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

