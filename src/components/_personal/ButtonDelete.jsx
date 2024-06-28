import React from "react";
import { BsTrash } from "react-icons/bs";

const ButtonDelete = React.forwardRef((props, ref) => {
  const { onClick } = props;
  return (
    <div
      ref={ref}
      className="cursor-pointer text-xl w-8 h-8 rounded-full flex items-center justify-center bg-red-400 hover:bg-red-500 text-white active:scale-95"
      onClick={onClick}>
      <BsTrash />
    </div>
  );
});
export default ButtonDelete;
