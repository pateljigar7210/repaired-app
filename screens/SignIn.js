import { useContext, useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableHighlight, TextInput, TouchableWithoutFeedback, Keyboard, ActivityIndicator, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Entypo';
import { Divider } from '@rneui/themed';
import tw from "twrnc";
import { user } from '../screens/api';
import CInput from '../components/CInput';
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux";
import { showMessage, } from "react-native-flash-message";
import { Button } from 'react-native';
import { emailPattern, mediumRegex } from '../utils';
import { UserTypes } from '../redux/reducers/user/UserTypes';
import { AuthContext } from './context';


const SignInTab = ({ title, isUserTab, control, errors }) => {

  // email, password, isVendor

  return (
    <View style={tw`mt-8`}>
      <Text style={tw`ml-4 text-[#707070] text-base font-semibold w-11/12 leading-[26px]`}>{title}</Text>
      <View style={tw`mt-8 flex flex-col`}>
        <CInput
          style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-base mx-auto w-11/12 h-12 mb-4`}
          control={control}
          name={'email'}
          placeholder="Email"
          keyboardType='email-address'
          placeholderTextColor="#989898"
          isRequired={true}
          requiredMsg="Email is required!"
          error={errors?.email?.message}
          pattern={emailPattern}
          patternMsg={'Email is invalid format'}
        />

        <CInput
          style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-base mx-auto w-11/12 h-12`}
          control={control}
          isPassword={true}
          name={'password'}
          placeholder="Password"
          placeholderTextColor="#989898"
          isRequired={true}
          requiredMsg="Password is required!"
          error={errors?.password?.message}
          pattern={mediumRegex}
          patternMsg={'Password must be strong'}
        />

        {/* <Button title='Submit' onPress={handleSubmit(onSubmit)} />
        <TextInput
          style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-base mx-auto w-11/12 h-12 mb-4`}
          placeholder="Email"
          keyboardType='email-address'
          placeholderTextColor="#989898"
        />
        <View style={tw`flex flex-row items-center relative`}>
          <TextInput
            style={tw`bg-[#F2F5F8] px-4 rounded-[10px] text-base mx-auto w-11/12 h-12`}
            placeholder="Password"
            placeholderTextColor="#989898"
            secureTextEntry={passwordVisible}
          />
          <TouchableHighlight
            style={tw`absolute right-8`}
            onPress={() => setPasswordVisible(!passwordVisible)}
            underlayColor="#FFFFFF"
            activeOpacity={0.5}
          >
            <Icon
              name={passwordVisible ? "eye-with-line" : "eye"}
              size={20}
              color="#989898"
            />
          </TouchableHighlight>
        </View> */}
      </View>
      {isUserTab && (
        <View style={tw`mt-10 flex flex-row justify-between w-11/12 mx-auto`}>
          <TouchableHighlight
            style={tw`bg-[#3D82F0] px-4 py-4 rounded-full mx-auto w-full`}
            underlayColor="#5e99f7"
            activeOpacity={0.7}
          >
            <Text style={tw`text-sm text-white text-center`}>Sign In with Facebook</Text>
          </TouchableHighlight>
        </View>
      )}
    </View>
  )
}


const SignIn = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [userTab, setUserTab] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  // const [isVendor, setIsVendor] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [email, setEmail] = useState("triplebigbeats@gmail.com");
  // const [password, setPassword] = useState("Helloworld1");


  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' })

  const onSubmit = data => {
    if (isValid) {
      console.log('data-->', data);
      setIsLoading(true);
      user.login(data.email, data.password, !userTab)
        .then((data) => {
          dispatch({
            type: UserTypes.USER_DATA,
            payload: data,
          });
          setInterval(() => {
            setIsLoading(false);
            navigation.navigate("HomeConnected")
          }, 200);


        })
        .catch(error => {
          console.log("==error", error);
          setIsLoading(false);
          showMessage({
            message: error.message,
            type: "danger",
          });
        });
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={tw`bg-white flex-1`}>
        <StatusBar barStyle="dark-content" />
        <TouchableHighlight
          style={tw`ml-5 mt-2 w-8`}
          onPress={() => navigation.navigate("Home")}
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
          }}>Sign In</Text>

        </View>

        <View style={tw`mt-10 ml-4 flex flex-row justify-between w-40`}>
          <TouchableHighlight
            onPress={() => {
              reset()
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
              reset()
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
          <SignInTab isUserTab={userTab} control={control} errors={errors} title="“ I want my jewelries or watches to be repaired. ”" />
          :
          <SignInTab control={control} errors={errors} title="“ I am a vendor and I can repair jewelries and watches. ”" />
        }
        <View style={tw`absolute bottom-0 w-full`}>
          <View style={tw`flex flex-row mb-2 ml-4`}>
            <Text style={tw`text-[#C6C6C6] mr-2`}>Not a member yet ?</Text>
            <TouchableHighlight
              onPress={() => navigation.navigate("SignUp")}
              underlayColor="#FFFFFF"
              activeOpacity={0.3}
            >
              <Text style={tw`text-[#50505A] ml-1`}>Sign Up</Text>
            </TouchableHighlight>
          </View>
          <View style={tw`flex flex-row ml-4`}>
            <Text style={tw`text-[#C6C6C6] mr-2`}>Forgot Password ?</Text>
            <TouchableHighlight
              onPress={() => navigation.navigate("ResetPassword")}
              underlayColor="#FFFFFF"
              activeOpacity={0.3}
            >
              <Text style={tw`text-[#50505A] ml-[11px]`}>Reset Password</Text>
            </TouchableHighlight>
          </View>
          <View style={tw`bg-[#0D0C0C] pb-7 pt-4 mt-4 w-full`}>
            <TouchableOpacity
              disabled={isLoading}
              onPress={handleSubmit(onSubmit)}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'center', height: 36 }}>
                {isLoading ? <ActivityIndicator /> : <Text style={{
                  fontFamily: "HelveticaNeueLight",
                  fontSize: 24,
                  color: "#FFFFFF",
                  textAlign: "center",
                }}>Sign In</Text>}

              </View>


            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default SignIn