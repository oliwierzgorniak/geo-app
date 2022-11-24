// https://www.robinwieruch.de/react-remove-item-from-list/

import { View, FlatList, Text, Image } from "react-native";
import styles from "./styles";
import MyButton from "../../components/MyButton";
import saveLocation from "./functions/saveLocation";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <MyButton
          onPress={saveLocation}
          text="save current position"
          styles={styles.saveButton}
        />
      </View>
      {/* {items.length > 0 && (
        <FlatList
          style={{ marginTop: 20 }}
          data={items}
          renderItem={({ item }) => (
            <ListItem
              item={item}
              navigate={navigation.navigate}
              users={items}
              setUsers={setItems}
            />
          )}
        />
      )} */}
    </View>
  );
};
