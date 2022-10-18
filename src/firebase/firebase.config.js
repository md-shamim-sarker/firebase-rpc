import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC7gMXOnGHUpgAZDxhbq3iidAi8Pwoel_k",
    authDomain: "fir-rpc-155bb.firebaseapp.com",
    projectId: "fir-rpc-155bb",
    storageBucket: "fir-rpc-155bb.appspot.com",
    messagingSenderId: "744801996598",
    appId: "1:744801996598:web:c8e0ad42980dbc8dbead97"
};

const app = initializeApp(firebaseConfig);

export default app;