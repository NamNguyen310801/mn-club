"use client";
import { ButtonEdit, FormItem, SearchInput } from "@/components/_personal";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { getBase64 } from "@/app/_utils/functions/functions";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
export default function EditUserDialog({ dataRow }) {
  const defaultData = {
    user_id: "",
    username: "",
    email: "",
    role_id: 1,
    gender: "",
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
  useEffect(() => {
    setData(dataRow);
  }, [dataRow]);

  const handleUploadImage = async (e) => {
    const image = await getBase64(e.target.files[0]);
    setData((prev) => ({ ...prev, avatar: image }));
  };
  const onUpdateUser = () => {
    console.log(data);
    toast("submit");
  };
  return (
    <Dialog className="bg-black/20">
      <DialogTrigger asChild>
        <div className="flex items-center">
          <ButtonEdit />
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-y-2 lg:min-w-[620px] min-h-[550px] bg-blue-200/90">
        <h2 className="text-center font-bold text-xl capitalize">
          Cập nhật người dùng
        </h2>
        <form className="grid grid-cols-2 gap-3 mt-2 text-sm">
          {/* Email */}
          <FormItem
            name="Email:"
            id="email"
            value={data?.email}
            placeHolder="Email"
            type="email"
            onChange={(e) =>
              setData((pre) => ({ ...pre, email: e.target.value }))
            }
          />

          {/* Username */}
          <FormItem
            name="Tên đăng nhập:"
            id="username"
            value={data?.username}
            placeHolder="Tên đăng nhập"
            type="text"
            onChange={(e) =>
              setData((pre) => ({ ...pre, username: e.target.value }))
            }
          />
          {/* phone */}
          <FormItem
            name="Số điện thoại:"
            id="phone_number"
            value={data?.phone_number}
            placeHolder="Số điện thoại"
            type="tel"
            className="w-1/2"
            onChange={(e) =>
              setData((pre) => ({ ...pre, phone_number: e.target.value }))
            }
          />
          <div className="flex flex-col items-start gap-y-3">
            <Label htmlFor="role" className="">
              Vai trò:
            </Label>
            <Select
              className="border-b"
              onValueChange={(value) =>
                setData((pre) => ({ ...pre, role_id: Number(value) }))
              }>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Chọn vai trò" />
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

          {/* last name */}
          <FormItem
            name="Tên sinh viên:"
            id="last_name"
            value={data?.last_name}
            placeHolder="Tên sinh viên"
            type="text"
            className="w-1/2"
            onChange={(e) =>
              setData((pre) => ({ ...pre, last_name: e.target.value }))
            }
          />
          {/* student code */}

          <FormItem
            name="Mã sinh viên:"
            id="student_code"
            value={data?.student_code}
            placeHolder="Mã sinh viên"
            type="text"
            className="w-1/2"
            onChange={(e) =>
              setData((pre) => ({ ...pre, student_code: e.target.value }))
            }
          />

          {/* address */}
          <FormItem
            name="Địa chỉ:"
            id="address"
            value={data?.address}
            placeHolder="Địa chỉ"
            type="text"
            onChange={(e) =>
              setData((pre) => ({ ...pre, address: e.target.value }))
            }
          />
          {/* pass */}

          <FormItem
            name="Mật khẩu:"
            id="password"
            value={data?.password}
            placeHolder="Mật khẩu"
            type="password"
            onChange={(e) =>
              setData((pre) => ({ ...pre, password: e.target.value }))
            }
          />
          {/* gender */}
          <div className="flex flex-col items-start gap-y-3">
            <Label htmlFor="role" className="">
              Giới tính:
            </Label>
            <RadioGroup
              defaultValue="1"
              className="flex justify-between items-center w-full px-4"
              onChange={(value) =>
                setData((pre) => ({ ...pre, gender: Number(value) }))
              }>
              <div className="flex items-center gap-x-3">
                <RadioGroupItem value="1" id="gender_1" />
                <Label htmlFor="gender_1">Nam</Label>
              </div>
              <div className="flex items-center gap-x-3">
                <RadioGroupItem value="2" id="gender_2" />
                <Label htmlFor="gender_2">Nữ</Label>
              </div>
              <div className="flex items-center gap-x-3">
                <RadioGroupItem value="3" id="gender_3" />
                <Label htmlFor="gender_3">Khác</Label>
              </div>
            </RadioGroup>
          </div>

          <FormItem
            name="Avatar:"
            id="avatar"
            value={data?.avatar}
            placeHolder="Avatar"
            type="file"
            onChange={(e) => handleUploadImage(e)}
          />
        </form>
        <div
          className="w-full flex items-center justify-center mt-auto"
          onClick={onUpdateUser}>
          <Button className="bg-blue-600 hover:bg-blue-500 w-1/2">
            Cập nhật
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
