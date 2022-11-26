import { Image, Text, View, Switch } from "react-native";
import toggleSwitch from "./functions/toggleSwitch";
import styles from "./styles";

export default function ListItem({
  position,
  selectedPositions,
  setSelectedPositions,
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/map.png")} />
      <View style={styles.textContainer}>
        <View style={styles.textParameter}>
          <Text style={styles.textKey}>Timestamp: </Text>
          <Text>{position.timestamp}</Text>
        </View>
        <View style={styles.textParameter}>
          <Text style={styles.textKey}>Latitude: </Text>
          <Text>{position.coords.latitude}</Text>
        </View>
        <View style={styles.textParameter}>
          <Text style={{ ...styles.textKey, marginBottom: 0 }}>
            Longitude:{" "}
          </Text>
          <Text>{position.coords.longitude}</Text>
        </View>
      </View>
      <Switch
        trackColor={{ false: "#767577", true: "#007aff" }}
        thumbColor={"#f4f3f4"}
        onValueChange={() =>
          toggleSwitch(selectedPositions, setSelectedPositions, position)
        }
        value={
          !!selectedPositions.filter((p) => p.uuid === position.uuid).length
        }
      />
    </View>
  );
}
