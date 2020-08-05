import * as firebase from "firebase"; //(Do in cmd not terminal) npm install -g yarn //yarn add firebase


var firebaseConfig = {
  apiKey: "AIzaSyCFvxiVIVCVPNdshVgzfo8EEEde7WCaZGM",
  authDomain: "testfirebase-4f3dc.firebaseapp.com",
  databaseURL: "https://testfirebase-4f3dc.firebaseio.com",
  projectId: "testfirebase-4f3dc",
  storageBucket: "testfirebase-4f3dc.appspot.com",
  messagingSenderId: "444641889904",
  appId: "1:444641889904:web:8138f1d323b4eace8c2eb5",
  measurementId: "G-6G48DL4QGE"
};
// Initialize Firebase

global.user = null;

global.eventloca = null;

if (firebaseConfig.apiKey != undefined && !firebase.inited) {
  firebase.initializeApp(firebaseConfig);
  firebase.inited = true;
}

global.app = null;

global.firebase = firebase,
  global.config = firebaseConfig,

  global.comma = function (num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

export default global;
