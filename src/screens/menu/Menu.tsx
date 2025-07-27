import ViewWrapper from "@/components/wrapper/ViewWrapper";
import { darkBlueColor, whiteColor } from "@/constants/colors";
import { NavigationPropType } from "@/types/types";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import LoginPopup from "./components/LoginPopup";
import * as WebBrowser from "expo-web-browser";
import { generalScreenNames } from "@/constants/screen-names";

const menuItems = [
  { id: "2", title: "FAQs" },
  { id: "3", title: "Privacy And Policy" },
  { id: "4", title: "Rate Us" },
];

const Menu = () => {
  const navigation = useNavigation<NavigationPropType>();

  const [visible, setVisible] = useState<boolean>(false);

  const _handlePressButtonAsync = async () => {
    await WebBrowser.openBrowserAsync(
      "https://www.freeprivacypolicy.com/live/655c9b37-59ca-4a66-abdd-9debedc4ab38"
    );
  };

  const handleRateUsPress = async () => {
    await WebBrowser.openBrowserAsync(
      "https://play.google.com/store/apps/details?id=com.d3vi.tradeaxis&pcampaignid=web_share"
    );
  };

  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <TouchableOpacity
      style={styles.menuItem}
      onLongPress={() => setVisible(true)}
      onPress={() =>
        item.id === "4"
          ? handleRateUsPress()
          : item.id === "2"
          ? navigation.navigate(generalScreenNames.FAQs)
          : _handlePressButtonAsync()
      }
    >
      <Text style={styles.menuText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ViewWrapper>
      <LoginPopup visible={visible} setVisible={setVisible} />
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
    paddingHorizontal: 10,
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
    marginBottom: 7,
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
    // marginBottom: 20,
    textAlign: "center",
    color: whiteColor,
    // marginTop: 20,
  },
});
