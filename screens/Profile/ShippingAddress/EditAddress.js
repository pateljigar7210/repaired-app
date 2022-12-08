import { View, Text, SafeAreaView, StatusBar, TouchableHighlight, TextInput, Keyboard, TouchableWithoutFeedback, Switch } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const EditAddress = () => {
  const navigation = useNavigation();
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
          <Text style={tw`text-3xl font-light mb-16`}>Edit Address</Text>
          <View style={tw`flex flex-col ml-1`}>
            <View style={tw`flex flex-row items-center mb-7`}>
              <Text style={tw`text-[#50505A] w-1/2`}>Issac</Text>
              <Text style={tw`text-[#50505A] w-1/2`}>Sonoda</Text>
            </View>           
            <TextInput
              style={tw`mb-7`}
              placeholder="599 Broadway"
              placeholderTextColor="#50505A"
              onChangeText={text => setAddress(text)}
              value={address}
            />
            <TextInput 
              style={tw`mb-7`}
              placeholder="Apt 23s"
              placeholderTextColor="#50505A"
              onChangeText={text => setAddress2(text)}
              value={address2}
            />
            <TextInput 
              style={tw`mb-7`}
              placeholder="City / Town"
              placeholderTextColor="#50505A"
              onChangeText={text => setCity(text)}
              value={city}
            />
            <TextInput 
              style={tw`mb-7`}
              placeholder="United States"
              placeholderTextColor="#50505A"
              onChangeText={text => setCountry(text)}
              value={country}
            />
            <TextInput 
              style={tw`mb-7`}
              placeholder="10009"
              placeholderTextColor="#50505A"
              onChangeText={text => setZip(text)}
              value={zip}
              keyboardType="phone-pad"
            />
            <TextInput 
              style={tw`mb-7`}
              placeholder="(293) 382-2322"
              placeholderTextColor="#50505A"
              onChangeText={text => setPhoneNum(text)}
              value={phoneNum}
              keyboardType="phone-pad"
            />
          </View>
          <Text style={tw`text-[#C6C6C6] opacity-60 text-[10px]`}>We will only contact you by phone if there is a problem with your order</Text>
          <View style={tw`mt-10`}>
            <View style={tw`flex flex-row justify-between items-center mb-2`}>
              <Text style={tw`text-black font-semibold text-xs`}>Set as my preferred shipping address</Text>
              <Switch 
                trackColor={{ false: "#FFFFFF", true: "#3e3e3e" }}
                thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
                ios_backgroundColor="#FFFFFF"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View style={tw`flex flex-row justify-between items-center`}>
              <Text style={tw`text-black font-semibold text-xs`}>Set as my preferred billing address</Text>
              <Switch 
                trackColor={{ false: "#FFFFFF", true: "#3e3e3e" }}
                thumbColor={isEnabled2 ? "#FFFFFF" : "#f4f3f4"}
                ios_backgroundColor="#FFFFFF"
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
            </View>
          </View>
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
            Save
          </Text>
        </TouchableHighlight>
      </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default EditAddress