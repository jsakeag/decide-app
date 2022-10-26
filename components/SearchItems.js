import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import RestaurantDetail from "../screens/RestaurantDetail";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const localOptions = [
  {
    name: "Beachside bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

export default function SearchItems({ navigation, ...props }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, checkboxValue: checkboxValue },
    });
  const chosenItems = useSelector(
    (state) => state.optionReducer.selectedItems.items
  );
  const isOptionChosen = (option, chosenItems) =>
    Boolean(chosenItems.find((item) => item.id === option.id));

  return (
    <>
      {props.optionData.map((option, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: option.name,
              image: option.image_url,
              price: option.price,
              reviews: option.review_count,
              rating: option.rating,
              categories: option.categories,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <OptionImage
              item={{ id: option.id, name: option.name }}
              image={option.image_url}
              selectItem={selectItem}
              chosenItems={chosenItems}
              isOptionChosen={isOptionChosen}
            />
            <OptionInfo name={option.name} rating={option.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const OptionImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 10, top: 25 }}>
      <BouncyCheckbox
        iconStyle={{ borderColor: "lightgray" }}
        fillColor="lightgreen"
        onPress={(checkboxValue) => props.selectItem(props.item, checkboxValue)}
        isChecked={props.isOptionChosen(props.item, props.chosenItems)}
      />
    </TouchableOpacity>
  </>
);

const OptionInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
