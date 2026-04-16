import { useState } from "react";

export function useEdit() {
  const [edit, setEdit] = useState(false);
  const handleEdit = (value: boolean) => {
    setEdit(value);
  };

  return { edit, handleEdit };
}
