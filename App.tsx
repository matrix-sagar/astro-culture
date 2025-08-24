import { SafeAreaView, StyleSheet } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import JournalScreen from "./src/screens/JournalScreen";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./src/store/store";
import { Provider } from "react-redux";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: HomeScreen,
    Journal: JournalScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
