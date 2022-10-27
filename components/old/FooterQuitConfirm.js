import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function FooterQuitConfirm() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-around",
      }}
    >
      <FooterButton color="#f5f5f5" textColor="#000" text="QUIT" />
      <FooterButton color="#000" textColor="#f5f5f5" text="CONFIRM (3/3)" />
    </View>
  );
}

const FooterButton = (props) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: props.color,
        paddingVertical: 6,
        paddingHorizontal: 6,
        borderWidth: 2,
        borderColor: "#000000",
        borderRadius: 6,
        width: 140,
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
          lineHeight: 15, //half of div height -> centers text vertically
          //fontFamily: "Roboto",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);
