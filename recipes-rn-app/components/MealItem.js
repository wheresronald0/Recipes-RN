import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text style={styles.text}>{props.duration}</Text>
            <Text style={styles.text}>{props.complexity.toUpperCase()}</Text>
            <Text style={styles.text}>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#e0e0e0",
    marginVertical: 30,
    borderRadius: 10,
    overflow: "hidden", //the image doesn't respect the border so set overflow to hidden so no child can go outside the space
  },
  mealHeader: {
    height: "85%",
    paddingHorizontal: 10,
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: "open-sansBold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  mealDetail: {
    height: "15%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  text: {
    fontFamily: "open-sans",
  },
  bgImage: {
    //have to set width and height for an image
    width: "100%",
    height: "100%",
    justifyContent: "flex-end", //backgroundImage acts like a flexbox for content inside
  },
});

export default MealItem;
