import 'react-native-gesture-handler'
import React from 'react'
import {Text, Button, View}from 'react-native'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores'
import { LocalNotification } from "./services/localpushcontroler"
import RemotePushController from './services/remotePushController'

const App = () => {

  const handleButtonPress = () =>{
    LocalNotification();
  }

  return (
    <View>
    <Button title="inforn" onPress={handleButtonPress} />
    <RemotePushController />
    </View>
  )
}

export default App


























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


