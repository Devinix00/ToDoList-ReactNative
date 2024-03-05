import { Pressable, TextInput, View, StyleSheet, Text } from "react-native";
import useInput from "../../hooks/useInput";
import useHandleToDo from "../../hooks/useHandleToDo";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  id: number;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}

function UpdateToDoForm({ id, setIsEditing }: IProps) {
  const { inputValue, handleChange } = useInput();
  const { handleUpdateToDo } = useHandleToDo();

  return (
    <View style={styles.input_container}>
      <TextInput
        value={inputValue}
        onChange={handleChange}
        placeholder="수정해주세요..."
        style={styles.input}
      />
      <Pressable
        onPress={() => handleUpdateToDo(id, inputValue, setIsEditing)}
        style={styles.button_container}
      >
        <Text style={styles.button_text}>수정</Text>
      </Pressable>
    </View>
  );
}

export default UpdateToDoForm;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input_container: {
    position: "relative",
    width: 180,
    height: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d9d9d9",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7.5,
    paddingBottom: 7.5,
    borderRadius: 7.5,
    height: "100%",
    fontSize: 14,
  },
  button_container: {
    position: "absolute",
    alignSelf: "flex-start",
    backgroundColor: "#1677ff",
    right: 0,
    width: 50,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 7.5,
    borderTopRightRadius: 7.5,
  },
  button_text: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
});
