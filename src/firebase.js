import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDELJCR__hEUx-Oj7QVriSbRBOWEpYABfk",
  authDomain: "auth-36b34.firebaseapp.com",
  projectId: "auth-36b34",
  storageBucket: "auth-36b34.appspot.com",
  messagingSenderId: "586536970510",
  appId: "1:586536970510:web:19a9a0a4f8e8c8c68d0f5f",
  measurementId: "G-RDZ392W12T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)