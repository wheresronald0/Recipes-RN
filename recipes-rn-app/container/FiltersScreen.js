import React, { useState } from "react";
import { StyleSheet, Switch, Text, View, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);

  return (
    <View sstyle={styles.screen}>
      <Text style={styles.title}>Select Your Preferences </Text>
      <View style={styles.filterContainer}>
        <Text>Gluten Free</Text>
        <Switch
          trackColor={{ true: Colors.accentColor }} //can set for false state too
          thumbColor={Platform.OS === "android" ? Colors.accentColor : ""}
          value={isGlutenFree}
          onValueChange={(newValue) => setIsGlutenFree(newValue)}
        />
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  console.log(navData.navigation);
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "50%",
  },
  title: {
    fontFamily: "open-sansBold",
    fontSize: 19,
    textAlign: "center",
    margin: 18,
  },
});

export default FiltersScreen;
