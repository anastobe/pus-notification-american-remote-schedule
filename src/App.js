import React,{useEffect,useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RemotePushController from './services/remotePushController';
import { LocalNotification } from './services/localpushcontroler';
import PushNotification, {Importance} from "react-native-push-notification";


const App = () => {


  useEffect(()=>{
    requestUserPermission()
  },[])

  const[FcmToken,setFcmToken] = useState()

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status: ======>', authStatus);
      getToken()
    }
  }

  const getToken = async () => {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        setFcmToken(fcmToken)
        // alert("Push Notifications cone successfully",FcmToken)
      }
    } catch (error) {
      console.log(error, 'error raised in fcm token');
    }

  }
  return (
    <SafeAreaView>
      <View>
        <Text>above code is for push notication</Text>


{/* //for remote push controler means comming from firebase */}
        <RemotePushController />


        <Button title={"Schedule Notification"} onPress={LocalNotification} />


      </View>
    </SafeAreaView>
  );
};

export default App;























// import 'react-native-gesture-handler'
// import React from 'react'
// import {Text}from 'react-native'
// import MainNavigation from './navigation/navigation'
// import { Provider } from 'react-redux'
// import { store } from './stores'

// const App = () => {
//   return (
//     <>
//       <Provider store={store}>
//         <MainNavigation />
//       </Provider>
//     </>
//   )
// }

// export default App


