import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <Image />
      <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
        <Text>{props.duration}</Text>
        <Text>{props.complexity.toUpperCase()}</Text>
        <Text>{props.affordability.toUpperCase()}</Text>
      </View>
      <View style={styles.screen}>
        <Text>{selectedMeal.title}</Text>
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("it works dammit!!");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
