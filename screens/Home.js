import { View, SafeAreaView, Text, StatusBar, Image, Pressable  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

const Home = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <StatusBar barStyle="dark-content" />
      <View style={tw`flex flex-row justify-between`}>
        <Image source={require("../assets/backgroundImages/Homepage/left.png")} />
        <Image style={tw`mt-8`} source={require("../assets/backgroundImages/Homepage/middle.png")} />
        <Image source={require("../assets/backgroundImages/Homepage/right.png")} />
      </View>
      <View style={tw`mt-12 w-10/12 mx-auto`}>
        <Image source={require("../assets/logo/repaired-logo.png")} />
        <Text style={tw`ml-1 mt-7 text-sm text-[#343339] w-60`}>Put Wings On Your Goals, and don&apos;t hang them in the dreams area</Text>
        <View style={tw`flex flex-row w-16 items-center justify-between ml-1 mt-8`}>
          <View style={tw`w-2.5 h-2.5 bg-[#343339] rounded-full`}></View>
          <View style={tw`w-2 h-2 bg-[#343339]/26 rounded-full`}></View>
          <View style={tw`w-2 h-2 bg-[#343339]/26 rounded-full`}></View>
          <View style={tw`w-2 h-2 bg-[#343339]/26 rounded-full`}></View>
        </View>
      </View>
      <View style={tw`bg-[#0D0C0C] pb-7 pt-4 absolute bottom-0 right-0 left-0`}>
        <Pressable
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={{
            fontFamily: "HelveticaNeueLight",
            fontSize: 24,
            color: "#FFFFFF",
            textAlign: "center",
          }}>Get Started</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Home