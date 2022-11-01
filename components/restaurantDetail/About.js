import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { ChoiceIcon } from "../general/Buttons";

export default function About(props) {
  const { name, image, price, reviews, rating, categories, url } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  const openLink = () => {
    Linking.openURL(url);
  };
  return (
    <View>
      <RestaurantImage image={image} />
      <View>
        <RestaurantName name={name} />
        <View style={{ position: "absolute", right: 10, marginTop: 10 }}>
          <ChoiceIcon
            icon="arrow-top-right-bold-outline"
            color="#99d7fe"
            onPress={openLink}
          />
        </View>
      </View>
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);

const OpenButton = ({ onPress }) => (
  <TouchableOpacity
    style={{
      height: 35,
      marginTop: 10,
      marginRight: 10,
      marginLeft: 10,
      backgroundColor: "#8bf6c5",
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      borderRadius: 30,
      width: 100,
      position: "absolute",
      right: 10,
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
      OPEN
    </Text>
  </TouchableOpacity>
);
