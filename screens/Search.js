import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import SearchItems from "../components/SearchItems";
import PeopleList from "../components/PeopleList";

export default function Search() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <SearchBar />
      </View>
      <ScrollView showVerticalScrollIndicator={false}>
        <SearchItems />
      </ScrollView>
      <PeopleList />
    </SafeAreaView>
  );
}
