import React, { useState } from "react";
import { TextInput, View, Text, TouchableHighlight } from "react-native";
import tw from "twrnc";
import { Controller } from "react-hook-form";
import Icon from "react-native-vector-icons/Entypo";

const CInput = (props) => {
  const {
    control,
    name,
    placeholder,
    keyboardType,
    placeholderTextColor,
    isRequired,
    requiredMsg,
    pattern,
    patternMsg,
    style,
    isPassword,
    validate,
    error,
  } = props;
  const [passwordVisible, setPasswordVisible] = useState(true);
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: isRequired,
          message: requiredMsg,
        },
        pattern: {
          value: pattern,
          message: patternMsg,
        },
        validate: validate,
      }}
      render={({ field: { onChange, value, onBlur } }) => (
        <View
          style={tw`bg-white flex flex-row items-center justify-between w-full px-7 py-3 border-b border-b-gray-200`}
        >
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={tw`text-xs text-[#C6C6C6] mb-0.5`}>
                {props.title}
              </Text>
            </View>

            <TextInput
              style={style}
              placeholder={placeholder}
              keyboardType={keyboardType}
              placeholderTextColor={placeholderTextColor}
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              secureTextEntry={isPassword ? passwordVisible : false}
            />

            {error && (
              <Text style={{ marginTop:5,color: "red", fontSize: 14 }}>
                {error ? error : " "}
              </Text>
            )}

            {isPassword && (
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
            )}
          </View>
          <Icon name="chevron-thin-right" size={20} color="#C6C6C6" />
        </View>
      )}
    />
  );
};

export default CInput;
