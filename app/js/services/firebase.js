import firebase from 'firebase'

export const config = {
  apiKey: "AIzaSyDIP6nws3fjlgmUu59cosH7OuGDq2P_OKY",
  authDomain: "travelar-facebook-auth-poc.firebaseapp.com",
  databaseURL: "https://travelar-facebook-auth-poc.firebaseio.com",
  projectId: "travelar-facebook-auth-poc",
  storageBucket: "travelar-facebook-auth-poc.appspot.com",
  messagingSenderId: "859583394649"
}

firebase.initializeApp(config)

export default firebase
