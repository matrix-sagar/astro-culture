import React, { memo, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { ZODIAC_SIGNS } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSign } from "../../store/signSlice";

const DropdownComponent = () => {
  const sign = useSelector((state: any) => state.sign.value);
  const dispatch = useDispatch();
  const getRenderItem = useCallback((item: any) => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          flexGrow: 1,
          padding: 8,
          gap: 16,
          paddingLeft: 10,
        }}
      >
        <Text style={styles.iconStyle}>{item.symbol}</Text>
        <View>
          <Text style={styles.selectedTextStyle}>{item.label}</Text>
          <Text style={styles.subTextColor}>{item?.dates}</Text>
        </View>
      </View>
    );
  }, []);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={ZODIAC_SIGNS}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={sign}
      onChange={(item) => {
        dispatch(setSign(item));
      }}
      renderLeftIcon={() => <Text style={styles.iconStyle}>{sign.symbol}</Text>}
      renderItem={getRenderItem}
      containerStyle={styles.containerStyle}
    />
  );
};

export default memo(DropdownComponent);

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    width: 240,
    padding: 12,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    borderRadius: 8,
    backgroundColor:
      "linear-gradient(135deg, hsl(260 73% 52%), hsl(280 65% 45%), hsl(240 50% 30%))",
  },
  subTextColor: { color: "#94a0b8" },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 18,
    color: "linear-gradient(135deg, hsl(45 100% 65%), hsl(35 90% 60%))",
  },
  containerStyle: {
    backgroundColor: "#2b2b3b",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  iconStyle: {
    width: 30,
    height: 30,
    fontSize: 20,
    textAlign: "center",
    verticalAlign: "middle",
    marginRight: 5,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
