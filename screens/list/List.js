import { useEffect, useState } from "react";
import { View, FlatList, Switch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import MyButton from "../../components/MyButton";
import ListItem from "../../components/listItem/ListItem";
import saveLocation from "./functions/saveLocation";
import getAndSetPositions from "./functions/getAndSetPositions";

export default ({ navigation }) => {
  const [positions, setPositions] = useState([]);
  const [selectedPositions, setSelectedPositions] = useState([]);
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);

  useEffect(() => {
    getAndSetPositions(setPositions);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topButtonsContainer}>
        <MyButton
          onPress={() => saveLocation(positions, setPositions)}
          text="Save position"
          stylesContainer={styles.saveButtonContainer}
          stylesText={styles.saveButtonText}
        />
        <MyButton
          onPress={async () => {
            await AsyncStorage.clear(), setPositions([]);
          }}
          text="Delete positions"
          stylesContainer={styles.deleteButtonContainer}
          stylesText={styles.deleteButtonText}
        />
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#007aff" }}
          thumbColor="#f4f3f4"
          onValueChange={() => {
            setSelectedPositions(!isSwitchEnabled ? positions : []);
            setIsSwitchEnabled(!isSwitchEnabled);
          }}
          value={isSwitchEnabled}
        />
      </View>
      <FlatList
        data={positions}
        renderItem={({ item }) => (
          <ListItem
            position={item}
            selectedPositions={selectedPositions}
            setSelectedPositions={setSelectedPositions}
          />
        )}
        style={styles.list}
      />
      <MyButton
        onPress={() =>
          navigation.navigate("map", { selectedPositions: selectedPositions })
        }
        text="Show positions"
        stylesContainer={styles.showButtonContainer}
        stylesText={styles.showButtonText}
      />
    </View>
  );
};
