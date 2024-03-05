import { useDispatch } from "react-redux";
import { toDosActions } from "../redux/slices/toDosSlice/toDosSlice";
import { Dispatch, SetStateAction } from "react";

function useHandleToDo() {
  const dispatch = useDispatch();

  const handleToggleToDo = (id: number) => {
    dispatch(toDosActions.toggleToDo(id));
  };

  const handleDeleteToDo = (id: number) => {
    dispatch(toDosActions.deleteToDo(id));
  };

  const handleUpdateToDo = (
    id: number,
    newText: string,
    setIsEditing: Dispatch<SetStateAction<boolean>>
  ) => {
    dispatch(toDosActions.updateToDo({ id, newText }));
    setIsEditing(false);
  };

  return { handleToggleToDo, handleDeleteToDo, handleUpdateToDo };
}

export default useHandleToDo;
