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

//icons
import Icon from 'react-native-vector-icons/Ionicons'
import { Darkblue } from './Color'


const Header = ({ navigation, route }) => {
  

    return (
    <View style={{ justifyContent: 'space-around', flexDirection: 'row', height: 80, backgroundColor: Darkblue, alignItems: 'center', borderBottomRightRadius: 25, borderBottomLeftRadius: 25 }} >
        <Text><Icon name={'menu-outline'} size={35} color="#fff" /></Text>
        <Text style={{ color: "#fff", fontSize: 20 }} >BACK OFFICE</Text>
        <Text>.</Text>
    </View>
  )
}

export default (Header)
