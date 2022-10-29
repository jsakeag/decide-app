import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderTab from "../components/HeaderTab";
import Categories from "../components/Categories";
import HomeText from "../components/HomeText";
import SearchItems, { isOptionChosen } from "../components/SearchItems";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import { useState } from "react";
import ViewSuggestions from "../components/restaurantDetail/ViewSuggestions";
import { useSelector } from "react-redux";

const YELP_API_KEY =
  "iKJhoRtWhN6crYpFsAJcd2iz2DLvPMNsitOi88e9rg8UVO-12lK4wzOPU5Js4RA21FPA-SQtomWVa8JibgPFbrN4uUUl6Knr4D4MYud0zwmZToCXgi4XZ_QGpaZBY3Yx";

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

export default function Home({ navigation }) {
  const [optionData, setOptionData] = useState(localOptions);
  const [city, setCity] = useState("San Francisco");

  const chosenItems = useSelector(
    (state) => state.optionReducer.selectedItems.items
  );

  const getOptionsFromYelp = () => {
    //https://vast-basin-15798.herokuapp.com/ - put this proxy link before url when using web version
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.businesses);
        return json.businesses;
      })
      .then((businesses) => {
        let newBusinesses = [];
        businesses.forEach((business) => {
          newBusinesses.push({
            ...business,
            isChecked: Boolean(
              chosenItems.find((item) => item.id === business.id)
            ),
          });
        });
        console.log(newBusinesses);
        console.log(chosenItems);
        return newBusinesses;
      })
      .then((newBusinesses) => setOptionData(newBusinesses))
      .catch((error) => console.log("API fetch failed: " + error));
  };

  useEffect(() => {
    getOptionsFromYelp();
  }, [city]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTab title="home" />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }} //centers container contents to center text
      >
        <HomeText />
        <SearchItems optionData={optionData} navigation={navigation} />
      </ScrollView>
      <ViewSuggestions navigation={navigation} />
      <Categories />
    </SafeAreaView>
  );
}
