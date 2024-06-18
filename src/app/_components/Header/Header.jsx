"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AvatarDropdown, NavLinkItem } from "@/components/_personal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { NavLinkList } from "@/app/_utils/data/data";
import { useSelector } from "react-redux";

export default function Header() {
  const pathname = usePathname();
  const user = useSelector((state) => state.auth.userAuth);

  const showHeader =
    pathname === "/sign-in" || pathname === "/create-account" ? false : true;
  return (
    <header
      className={`${
        !showHeader && "hidden"
      } w-full flex items-start md:items-center px-3 md:px-6 xl:mx-auto 2xl:max-w-[1500px] py-2 md:py-5 border-b`}>
      <Image
        src={"/next.svg"}
        width={150}
        height={96}
        alt="logo"
        className="h-12 md:h-20 "
      />
      {/* responsive navigation mobile */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex gap-2 items-center border rounded-full p-2 bg-slate-100 cursor-pointer ml-auto md:hidden">
            <AlignJustify className="h-5 w-5" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          {NavLinkList?.map((item, index) => (
            <DropdownMenuItem
              className="flex gap-2 items-center cursor-pointer"
              key={index}>
              <NavLinkItem
                pathname={pathname}
                href={item?.href}
                name={item?.name}
              />
            </DropdownMenuItem>
          ))}
          {!user ? (
            <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
              <NavLinkItem
                pathname={pathname}
                href={"sign-in"}
                name={"Đăng nhập"}
              />
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
              <NavLinkItem
                pathname={pathname}
                href={"user/user-profile"}
                name={"Trang cá nhân"}
              />
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      {/* responsive navigation pc */}
      <div className="hidden md:flex items-center ml-auto">
        <nav className="flex items-center">
          <ul className="flex items-center gap-x-8">
            {NavLinkList?.map((item, index) => (
              <li key={index}>
                <NavLinkItem
                  pathname={pathname}
                  href={item?.href}
                  name={item?.name}
                />
              </li>
            ))}
          </ul>
        </nav>
        {user ? (
          <div className="ml-8">
            <AvatarDropdown user={user} />
          </div>
        ) : (
          <Link href={"/sign-in"}>
            <Button className="rounded-full ml-8 xl:px-6 ">Đăng nhập</Button>
          </Link>
        )}
      </div>
    </header>
  );
}
