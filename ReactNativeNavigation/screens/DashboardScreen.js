import { Button, StyleSheet, Text, View } from "react-native";

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DashboardScreen</Text>
      <Button title="Open Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button
        title="Go to Settings"
        onPress={() => navigation.jumpTo("Settings")}
      />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
