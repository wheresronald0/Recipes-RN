import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoryMealsScreen from "./CategoryMealsScreen";

const CategoryScreen = (props) => {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>The Category Screen</Text>
      <Button
        title="Go to meals"
        onPress={() => {
          props.navigation.navigate("CategoryMeals"); //props.navigation is the preconfigured props and .navigate is the  method in which you pass the createStackNavigator screens
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

export default CategoryScreen;
