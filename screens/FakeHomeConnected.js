import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableHighlight, useWindowDimensions, FlatList } from 'react-native'
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { TabView, SceneMap } from 'react-native-tab-view';
import { WatchCard } from '../components/RepairsCard/Watch'
import { RingCard } from '../components/RepairsCard/Ring'
import { NecklaceCard } from '../components/RepairsCard/Necklace'

const FirstRoute = () => (
  <FlatList
    data={[1]}
    renderItem={() => (
      <View style={tw`flex-1 flex flex-col my-10`}>
        <RingCard />
        <NecklaceCard />
        <WatchCard />
      </View>
    )}
    keyExtractor={item => item}
  />
);

const SecondRoute = () => (
  <FlatList
  data={[1]}
  renderItem={() => (
    <View style={tw`flex-1 flex flex-col my-10`}>
      <WatchCard />
    </View>
  )}
  keyExtractor={item => item}
/>
);

const ThirdRoute = () => (
  <FlatList
    data={[1]}
    renderItem={() => (
      <View style={tw`flex-1 flex flex-col my-10`}>
        <RingCard />
        <NecklaceCard />
      </View>
    )}
    keyExtractor={item => item}
  />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});


const FakeHomeConnected = () => {
  const layout = useWindowDimensions();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'All' },
    { key: 'second', title: 'Watches' },
    { key: 'third', title: 'Jewlery' },
  ]);

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <StatusBar barStyle="dark-content" />
      <View style={tw`mt-4 ml-6 flex flex-col`}>
        <Text style={tw`text-3xl font-bold`}>My Repairs</Text>
        <TouchableHighlight
          style={tw`mt-4 bg-gray-200 rounded-lg p-4 mr-6`}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("HomeConnected")}
        >
          <Text style={tw`text-base text-center font-semibold`}>Tap here for the empty home page</Text>
        </TouchableHighlight>
      </View>
      <View style={tw`flex-1`}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={props => (
            <View style={tw`flex-row ml-3`}>
              {props.navigationState.routes.map((route, i) => {
                return (
                  <TouchableHighlight
                    key={i}
                    style={tw`px-4 my-4 ${index === i ? 'border-b border-black' : ''}`}
                    underlayColor="#ffffff"
                    activeOpacity={1}
                    onPress={() => setIndex(i)}
                  >
                    <Text style={tw`text-lg ${index === i ? 'text-black' : 'text-[#979797]'}`}>{route.title}</Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
      </View>
      <View style={tw`relative`}>
        <View style={tw`w-full bg-white flex flex-row justify-between px-10 items-center border-t border-t-[#DADADA] pt-4 z-10`}>
          <TouchableHighlight
            underlayColor={"#ffffff"}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image 
              source={require('../assets/icons/MyRepairs/dots.png')}
              style={tw`w-6 h-6`}
              />
          </TouchableHighlight>
      
          <TouchableHighlight>
            <Image 
              source={require('../assets/icons/MyRepairs/bell.png')}
              style={tw`w-6 h-7`}
              />
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          style={tw`bg-[#2C73D7] rounded-full w-16 h-16 items-center justify-center absolute left-[40.9%] -top-4.5 z-30`}
        >
          <Image 
            source={require('../assets/icons/MyRepairs/plus.png')}
            style={tw`w-16 h-16 absolute bottom-0`}
          />
        </TouchableHighlight>
        <View style={tw`bg-white rounded-full w-17.5 h-16 items-center justify-center absolute left-[40.1%] -top-4.5 z-20`} ></View>
        <View style={tw`bg-white border border-[#DADADA] rounded-full w-17.5 h-17 items-center justify-center absolute left-[40.1%] -top-5.5`} ></View>
      </View>
    </SafeAreaView>
  )
}

export default FakeHomeConnected