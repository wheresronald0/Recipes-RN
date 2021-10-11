import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Button
        title="Get recipe details"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
