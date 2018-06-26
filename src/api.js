import firebase from './firebase';

const fetchNamePlaceholder = () => (
  Promise.resolve('placeholder')
);

const fetchNameFirebase = () => (
  firebase.database().ref('test').once('value').then(snap => snap.val())
);

const fetchNameMicroservice = () => (
  // fetch('https://api.onepeloton.com/api/ride/27b13f0cf4a64eac964d6c54347b30bb/details')
  fetch("/api/ride/27b13f0cf4a64eac964d6c54347b30bb/details")
    .then(res => res.json())
    .then(json => json.ride.title)
);

export default fetchNameMicroservice;
