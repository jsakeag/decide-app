import { Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const RatingIcon = ({ icon, color, onPress }) => (
  <TouchableOpacity
    style={{
      height: 35,
      marginRight: 10,
      marginLeft: 10,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    }}
    onPress={onPress}
  >
    <MaterialCommunityIcons name={icon} size={35} color={color} />
  </TouchableOpacity>
);
export const ChoiceButton = ({ text, color, onPress }) => (
  <TouchableOpacity
    style={{
      height: 35,
      marginRight: 10,
      marginLeft: 10,
      backgroundColor: color,
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      borderRadius: 30,
      width: 100,
      position: "relative",
    }}
    onPress={onPress}
  >
    <Text
      style={{
        lineHeight: -1,
        color: "white",
        fontSize: 15,
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

export const ChoiceIcon = ({ icon, color, size, sideMargins, onPress }) => {
  size = size ? size : 35;
  sideMargins = sideMargins ? 10 : sideMargins;
  return (
    <TouchableOpacity
      style={{
        height: 35,
        marginLeft: sideMargins,
        marginRight: sideMargins,
        backgroundColor: color,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        width: size,
        height: size,
        position: "relative",
      }}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={icon} size={size - 10} color="#fff" />
    </TouchableOpacity>
  );
};
