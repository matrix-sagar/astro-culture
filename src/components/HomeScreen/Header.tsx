import { Image, StyleSheet, Text, View } from "react-native";

const Header = () => {
  const getDisplayDate = () => {
    const date = new Date(Date.now());
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerWrapper}>
        <Image
          source={require("../../assets/sparkle-gold.png")}
          style={styles.imageStyles}
        />
        <Text style={styles.mainHeader} numberOfLines={1} >Astro Journal</Text>
        <Image
          source={require("../../assets/sparkle-gold.png")}
          style={styles.imageStyles}
        />
      </View>
      <Text style={styles.dateText}>{getDisplayDate()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 60,
    width:'100%'
  },

  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    flexGrow:1,
  },
  mainHeader: {
    fontSize: 30,
    fontWeight: 700,
    overflow:'visible',
    color: "linear-gradient(135deg, hsl(45 100% 65%), hsl(35 90% 60%))",
    minWidth:185
  },
  dateText: {
    color: "#94a0b8",
  },
  imageStyles: {
    height: 30,
    width: 30,
  },
});
export default Header;
