import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoryMealsScreen from "../container/CategoryMealsScreen";

import CategoryScreen from "../container/CategoryScreen";
import MealDetailScreen from "../container/MealDetailScreen";

const MealsNavigator = createStackNavigator({
  Catagories: CategoryScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator); //this includes all the meta data
