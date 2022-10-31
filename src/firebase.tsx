import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAo3QC_kSJMX-uXgyo3CFSYmb498CRsEqg",
    authDomain: "whizzy-software.firebaseapp.com",
    databaseURL: "https://whizzy-software-default-rtdb.firebaseio.com",
    projectId: "whizzy-software",
    storageBucket: "whizzy-software.appspot.com",
    messagingSenderId: "166136141912",
    appId: "1:166136141912:web:b0d7a02f170e7ad002122d"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);