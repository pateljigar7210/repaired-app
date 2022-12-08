import { View, Text, SafeAreaView, Image, StatusBar, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native';
import { Switch } from 'react-native';

const SecondStep = ({}) => {
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
    <SafeAreaView style={tw`bg-[#ffffff] flex-1`}>
      <StatusBar barStyle="dark-content" />
      <TouchableHighlight 
        style={tw`ml-8 mt-2 w-8 z-50 absolute top-10`}
        onPress={() => navigation.goBack()}
        underlayColor="transparent"
        activeOpacity={0.5}
      >
        <Icon 
          name="chevron-thin-left" 
          size={26} 
          color="#282828"
        />
      </TouchableHighlight>
      <ScrollView>
        <View style={tw`flex-1 my-20`}>
          <View style={tw`flex-row justify-between relative`}>
            <Text style={tw`text-3xl font-light w-42 ml-8`}>Where Shall We Ship?</Text>
            <Image 
              source={require("../../../../../assets/icons/NewRepairs/box1.png")}
              style={tw`w-12 h-20 absolute -top-10 right-20`}
            />
            <Image 
              source={require("../../../../../assets/icons/NewRepairs/box2.png")}
              style={tw`w-6 h-10 absolute top-10 right-10`}
            />
            <Image 
              source={require("../../../../../assets/icons/NewRepairs/box3.png")}
              style={tw`w-7 h-10 absolute top-15 right-20`}
            />
          </View>
          <View style={tw`mt-12 flex flex-col w-10/12 mx-auto`}>
            <View style={tw`flex-row justify-between`}>
              <TextInput
                style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-[16px] mx-auto w-1/2 h-12 mr-4 mb-4`}
                placeholder="Isaac"
                placeholderTextColor="#50505A"
                onChangeText={text => setAddress(text)}
                value={address}
              />
              <TextInput
                style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-[16px] mx-auto w-1/2 h-12 mb-4`}
                placeholder="Sonoda"
                placeholderTextColor="#50505A"
                onChangeText={text => setAddress(text)}
                value={address}
              />
            </View>
            <TextInput
              style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-[16px] mx-auto w-full h-12 mb-4`}
              placeholder="599 Broadway"
              placeholderTextColor="#50505A"
              onChangeText={text => setAddress(text)}
              value={address}
            />
            <TextInput 
              style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-[16px] mx-auto w-full h-12 mb-4`}
              placeholder="Apt 23s"
              placeholderTextColor="#50505A"
              onChangeText={text => setAddress2(text)}
              value={address2}
            />
            <TextInput 
              style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-[16px] mx-auto w-full h-12 mb-4`}
              placeholder="City / Town"
              placeholderTextColor="#50505A"
              onChangeText={text => setCity(text)}
              value={city}
            />
            <TextInput 
              style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-[16px] mx-auto w-full h-12 mb-4`}
              placeholder="United States"
              placeholderTextColor="#50505A"
              onChangeText={text => setCountry(text)}
              value={country}
            />
            <TextInput 
              style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-[16px] mx-auto w-full h-12 mb-4`}
              placeholder="10009"
              placeholderTextColor="#50505A"
              onChangeText={text => setZip(text)}
              value={zip}
              keyboardType="phone-pad"
            />
            <TextInput 
              style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-[16px] mx-auto w-full h-12 mb-4`}
              placeholder="(293) 382-2322"
              placeholderTextColor="#50505A"
              onChangeText={text => setPhoneNum(text)}
              value={phoneNum}
              keyboardType="phone-pad"
            />
          </View>
          <View style={tw`w-10/12 mx-auto mt-4`}>
            <Text style={tw`text-[#C6C6C6] opacity-60 text-[10px]`}>We will only contact you by phone if there is a problem with your order</Text>
            <View style={tw`mt-4`}>
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
        </View>
      </ScrollView>
      <View style={tw`bg-[#0D0C0C] absolute bottom-0 w-full`}>
        <TouchableHighlight
          underlayColor="transparent"
          activeOpacity={0.9}
          style={tw`py-7 bg-[#0D0C0C] w-full`}
          onPress={() => navigation.navigate("ThirdStep")}
        >
          <Text 
            style={{
              fontFamily: "HelveticaNeueLight",
              fontSize: 24,
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Next
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
}

export default SecondStep