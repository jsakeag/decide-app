import { View, Text } from "react-native";
import React, { useState } from "react";
import firebase from "../firebase";
import { ChoiceIcon } from "./general/Buttons";

export default function HomeText() {
  const [homeTextVisible, setHomeTextVisible] = useState(true);

  return (
    <>
      {homeTextVisible ? (
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            marginHorizontal: 30,
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center" }}>
            search for restaurants then suggest them by pressing the checkbox!
            Your user ID: {firebase.auth().currentUser?.uid}
          </Text>
          <View style={{ position: "absolute", right: -25, top: -7 }}>
            <ChoiceIcon
              icon="alpha-x"
              color="#ddd"
              size={20}
              onPress={() => setHomeTextVisible(false)}
            />
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

//(invite people here or join by messages)
