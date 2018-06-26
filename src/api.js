import firebase from './firebase';

const fetchNamePlaceholder = () => (
  Promise.resolve('placeholder')
);

const fetchNameFirebase = () => (
  firebase.database().ref('test').once('value').then(snap => snap.val())
);

export default fetchNameFirebase;
