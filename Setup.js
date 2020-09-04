import * as React from 'react';
import App from './App';
import firebase from "@react-native-firebase/app";
import Auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";
import messaging from '@react-native-firebase/messaging';

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

const setupCloudMessaging = async () => {
    const token = await messaging().getToken();
    console.log(token);
    //  alert(token);

  };



export {firebase, Auth, database}

const Setup = () => {

    // React.useEffect(async () => {
    //     setupCloudMessaging();
    // }, [])

    return ( <App/> );
}
 
export default Setup;