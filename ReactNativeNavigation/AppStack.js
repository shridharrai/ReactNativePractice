import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: { backgroundColor: "#6a51ae" },
      headerTitleStyle: { fontWeight: "bold" },
      headerTintColor: "#fff",
      contentStyle: { backgroundColor: "#e8e4f3" },
      headerRight: () => (
        <Pressable onPress={() => console.log("Menu pressed")}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
        </Pressable>
      ),
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: "Welcome Home" }}
    />
    <Stack.Screen
      name="About"
      component={AboutScreen}
      initialParams={{ name: "Guest" }}
      // options={({ route }) => ({
      //   title: route.params?.name,
      // })}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
