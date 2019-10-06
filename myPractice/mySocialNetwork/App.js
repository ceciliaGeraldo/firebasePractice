// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLT74TjxtAJjoRJ-DhnMM8uRnq2vs2zAM",
    authDomain: "mysocialnetwork-416d6.firebaseapp.com",
    databaseURL: "https://mysocialnetwork-416d6.firebaseio.com",
    projectId: "mysocialnetwork-416d6",
    storageBucket: "",
    messagingSenderId: "973368051725",
    appId: "1:973368051725:web:4001c49d3f90afbdbfed44",
    measurementId: "G-JM7HH189QL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Get elements of login, all the inputs and buttons

const btnGoogleSignIn = document.getElementById("googleSignIn");
btnGoogleSignIn.addEventListener("click", () => {

    authGoogle();

})

function authGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    authentication(provider);
}

function authentication(provider) {

    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        console.log(error);
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.email;
        console.log(email);
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        console.log(credential);
        // ...
    });
}

