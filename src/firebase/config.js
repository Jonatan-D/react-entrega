// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCfYFh9S5qUoUdV0zjIMNb8yg5_8BBry5w",
	authDomain: "rj-thebikeshop.firebaseapp.com",
	projectId: "rj-thebikeshop",
	storageBucket: "rj-thebikeshop.appspot.com",
	messagingSenderId: "675195838657",
	appId: "1:675195838657:web:31cf5149150b4bceeef440",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
