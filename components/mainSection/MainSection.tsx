import { View, Text, StyleSheet } from "react-native";
import Breadcrumb from "../breadcrumb/Breadcrumb";

function MainSection() {
  return (
    <View style={styles.container}>
      <Breadcrumb />
    </View>
  );
}

export default MainSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
