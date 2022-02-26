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
import styles from "./todoscreenstyle"
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'
import Header from '../../components/Header'
import { Darkblue } from '../../components/Color'

const mainScreen = ({ navigation, route }) => {
  
  // const{token} = route.params
  // console.log("token=>",token)


    return (
    <>
  <StatusBar barStyle="dark-content" backgroundColor={'#f4f4f4'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
         <Header />
        <View style={[styles.outerWrapper,{padding: 20 }]}>
        <ScrollView>
         <View>

          <View style={{ alignItems: 'center', height: 80, justifyContent: 'center' }} >
          <Text style={{ fontSize: 17, color: Darkblue, fontWeight: 'bold' }} >INVENTORY REPORT</Text> 
          </View>

          <View>

          <View style={{ flexDirection: 'row' }} >

           <View style={{ width: 150}} >
             <View style={{ flexDirection: 'row'}} >
              
              <View style={{  flexDirection: 'row', borderColor: "#c9c5c5", borderTopWidth: 1, borderRightWidth: 1, borderLeftWidth: 1,  }} >

              <View style={{ height: 60, width: 60 ,justifyContent: 'center', alignItems: 'center' }} >
               <Text>Game#</Text>
              </View>
               
              <View style={{ height: 60, width: 90, justifyContent: 'center', alignItems: 'center' }} >
               <Text>Game Name</Text>
               </View>

              </View>
             
             </View>

             <View style={{ flexDirection: 'row'}} >
              
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 60 ,justifyContent: 'center', alignItems: 'center' }} >
               <Text>TX-2304</Text>
              </View>
               
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 90, justifyContent: 'center', alignItems: 'center' }} >
               <Text>BREAK THE BANK</Text>
               </View>
             
             </View>           


             <View style={{ flexDirection: 'row'}} >
              
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 60 ,justifyContent: 'center', alignItems: 'center' }} >
               <Text>TX-2399</Text>
              </View>
               
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 90, justifyContent: 'center', alignItems: 'center' }} >
               <Text>LOTERIA</Text>
               </View>
             
             </View> 

             <View style={{ flexDirection: 'row'}} >
              
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 60 ,justifyContent: 'center', alignItems: 'center' }} >
               <Text>TX-7656</Text>
              </View>
               
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 90, justifyContent: 'center', alignItems: 'center' }} >
               <Text>CASHWORD</Text>
               </View>
             
             </View> 



           </View>


           {/* right card commp */}

           {/* <View> */}
             <ScrollView   horizontal={true}  >
            <View style={{ flexDirection: 'row' }} >
              
              <View>
               <View style={{ height: 60, width: 50 ,justifyContent: 'center', alignItems: 'center', borderColor: "#c9c5c5", borderTopWidth: 1, }} >
                <Text>PRICE</Text>
               </View>
               <View>
              
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 50 ,justifyContent: 'center', alignItems: 'center' }} >
               <Text>$5</Text>
              </View>
               
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 50, justifyContent: 'center', alignItems: 'center' }} >
               <Text>$10</Text>
               </View>

               <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 50, justifyContent: 'center', alignItems: 'center' }} >
               <Text>$20</Text>
               </View>
             
             </View> 
              </View>


               
              <View>
               <View style={{height: 60, width: 85 ,justifyContent: 'center', alignItems: 'center', borderColor: "#c9c5c5", borderTopWidth: 1,  }} >
                <Text>PACK #</Text>
               </View>
               <View>
              
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 85 ,justifyContent: 'center', alignItems: 'center' }} >
              <View>
               <Text>3456789</Text>
               <Text>6598789</Text>
               <Text>2315465</Text>
              </View> 
              
              </View>
               
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 85, justifyContent: 'center', alignItems: 'center' }} >
               <View>
               <Text>2312313</Text>
               <Text>2123134</Text>
              </View> 
               </View>

               <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 85, justifyContent: 'center', alignItems: 'center' }} >
               <Text>986545</Text>
               </View>
             
             </View> 
              </View>


              <View>
               <View style={{  height: 60, width: 50 ,justifyContent: 'center', alignItems: 'center', borderColor: "#c9c5c5", borderTopWidth: 1,  }} >
                <Text>OPEN</Text>
               </View>
               <View>
              
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 50 ,justifyContent: 'center', alignItems: 'center' }} >
              <View>
               <Text>001</Text>
               <Text>001</Text>
               <Text>025</Text>
              </View> 
              </View>
               
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 50, justifyContent: 'center', alignItems: 'center' }} >
              <View>
               <Text>001</Text>
               <Text>001</Text>
              </View> 
               </View>

               <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 50, justifyContent: 'center', alignItems: 'center' }} >
               <Text>001</Text>
               </View>
             
             </View> 
              </View>



              <View>
               <View style={{ height: 60, width: 50 ,justifyContent: 'center', alignItems: 'center', borderColor: "#c9c5c5", borderTopWidth: 1,  }} >
                <Text>CLOSE</Text>
               </View>
               <View>
              
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 50 ,justifyContent: 'center', alignItems: 'center' }} >
              <View>
               <Text>001</Text>
               <Text>001</Text>
               <Text>025</Text>
              </View> 
              </View>
               
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 50, justifyContent: 'center', alignItems: 'center' }} >
              <View>
               <Text>075</Text>
               <Text>075</Text>
              </View> 
               </View>

               <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 50, justifyContent: 'center', alignItems: 'center' }} >
               <Text>050</Text>
               </View>
             
             </View> 
              </View>

              <View>
               <View style={{ height: 60, width: 50 ,justifyContent: 'center', alignItems: 'center', borderColor: "#c9c5c5", borderTopWidth: 1,  }} >
                <Text>QTY</Text>
               </View>
               <View>
              
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 50 ,justifyContent: 'center', alignItems: 'center' }} >
              <View>
               <Text>3</Text>
              </View> 
              </View>
               
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 50, justifyContent: 'center', alignItems: 'center' }} >
              <View>
               <Text>3</Text>
              </View> 
               </View>

               <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 50, justifyContent: 'center', alignItems: 'center' }} >
               <Text>1</Text>
               </View>
             
             </View> 
              </View>


              <View>
               <View style={{ height: 60, width: 185 ,justifyContent: 'center', alignItems: 'center', borderColor: "#c9c5c5", borderTopWidth: 1, borderRightWidth: 1,   }} >
                <Text>GAME AMOUNT</Text>
               </View>
               <View>
              
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 185 ,justifyContent: 'center', alignItems: 'center' }} >
              <View style={{ justifyContent: 'center', alignItems: 'center' }} >
               <Text>CLOSE SERIAL X PRICE </Text>
               <Text>CLOSE SERIAL X PRICE </Text>
               <Text>CLOSE SERIAL X PRICE </Text>
              </View> 
              </View>
               
              <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 185, justifyContent: 'center', alignItems: 'center' }} >
              <View>
               <Text>CLOSE SERIAL X PRICE </Text>
               <Text>CLOSE SERIAL X PRICE </Text>
              </View> 
               </View>

               <View style={{ borderColor: "#000", borderWidth: 1 , height: 60, width: 185, justifyContent: 'center', alignItems: 'center' }} >
               <View>
               <Text>CLOSE SERIAL X PRICE </Text>
              </View> 
               </View>
             
             </View> 
              </View>
             
            </View>


                          
             </ScrollView>

           {/* </View> */}



          </View>


          </View>

          <View style={{ flexDirection: 'row', marginTop: 20 }} >
            <View style={{ width: 150 }} >
              {/* <Text>ss</Text> */}
            </View>
            
            <View style={{ width: 150 }} >
              
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 50, alignItems: 'center' ,elevation: 1, borderRadius: 1 }} >
                
                <View>
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: Darkblue }}>TOTAL PACKS</Text>
                </View>
               
               <View style={{ borderLeftWidth: 1, borderColor: "#000", height: 50, width: 40 ,justifyContent: 'center', alignItems: 'center' }} >
               <Text style={{ fontSize: 12, fontWeight: 'bold', color: Darkblue }}>06</Text>
               </View>

              </View> 



              <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 50, alignItems: 'center' ,elevation: 1, borderRadius: 1, marginTop: 20 }} >
                
                <View>
               <Text style={{ fontSize: 12, alignSelf: 'center' , fontWeight: 'bold', color: Darkblue  }} >TOTAL INVENTORY</Text>
               <Text style={{ fontSize: 12, alignSelf: 'center', fontWeight: 'bold', color: Darkblue  }} >AMOUNT</Text>
                </View>
               
               <View style={{ borderLeftWidth: 1, borderColor: "#000", height: 50, width: 40 ,justifyContent: 'center', alignItems: 'center' }} >
               <Text style={{ fontWeight: 'bold', color: Darkblue  }} >$</Text>
               </View>

              </View> 
            
            </View>
          </View>
        
         </View>        
        </ScrollView>
        </View>
      </SafeAreaView>
      </>
  )
}

export default (mainScreen)
