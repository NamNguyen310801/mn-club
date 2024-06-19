"use client";
import { resetUserAuth } from "@/app/_utils/store/auth.slice";
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
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function AvatarDropdown({ user }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const onSignOut = () => {
    sessionStorage.clear();
    dispatch(resetUserAuth());
    router.push("/sign-in");
  };
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
        {user?.role === 3 && (
          <Link href={"admin"}>
            <DropdownMenuItem className="cursor-pointer">
              Trang quản lý
            </DropdownMenuItem>
          </Link>
        )}
        {user?.role === 2 && (
          <Link href={"manager"}>
            <DropdownMenuItem className="cursor-pointer">
              Trang quản lý
            </DropdownMenuItem>
          </Link>
        )}
        <Link href={"user/user-profile"}>
          <DropdownMenuItem className="cursor-pointer">
            Trang cá nhân
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="cursor-pointer">
          Câu lạc bộ
        </DropdownMenuItem>
        <div onClick={onSignOut}>
          <DropdownMenuItem className="cursor-pointer">
            Đăng xuất
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
