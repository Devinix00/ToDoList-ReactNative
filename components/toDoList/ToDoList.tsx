import { View } from "react-native";
import useFilterToDos from "../../hooks/useFliterToDos";
import IndividualList from "../individualList/IndividualList";

function ToDoList() {
  const { toDoList } = useFilterToDos();

  return (
    <View>
      {toDoList.map((toDo) => (
        <IndividualList toDo={toDo} />
      ))}
    </View>
  );
}

export default ToDoList;
