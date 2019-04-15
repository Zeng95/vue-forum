import firebase from 'firebase'
import store from '@/store'

// Initialize Firebase.
const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
}
const app = firebase.initializeApp(config)
const auth = app.auth()
// Get a reference to the database service.
const database = app.database()
// Create an instance of the Google provider object.
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('fetchAuthUser', { id: user.uid })
  }
  // } else {
  //   store.dispatch({ type: 'fetchUser', id: store.state.authId })
  // }
})

export { auth, database, GoogleAuthProvider }