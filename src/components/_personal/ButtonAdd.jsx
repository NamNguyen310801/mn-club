import { PackagePlus } from "lucide-react";
import { Button } from "../ui/button";
import React from "react";
const ButtonAdd = React.forwardRef((props, ref) => {
  const { onClick } = props;
  return (
    <div className="flex items-center" onClick={onClick} ref={ref}>
      <Button className="rounded-full bg-blue-800 hover:bg-blue-600 flex items-center gap-x-2">
        <PackagePlus color="#ffffff" />
        <span>Thêm mới</span>
      </Button>
    </div>
  );
});

export default ButtonAdd;
