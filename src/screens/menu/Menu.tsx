import ScrollWrapper from "@/components/wrapper/ScrollWrapper";
import ViewWrapper from "@/components/wrapper/ViewWrapper";
import { darkBlueColor, whiteColor } from "@/constants/colors";
import { adminScreenNames } from "@/constants/screen-names";
import { NavigationPropType } from "@/types/types";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

const menuItems = [
  { id: "2", title: "Help & Support" },
  { id: "3", title: "Privacy And Policy" },
  { id: "4", title: "About TradeAxis" },
];

const Menu = () => {
  const navigation = useNavigation<NavigationPropType>();

  const handlePress = (item: string) => {
    console.log(`Selected: ${item}`);
    navigation.navigate(adminScreenNames.ADMIN);
    // Add navigation or functionality here
  };

  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => handlePress(item.title)}
    >
      <Text style={styles.menuText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ViewWrapper>
      <Text style={styles.title}></Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
      />
    </ViewWrapper>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  menuItem: {
    padding: 15,
    backgroundColor: darkBlueColor,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuText: {
    fontSize: 18,
    color: whiteColor,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: whiteColor,
    marginTop: 20,
  },
});
