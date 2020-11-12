import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQKl2tbidLmYLKeNL2qNs1X2UzdwSxrEI",
  authDomain: "colecionaveis-fb-vinicius.firebaseapp.com",
  databaseURL: "https://colecionaveis-fb-vinicius.firebaseio.com",
  projectId: "colecionaveis-fb-vinicius",
  storageBucket: "colecionaveis-fb-vinicius.appspot.com",
  messagingSenderId: "570143100201",
  appId: "1:570143100201:web:50b804aced2aa4467c3b38",
  measurementId: "G-XDQY11V54V",
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();
