import firebase from 'firebase'

export const config = {
  apiKey: "AIzaSyAadO8tUMMRual1eb6AjjYjqwdkSZiFYYo",
  authDomain: "travela-dev-54075.firebaseapp.com",
  databaseURL: "https://travela-dev-54075.firebaseio.com",
  projectId: "travela-dev-54075",
  storageBucket: "travela-dev-54075.appspot.com",
  messagingSenderId: "1013125612899"
}

firebase.initializeApp(config)

export default firebase
