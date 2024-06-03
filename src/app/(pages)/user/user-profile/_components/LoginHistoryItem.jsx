import { Button } from "@/components/ui/button";
import { FiClipboard } from "react-icons/fi";
export default function LoginHistoryItem() {
  return (
    <div className="flex items-center py-3">
      <div className="flex items-center justify-center text-primary text-[32px] xl:text-[40px] rounded-lg bg-orange-100 p-1">
        <FiClipboard />
      </div>
      <div className="flex flex-col justify-start gap-y-2 ml-4">
        <span className="text-black font-semibold">Iphone</span>
        <span className="text-primary">Date</span>
      </div>
      <div className="ml-auto">
        <Button variant="ghost" className="text-primary/80">
          Logout
        </Button>
      </div>
    </div>
  );
}
