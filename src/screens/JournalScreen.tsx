import React, { useState, useEffect } from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { formatDate } from "../utils/formatDate";
import Header from "../components/Journal/Header";
import TodayEntry from "../components/Journal/TodayEntry";
import RecentEntries from "../components/Journal/RecentEntries";
import { useNavigation } from "@react-navigation/native";
import useAsyncStorageHook from "../hooks/useAsyncStorage";

const JournalScreen = () => {
  const navigation = useNavigation<any>();

  const [content, setContent] = useState("");
  const [recentEntries, setRecentEntries] = useState([]);

  const todayFormatted = formatDate(new Date(), "full");

  const { storeProcessing, storeData, retrieveData } = useAsyncStorageHook();

  const fetchAllNotes = async () => {
    const data = await retrieveData("noteEntries");
    const dataArray = JSON.parse(data);
    if (dataArray?.length) setRecentEntries(JSON.parse(data));
  };

  useEffect(() => {
    fetchAllNotes();
  }, []);

  const handleSave = async () => {
    const noteObj = {
      id: Date.now(),
      date: new Date(),
      content,
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
    };
    let allNotesArray: any = recentEntries;
    allNotesArray = [...allNotesArray, noteObj];
    const finalSaveString = JSON.stringify(allNotesArray);
    await storeData("noteEntries", finalSaveString);
    await fetchAllNotes();
  };

  return (
    <ImageBackground
      source={require("../assets/cosmic-background.png")}
      style={styles.background}
      resizeMode="cover"
      blurRadius={30}
    >
      <ScrollView style={styles.container}>
        <Header navigation={navigation} />
        <TodayEntry
          todayFormatted={todayFormatted}
          content={content}
          setContent={setContent}
          isSaving={storeProcessing}
          onSave={handleSave}
        />
        {recentEntries.length > 0 && <RecentEntries entries={recentEntries} />}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 16,
  },
  background: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
});

export default JournalScreen;
