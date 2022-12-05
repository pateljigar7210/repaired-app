import { View, Text, SafeAreaView, StatusBar, TouchableHighlight } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Address } from '../../../components/Profile/Address';

const ShippingAddress = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <StatusBar barStyle="dark-content" />
      <TouchableHighlight 
        style={tw`ml-6 mt-2 w-8 z-50 absolute top-10`}
        onPress={() => navigation.goBack()}
        underlayColor="#FFFFFF"
        activeOpacity={0.5}
      >
        <Icon 
          name="chevron-left" 
          size={36} 
          color="#282828"
        />
      </TouchableHighlight>

      <View style={tw`flex-1 w-10/12 mt-18 mx-auto`}>
        <Text style={tw`text-3xl font-light mb-12`}>My Shipping Address</Text>
        <Address 
          address='599 Broadway, Apt 23s'
          city='New York, NY, 10009'
          info="My Default Shipping & Billing Address"/>
        <Address 
          address='100 Broadway, Apt 23s'
          city='Brooklyn, NY, 10009'
        />
      </View>

      <View style={tw`bg-[#0D0C0C] absolute bottom-0 w-full`}>
        <TouchableHighlight
          underlayColor="#0D0C0C"
          activeOpacity={0.8}
          style={tw`py-7`}
          onPress={() => navigation.goBack()}
        >
          <Text 
            style={{
              fontFamily: "HelveticaNeueLight",
              fontSize: 24,
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Add New Address
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
}

export default ShippingAddress