import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Index from "./screens/index/Index.js";
import List from "./screens/list/List.js";
import Map from "./screens/map/Map.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="index" component={Index} />
        <Stack.Screen name="list" component={List} />
        <Stack.Screen name="map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
