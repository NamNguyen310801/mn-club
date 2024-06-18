"use client";
import { Badge } from "@mui/material";
import { Bell, Mail } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AvatarDropdown, NotifyItem } from "@/components/_personal";
import { Button } from "@/components/ui/button";
export default function ManagerHeader({ user = null, title = "" }) {
  return (
    <header className="h-20 shadow-lg">
      <div className="flex items-center w-full p-4 gap-x-8">
        <div className="text-xl font-bold">{title}</div>
        <div className="flex items-center gap-x-4 ml-auto">
          {/* Massage */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer">
                <Badge badgeContent={4} color="primary">
                  <Mail />
                </Badge>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="text-center text-lg">
                My Message
              </DropdownMenuLabel>
              <ul className="w-[300px] flex flex-col gap-y-1 max-h-[300px] overflow-y-scroll">
                <li>
                  <DropdownMenuItem asChild>
                    <NotifyItem />
                  </DropdownMenuItem>
                </li>
                <li>
                  <DropdownMenuItem asChild>
                    <NotifyItem />
                  </DropdownMenuItem>
                </li>
                <li>
                  <DropdownMenuItem asChild>
                    <NotifyItem />
                  </DropdownMenuItem>
                </li>
                <li>
                  <DropdownMenuItem asChild>
                    <NotifyItem />
                  </DropdownMenuItem>
                </li>
                <li>
                  <DropdownMenuItem asChild>
                    <NotifyItem />
                  </DropdownMenuItem>
                </li>
              </ul>
              <div className="w-full mt-1">
                <Button className="w-full bg-blue-600 hover:bg-blue-500">
                  View all Message
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notify */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer">
                <Badge badgeContent={4} color="primary">
                  <Bell />
                </Badge>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="text-center text-lg">
                My Notify (4)
              </DropdownMenuLabel>
              <ul className="w-[300px] flex flex-col gap-y-1 max-h-[300px] overflow-y-scroll">
                <li>
                  <DropdownMenuItem asChild>
                    <NotifyItem />
                  </DropdownMenuItem>
                </li>
                <li>
                  <DropdownMenuItem asChild>
                    <NotifyItem />
                  </DropdownMenuItem>
                </li>
                <li>
                  <DropdownMenuItem asChild>
                    <NotifyItem />
                  </DropdownMenuItem>
                </li>
                <li>
                  <DropdownMenuItem asChild>
                    <NotifyItem />
                  </DropdownMenuItem>
                </li>
                <li>
                  <DropdownMenuItem asChild>
                    <NotifyItem />
                  </DropdownMenuItem>
                </li>
              </ul>
              <div className="w-full mt-1">
                <Button className="w-full bg-blue-600 hover:bg-blue-500">
                  View all notifications
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* Account */}
        <AvatarDropdown user={user} />
      </div>
    </header>
  );
}
