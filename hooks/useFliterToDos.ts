import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

function useFilterToDos() {
  const toDos = useSelector((state: RootState) => state.toDos);

  const toDoList = toDos.filter((toDo) => toDo.completed === false);
  const doneList = toDos.filter((toDo) => toDo.completed === true);

  return { toDoList, doneList };
}

export default useFilterToDos;
