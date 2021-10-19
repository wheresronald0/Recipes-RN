import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"; //andriod bottom bar
import Colors from "../constants/Colors";

import CategoryMealsScreen from "../container/CategoryMealsScreen";
import CategoryScreen from "../container/CategoryScreen";
import MealDetailScreen from "../container/MealDetailScreen";
import FavoritesScreen from "../container/FavoritesScreen";
import FiltersScreen from "../container/FiltersScreen";

import { enableScreens } from "react-native-screens"; //for optimized performance
enableScreens();

const defaulNavStackOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitleStyle: {
    fontFamily: "open-sansBold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
};

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
    defaultNavigationOptions: defaulNavStackOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaulNavStackOptions,
  }
);

//bottom Nav Bar
const tabScreenConfig = {
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
      tabBarColor: Colors.primaryColor, //for andriod
    },
  },
  Favorites: {
    screen: FavNavigator,
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
      tabBarColor: Colors.secondaryColor, //for android
    },
  },
};

const MealsFavoriteTabNav =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
          labelStyle: {
            fontFamily: "open-sans",
          },
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaulNavStackOptions,
  }
);

//Drawer
const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavoriteTabNav,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.secondaryColor,
      labelStyle: {
        fontFamily: "open-sansBold",
      },
    },
  }
);

export default createAppContainer(MainNavigator); //this includes all the meta data
