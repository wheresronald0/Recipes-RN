import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

import CategoryMealsScreen from "../container/CategoryMealsScreen";
import CategoryScreen from "../container/CategoryScreen";
import MealDetailScreen from "../container/MealDetailScreen";
import FavoritesScreen from "../container/FavoritesScreen";

import { enableScreens } from "react-native-screens"; //for optimized performance
enableScreens();

const MealsNavigator = createStackNavigator(
  //loads in order from top down
  {
    Categories: {
      screen: CategoryScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

const MealsFavoriteTabNav = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor} //tabInfo automatically retrieves the dynamic color value I've already set up
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-star"
              size={25}
              color={tabInfo.tintColor} //tabInfo automatically retrieves the dynamic color value I've already set up
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: { activeTintColor: Colors.secondaryColor },
  }
);

export default createAppContainer(MealsFavoriteTabNav); //this includes all the meta data
