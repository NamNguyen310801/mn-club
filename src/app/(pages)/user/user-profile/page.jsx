"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DialogEditPassword from "./_components/DialogEditPassword";
import LoginHistoryItem from "./_components/LoginHistoryItem";
import { FaCamera } from "react-icons/fa6";
import { RiLoginCircleLine } from "react-icons/ri";
import { useState } from "react";
import { toast } from "sonner";
import { getBase64 } from "@/app/_utils/functions/funtions";
export default function UserProfile() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const handleUploadImage = async (e) => {
    const image = await getBase64(e.target.files[0]);
    setData((prev) => ({ ...prev, avatar: image }));
  };
  const onEditUser = () => {
    toast("Update success");
    setIsEdit(false);
  };
  return (
    <div className="min-h-screen container flex flex-col  gap-y-4 xl:gap-y-6 pb-10 xl:pb-20">
      <h3 className="text-xl font-bold pt-5">Edit Profile</h3>
      <div className="flex items-center gap-x-6">
        <div className="relative w-14 h-14 xl:w-20 xl:h-20 ">
          <img
            src={
              data?.avatar ||
              "https://media.gettyimages.com/id/1317013882/photo/munich-germany-hans-dieter-flick-head-coach-of-fc-bayern-m%C3%BCnchen-reacts-during-the-bundesliga.jpg?s=612x612&w=0&k=20&c=MdYKtSpz5Hjj83y9YPncjQVqjhmS1ExbCKyKl0UWuaI="
            }
            alt={data?.name || ""}
            className="w-full h-full rounded-full object-center object-cover"
          />
          {isEdit && (
            <Label
              htmlFor="user_profile_avatar"
              className="w-full h-ful flex items-center justify-center absolute top-0 right-0 left-0 bottom-0 bg-slate-100/20 cursor-pointer">
              <FaCamera className="text-primary text-2xl" />
              <Input
                type="file"
                id="user_profile_avatar"
                className="absolute hidden top-0 right-0"
                onChange={handleUploadImage}
              />
            </Label>
          )}
        </div>
        {!isEdit ? (
          <Button
            onClick={() => setIsEdit(true)}
            className="bg-white text-primary border border-primary hover:text-white font-semibold">
            Edit Profile
          </Button>
        ) : (
          <div className="flex items-center gap-x-3">
            <Button
              onClick={onEditUser}
              className="bg-white text-blue-500 border border-blue-500 hover:text-white hover:bg-blue-500 font-semibold">
              Save Edit
            </Button>
            <Button
              onClick={() => setIsEdit(false)}
              className="bg-white text-red-500 border border-red-500 hover:text-white hover:bg-red-500 font-semibold">
              Cancel Edit
            </Button>
          </div>
        )}
        <DialogEditPassword />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 xl:grid-cols-3 pb-6 xl:pb-10">
        <div className="flex flex-col gap-y-3">
          <Label htmlFor="user_profile_name" className="font-semibold">
            Name
          </Label>
          <Input
            id="user_profile_name"
            disabled={!isEdit}
            value={data?.name || ""}
            className="border"
            onChange={(e) =>
              setData((pre) => ({ ...pre, name: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <Label htmlFor="user_profile_phone" className="font-semibold">
            Phone Number
          </Label>
          <Input
            id="user_profile_phone"
            disabled={!isEdit}
            value={data?.phone || ""}
            className="border"
            onChange={(e) =>
              setData((pre) => ({ ...pre, phone: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <Label htmlFor="user_profile_email" className="font-semibold">
            Email
          </Label>
          <Input
            id="user_profile_email"
            disabled={!isEdit}
            value={data?.email || ""}
            className="border"
            onChange={(e) =>
              setData((pre) => ({ ...pre, email: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="w-full flex flex-col mt-6 xl:mt-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-4">
            <div className="flex items-center justify-center text-primary text-[32px] xl:text-[40px] rounded-lg bg-orange-100 p-1">
              <RiLoginCircleLine />
            </div>
            <span>Login History</span>
          </div>
          <Button className="bg-white text-primary/80 border border-primary/80 hover:text-white font-semibold">
            Logout All
          </Button>
        </div>
        <div className="flex flex-col w-full mt-6 xl:mt-10">
          <LoginHistoryItem />
          <LoginHistoryItem />
          <LoginHistoryItem />
        </div>
      </div>
    </div>
  );
}
