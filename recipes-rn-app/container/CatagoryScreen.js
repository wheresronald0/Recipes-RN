import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CatagoryScreen = (props) => {
  return (
    <View sytle={styles.screen}>
      <Text>The Catagory Screen</Text>
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

export default CatagoryScreen;
