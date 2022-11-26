import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function getAndSetPositions(setPositions) {
  const keys = await AsyncStorage.getAllKeys();
  const stores = await AsyncStorage.multiGet(keys);
  const loadedPositions = stores.map((result) => JSON.parse(result[1]));
  setPositions(loadedPositions);
}
