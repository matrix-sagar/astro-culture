import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Save } from "lucide-react-native";

const TodayEntry = ({
  todayFormatted,
  content,
  setContent,
  isSaving,
  onSave,
}: any) => {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Today's Entry</Text>
      <Text style={styles.date}>{todayFormatted}</Text>

      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="What's on your mind today?"
        placeholderTextColor="#999"
        style={styles.textarea}
        multiline
      />

      <TouchableOpacity
        style={styles.saveButton}
        onPress={onSave}
        disabled={isSaving}
      >
        {isSaving ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <>
            <Save size={16} color="#fff" />
            <Text style={styles.saveText} numberOfLines={1}>
              Save Entry
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1c1c2b",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 4,
    textAlign: "center",
  },
  date: { fontSize: 14, color: "#aaa", textAlign: "center", marginBottom: 12 },
  textarea: {
    backgroundColor: "#2a2a3d",
    color: "#fff",
    borderRadius: 8,
    padding: 12,
    minHeight: 100,
    marginBottom: 12,
  },
  saveButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7b2cbf",
    padding: 12,
    borderRadius: 8,
  },
  saveText: { color: "#fff", marginLeft: 6, fontWeight: "600", minWidth: 71 },
});

export default TodayEntry;
