"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
export default function DialogEditPassword() {
  const [isPassword, setIsPassword] = useState(true);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="text-red-500 font-semibold hover:text-yellow-600 -ml-3 px-3">
          Edit Password
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle> Edit Password</DialogTitle>
          <DialogDescription>
            Make changes to your password here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-6 relative">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="current_password" className="text-right">
              Current Password
            </Label>
            <Input
              id="current_password"
              defaultValue=""
              className="col-span-3 border"
              type={isPassword ? "password" : "text"}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="new_password" className="text-right">
              New Password
            </Label>
            <Input
              id="new_password"
              defaultValue=""
              className="col-span-3 border"
              type={isPassword ? "password" : "text"}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="confirm_new_password" className="text-right">
              Confirm New Password
            </Label>
            <Input
              id="confirm_new_password"
              defaultValue=""
              className="col-span-3 border"
              type={isPassword ? "password" : "text"}
            />
          </div>
          {isPassword ? (
            <div
              className="absolute -top-1 right-4 cursor-pointer text-primary flex gap-x-2 items-center"
              onClick={() => setIsPassword(false)}>
              <span className="text-sm">Show</span>
              <AiOutlineEyeInvisible className="text-2xl" />
            </div>
          ) : (
            <div
              className="absolute -top-1 right-4 cursor-pointer text-primary flex gap-x-2 items-center"
              onClick={() => setIsPassword(true)}>
              <span className="text-sm">Hidden</span>
              <AiOutlineEye className="text-2xl" />
            </div>
          )}
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
