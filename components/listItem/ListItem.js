import { Image, Text, View } from "react-native";
import styles from "./styles";
import MyButton from '../MyButton';
import handleDeleteButton from './functions/handleDeleteButton';


export default function ListItem({ item, navigate, users, setUsers}) {
  return (
    <View>
      <View style={styles.topContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/user.png")}
        />
        <View style={styles.buttonContainer}>
          <MyButton
            text="DETAILS"
            onPress={() => navigate("details", { item: item })}
          />
          <MyButton
            text="DELETE"
            onPress={() =>
              handleDeleteButton(item.id, navigate, users, setUsers)
            }
          />
        </View>
      </View>
      <Text style={styles.userText}>
        {item.id}: {item.username}
      </Text>
    </View>
  );
}
