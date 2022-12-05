import { View, Text, Switch, SafeAreaView, StatusBar, TouchableHighlight } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Divider } from '@rneui/themed';

const NotificationsEmail = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

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

      <View style={tw`flex-1 mt-18`}>
        <Text style={tw`text-3xl font-light mb-12 w-10/12 mx-auto`}>Notifications & Email</Text>
        <View style={tw`flex flex-row justify-between items-center mb-4 w-11/12 mx-auto`}>
          <Text style={tw`text-xl font-light`}>Push Notifications</Text>
          <Switch 
            trackColor={{ false: "#FFFFFF", true: "#3e3e3e" }}
            thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
            ios_backgroundColor="#FFFFFF"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Divider style={tw`w-full mb-5`} color="#B8CAEA" />
        <View style={tw`flex flex-row justify-between items-center mb-4 w-11/12 mx-auto`}>
          <Text style={tw`text-xl font-light`}>Email Notifications</Text>
          <Switch 
            trackColor={{ false: "#FFFFFF", true: "#3e3e3e" }}
            thumbColor={isEnabled2 ? "#FFFFFF" : "#f4f3f4"}
            ios_backgroundColor="#FFFFFF"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NotificationsEmail