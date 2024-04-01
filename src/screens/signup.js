import { View, Text, TextInput, Touchable, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react';

import { Ionicons } from "@expo/vector-icons";
export default function () {
  const [gender, setGender] = useState("Female");
  const onFemalePressed = () => {
    setGender("Female");
  };

  const onMalePressed = () => {
    setGender("Male");
  };r
  return (
    <View className={"flex flex-1"}>  
    {/* logo area */}
    <View className = {"flex flex-1 bg-purple-500"}></View>
    {/* form Rea */}
    <View className = {"flex flex-auto px-5"}>
     <TextInput placeholder="First Name" className={"border-b-2 border-b-pink-300 rounded-md my-4 p-2"}/>
     <TextInput placeholder="Last Name" className={"border-b-2 border-b-pink-300 rounded-md my-4 p-2"}/>
     <TextInput placeholder="Email" className={"border-b-2 border-b-pink-300 rounded-md my-4 p-2"}/>
     <TextInput placeholder="Password" className={"border-b-2 border-b-pink-300 rounded-md my-4 p-2"}/>
     <TextInput placeholder="Conform Password" className={"border-b-2 border-b-pink-300 rounded-md my-4 p-2"}/>
      </View> 
      <View>
       <Pressable>
        <Text>Date of Birth</Text>
        </Pressable>
        <View className={"flex flex-row justify-between p-4"}>
          <Text>Gender: </Text>

          <TouchableOpacity
            onPress={onMalePressed}
            className={"flex flex-row items-center"}
          >
            <Ionicons
              name={gender === "Male" ? "radio-button-on" : "radio-button-off"}
              size={25}
              color={"blue"}
            />
            <Text>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onFemalePressed}
            className={"flex flex-row items-center"}
          >
            <Ionicons
              name={
                gender === "Female" ? "radio-button-on" : "radio-button-off"
              }
              size={25}
              color={"pink"}
            />
            <Text>Female</Text>
          </TouchableOpacity>
        </View>

      </View>
     {/* footer area */}
     <View className = {"flex flex-1 bg-pink-500"}></View>
    </View>
  )
}
