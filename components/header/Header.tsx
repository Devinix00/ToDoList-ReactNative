import { Text, View, StyleSheet, Platform } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>To Do App</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 30 : 10,
    paddingLeft: 10,
    paddingBottom: 10,
    display: "flex",
    justifyContent: "center",
  },

  header_text: {
    fontSize: 28,
    fontWeight: "700",
  },
});
