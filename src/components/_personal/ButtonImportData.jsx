import { PackagePlus } from "lucide-react";
import { Button } from "../ui/button";
export default function ButtonImportData({ onClick }) {
  return (
    <div className="flex items-center" onClick={onClick}>
      <Button className="rounded-full bg-green-800 hover:bg-green-600 flex items-center gap-x-2">
        <PackagePlus color="#ffffff" />
        <span>Import Data</span>
      </Button>
    </div>
  );
}
