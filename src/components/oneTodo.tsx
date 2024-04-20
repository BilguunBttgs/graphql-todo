import { useMutation } from "@apollo/client";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FiTrash } from "react-icons/fi";
type Props = {};

const OneTodo = ({ todo, DELETE_TODO, refetch }: any) => {
  const [deleteTodo, { data, loading, error }] = useMutation(DELETE_TODO);
  const handleDelete = async () => {
    await deleteTodo({ variables: { id: todo._id } });
    await refetch();
  };
  return (
    <div className="w-full p-5 bg-[#0C0714] text-[#9E78CF] rounded-xl mt-5 flex justify-between">
      <p>{todo.item}</p>
      <div className="flex gap-5">
        <FaCheck size={30} />
        <FiTrash
          className="cursor-pointer"
          onClick={() => handleDelete()}
          size={30}
        />
      </div>
    </div>
  );
};

export default OneTodo;
