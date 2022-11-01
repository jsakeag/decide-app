import { View, Text } from "react-native";
import React, { useState } from "react";
import firebase from "../firebase";
import { ChoiceIcon } from "./general/Buttons";

export default function HomeText() {
  const [homeTextVisible, setHomeTextVisible] = useState(true);

  const temp = () => console.log("temp");
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
      <View style={{ position: "absolute", right: -35, top: -15 }}>
        <ChoiceIcon icon="alpha-x" color="#ddd" size={25} onPress={temp} />
      </View>
    </View>
  );
}

//(invite people here or join by messages)
