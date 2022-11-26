import { Text, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import { loadAsync } from "expo-font";
import styles from "./styles";
import { useEffect, useState } from "react";

export default ({ navigation }) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  useEffect(() => {
    const loadAndManageFont = async () => {
      await loadAsync({
        karla: require("../../assets/fonts/Karla/karla.ttf"),
      });
      setIsFontLoaded(true);
    };
    loadAndManageFont();
  }, []);

  return isFontLoaded ? (
    <TouchableOpacity
      onPress={() => navigation.navigate("list")}
      style={styles.container}
    >
      <Text style={styles.title}>GeoApp</Text>
      <Image style={styles.image} source={require("../../assets/map.png")} />
    </TouchableOpacity>
  ) : (
    <ActivityIndicator />
  );
};
