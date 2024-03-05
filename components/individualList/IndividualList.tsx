import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useHandleToDo from "../../hooks/useHandleToDo";
import { IToDo } from "../../redux/slices/toDosSlice/toDosSlice";

interface IProps {
  toDo: IToDo;
}

function IndividualList({ toDo }: IProps) {
  const { text } = toDo;
  const { handleToggleToDo, handleDeleteToDo } = useHandleToDo({ toDo });

  return (
    <View style={styles.container}>
      <View style={styles.left_section}>
        <Text>{text}</Text>
        <TouchableOpacity onPress={handleToggleToDo} style={styles.check_box} />
      </View>

      <View style={styles.right_section}>
        <TouchableOpacity style={styles.update_button}>
          <Text style={styles.button_text}>수정</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.delete_button}>
          <Text onPress={handleDeleteToDo} style={styles.button_text}>
            삭제
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default IndividualList;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
  },
  check_box: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#aaaaaa",
    alignItems: "center",
    justifyContent: "center",
  },
  left_section: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  right_section: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  update_button: {
    backgroundColor: "#1677ff",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 10,
    paddingRight: 10,
  },
  delete_button: {
    backgroundColor: "#e46969",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button_text: {
    color: "white",
  },
});
