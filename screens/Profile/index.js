import { View, Text, SafeAreaView, Image, StatusBar, TouchableHighlight, ScrollView } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Divider } from '@rneui/themed';
import { useSelector } from "react-redux";

const Profile = () => {
  const navigation = useNavigation();
  const userData = useSelector((state) => state?.user?.userData?.user);

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
          name="x" 
          size={36} 
          color="#282828"
        />
      </TouchableHighlight>
      <ScrollView>
        <View style={tw`flex-1 items-center w-10/12 mx-auto mt-20`}>
          <Image 
            source={require('../../assets/icons/Profile/profileIcon.png')}
            style={tw`w-40 h-40`}
            />
          <Text style={tw`text-3xl font-bold mt-4`}>Hello,{userData?.name}</Text>

          <View style={tw`flex flex-col items-center mt-14`}>
            <TouchableHighlight 
              onPress={() => navigation.navigate('AccountSettings')}
              underlayColor="#FFFFFF"
              activeOpacity={0.5}
            >
              <View style={tw`flex flex-row items-center mb-4`}>
                <Image 
                  source={require('../../assets/icons/Profile/settings.png')}
                  style={tw`w-5 h-5`}
                  />
                <Text style={tw`text-2xl ml-7`}>My Account Settings</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={() => navigation.navigate('ShippingAddress')}
              underlayColor="#FFFFFF"
              activeOpacity={0.5}
            >
              <View style={tw`flex flex-row items-center mb-4`}>
                <Image 
                  source={require('../../assets/icons/Profile/address.png')}
                  style={tw`w-3 h-5`}
                  />
                <Text style={tw`text-2xl ml-7`}>My Shipping Address</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={() => navigation.navigate('PaymentMethod')}
              underlayColor="#FFFFFF"
              activeOpacity={0.5}
            >
              <View style={tw`flex flex-row items-center mb-4`}>
                <Image 
                  source={require('../../assets/icons/Profile/payment.png')}
                  style={tw`w-5 h-4`}
                  />
                <Text style={tw`text-2xl ml-7`}>My Payment Method</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <Divider style={tw`w-[85%] mx-auto mt-6 mb-10`} color="#B8CAEA" />
        <View style={tw`flex flex-col items-start w-9/12 pl-2 mx-auto mb-34`}>
          <TouchableHighlight 
            onPress={() => navigation.navigate('NotificationsEmail')}
            underlayColor="#FFFFFF"
            activeOpacity={0.5}
          >
            <Text style={tw`text-[#707070] text-lg`}>Notifications & Email</Text>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={() => navigation.navigate('InsurancePolicy')}
            underlayColor="#FFFFFF"
            activeOpacity={0.5}
          >
            <Text style={tw`text-[#707070] text-lg mb-8`}>Insurance Policy</Text>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={() => navigation.navigate('HowWeWork')}
            underlayColor="#FFFFFF"
            activeOpacity={0.5}
          >
            <Text style={tw`text-[#707070] text-lg`}>How we work</Text>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={() => navigation.navigate('CancellationPolicy')}
            underlayColor="#FFFFFF"
            activeOpacity={0.5}
          >
            <Text style={tw`text-[#707070] text-lg`}>Cancellation Policy</Text>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={() => navigation.navigate('ContactUs')}
            underlayColor="#FFFFFF"
            activeOpacity={0.5}
          >
            <Text style={tw`text-[#707070] text-lg mb-8`}>Contact Us</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigation.navigate('Promos')}
            underlayColor="#FFFFFF"
            activeOpacity={0.5}
          >
            <Text style={tw`text-[#707070] text-lg`}>Promos</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigation.navigate('About')}
            underlayColor="#FFFFFF"
            activeOpacity={0.5}
          >
            <Text style={tw`text-[#707070] text-lg`}>About</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>

      <View style={tw`bg-[#B8CAEA] absolute bottom-0 w-full`}>
        <TouchableHighlight
          underlayColor="#DBE5F5"
          activeOpacity={0.9}
          style={tw`py-7`}
        >
          <Text 
            style={{
              fontFamily: "HelveticaNeueMedium",
              fontSize: 18,
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Refer Friends to Get $5 Coupon!
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
}

export default Profile