import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";

const FiltersScreen = (props) => {
  return (
    <View sstyle={styles.screen}>
      <Text>The Filters Screen</Text>
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
});

export default FiltersScreen;
