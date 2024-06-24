"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ButtonAdd, FormItem } from "@/components/_personal";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { createEventAPI } from "@/app/_utils/services/event.api";
import { setIsGetEventList } from "@/app/_utils/store/admin.slice";
import { useDispatch, useSelector } from "react-redux";
export default function EventTop() {
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
  const createEvent = async () => {
    const res = await createEventAPI(data);
    if (res?.status == 200) {
      toast("Thêm mới sự kiện thành công!");
      dispatch(setIsGetEventList(!isGetEventList));
    } else {
      toast("Thêm mới sự kiện thất bại!");
    }
  };
  return (
    <Dialog className="bg-black/20">
      <div className="w-full flex p-4 items-center justify-between">
        <DialogTrigger asChild>
          <ButtonAdd />
        </DialogTrigger>
      </div>
      <DialogContent className="flex flex-col gap-y-2 lg:min-w-[620px] min-h-[550px] bg-blue-200/90">
        <h2 className="text-center font-bold text-xl capitalize">
          Thêm sự kiện
        </h2>
        <form className="grid grid-cols-2 gap-3 mt-2 text-sm"></form>
        <div
          className="w-full flex items-center justify-center mt-auto"
          onClick={onSubmit}>
          <Button className="bg-blue-600 hover:bg-blue-500 w-1/2">Thêm</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
