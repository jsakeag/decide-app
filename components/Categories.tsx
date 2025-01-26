import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

//Food category buttons
//npx expo install babel-plugin-module-resolver | install manually to resolve
const items = [
  {
    image: require("../assets/images/wine-drink.jpg"),
    text: "All",
    terms: "All",
  },
  {
    image: require("../assets/images/wine-drink.jpg"),
    text: "Bars",
    terms: "bars",
  },
  {
    image: require("../assets/images/food-court.jpg"),
    text: "Food Court",
    terms: "food_court",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakeries",
    terms: "bakeries",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Food",
    terms: "hotdogs",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
    terms: "coffee,tea",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
    terms: "deserts",
  },
];

export default function Categories(props) {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{ alignItems: "center", marginRight: 30 }}
            onPress={() => props.categoryHandler(item.terms)}
          >
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
