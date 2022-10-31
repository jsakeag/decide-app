import { View, Text } from "react-native";
import React from "react";
import firebase from "../firebase";

export default function HomeText() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "center",
      }}
    >
      <Text style={{ textAlign: "center" }}>
        search for restaurants then suggest them by pressing the checkbox! Your
        user ID: {firebase.auth().currentUser?.uid}
      </Text>
    </View>
  );
}

//(invite people here or join by messages)
