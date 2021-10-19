import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Switch, Text, View, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";

const FiltersScreen = (props) => {
  const { navigation } = props; //stores navigation key and stores it in a new const under the same name so I can use in useEffect without .props, so it doesn't re-run

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactosFree, setIsLactosFree] = useState(false);

  const savePreferences = useCallback(() => {
    const appliedPrefs = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoFree: isLactosFree,
    };

    console.log(appliedPrefs);
  }, [isLactosFree, isVegetarian, isVegan, isGlutenFree]);

  useEffect(() => {
    navigation.setParams({ save: savePreferences });
  }, [savePreferences]);

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
      <View style={styles.filterContainer}>
        <Text>Vegan</Text>
        <Switch
          trackColor={{ true: Colors.accentColor }} //can set for false state too
          thumbColor={Platform.OS === "android" ? Colors.accentColor : ""}
          value={isVegan}
          onValueChange={(newValue) => setIsVegan(newValue)}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Vegetarian</Text>
        <Switch
          trackColor={{ true: Colors.accentColor }} //can set for false state too
          thumbColor={Platform.OS === "android" ? Colors.accentColor : ""}
          value={isVegetarian}
          onValueChange={(newValue) => setIsVegetarian(newValue)}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Lactos Free</Text>
        <Switch
          trackColor={{ true: Colors.accentColor }} //can set for false state too
          thumbColor={Platform.OS === "android" ? Colors.accentColor : ""}
          value={isLactosFree}
          onValueChange={(newValue) => setIsLactosFree(newValue)}
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save Preferences"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
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
    justifyContent: "space-between",
    width: "70%",
    marginVertical: 20,
    marginHorizontal: 50,
  },
  title: {
    fontFamily: "open-sansBold",
    fontSize: 19,
    textAlign: "center",
    marginTop: 35,
    marginBottom: 15,
  },
});

export default FiltersScreen;
