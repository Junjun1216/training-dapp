import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAZf3JVCfK1P0e4XDS9eynwUjEtj9Q2efI",
    authDomain: "dapp-training-275b0.firebaseapp.com",
    projectId: "dapp-training-275b0",
    storageBucket: "dapp-training-275b0.appspot.com",
    messagingSenderId: "18018275177",
    appId: "1:18018275177:web:2c32410fb7c2c91e3177f8",
    measurementId: "G-Y9R7WV13E4"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;