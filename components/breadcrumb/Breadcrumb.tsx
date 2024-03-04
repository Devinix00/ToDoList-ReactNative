import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const breadcrumb = ["할 일", "아직 안 한일"];

function Breadcrumb() {
  const [breadcrumbState, setBreadcrumbState] = useState(breadcrumb[0]);

  return (
    <View style={styles.container}>
      {breadcrumb.map((item, i) => (
        <View style={item === breadcrumbState && styles.active} key={i}>
          <Text onPress={() => setBreadcrumbState(item)} style={styles.text}>
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default Breadcrumb;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  text: {
    fontSize: 16,
    paddingBottom: 5,
  },
  active: {
    borderBottomColor: "#aaaaaa",
    borderBottomWidth: 1,
  },
});
