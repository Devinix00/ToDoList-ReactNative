import {
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TextInputKeyPressEventData,
  View,
} from "react-native";
import useInput from "../../hooks/useInput";
import useAddToDo from "../../hooks/useAddToDo";

function AddToDoForm() {
  const { inputValue, setInputValue, handleChange } = useInput();
  const handleSubmit = useAddToDo({
    inputValue,
    setInputValue,
  });

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.input_container}>
        <TextInput
          value={inputValue}
          onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
            handleChange(e);
          }}
          placeholder="할일을 입력해주세요..."
          style={styles.input}
        />
        <Pressable onPress={handleSubmit} style={styles.button_container}>
          <Text style={styles.button_text}>추가</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

export default AddToDoForm;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input_container: {
    position: "relative",
    height: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d9d9d9",
    padding: 10,
    borderRadius: 7.5,
    height: "100%",
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
    fontSize: 16,
    fontWeight: "500",
  },
});
