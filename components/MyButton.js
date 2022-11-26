import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function MyButton({
  text,
  onPress,
  stylesContainer,
  stylesText,
}) {
  return (
    <TouchableOpacity
      style={stylesContainer ? stylesContainer : myStyles.button}
      onPress={onPress}
    >
      <Text style={stylesText ? stylesText : myStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const myStyles = StyleSheet.create({
  container: {
    backgroundColor: "#2e7d32",
    padding: 8,
    borderRadius: 5,
    marginRight: 7,
  },
  text: {
    color: "#ffffff",
  },
});
