import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useHandleToDo from "../../hooks/useHandleToDo";
import { IToDo } from "../../redux/slices/toDosSlice/toDosSlice";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import useIsEditing from "../../hooks/useIsEditing";
import UpdateToDoForm from "../updateToDoForm/UpdateToDoForm";

interface IProps {
  toDo: IToDo;
}

function IndividualList({ toDo }: IProps) {
  const { text, completed, id } = toDo;
  const { handleToggleToDo, handleDeleteToDo } = useHandleToDo();
  const { isEditing, setIsEditing, handleEdit } = useIsEditing();

  return (
    <View style={styles.container}>
      {isEditing ? (
        <UpdateToDoForm id={id} setIsEditing={setIsEditing}/>
      ) : (
        <View style={styles.left_section}>
          <Text>{text}</Text>
          <BouncyCheckbox
            isChecked={completed}
            onPress={() => {
              handleToggleToDo(id);
            }}
            style={styles.check_box}
          />
        </View>
      )}

      <View style={styles.right_section}>
        {isEditing ? (
          <TouchableOpacity onPress={handleEdit} style={styles.update_button}>
            <Text style={styles.button_text}>닫기</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleEdit} style={styles.update_button}>
            <Text style={styles.button_text}>수정</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={() => handleDeleteToDo(id)}
          style={styles.delete_button}
        >
          <Text style={styles.button_text}>삭제</Text>
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
  left_section: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  check_box: {
    height: 15,
    alignItems: "center",
    justifyContent: "center",
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
