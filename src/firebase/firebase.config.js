import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoI-StmTc5BJAW9mYkZ80Dkfoi29AxruU",
  authDomain: "govt-service-64d2b.firebaseapp.com",
  projectId: "govt-service-64d2b",
  storageBucket: "govt-service-64d2b.appspot.com",
  messagingSenderId: "227256388518",
  appId: "1:227256388518:web:4e1b7076eaf7921f9f9d67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;