import React from "react";

type Props = {};

const TodoInput = ({ CREATE_TODO }: any) => {
  return (
    <div className="flex w-full justify-between">
      <input
        type="text"
        placeholder="Add new task"
        className="bg-transparent outline-none border-[#9E78CF] border-2 rounded-xl p-3 w-3/4 text-white"
      />
      <div className="bg-[#9E78CF] w-14 h-14 text-2xl flex justify-center items-center text-white rounded-xl">
        +
      </div>
    </div>
  );
};

export default TodoInput;
