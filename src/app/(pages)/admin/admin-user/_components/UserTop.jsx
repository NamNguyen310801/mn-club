"use client";
import { FormItem, SearchInput } from "@/components/_personal";
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
import { useState } from "react";
import { getBase64 } from "@/app/_utils/functions/funtions";
export default function UserTop() {
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
  const handleUploadImage = async (e) => {
    const image = await getBase64(e.target.files[0]);
    setData((prev) => ({ ...prev, avatar: image }));
  };
  const onSubmit = () => {
    console.log(data);
    toast("submit");
  };
  return (
    <Dialog className="bg-black/20">
      <div className="w-full flex p-4 items-center justify-between">
        <DialogTrigger asChild>
          <div className="flex items-center">
            <Button className="rounded-full bg-blue-800 hover:bg-blue-600 flex items-center gap-x-2">
              <UserPlus color="#ffffff" />
              <span>ADD NEW </span>
            </Button>
          </div>
        </DialogTrigger>
        <SearchInput />
      </div>
      <DialogContent className="flex flex-col gap-y-2 lg:min-w-[620px] min-h-[550px] bg-blue-200/90">
        <h2 className="text-center font-bold text-xl">ADD USER</h2>
        <form className="flex flex-col gap-y-2 mt-2 text-sm">
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
            name="Username:"
            id="username"
            value={data?.username}
            placeHolder="Username"
            type="text"
            onChange={(e) =>
              setData((pre) => ({ ...pre, username: e.target.value }))
            }
          />
          {/* phone */}
          <div className="flex w-full items-center gap-x-1">
            <FormItem
              name="Phone:"
              id="phone_number"
              value={data?.phone_number}
              placeHolder="Phone"
              type="tel"
              className="w-1/2 "
              onChange={(e) =>
                setData((pre) => ({ ...pre, phone_number: e.target.value }))
              }
            />

            <div className="flex items-center gap-x-2 w-1/2">
              <Label htmlFor="role" className="text-right min-w-20">
                Role:
              </Label>
              <Select
                className="border-b"
                onValueChange={(value) =>
                  setData((pre) => ({ ...pre, role_id: Number(value) }))
                }>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Role</SelectLabel>
                    <SelectItem value={"1"}>Admin</SelectItem>
                    <SelectItem value={"2"}>Manage</SelectItem>
                    <SelectItem value={"3"}>Basic</SelectItem>
                    <SelectItem value={"4"}>Guest</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* last name */}
          <div className="flex w-full items-center gap-x-1">
            <FormItem
              name="Last Name:"
              id="last_name"
              value={data?.last_name}
              placeHolder="Last Name"
              type="text"
              className="w-1/2"
              onChange={(e) =>
                setData((pre) => ({ ...pre, last_name: e.target.value }))
              }
            />
            <FormItem
              name="First Name:"
              id="first_name"
              value={data?.first_name}
              placeHolder="First Name"
              type="text"
              className="w-1/2"
              onChange={(e) =>
                setData((pre) => ({ ...pre, first_name: e.target.value }))
              }
            />
          </div>

          {/* address */}
          <FormItem
            name="Address:"
            id="address"
            value={data?.address}
            placeHolder="Address"
            type="text"
            onChange={(e) =>
              setData((pre) => ({ ...pre, address: e.target.value }))
            }
          />

          {/* description */}
          <FormItem
            name="Des:"
            id="description"
            value={data?.description}
            placeHolder="Description"
            type="text"
            onChange={(e) =>
              setData((pre) => ({ ...pre, description: e.target.value }))
            }
          />
          {/* student code */}
          <div className="flex w-full items-center gap-x-1">
            <FormItem
              name="Student Code:"
              id="student_code"
              value={data?.student_code}
              placeHolder="Student Code"
              type="text"
              className="w-1/2"
              onChange={(e) =>
                setData((pre) => ({ ...pre, student_code: e.target.value }))
              }
            />
            <FormItem
              name="Avatar:"
              id="avatar"
              value={data?.avatar}
              placeHolder="Avatar"
              type="file"
              className="w-1/2"
              onChange={(e) => handleUploadImage(e)}
            />
          </div>
          {/* pass */}

          <div className="flex w-full items-center gap-x-1">
            <FormItem
              name="Password:"
              id="password"
              value={data?.password}
              placeHolder="Password"
              type="text"
              className="w-1/2"
              onChange={(e) =>
                setData((pre) => ({ ...pre, password: e.target.value }))
              }
            />
            {/* <FormItem
              name="Password:"
              id="password"
              value={data?.password}
              placeHolder="Password"
              type="text"
              className="w-1/2"
              onChange={(e) =>
                setData((pre) => ({ ...pre, password: e.target.value }))
              }
            /> */}
          </div>
        </form>
        <div
          className="w-full flex items-center justify-center mt-auto"
          onClick={onSubmit}>
          <Button className="bg-blue-600 hover:bg-blue-500 w-1/2">Add</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
