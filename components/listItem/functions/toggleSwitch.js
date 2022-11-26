export default (selectedPositions, setSelectedPositions, position) => {
  const isEnabled = !!selectedPositions.filter((p) => p.uuid === position.uuid)
    .length;

  if (isEnabled) {
    const newSelectedPositions = selectedPositions.filter(
      (p) => p.uuid !== position.uuid
    );
    setSelectedPositions(newSelectedPositions);
  } else {
    setSelectedPositions([...selectedPositions, position]);
  }
};
