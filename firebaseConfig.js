// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOUmzU0wFL0boPVzf66v55gVeDXBk0c3g",
  authDomain: "codetalks-eaf31.firebaseapp.com",
  projectId: "codetalks-eaf31",
  storageBucket: "codetalks-eaf31.appspot.com",
  messagingSenderId: "195193517472",
  appId: "1:195193517472:web:b28ad3edbf6390d281e0c5",
  databaseURL:"https://codetalks-eaf31-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default app;