import { avatarDF } from "@/assets";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function AdminHeader({ user = null, title = "" }) {
  return (
    <header className="h-20 shadow-lg">
      <div className="flex items-center justify-between w-full p-4">
        <div className="text-xl font-bold">{title}</div>
        <div>
          <Avatar>
            <AvatarImage src={user?.avatar || avatarDF?.src} alt="avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
