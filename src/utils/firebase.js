import firebase from 'firebase';

const initFirebase = () => {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyD-cyaxsq-GQwhlX0qaLYVTQUHYnpGw5Ac",
        authDomain: "lord-personalities.firebaseapp.com",
        databaseURL: "https://lord-personalities.firebaseio.com",
        projectId: "lord-personalities",
        storageBucket: "lord-personalities.appspot.com",
        messagingSenderId: "418055097239"
    };

    return firebase.initializeApp(config);;
}

module.exports = {
    initFirebase
};
