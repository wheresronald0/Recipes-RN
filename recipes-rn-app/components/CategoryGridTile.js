import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View
        style={{
          ...styles.gridItemContainer,
          ...{ backgroundColor: props.color },
        }}
      >
        <Text style={styles.title}>{props.title}</Text>
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
  gridItemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 3, //for andriod becasue shadow only affects iOS
  },
  title: {
    fontFamily: "open-sans",
    fontSize: 19,
    color: "#ff6347",
  },
});

export default CategoryGridTile;
