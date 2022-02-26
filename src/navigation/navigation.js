import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

//screens
import Login from '../screens/Auth/Login'
import SignUp from '../screens/Auth/SignUp'
import mainScreen from '../screens/TodoScreens/mainScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => {
//             return <Icon name={'ios-home'} size={25} color={color} />
//           }
//         }}
//       />
//     </Tab.Navigator>
//   )
// }

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen
          name="HomeBase"
          options={{ headerShown: false }}
          component={MyTabs}
        /> */}
          <Stack.Screen
            name="mainScreen"
            options={{ headerShown: false }}
            component={mainScreen}
          />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUp}
        />


        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
