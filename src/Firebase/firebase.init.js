import { initializeApp } from "firebase/app";
import firebaseConfig from "./firrebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;