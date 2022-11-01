import { View, Text, SafeAreaView, ScrollView, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import SearchItems from "../components/SearchItems";
import firebase from "../firebase";
import {
  RatingIcon,
  ChoiceButton,
  ChoiceIcon,
} from "../components/general/Buttons";

export default function ChoiceFound({ navigation }) {
  const items = useSelector((state) => state.optionReducer.selectedItems.items);
  const [lastSuggestions, setLastSuggestions] = useState({
    items: [
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
    ],
  });
  const [likedIcon, setLikedIcon] = useState({
    icon: "thumb-up-outline",
    color: "#ddd",
  });
  const [dislikedIcon, setDislikedIcon] = useState({
    icon: "thumb-down-outline",
    color: "#ddd",
  });

  const pressLike = () => {
    setLikedIcon({ icon: "thumb-up", color: "#8bf6c5" });
    setDislikedIcon({ icon: "thumb-down-outline", color: "#ddd" });
  };

  const pressDislike = () => {
    setDislikedIcon({ icon: "thumb-down", color: "#fcbaaa" });
    setLikedIcon({ icon: "thumb-up-outline", color: "#ddd" });
  };
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
      let relevance = (2 * clamp(item.distance, 0, 5000)) / 5000;
      let itemWeight = round(
        ratingFactor + reviewsAccuracy + priceFactor + relevance
      );
      {
        /*console.log(
        "relavance of " +
          item.name +
          ": " +
          relevance +
          "(actual distance: " +
          item.distance +
          ")"
      );*/
      }
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

  const chosenRestaurant = items[chosenItemIndex];
  const totalCount = items.length;

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("choosings")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          //console.log("DOC.DATA: " + doc.data());
          setLastSuggestions(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  const openButton = () => {
    Linking.openURL(chosenRestaurant.url);
  };

  const closeButton = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <LottieView
        style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
        source={require("../assets/animations/food-animation.json")}
        autoPlay
        speed={0.5}
        loop={false}
      />
      <View
        style={{
          margin: 0,
          alignItems: "center",
          height: "10%",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your chosen restaurant is {chosenRestaurant.name} out of {totalCount}{" "}
          options!
        </Text>
      </View>
      <ScrollView style={{ height: 100 }}>
        <SearchItems optionData={lastSuggestions.items} hideCheckbox={true} />
      </ScrollView>
      <View
        style={{
          width: "90%",
          height: 5,
          backgroundColor: likedIcon.color,
          marginTop: 10,
          alignSelf: "center",
          borderRadius: 5,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <RatingIcon
          icon={likedIcon.icon}
          color={likedIcon.color}
          onPress={pressLike}
        />
        <ChoiceIcon icon="close-circle" color="#fcbaaa" onPress={closeButton} />

        <ChoiceButton text="OPEN" color="#8bf6c5" onPress={openButton} />
        <ChoiceIcon icon="restart" color="#99d7fe" onPress={closeButton} />
        <RatingIcon
          icon={dislikedIcon.icon}
          color={dislikedIcon.color}
          onPress={pressDislike}
        />
      </View>
      <LottieView
        style={{ height: 135, alignSelf: "center" }}
        source={require("../assets/animations/cooking.json")}
        autoPlay
        speed={0.5}
      />
    </SafeAreaView>
  );
}

{
  /*const BarrierText = ({ sideMargins }) => {
  <Text
    style={{
      marginLeft: sideMargins,
      marginRight: sideMargins,
      marginTop: 10,
      fontSize: 30,
      color: "#bbb",
    }}
  >
    |
  </Text>;
};*/
}
