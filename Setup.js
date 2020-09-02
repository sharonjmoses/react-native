import * as React from 'react';
import App from './App';
import firebase from "@react-native-firebase/app"
import Auth from "@react-native-firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAAbHzxkq8ggboKiYdPCkOGbzFMc6WDwA0",
    authDomain: "gxdumm.firebaseapp.com",
    databaseURL: "https://gxdumm.firebaseio.com",
    projectId: "gxdumm",
    storageBucket: "gxdumm.appspot.com",
    messagingSenderId: "83893210137",
    appId: "1:83893210137:web:7f5c1c5147f41cdf3d2e88",
    measurementId: "G-Q626B0EBLV"
  };
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase, Auth}

const Setup = () => {
    return ( <App/> );
}
 
export default Setup;