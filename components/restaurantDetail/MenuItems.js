import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Divider } from "react-native-elements";
import arrayShuffle from "array-shuffle";

const foods = arrayShuffle([
  {
    title: "Teriyaki Chicken",
    description: "Amazing dish!",
    price: "$12.50",
    image:
      "https://www.budgetbytes.com/wp-content/uploads/2022/04/Teriyaki-Chicken-plate-500x500.jpg",
  },
  {
    title: "Sushi Burger",
    description: "Yummy cross between a burger and sushi",
    price: "$15.50",
    image:
      "https://www.eatthis.com/wp-content/uploads/sites/4//media/images/ext/257095598/sushi-burger-instagram.jpg?quality=82&strip=1",
  },
  {
    title: "Fried Rice",
    description: "Rice but it's fried",
    price: "$10.50",
    image:
      "https://www.simplyrecipes.com/thmb/t0PHmOn0M5y1qBdcHvbDWs182Kc=/1780x1335/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__12__2017-12-Chicken-Fried-Rice-2-15ac7014b47b40a1a7c7e20a638f4295.jpg",
  },
  {
    title: "Teriyaki Chicken",
    description: "Amazing dish!",
    price: "$12.50",
    image:
      "https://www.budgetbytes.com/wp-content/uploads/2022/04/Teriyaki-Chicken-plate-500x500.jpg",
  },
  {
    title: "Sushi Burger",
    description: "Yummy cross between a burger and sushi",
    price: "$15.50",
    image:
      "https://www.eatthis.com/wp-content/uploads/sites/4//media/images/ext/257095598/sushi-burger-instagram.jpg?quality=82&strip=1",
  },
  {
    title: "Fried Rice",
    description: "Rice but it's fried",
    price: "$10.50",
    image:
      "https://www.simplyrecipes.com/thmb/t0PHmOn0M5y1qBdcHvbDWs182Kc=/1780x1335/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__12__2017-12-Chicken-Fried-Rice-2-15ac7014b47b40a1a7c7e20a638f4295.jpg",
  },
]);

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
