import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOfYYAXQU0KlFMY7sGDsU9PPJWQ8Up7bQ",
  authDomain: "dashboard-06.firebaseapp.com",
  projectId: "dashboard-06",
  storageBucket: "dashboard-06.appspot.com",
  messagingSenderId: "183769314289",
  appId: "1:183769314289:web:39b3854a3a959c4e420a50"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);