import { Input } from "../ui/input";
import { Search } from "lucide-react";

export default function SearchInput({ value, onChange, placeholder }) {
  return (
    <div className="w-2/5 relative text-sm">
      <Input
        placeholder={placeholder || "Search..."}
        type="text"
        className="rounded-full w-full focus-visible:ring-0 border pl-10"
        value={value}
        onChange={(e) => onChange(e)}
      />
      <Search
        color="#383F51"
        className="absolute bottom-2 left-2 cursor-pointer"
      />
    </div>
  );
}
