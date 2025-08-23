import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ZODIAC_SIGNS } from "../../constants/constants";
import useApi from "../../hooks/useApi";
import { useSelector } from "react-redux";

const HoroscopeCard = () => {
  const sign = useSelector((state: any) => state.sign.value);

  const { data, status, request } = useApi();
  useEffect(() => {
    request({
      method: "GET",
      url: `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign.value}&day=TODAY`,
    });
  }, [sign]);

  if (!sign) return null;

  return (
    <View style={styles.card}>
      <View style={styles.container}>
        {status === "pending" ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <Text style={styles.symbol}>{sign.symbol}</Text>

            <View>
              <Text style={styles.label}>{sign.label}</Text>
              <Text style={styles.dates}>{sign.dates}</Text>
            </View>

            <View style={styles.horoscopeContainer}>
              <Text style={styles.horoscopeTitle}>Today's Horoscope</Text>
              <ScrollView style={styles.horoscopeScroll}>
                <Text style={styles.horoscopeText}>
                  {data?.data?.horoscope_data}
                </Text>
              </ScrollView>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1a1a2e",
    padding: 24,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 1,
    maxWidth: "70%",
    borderColor: "rgba(255,255,255,0.2)",
    margin: 12,
    maxHeight: "60%",
  },
  container: {
    alignItems: "center",
  },
  symbol: {
    fontSize: 56,
    marginBottom: 16,
  },
  label: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ff9f68",
    marginBottom: 4,
    textAlign: "center",
  },
  dates: {
    fontSize: 14,
    color: "rgba(255,159,104,0.7)",
    textAlign: "center",
  },
  horoscopeContainer: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,159,104,0.2)",
    paddingTop: 16,
    width: "100%",
    overflow: "hidden",
  },
  horoscopeTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#fff",
    textAlign: "center",
  },
  horoscopeScroll: {
    maxHeight: 120, // 👈 fixed height area for scrolling text
  },
  horoscopeText: {
    fontSize: 15,
    color: "rgba(255,255,255,0.9)",
    lineHeight: 22,
    textAlign: "center",
  },
});

export default HoroscopeCard;
