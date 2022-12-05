import { View, Text, Image, ScrollView, SafeAreaView, StatusBar, TouchableHighlight, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const Promos = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={tw`flex-1 bg-white`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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

          <ScrollView>
            <View style={tw`flex-1 mt-18 w-10/12 mx-auto`}>
              <Text style={tw`text-3xl font-light mb-12`}>Promos</Text>
              <View style={tw`flex-1 self-center mt-12`}>
                <Image
                  source={require('../../../assets/icons/Profile/giftbox.png')}
                  style={tw`w-40 h-52 mx-auto`}
                />
                <TextInput
                  multiline
                  style={tw`text-4xl text-center mt-16`}
                  placeholder="Enter Your Promo 
                  Code Here"
                  placeholderTextColor="#50505A"
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Promos