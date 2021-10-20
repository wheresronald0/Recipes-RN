import React from "react";

import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import MealItem from "../components/MealItem";
import MealList from "../components/MealsList";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const catId = props.navigation.getParam("categoryId"); //getParams is a method used to extract the data I pass from the CatagoryScreen. You can pass multiple params

  //const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  //.navigationOptions can be static data for a dynamic function and still get passed all the (props/i.e. navigationData)
  //console.log(navigationData);
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
