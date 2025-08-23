import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useState } from "react";

const useAsyncStorageHook = () => {
  const [storeProcessing, setStoreProcessing] = useState(false);
  const [retreiveProcessing, setRetreiveProcessing] = useState(false);

  const storeData = useCallback(async (key = "", value = "") => {
    setStoreProcessing(true);
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error("Error storing data:", e);
    } finally {
      setStoreProcessing(false);
    }
  }, []);

  const retrieveData = useCallback(async (key = "") => {
    setRetreiveProcessing(true);
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
    } catch (e) {
      console.error("Error retrieving data:", e);
      return null;
    } finally {
      setRetreiveProcessing(false);
    }
  }, []);

  return { storeProcessing, retreiveProcessing, storeData, retrieveData };
};

export default useAsyncStorageHook;
