import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDWpfyhG-DyLUtmCON9fGViOCZ_Aswto0Y",
    authDomain: "firebase-hainv.firebaseapp.com",
    databaseURL: "https://hainv.firebaseio.com",
    storageBucket: "firebase-hainv.appspot.com",
    messagingSenderId: "357849259002",
}

firebase.initializeApp(config)
const database = firebase.database()
const storage = firebase.storage()

export { database, storage }
