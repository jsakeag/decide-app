import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

//Suggestion Button
export default function AddSuggestion() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-around",
      }}
    >
      <AddButton color="#f5f5f5" textColor="#000" text="+" />
    </View>
  );
}

const AddButton = (props) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: props.color,
        paddingVertical: 6,
        paddingHorizontal: 6,
        borderWidth: 2,
        borderColor: "#000000",
        borderRadius: 6,
        width: 75,
        height: 30,
        /*border: 2px solid #000000,
      border-radius: 6px,*/
      }}
    >
      <Text
        style={{
          fontSize: 15,
          fontWeight: "900",
          textAlign: "center",
          color: props.textColor,
          lineHeight: 15,
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);
