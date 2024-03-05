import { useDispatch } from "react-redux";
import { toDosActions } from "../redux/slices/toDosSlice/toDosSlice";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

function useAddToDo({ inputValue, setInputValue }: IProps) {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!inputValue) return;
    dispatch(toDosActions.addToDo(inputValue));
    setInputValue("");
  };

  return handleSubmit;
}

export default useAddToDo;
