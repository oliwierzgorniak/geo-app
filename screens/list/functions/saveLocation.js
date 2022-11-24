import { Alert } from "react-native";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

export default async function saveLocation() {
  await Location.requestForegroundPermissionsAsync();

  Alert.alert(
    "Current position",
    "Do you want to save your current position?",
    [
      {
        text: "No",
        onPress: () => {},
      },
      {
        text: "Yes",
        onPress: async () => {
          const position = await Location.getCurrentPositionAsync({});
          const positionJSON = JSON.stringify(position);
          await AsyncStorage.setItem(uuid.v4(), positionJSON);
        },
      },
    ],
    {
      cancelable: true,
      onDismiss: () => {},
    }
  );
}
