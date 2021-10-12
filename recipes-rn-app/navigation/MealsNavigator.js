import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/Colors";

import CategoryMealsScreen from "../container/CategoryMealsScreen";
import CategoryScreen from "../container/CategoryScreen";
import MealDetailScreen from "../container/MealDetailScreen";

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

export default createAppContainer(MealsNavigator); //this includes all the meta data
