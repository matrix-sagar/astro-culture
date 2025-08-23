import { ImageBackground, StyleSheet, View } from "react-native";
import Header from "../components/HomeScreen/Header";
import HoroscopeCard from "../components/HomeScreen/HoroscopeCard";
import HoroscopePicker from "../components/HomeScreen/HoroscopePicker";
import JournalButton from "../components/HomeScreen/AddJournalButton";

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/cosmic-background.png")}
      style={styles.background}
      resizeMode="cover"
      blurRadius={30}
    >
      <View style={styles.homeScreenContainer}>
        <View style={styles.mainContainer}>
          <Header />
          <HoroscopePicker />
          <HoroscopeCard />
        </View>
        <JournalButton />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  homeScreenContainer: {
    display: "flex",
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 100,
  },
  background: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  mainContainer: {
    display: "flex",
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
});
export default HomeScreen;
