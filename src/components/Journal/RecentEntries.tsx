import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BookOpen } from "lucide-react-native";
import { formatDate } from "../../utils/formatDate";

const RecentEntries = ({ entries }: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <BookOpen size={18} color="#FFD700" />
        <Text style={styles.title}>Recent Entries</Text>
      </View>

      {entries.map((entry: any) => (
        <View key={entry.id} style={styles.entry}>
          <View style={styles.entryHeader}>
            <Text style={styles.entryDate}>
              {formatDate(entry.date, "short")}
            </Text>
            <Text style={styles.entryIcon}>📖</Text>
          </View>
          <Text style={styles.entryText} numberOfLines={3}>
            {entry.content}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1c1c2b",
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  title: { color: "#fff", marginLeft: 6, fontWeight: "600", fontSize: 16 },
  entry: {
    marginBottom: 12,
    padding: 8,
    backgroundColor: "#2a2a3d",
    borderRadius: 8,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  entryDate: { color: "#FFD700", fontSize: 12 },
  entryIcon: { fontSize: 16 },
  entryText: { color: "#aaa", fontSize: 14 },
});

export default RecentEntries;
