import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBGwuM0IoD9RYfoom2C1R7nCM3X_z4Sqoo",
    authDomain: "gym-application-1ece2.firebaseapp.com",
    databaseURL: "https://gym-application-1ece2.firebaseio.com",
    projectId: "gym-application-1ece2",
    storageBucket: "gym-application-1ece2.appspot.com",
    messagingSenderId: "531584747371"
};

const fire = firebase.initializeApp(config);
export default fire;
