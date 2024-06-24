"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ButtonEdit, FormItem } from "@/components/_personal";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { updateEventAPI } from "@/app/_utils/services/event.api";
import { useDispatch, useSelector } from "react-redux";
import { setIsGetEventList } from "@/app/_utils/store/admin.slice";
export default function EditEventDialog() {
  const dispatch = useDispatch();
  const isGetEventList = useSelector((state) => state.admin.isGetEventList);
  const defaultData = {
    user_id: "",
    username: "",
    email: "",
    role_id: 1,
    first_name: "",
    last_name: "",
    address: "",
    phone_number: "",
    avatar: "",
    student_code: "",
    description: "",
    enable: true,
    password: "",
    verify: "",
  };
  const [data, setData] = useState(defaultData);
  const onSubmit = () => {
    console.log(data);
    toast("submit");
  };
  const updateEvent = async () => {
    const res = await updateEventAPI(data);
    if (res.status == 200) {
      toast("Cập nhật thành công!");
      dispatch(setIsGetEventList(!isGetEventList));
    } else {
      toast("Cập nhật thất bại!");
    }
  };
  return (
    <Dialog className="bg-black/20">
      <div className="w-full flex p-4 items-center justify-between">
        <DialogTrigger asChild>
          <ButtonEdit />
        </DialogTrigger>
      </div>
      <DialogContent className="flex flex-col gap-y-2 lg:min-w-[620px] min-h-[550px] bg-blue-200/90">
        <h2 className="text-center font-bold text-xl capitalize">
          Cập Nhật Sự Kiện
        </h2>
        <form className="flex flex-col gap-y-2 mt-2 text-sm"></form>
        <div
          className="w-full flex items-center justify-center mt-auto"
          onClick={onSubmit}>
          <Button className="bg-blue-600 hover:bg-blue-500 w-1/2">
            Cập nhật
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
