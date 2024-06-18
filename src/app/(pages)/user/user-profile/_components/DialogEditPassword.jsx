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
import { toast } from "sonner";
export default function DialogEditPassword() {
  const [isPassword, setIsPassword] = useState(true);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const checkCurrentPassword = currentPassword === "" ? true : false;
  const checkConfirm =
    newPassword !== "" && newPassword === confirmNewPassword ? true : false;
  const onChangePassword = () => {
    if (!checkCurrentPassword) {
      toast("Mật khẩu hiện tại không chính xác!");
    } else if (!checkConfirm) {
      toast("Mật khẩu mới không khớp!");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="text-red-500 font-semibold hover:text-yellow-600 -ml-3 px-3">
          Đổi mật khẩu
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Đổi mật khẩu</DialogTitle>
          <DialogDescription>
            Thực hiện thay đổi mật khẩu của bạn ở đây. Nhấp vào lưu khi bạn hoàn
            tất.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-6 relative">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="current_password" className="text-right">
              Mật khẩu hiện tại
            </Label>
            <Input
              id="current_password"
              value={currentPassword}
              className="col-span-2 border"
              type={isPassword ? "password" : "text"}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="new_password" className="text-right">
              Mật khẩu mới
            </Label>
            <Input
              id="new_password"
              value={newPassword}
              className="col-span-2 border"
              type={isPassword ? "password" : "text"}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="confirm_new_password" className="text-right">
              Xác nhận mật khẩu
            </Label>
            <Input
              id="confirm_new_password"
              value={confirmNewPassword}
              className="col-span-2 border"
              type={isPassword ? "password" : "text"}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>
          {isPassword ? (
            <div
              className="absolute -top-1 right-4 cursor-pointer text-primary flex gap-x-2 items-center"
              onClick={() => setIsPassword(false)}>
              <span className="text-sm">Hiện</span>
              <AiOutlineEyeInvisible className="text-2xl" />
            </div>
          ) : (
            <div
              className="absolute -top-1 right-4 cursor-pointer text-primary flex gap-x-2 items-center"
              onClick={() => setIsPassword(true)}>
              <span className="text-sm">Ẩn</span>
              <AiOutlineEye className="text-2xl" />
            </div>
          )}
        </div>
        <DialogFooter>
          <Button type="submit" onClick={onChangePassword}>
            Lưu
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
