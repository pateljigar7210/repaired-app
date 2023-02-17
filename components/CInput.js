import React, { useState } from 'react';
import { TextInput, View, Text, TouchableHighlight } from 'react-native';
import tw from "twrnc";
import { Controller } from 'react-hook-form'
import Icon from 'react-native-vector-icons/Entypo';

const CInput = (props) => {
    const { control, name, placeholder,
        keyboardType, placeholderTextColor,
        isRequired, requiredMsg,
        pattern,
        patternMsg,
        style,
        isPassword,
        validate,
        error } = props
    const [passwordVisible, setPasswordVisible] = useState(true);
    return (
        <Controller
            control={control}
            name={name}
            rules={{
                required: {
                    value: isRequired,
                    message: requiredMsg
                },
                pattern: {
                    value: pattern,
                    message: patternMsg
                },
                validate: validate
            }}


            render={({ field: { onChange, value, onBlur } }) => (
                <View style={{}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                        <TextInput
                            style={style}
                            placeholder={placeholder}
                            keyboardType={keyboardType}
                            placeholderTextColor={placeholderTextColor}
                            value={value}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            secureTextEntry={isPassword ? passwordVisible : false}
                        />

                        {isPassword && <TouchableHighlight
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
                        </TouchableHighlight>}

                    </View>

                    <Text style={{ marginStart: 10, color: 'red', fontSize: 14 }}>{error ? error : ' '}</Text>
                </View>

            )}
        />
    );
};

export default CInput;