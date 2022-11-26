export default (selectedPositions) => {
  const mapCoords = {
    latitude:
      selectedPositions.length > 0
        ? selectedPositions[0].coords.latitude
        : 50.0470227,
    longitude:
      selectedPositions.length > 0
        ? selectedPositions[0].coords.longitude
        : 19.9225587,
  };

  return {
    latitude: mapCoords.latitude,
    longitude: mapCoords.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
};
