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
  const [likeRatio, setLikeRatio] = useState(9);

  const [choice, setChoice] = useState({
    name: "Beachside bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  });
  const [data, setData] = useState({
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
    if (likeRatio < 9) {
      setLikeRatio(likeRatio + 1);
    }
  };

  const pressDislike = () => {
    setDislikedIcon({ icon: "thumb-down", color: "#fcbaaa" });
    setLikedIcon({ icon: "thumb-up-outline", color: "#ddd" });
    if (likeRatio > 0) {
      setLikeRatio(likeRatio - 1);
    }
  };

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("choosings")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setData(doc.data());
          setChoice(doc.data().chosenRestaurant);
        });
      });

    return () => unsubscribe();
  }, []);

  const openButton = () => {
    Linking.openURL(choice.url);
  };

  const closeButton = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.replace("Join");
      })
      .catch((error) => alert(error.message));
  };

  const restartButton = () => {
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
          Your chosen restaurant is {choice.name} out of {data.items.length}{" "}
          options!
        </Text>
      </View>
      <ScrollView style={{ height: 100 }}>
        <SearchItems optionData={[choice]} hideCheckbox={true} />
      </ScrollView>
      <View
        style={{
          width: `${likeRatio * 10}%`,
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
        <ChoiceIcon icon="restart" color="#99d7fe" onPress={restartButton} />
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
