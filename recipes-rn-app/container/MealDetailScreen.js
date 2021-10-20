import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import { useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);

  //
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={{ marginHorizontal: 10 }}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.text}>{selectedMeal.duration} min</Text>
        <Text style={styles.text}>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text style={styles.text}>
          {selectedMeal.affordability.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>

      {selectedMeal.ingredients.map((ingredient) => (
        <Text style={{ ...styles.text, ...styles.listItems }} key={ingredient}>
          {ingredient}
        </Text>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text style={{ ...styles.text, ...styles.listItems }} key={step}>
          - {step}
        </Text>
      ))}
    </ScrollView>
  );
};

//header
MealDetailScreen.navigationOptions = (navigationData) => {
  //const mealId = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  //const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: mealTitle,
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
  image: {
    width: "100%",
    height: 370,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sansBold",
    fontSize: 19,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  text: {
    fontFamily: "open-sans",
    //padding: 10,
  },
  listItems: {
    padding: 7,
  },
});

export default MealDetailScreen;
