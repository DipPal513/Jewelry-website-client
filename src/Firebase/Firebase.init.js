import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthontication = () => {
  initializeApp(firebaseConfig);
};
export default initializeAuthontication;
