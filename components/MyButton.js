import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function MyButton({ text, onPress, styles }) {
  return (
    <TouchableOpacity style={styles ? styles.myButton: myStyles.button} onPress={onPress}>
      <Text style={styles ? styles.myButtonText: myStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const myStyles = StyleSheet.create({
  button: {
    backgroundColor: "#2e7d32",
    padding: 8,
    borderRadius: 5,
    marginRight: 7
    
  },
  text: {
    color: '#ffffff'
  }
});
