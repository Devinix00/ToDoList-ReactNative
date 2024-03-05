import { useState } from "react";

function useIsEditing() {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return { isEditing, setIsEditing, handleEdit };
}

export default useIsEditing;
