import React,{useEffect, useState} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native'

//components
import TextInputComponent from "../../components/TextInputComponent"
import Button from '../../components/Button'

//icons
import Icon from 'react-native-vector-icons/Ionicons'

//style
import styles from "./TodoScreensStyles"
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'

const SignUp = ({ navigation }) => {

  const [name, setname] = useState("")    
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  //loader
  const [load, setload] = useState(false)

  const signUp = () => { 

    axios.post('http://todotask.hnhcrm.xyz/api/register', {
      name,
      email,
      password
    })
    .then(function (response) {
      console.log("response==>", response.data)
      if (response.data.success == true) {
        alert(response.data.message)
        navigation.navigate("Login")
      } else {
        alert("something Went Wrong There")
      }
    })
    .catch(function (error) {
      alert("catch")
    });

  }


    return (
    <>
  <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>

        <View style={[styles.outerWrapper,{padding: 20 }]}>

        {load &&
        <View style={{ position: 'absolute', flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.2)', zIndex: 999, top: 0, right: 0, left: 0, bottom: 0, alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#000" />
          </View>}

        <ScrollView>
         <View>

         <Icon name={'arrow-back-sharp'} size={25} color="#7C7C7D" />

         <View>
           <Text style={{ fontSize: 30, marginTop: 30 }} >Signup</Text>
         </View>

         <View  style={{ marginTop: 40 }} >

         <View style={{ marginTop: 20 }} >
           <TextInputComponent 
            PlaceHolderHeading="   Enter Name" 
            InputFieldIcons="create-outline"
            PlaceHolderName="  Enter Your Name"
            TextChange={setname}
            value={name}
            />
          </View>

          <View style={{ marginTop: 20 }} >
           <TextInputComponent 
            PlaceHolderHeading="   Enter Email" 
            InputFieldIcons="mail-outline"
            PlaceHolderName="  Enter Your Email"
            TextChange={setemail}
            value={email}
            />
          </View>

          <View style={{ marginTop: 20 }} >
           <TextInputComponent 
             PlaceHolderHeading="   Enter Password" 
            InputFieldIcons="lock-closed-outline" 
            PlaceHolderName="  Enter Your Password"
            TextChange={setpassword}
            value={password}
            />
          </View>

          

          <View style={{ alignItems: 'center', marginTop: 60 }} >
            <Text>Already Exist</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Login") }>
             <Text style={{ fontWeight: 'bold', marginTop: 5,  }} >Go For Login?</Text>
            </TouchableOpacity>
          </View>

        </View>


        
         </View>
        </ScrollView>
        <TouchableOpacity onPress={() =>{ signUp()}}>
           <Button buttonName="Sign Up" />
         </TouchableOpacity>
        </View>
      </SafeAreaView>
      </>
  )
}

export default (SignUp)
