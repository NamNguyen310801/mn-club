"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ButtonAdd, FormItem } from "@/components/_personal";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function ClubTop() {
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
  return (
    <Dialog className="bg-black/20">
      <div className="w-full flex p-4 items-center justify-between">
        <DialogTrigger asChild>
          <ButtonAdd />
        </DialogTrigger>
      </div>
      <DialogContent className="flex flex-col gap-y-2 lg:min-w-[620px] min-h-[550px] bg-blue-200/90">
        <h2 className="text-center font-bold text-xl capitalize">
          Thêm mới Câu lạc bộ
        </h2>
        <form className="grid grid-cols-2 gap-3 mt-2 text-sm">
          {/* Email */}
          <FormItem
            name="Tên Viết Tắt:"
            id="email"
            value={data?.email}
            placeHolder="Tên Viết Tắt"
            type="email"
            onChange={(e) =>
              setData((pre) => ({ ...pre, email: e.target.value }))
            }
          />

          {/* Username */}
          <FormItem
            name="Tên Câu Lạc Bộ:"
            id="username"
            value={data?.username}
            placeHolder="Tên Câu Lạc Bộ"
            type="text"
            onChange={(e) =>
              setData((pre) => ({ ...pre, username: e.target.value }))
            }
          />
          {/* phone */}
          <FormItem
            name="Chủ nhiệm:"
            id="phone_number"
            value={data?.phone_number}
            placeHolder="Chủ nhiệm"
            type="tel"
            className="w-1/2"
            onChange={(e) =>
              setData((pre) => ({ ...pre, phone_number: e.target.value }))
            }
          />

          {/* last name */}
          <div className="flex flex-col items-start gap-y-3">
            <Label htmlFor="role" className="">
              Loại Câu Lạc Bộ:
            </Label>
            <Select
              className="border-b"
              onValueChange={(value) =>
                setData((pre) => ({ ...pre, role_id: Number(value) }))
              }>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Chọn Loại Câu Lạc Bộ" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Vai trò</SelectLabel>
                  <SelectItem value={"1"}>Admin</SelectItem>
                  <SelectItem value={"2"}>Manage</SelectItem>
                  <SelectItem value={"3"}>Basic</SelectItem>
                  <SelectItem value={"4"}>Guest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* student code */}

          <FormItem
            name="Ngày thành Lập:"
            id="student_code"
            value={data?.student_code}
            placeHolder="Ngày thành Lập"
            type="text"
            className="w-1/2"
            onChange={(e) =>
              setData((pre) => ({ ...pre, student_code: e.target.value }))
            }
          />

          {/* address */}
          <FormItem
            name="Số Lượng Thành Viên:"
            id="address"
            value={data?.address}
            placeHolder="Số Lượng Thành Viên"
            type="number"
            onChange={(e) =>
              setData((pre) => ({ ...pre, address: e.target.value }))
            }
          />
          {/* enable */}
          <div className="flex flex-col items-start gap-y-3">
            <Label htmlFor="role" className="">
              Trạng Thái:
            </Label>
            <RadioGroup
              defaultValue="true"
              className="flex justify-between items-center w-full px-4"
              onValueChange={(value) =>
                setData((pre) => ({
                  ...pre,
                  enable: value === "true" ? true : false,
                }))
              }>
              <div className="flex items-center gap-x-3">
                <RadioGroupItem value="true" id="enable_1" />
                <Label htmlFor="enable_1">Active</Label>
              </div>
              <div className="flex items-center gap-x-3">
                <RadioGroupItem value="false" id="enable_2" />
                <Label htmlFor="enable_2">Inactive</Label>
              </div>
            </RadioGroup>
          </div>
        </form>
        <div
          className="w-full flex items-center justify-center mt-auto"
          onClick={onSubmit}>
          <Button className="bg-blue-600 hover:bg-blue-500 w-1/2">Thêm</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
