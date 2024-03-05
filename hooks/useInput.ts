import { ChangeEvent, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

function useInput() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setInputValue(e.nativeEvent.text);
  };

  return { inputValue, setInputValue, handleChange };
}

export default useInput;
