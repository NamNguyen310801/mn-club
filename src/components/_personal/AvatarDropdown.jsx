import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { avatarDF } from "@/assets";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function AvatarDropdown({ user }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer flex items-center gap-x-3 max-w-48">
          <Avatar>
            <AvatarImage src={user?.avatar || avatarDF?.src} alt="avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-sm max-w-32 ">
            <strong className="text-ellipsis whitespace-nowrap overflow-hidden">
              {user?.name || "Your Name"}
            </strong>
            <span className="text-ellipsis whitespace-nowrap overflow-hidden">
              {user?.email || "your@gmail.com"}
            </span>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
        <Link href={"user/user-profile"}>
          <DropdownMenuItem>Thông tin cá nhân</DropdownMenuItem>
        </Link>
        <DropdownMenuItem>Club</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
