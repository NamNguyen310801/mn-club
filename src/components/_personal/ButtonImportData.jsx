import React from "react";
import { PackagePlus } from "lucide-react";
import { Button } from "../ui/button";
const ButtonImportData = React.forwardRef((props, ref) => {
  const { onClick } = props;
  return (
    <div className="flex items-center" onClick={onClick} ref={ref}>
      <Button className="rounded-full bg-green-700 hover:bg-green-600 flex items-center gap-x-2">
        <PackagePlus color="#ffffff" />
        <span>Import Data</span>
      </Button>
    </div>
  );
});
export default ButtonImportData;
