import MapView, { Marker } from "react-native-maps";
import getInitialRegion from "./functions/getInitalRegion";

export default ({ route }) => {
  const { selectedPositions } = route.params;
  const mapInitialRegion = getInitialRegion(selectedPositions);

  return (
    <MapView style={{ flex: 1 }} initialRegion={mapInitialRegion}>
      {selectedPositions.map((position) => (
        <Marker
          coordinate={{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }}
          key={position.uuid}
        />
      ))}
    </MapView>
  );
};
