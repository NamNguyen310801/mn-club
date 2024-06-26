import { Eye } from "lucide-react";

export default function ButtonView({ onClick }) {
  return (
    <div
      className="cursor-pointer text-xl w-8 h-8 rounded-full flex items-center justify-center bg-gray-500 hover:bg-gray-600 text-white active:scale-95"
      onClick={onClick}>
      <Eye />
    </div>
  );
}
