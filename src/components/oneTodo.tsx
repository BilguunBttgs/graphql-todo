import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FiTrash } from "react-icons/fi";
type Props = {};

const OneTodo = ({ todo }: any) => {
  return (
    <div className="w-full p-5 bg-[#0C0714] text-[#9E78CF] rounded-xl mt-5 flex justify-between">
      <p>{todo.item}</p>
      <div className="flex gap-5">
        <FaCheck size={30} />
        <FiTrash size={30} />
      </div>
    </div>
  );
};

export default OneTodo;
