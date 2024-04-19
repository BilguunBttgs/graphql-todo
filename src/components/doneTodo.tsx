import React from "react";

type Props = {};

const DoneTodo = (props: Props) => {
  return (
    <div className="w-full p-5 bg-[#0C0714] text-gray-400 rounded-xl mt-5">
      <p className="line-through">Geree tseverleh</p>
    </div>
  );
};

export default DoneTodo;
