import { View, Text, SafeAreaView, StatusBar, TouchableHighlight, TextInput, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Entypo';
import tw from "twrnc";
import CInput from '../components/CInput';
import { useForm } from 'react-hook-form';
import { mediumRegex } from '../utils';


const ResetPassword = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' })

  const onSubmit = data => {
    if (isValid) {
      console.log('data-->', data);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate("SignIn")
      }, 1000);
      // navigation.navigate("SignIn")
    }
  }

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
          }}>Reset Password</Text>
          <View style={tw`w-14`}></View>
        </View>
        <View style={tw`flex-1 flex justify-center mb-16`}>
          {/* <TextInput
            style={tw`bg-[#F2F5F8] mt-8 px-4 rounded-[10px] text-base mx-auto w-11/12 h-12`}
            placeholder="New Password"
            secureTextEntry={true}
            placeholderTextColor="#989898"
          /> */}



          <CInput
            style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-base mx-auto w-11/12 h-12`}
            control={control}
            isPassword={true}
            name={'password'}
            placeholder="New Password"
            placeholderTextColor="#989898"
            isRequired={true}
            requiredMsg="Password is required!"
            error={errors?.password?.message}
            pattern={mediumRegex}
            patternMsg={'Password must be strong'}
          />

          <CInput
            style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-base mx-auto w-11/12 h-12`}
            control={control}
            isPassword={true}
            name={'cpassword'}
            placeholder="Confirm Password"
            placeholderTextColor="#989898"
            isRequired={true}
            requiredMsg="Confirm password is required!"
            error={errors?.cpassword?.message}
            pattern={mediumRegex}
            patternMsg={'Password must be strong'}
            validate={value => value === getValues('password') || 'Confirm password is not correct'}
          />

          {/* <TextInput
            style={tw`bg-[#F2F5F8] mt-4 px-4 rounded-[10px] text-base mx-auto w-11/12 h-12`}
            placeholder="Confirm Password"
            placeholderTextColor="#989898"
            secureTextEntry={true}
          /> */}
          <View style={tw`mt-6 flex flex-row justify-between w-11/12 mx-auto`}>
            <TouchableHighlight
              style={tw`bg-black px-4 py-4 rounded-full mx-auto w-full`}
              underlayColor="#282727"
              activeOpacity={0.7}
              // onPress={() => navigation.navigate("SignIn")}
              onPress={handleSubmit(onSubmit)}
              disabled={isLoading}
            >

              {isLoading ?
                <ActivityIndicator />
                :
                <Text style={tw`text-sm text-white text-center font-semibold`}>Reset Password</Text>
              }


            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default ResetPassword