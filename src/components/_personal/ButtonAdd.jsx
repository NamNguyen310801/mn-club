import { PackagePlus } from "lucide-react";
import { Button } from "../ui/button";
export default function ButtonAdd({ onClick }) {
  return (
    <div className="flex items-center" onClick={onClick}>
      <Button className="rounded-full bg-blue-800 hover:bg-blue-600 flex items-center gap-x-2">
        <PackagePlus color="#ffffff" />
        <span>ADD NEW </span>
      </Button>
    </div>
  );
}
