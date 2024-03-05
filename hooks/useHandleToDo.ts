import { useDispatch } from "react-redux";
import { IToDo, toDosActions } from "../redux/slices/toDosSlice/toDosSlice";

interface IProps {
  toDo: IToDo;
}

function useHandleToDo({ toDo }: IProps) {
  const dispatch = useDispatch();

  const handleToggleToDo = () => {
    dispatch(toDosActions.toggleToDo(toDo.id));
  };

  const handleDeleteToDo = () => {
    dispatch(toDosActions.deleteToDo(toDo.id));
  };

  return { handleToggleToDo, handleDeleteToDo };
}

export default useHandleToDo;
