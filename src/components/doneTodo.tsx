import React from "react";

type Props = {};

const DoneTodo = ({ todo }: any) => {
  return (
    <div className="w-full p-5 bg-[#0C0714] text-gray-400 rounded-xl mt-5">
      <p className="line-through">{todo.item}</p>
    </div>
  );
};

export default DoneTodo;
