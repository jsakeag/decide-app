import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const images = [
  {
    image: require("../assets/avatars/bee.png"),
  },
  {
    image: require("../assets/avatars/cat.png"),
  },
  {
    image: require("../assets/avatars/cow.png"),
  },
];

export default function PeopleList() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        {images.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
          </View>
        ))}
        <Text
          style={{
            width: 50,
            height: 40,
            fontSize: 25,
            resizeMode: "contain",
          }}
        >
          +
        </Text>
      </ScrollView>
    </View>
  );
}
