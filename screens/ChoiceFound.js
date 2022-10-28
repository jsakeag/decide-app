import { View, Text, SafeAreaView, unstable_enableLogBox } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
//import LottieView from "lottie-react-native";

export default function ChoiceFound() {
  const items = useSelector((state) => state.optionReducer.selectedItems.items);

  //math operations used in choice algorithm
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
  const round = (number) => Math.round(number * 100) / 100;
  const divideArr = (arr, amount) => {
    let newArr = [];
    arr.forEach((e) => {
      newArr.push(round(e / amount));
    });
    return newArr;
  };

  //random "target score"
  const rand = Math.random();
  //console.log("RAND: " + rand);

  //weighted "scores"
  const getWeightTable = () => {
    let total = 0;
    let weightTable = [];
    items.forEach((item) => {
      let ratingFactor = item.rating * 2;
      let reviewsAccuracy =
        ((0.001 * (item.rating - 2.5)) / 2.5) * clamp(item.reviews, 0, 1000);
      let priceFactor =
        -0.5 * (item.price !== undefined ? item.price.length : 2);
      let itemWeight = round(ratingFactor + reviewsAccuracy + priceFactor);
      weightTable.push(itemWeight);
      total += itemWeight;
    });
    //reduce from scores to average
    return divideArr(weightTable, total);
  };

  //console.log("WEIGHT TABLE: " + getWeightTable());

  //gets index where weight sum is greater than target "score"
  const getChosenItemIndex = () => {
    let arr = getWeightTable();
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      //console.log("sum at index" + i + ": " + sum + " > " + round(rand) + "?");
      if (sum >= rand) {
        //console.log("TARGET INDEX: " + i);
        return i;
      }
    }
    return arr.length - 1;
  };

  let chosenItemIndex = getChosenItemIndex();
  console.log(chosenItemIndex);

  const chosenRestaurant = items[chosenItemIndex].name;
  const totalCount = items.length;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/*<LottieView
        style={{ height: 100, alignSelf: "center", marginBottom: 40 }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop={false}
  />*/}
      <Text>
        Your chosen restaurant is {chosenRestaurant} out of {totalCount}{" "}
        options!
      </Text>
    </SafeAreaView>
  );
}
