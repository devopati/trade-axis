import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import {
  adminScreenNames,
  bottomTabScreenNames,
} from "@/constants/screen-names";
import AdminNavigation from "./AdminNavigation";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={bottomTabScreenNames.BOTTOM}
          component={BottomTabs}
        />
        <Stack.Screen
          name={adminScreenNames.ADMIN}
          component={AdminNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
