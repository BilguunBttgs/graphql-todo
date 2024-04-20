import { useMutation } from "@apollo/client";
import React, { useState } from "react";

type Props = {};

const TodoInput = ({ CREATE_TODO, refetch }: any) => {
  const [inputValue, setInputValue] = useState("");
  const [createTodo, { data, loading, error }] = useMutation(CREATE_TODO);
  const handleAdd = async () => {
    await createTodo({
      variables: {
        item: inputValue,
      },
    });
    await refetch();
    setInputValue("");
  };

  return (
    <div className="flex w-full justify-between">
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
        type="text"
        placeholder="Add new task"
        className="bg-transparent outline-none border-[#9E78CF] border-2 rounded-xl p-3 w-3/4 text-white"
      />
      <div
        onClick={handleAdd}
        className="bg-[#9E78CF] w-14 h-14 text-2xl flex justify-center 
      items-center text-white rounded-xl cursor-pointer"
      >
        {loading ? "..." : "+"}
      </div>
    </div>
  );
};

export default TodoInput;
