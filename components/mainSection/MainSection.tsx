import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import ToDoList from "../toDoList/ToDoList";
import DoneList from "../doneList/DoneList";

function MainSection() {
  const { activeIndex } = useSelector((state: RootState) => state.breadcrumb);

  return (
    <View style={styles.container}>
      {activeIndex === 0 && <ToDoList />}
      {activeIndex === 1 && <DoneList />}
    </View>
  );
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
