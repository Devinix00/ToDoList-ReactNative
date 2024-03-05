import { View, StyleSheet } from "react-native";

function MainSection() {
  return <View style={styles.container}></View>;
}

export default MainSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
});
