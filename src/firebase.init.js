// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBXlsYH25G9yaAMBK4BCo-KwTpSulH8Cg",
  authDomain: "genius-car-services-e015e.firebaseapp.com",
  projectId: "genius-car-services-e015e",
  storageBucket: "genius-car-services-e015e.appspot.com",
  messagingSenderId: "603163847911",
  appId: "1:603163847911:web:05780cc2b00e42c61a0642"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;