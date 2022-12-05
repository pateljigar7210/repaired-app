import { View, Text, TouchableWithoutFeedback, Keyboard, SafeAreaView, StatusBar, TouchableHighlight, TextInput, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from 'react-native-element-dropdown';
import {countries as countriesList} from '../assets/data/countries';

const PhoneVerification = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={tw`bg-white flex-1`}>
        <StatusBar barStyle="dark-content" />
        <View style={tw`flex flex-row justify-between items-center border-b border-b-[#D8D8D8] pb-4`}>
          <TouchableHighlight  
            style={tw`ml-5 mt-2 w-8`}
            onPress={() => navigation.goBack()}
            underlayColor="#FFFFFF"
            activeOpacity={0.5}
          >
            <Icon 
              name="chevron-thin-left" 
              size={24} 
              color="#282828"
            />
          </TouchableHighlight>
          <Text style={{
            fontFamily: "HelveticaNeueLight",
            fontSize: 15,
            color: "#50505A",
            textTransform: "uppercase",
            marginTop: 7,
          }}>Your Phone</Text>
          <View style={tw`w-14`}></View>
        </View>

        <View style={tw`flex-1 flex justify-center`}>
          <Text style={tw`text-[#989898] ml-6 text-sm w-8/12`}>Enter your phone number and we will send you a confirmation code.</Text>
          <View style={tw`mt-8 flex flex-col`}>
            {/* <TextInput 
              style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-base mx-auto w-11/12 h-12 mb-4`}
              placeholder="Country"
              placeholderTextColor="#989898"
            /> */}
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={countriesList}
              maxHeight={280}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Country' : '...'}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
            <TextInput 
              style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-base mx-auto w-11/12 h-12 mb-4`}
              placeholder="Phone Number"
              placeholderTextColor="#989898"
              keyboardType="phone-pad"
            />
          </View>
        </View>
        <View style={tw`bg-[#0D0C0C] pb-7 pt-4 absolute bottom-0 right-0 left-0`}>
        <Pressable
          onPress={() => navigation.navigate("ConfirmationCode")}
        >
          <Text style={{
            fontFamily: "HelveticaNeueLight",
            fontSize: 24,
            color: "#FFFFFF",
            textAlign: "center",
          }}>Next</Text>
        </Pressable>
      </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default PhoneVerification

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#F2F5F8',
    width: '91.666667%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  placeholderStyle: {
    fontSize: 16,
    paddingHorizontal: 8,
    color: '#989898',
  },
  selectedTextStyle: {
    fontSize: 16,
    paddingHorizontal: 8,
  },
});