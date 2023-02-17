import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableHighlight,
  ScrollView,
  Alert,
} from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/Entypo";
// import { useNavigation } from '@react-navigation/native';
// import { useSelector } from "react-redux";
import { retrieve } from "../../../utils";
import { User, Media } from "../../api";
// import { AuthContext } from "../../context";
import { AuthContext } from "../../context";
import { InstagramLikePicker } from "../../../components/picker-master";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { TextInput } from "react-native-gesture-handler";
import { useForm } from "react-hook-form";
import CInput from "../../../components/CInput";
import CInput1 from "../../../components/CInput1";
import { UserTypes } from "../../../redux/reducers/user/UserTypes";
const AccountSettings = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.user?.userData);
  const [avatar, setAvatar] = useState({}); // updated by camera button
  // const { signOut } = useContext(AuthContext);
  const [ogAvatar, setOgAvatar] = useState(null); // remains unchanged to check if avatar state has been edited
  const [imageSelector, setImageSelector] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [ogName, setOgName] = useState("");
  const[oglname, setoglName ] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    refresh();
  }, [imageSelector]);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = async () => {
    const u = userData?.user;
    setAvatar(u.avatar_img);
    setOgAvatar(u.avatar_img);
    console.log("set avaar", u.avatar_img);
  };

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    // setValue([{ email: "userData.name" }]);
    setValue("name",userData?.user?.name, {shouldValidate: true});
    setValue("lname",userData?.user?.lname, {shouldValidate: true});
    //setValue("lname", "Hello", { shouldValidate: true });
  }, []);

  const onSelectImage = (data) => {
    console.log("onSelectImage =>", data);
  };

  const onCropped = (data) => {
    console.log("onCropped =>", data);
    setImageSelector(false);
  };

  const onClose = () => {
    console.log("onClose");
    setImageSelector(false);
  };

  const signOut = () => {
    dispatch({
      type: UserTypes.LOGOUT,
    });
  };

  const onSubmit = async () => {
    try {
      setIsLoading(true);

      let data = {};

      if (ogAvatar !== avatar) {
        const { row } = await Media.uploadOne(avatar);
        data.avatar_img = row.secure_url;
      }
      if (ogName !== name) data.name = name;
      

      const { message = "Profile successfully updated!" } =
        await User.updateProfile(data);

      await fetchUser();

      setIsLoading(false);
      toast.show({ description: message });
    } catch (error) {
      setIsLoading(false);
      alert("Error updating profile!");
    }
  };

  const handleChange = (img) => setAvatar(img);
  return (
    <SafeAreaView style={tw`bg-[#F7F7FC] flex-1`}>
      {imageSelector ? (
        <InstagramLikePicker
          onClose={() => onClose()}
          onCropped={(croppedUri) => onCropped(croppedUri)}
          onSelectImage={(result) => onSelectImage(result)}
          headerTitle="Last Post"
        />
      ) : (
        <>
          <StatusBar barStyle="dark-content" />
          <TouchableHighlight
            style={tw`ml-8 mt-2 w-8 z-50 absolute top-10`}
            onPress={() => navigation.goBack()}
            underlayColor="#FFFFFF"
            activeOpacity={0.5}
          >
            <Icon name="chevron-thin-left" size={26} color="#282828" />
          </TouchableHighlight>

          <TouchableHighlight
            style={tw`ml-80 mt-3 w-8 z-50 absolute top-10`}
            underlayColor="#FFFFFF"
            activeOpacity={0.5}
            onPress={onSubmit}
            isLoading={isLoading}
          
          >
            <Text>Save</Text>
          </TouchableHighlight>

          <ScrollView>
            <View
              style={tw`flex-1 items-center w-10/12 mx-auto mt-20 relative`}
            >
              <Image
                // source={require('../../../assets/icons/Profile/profileIcon.png')}
                source={{
                  uri: typeof avatar === "string" ? avatar : avatar.uri,
                }}
                style={tw`w-40 h-40`}
              />
              <TouchableHighlight
                style={tw`ml-8 mt-2 w-8 z-50 absolute top-10`}
                onPress={() => setImageSelector(true)}
                underlayColor="#FFFFFF"
                activeOpacity={0.5}
              >
                <Image
                  source={require("../../../assets/icons/Profile/edit.png")}
                  style={tw`w-10 h-10 absolute top-28 left-20`}
                />
              </TouchableHighlight>
            </View>
            <View style={tw`flex flex-col items-center mt-14`}>
              <CInput1
               title="First Name"
               style={tw`text-lg text-[#50505A] mb-0.5 `}
               control={control}
               name={"name"}
               placeholder=" First Name"
               placeholderTextColor="#989898"
               isRequired={true}
               requiredMsg="First Name is required!"
               error={errors?.name?.message}
              />

              <CInput1
                title="Last Name"
                style={tw`text-lg text-[#50505A] mb-0.5 `}
                control={control}
                name={"lname"}
                placeholder=" Last Name"
                placeholderTextColor="#989898"
                isRequired={true}
                requiredMsg="Last Name is required!"
                error={errors?.lname?.message}

              />

              <View
                style={tw`bg-white flex flex-row items-center justify-between w-full px-7 py-3 border-b border-b-gray-200`}
              >
                <View>
                  <Text style={tw`text-xs text-[#C6C6C6] mb-0.5`}>Email</Text>
                  <Text style={tw`text-lg text-[#50505A]`}>
                    {userData?.user?.email}
                  </Text>
                </View>
                <Icon name="chevron-thin-right" size={20} color="#C6C6C6" />
              </View>
              <TouchableHighlight
                style={tw`w-full`}
                underlayColor="#FFFFFF"
                activeOpacity={0.5}
                onPress={() => navigation.navigate("PhoneNumber")}
              >
                <View
                  style={tw`bg-white flex flex-row items-center justify-between w-full px-7 py-3 border-b border-b-gray-200`}
                >
                  <View>
                    <Text style={tw`text-xs text-[#C6C6C6] mb-0.5`}>
                      Phone Number
                    </Text>
                    <Text style={tw`text-lg text-[#50505A]`}>
                      {userData?.user?.phone}
                    </Text>
                  </View>
                  <Icon name="chevron-thin-right" size={20} color="#C6C6C6" />
                </View>
              </TouchableHighlight>
              <View
                style={tw`bg-white flex flex-row items-center justify-between w-full px-7 py-3 border-b border-b-gray-200`}
              >
                <View>
                  <Text style={tw`text-xs text-[#C6C6C6] mb-0.5`}>
                    Password
                  </Text>
                  <Text style={tw`text-lg text-[#50505A]`}>••••••</Text>
                </View>
                <Icon name="chevron-thin-right" size={20} color="#C6C6C6" />
              </View>
            </View>
          </ScrollView>

          <View style={tw`bg-[#0D0C0C] absolute bottom-0 w-full`}>
            <TouchableHighlight
              underlayColor="#ffffff"
              activeOpacity={0.9}
              style={tw`py-7`}
              onPress={signOut}
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
        </>
      )}
    </SafeAreaView>
  );
};

export default AccountSettings;
