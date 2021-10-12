import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CategoryMealsScreen from "./CategoryMealsScreen";

import { CATEGORIES } from "../data/dummy-data";

const CategoryScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
          }); //.navigate passes data along to my identifier/top stack screen
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    ); //.item is a property flatlist gives you for each item from my CATEGORIES data file
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

// options that rNav give you to customize
CategoryScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoryScreen;
