import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons"; // Edit3 equivalent
import { useNavigation } from "@react-navigation/native";

const JournalButton = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Journal")}
    >
      <Feather name="edit-3" size={20} color="#fff" style={styles.icon} />
      <Text style={styles.text} numberOfLines={1}>
        Write in Journal
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6d28d9",
    paddingVertical: 14,
    borderRadius: 12,
    width: "70%",
    shadowColor: "#FFD700",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    minWidth: 120,
  },
});

export default JournalButton;
