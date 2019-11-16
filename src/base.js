import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCIpaS1g22CL6d7zNV68LjZlnQMXDQFbD4",
    authDomain: "chatbox-app-71385.firebaseapp.com",
    databaseURL: "https://chatbox-app-71385.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base