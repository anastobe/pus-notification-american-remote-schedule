import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import styles from './TodoScreensStyles'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
import { fetchDataUser } from '../../stores/actions/user.action'
import { useState } from 'react'

//component
import TextInputComponent from "../../components/TextInputComponent"
import Button from "../../components/Button"
import axios from 'axios'

const Login = ({ navigation, user }) => {

  
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  console.log("email==>",email)
  console.log("password==>",password)

  //loader
  const [load, setload] = useState(false)


  
  const emptyfields = () =>{
    setemail("") 
    setpassword("")
  }      

  const checkerror = (e) =>{
   
  }


  const signIn = () => { 

    axios.post('http://todotask.hnhcrm.xyz/api/login', {
      email,
      password
    })
    .then(function (response) {
      console.log("response==>", response.data.data.token)
      if (response.data.success == true) {
        alert(response.data.message)
        navigation.navigate("mainScreen",{ token: response.data.data.token})
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

        <View style={[styles.outerWrapper, { padding: 20 }]}>

        {load &&
        <View style={{ position: 'absolute', flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.2)', zIndex: 999, top: 0, right: 0, left: 0, bottom: 0, alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#000" />
          </View>
          }

          <ScrollView>
            <View>

              <TouchableOpacity onPress={()=> navigation.goBack() } >
               <Icon name={'arrow-back-sharp'} size={25} color="#7C7C7D" />
              </TouchableOpacity>

              <View>
                <Text style={{ fontSize: 30, marginTop: 30 }} > Login</Text>
              </View>

              <View style={{ marginTop: 60 }} >

                <View>
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
                    hideKey="hiddenkey"
                    TextChange={setpassword}
                    value={password}
                    />
                </View>



                <View style={{ alignItems: 'center', marginTop: 60 }} >
                  <Text>Don't Have an Account</Text>
                  <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={{ fontWeight: 'bold', marginTop: 5, }} >Create Account?</Text>
                  </TouchableOpacity>
                </View>

              </View>


            </View>
          </ScrollView>
          <TouchableOpacity onPress={() => signIn()} >
            <Button buttonName="Log In" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}

export default connect(mapStateToProps, null)(Login)
