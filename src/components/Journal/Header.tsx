import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ArrowLeft, Calendar } from "lucide-react-native";

const Header=({ navigation }: any)=> {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeft size={18} color="#FFD700" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Calendar size={18} color="#FFD700" />
        <Text style={styles.title}>Journal</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  backButton: { flexDirection: "row", alignItems: "center" },
  backText: { color: "#FFD700", marginLeft: 4, fontSize: 14 },
  titleContainer: { flexDirection: "row", alignItems: "center" },
  title: { color: "#FFD700", marginLeft: 6, fontWeight: "600" },
});

export default Header
