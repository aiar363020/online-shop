import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZ1AGIdyxj6JcDeh8zkYhK6MO5P6m2CH8",
  authDomain: "online-shop-7b3fb.firebaseapp.com",
  projectId: "online-shop-7b3fb",
  storageBucket: "online-shop-7b3fb.appspot.com",
  messagingSenderId: "870822725019",
  appId: "1:870822725019:web:9123a5e95f52674de2cd3e",
  measurementId: "G-8HYSL8FCWB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)