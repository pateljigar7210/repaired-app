import { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableHighlight, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Entypo';
import { Divider } from '@rneui/themed';
import tw from "twrnc";

const SignUpTab = ({ title, isUserTab }) => {
  return (
    <View style={tw`mt-8`}>
      <Text style={tw`ml-4 text-[#707070] text-[16px] font-semibold w-11/12 leading-[26px]`}>{title}</Text>
      <View style={tw`mt-8 flex flex-col`}>
        <TextInput 
          style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-[16px] mx-auto w-11/12 h-12 mb-4`}
          placeholder="Name"
          placeholderTextColor="#989898"
        />
        <TextInput 
          style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-[16px] mx-auto w-11/12 h-12 mb-4`}
          placeholder="Email"
          keyboardType='email-address'
          placeholderTextColor="#989898"
        />
        <TextInput 
          style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-[16px] mx-auto w-11/12 h-12`}
          placeholder="Password"
          placeholderTextColor="#989898"
          secureTextEntry={true}
        />
      </View>
      {isUserTab && ( 
        <View style={tw`mt-10 flex flex-row justify-between w-11/12 mx-auto`}>
          <TouchableHighlight
            style={tw`bg-[#3D82F0] px-4 py-4 rounded-full mx-auto w-full`}
            underlayColor="#5e99f7"
            activeOpacity={0.7}
          >
            <Text style={tw`text-sm text-white text-center`}>Sign Up with Facebook</Text>
          </TouchableHighlight>
        </View>
      )}
    </View>
  )
}


const SignUp = () => {
  const navigation = useNavigation();
  const [userTab, setUserTab] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={tw`bg-white flex-1`}>
      <StatusBar barStyle="dark-content" />
        <TouchableHighlight 
          style={tw`ml-5 mt-2 w-8`}
          onPress={() => navigation.goBack()}
          underlayColor="#FFFFFF"
          activeOpacity={0.5}
        >
          <Icon 
            name="chevron-thin-left" 
            size={28} 
            color="#282828"
          />
        </TouchableHighlight>
        <View style={tw`m-7`}>
          <Text style={{
            fontFamily: "HelveticaNeueLight",
            fontSize: 32,
            color: "#000000",
          }}>Sign Up</Text>
        </View>

        <View style={tw`mt-10 ml-4 flex flex-row justify-between w-40`}>
          <TouchableHighlight 
            onPress={() => {
              setUserTab(true);
            }}
            underlayColor="#FFFFFF"
            activeOpacity={0.3}
          >
            <Text 
              style={{
                fontFamily: "HelveticaNeueMedium",
                fontSize: 16,
                color: userTab ? "#000000" : "#C6C6C6",
              }}
            >USER</Text>
          </TouchableHighlight>
          <Divider color='#000000' orientation="vertical" />
          <TouchableHighlight 
            onPress={() => {
              setUserTab(false);
            }}
            underlayColor="#FFFFFF"
            activeOpacity={0.3}
          >
            <Text 
              style={{  
                fontFamily: "HelveticaNeueMedium",
                fontSize: 16,
                color: userTab ? "#C6C6C6" : "#000000",
              }}
            >VENDOR</Text>
          </TouchableHighlight>
        </View>
        {userTab ? 
          <SignUpTab isUserTab={userTab} title="“ I want my jewelries or watches to be repaired. ”"/>
          : 
          <SignUpTab title="“ I am a vendor and I can repair jewelries and watches. ”"/>
        }
        <View style={tw`absolute bottom-0 w-full`}>
          <View style={tw`flex flex-row mb-2 ml-4`}>
            <Text style={tw`text-[#C6C6C6] mr-2`}>Already a member ?</Text>
            <TouchableHighlight
              onPress={() => navigation.navigate("SignIn")}
              underlayColor="#FFFFFF"
              activeOpacity={0.3}
            >
              <Text style={tw`text-[#50505A] ml-1`}>Sign In</Text>
            </TouchableHighlight>
          </View>
          <View style={tw`bg-[#0D0C0C] pb-7 pt-4 mt-4 w-full`}>
            <TouchableHighlight
              onPress={() => navigation.navigate("PhoneVerification")}
            >
              <Text style={{
                fontFamily: "HelveticaNeueLight",
                fontSize: 24,
                color: "#FFFFFF",
                textAlign: "center",
              }}>Sign Up</Text>
            </TouchableHighlight>
          </View>
        </View>
    </SafeAreaView>
  </TouchableWithoutFeedback>
  )
}

export default SignUp