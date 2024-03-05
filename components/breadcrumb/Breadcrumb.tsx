import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setActiveIndex } from "../../redux/slices/breadcrumbSlice/breadcrumbSlice";
import { RootState } from "../../redux/store/store";

function Breadcrumb() {
  const dispatch = useDispatch();
  const { items, activeIndex } = useSelector(
    (state: RootState) => state.breadcrumb
  );

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={index === activeIndex ? styles.active : null}>
          <Text
            onPress={() => dispatch(setActiveIndex(index))}
            style={styles.text}
          >
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
    gap: 15,
    paddingLeft: 10,
    paddingRight: 10,
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
