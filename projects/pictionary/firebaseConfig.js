// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAM2fQch1K3IPO5b72K5xtr1lieW9kuVg0",
    authDomain: "pictionary-game-916df.firebaseapp.com",
    databaseURL: "https://pictionary-game-916df-default-rtdb.firebaseio.com",
    projectId: "pictionary-game-916df",
    storageBucket: "pictionary-game-916df.firebasestorage.app",
    messagingSenderId: "28200460674",
    appId: "1:28200460674:web:40c586ff61cdab06aeef9b"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
