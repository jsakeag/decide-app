import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import RestaurantDetail from "../screens/RestaurantDetail";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";

//isChecked is set to this. no hook but updates when refresh
{
  /*export const isOptionChosen = (option, chosenItems) => {
  const found = Boolean(chosenItems.find((item) => item.id === option.id));
  //console.log("isOptionChosen: " + found + " // " + option.name);
  return found;
};*/
}

export default function SearchItems({ navigation, hideCheckbox, ...props }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) => {
    console.log(item.price);
    item.price = item.price ? item.price : "$$";
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, checkboxValue: checkboxValue },
    });
  };
  /*{
    props.optionData.map((option, index) => console.log(option));
  }*/

  return (
    <>
      {props.optionData.map((option, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() => {
            !hideCheckbox
              ? navigation.navigate("RestaurantDetail", {
                  name: option.name,
                  image: option.image_url,
                  price: option.price,
                  reviews: option.review_count,
                  rating: option.rating,
                  categories: option.categories,
                  url: option.url,
                })
              : Linking.openURL(option.url);
          }}
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <OptionImage
              item={{
                //when editing this, also edit destructuring in ChosenItem.js
                id: option.id,
                name: option.name,
                price: option.price,
                rating: option.rating,
                reviews: option.review_count,
                image_url: option.image_url,
                url: option.url,
                distance: option.distance,
                categories: option.categories,
              }}
              selectItem={selectItem}
              isChecked={option.isChecked}
              hideCheckbox={hideCheckbox}
            />
            <OptionInfo
              name={option.name}
              rating={option.rating}
              cats={option.categories.map((cat) => cat.title).join(" • ")}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const OptionImage = ({ hideCheckbox, ...props }) => {
  //need to finish debugging this (checks)
  const [check, setCheck] = useState(false);
  return (
    <>
      <Image
        source={{
          uri: props.item.image_url,
        }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 10, top: 25 }}>
        {hideCheckbox ? (
          <></>
        ) : (
          <BouncyCheckbox
            iconStyle={{ borderColor: "lightgray" }}
            fillColor="lightgreen"
            onPress={(checkboxValue) => {
              props.selectItem(props.item, checkboxValue);
              setCheck(checkboxValue);
            }}
            isChecked={check}
          />
        )}
      </TouchableOpacity>
    </>
  );
};

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
      <Text style={{ fontSize: 13, color: "gray" }}>{props.cats}</Text>
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
