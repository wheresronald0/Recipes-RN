import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  ); //.item is a property flatlist gives you for each item from my CATEGORIES data file
};

styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoryGridTile;
