import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBTylRFLhuuZBSbv7y_ywG1zOQuUF5XE5g",
  authDomain: "fir-site-fa91f.firebaseapp.com",
  databaseURL: "https://fir-site-fa91f.firebaseio.com",
  projectId: "fir-site-fa91f",
  storageBucket: "",
  messagingSenderId: "242201467435"
};
firebase.initializeApp(config);
export default firebase;