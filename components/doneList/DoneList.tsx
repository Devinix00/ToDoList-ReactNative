import { View } from "react-native";
import useFilterToDos from "../../hooks/useFliterToDos";
import IndividualList from "../individualList/IndividualList";

function DoneList() {
  const { doneList } = useFilterToDos();

  return (
    <View>
      {doneList.map((toDo) => (
        <IndividualList toDo={toDo} />
      ))}
    </View>
  );
}

export default DoneList;
