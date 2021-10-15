import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
