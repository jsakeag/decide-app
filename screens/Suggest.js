import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderTab from "../components/HeaderTab";
import PeopleList from "../components/PeopleList";
import FooterQuitConfirm from "../components/suggestions/FooterQuitConfirm";
import { Divider } from "react-native-elements";
import SearchItems from "../components/SearchItems";
import SuggestionItems from "../components/SuggestionItems";
import AddSuggestion from "../components/suggestions/AddSuggestion";

export default function Suggest() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <HeaderTab title="suggestions" />
      <PeopleList />
      <ScrollView showVerticalScrollIndicator={false}>
        <SuggestionItems />
        <AddSuggestion />
      </ScrollView>
      <Divider width={1} />
      <FooterQuitConfirm />
    </SafeAreaView>
  );
}
