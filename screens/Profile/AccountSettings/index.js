import { View, Text, SafeAreaView, Image, StatusBar, TouchableHighlight, ScrollView } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const AccountSettings = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-[#F7F7FC] flex-1`}>
      <StatusBar barStyle="dark-content" />
      <TouchableHighlight 
        style={tw`ml-8 mt-2 w-8 z-50 absolute top-10`}
        onPress={() => navigation.goBack()}
        underlayColor="#FFFFFF"
        activeOpacity={0.5}
      >
        <Icon 
          name="chevron-thin-left" 
          size={26} 
          color="#282828"
        />
      </TouchableHighlight>
      <ScrollView>
        <View style={tw`flex-1 items-center w-10/12 mx-auto mt-20 relative`}>
          <Image 
            source={require('../../../assets/icons/Profile/profileIcon.png')}
            style={tw`w-40 h-40`}
          />
          <Image 
            source={require('../../../assets/icons/Profile/edit.png')}
            style={tw`w-10 h-10 absolute top-28 left-20`}
          />
        </View>
        <View style={tw`flex flex-col items-center mt-14`}>
          <View style={tw`bg-white flex flex-row items-center justify-between w-full px-7 py-3 border-b border-b-gray-200`}>
            <View>
              <Text style={tw`text-xs text-[#C6C6C6] mb-0.5`}>First Name</Text>
              <Text style={tw`text-lg text-[#50505A]`}>Isaac</Text>
            </View>
            <Icon 
              name="chevron-thin-right"
              size={20}
              color="#C6C6C6"
            />
          </View>
          <View style={tw`bg-white flex flex-row items-center justify-between w-full px-7 py-3 border-b border-b-gray-200`}>
            <View>
              <Text style={tw`text-xs text-[#C6C6C6] mb-0.5`}>Last Name</Text>
              <Text style={tw`text-lg text-[#50505A]`}>Sonoda</Text>
            </View>
            <Icon 
              name="chevron-thin-right"
              size={20}
              color="#C6C6C6"
            />
          </View>
          <View style={tw`bg-white flex flex-row items-center justify-between w-full px-7 py-3 border-b border-b-gray-200`}>
            <View>
              <Text style={tw`text-xs text-[#C6C6C6] mb-0.5`}>Email</Text>
              <Text style={tw`text-lg text-[#50505A]`}>Isaac@gmail.com</Text>
            </View>
              <Icon 
                name="chevron-thin-right"
                size={20}
                color="#C6C6C6"
              />
            </View>
            <TouchableHighlight
              style={tw`w-full`}
              underlayColor="#FFFFFF"
              activeOpacity={0.5}
              onPress={() => navigation.navigate('PhoneNumber')}
            >
              <View style={tw`bg-white flex flex-row items-center justify-between w-full px-7 py-3 border-b border-b-gray-200`}>
                <View>
                  <Text style={tw`text-xs text-[#C6C6C6] mb-0.5`}>Phone Number</Text>
                  <Text style={tw`text-lg text-[#50505A]`}>(392)349-3029</Text>
                </View>
                <Icon 
                  name="chevron-thin-right"
                  size={20}
                  color="#C6C6C6"
                />
              </View>
            </TouchableHighlight>
            <View style={tw`bg-white flex flex-row items-center justify-between w-full px-7 py-3 border-b border-b-gray-200`}>
              <View>
                <Text style={tw`text-xs text-[#C6C6C6] mb-0.5`}>Password</Text>
                <Text style={tw`text-lg text-[#50505A]`}>••••••</Text>
              </View>
              <Icon 
                name="chevron-thin-right"
                size={20}
                color="#C6C6C6"
                />
            </View>
        </View>
      </ScrollView>

      <View style={tw`bg-[#0D0C0C] absolute bottom-0 w-full`}>
        <TouchableHighlight
          underlayColor="#ffffff"
          activeOpacity={0.9}
          style={tw`py-7`}
        >
          <Text 
            style={{
              fontFamily: "HelveticaNeueLight",
              fontSize: 24,
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Sign Out
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
}

export default AccountSettings