"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "flowbite-react";
import { TextEditor } from "@/components/_personal";
import { toast } from "sonner";
import { getBase64 } from "@/app/_utils/functions/functions";
export default function CreateNews() {
  const [data, setData] = useState({
    avatar: null,
  });
  const handleUploadImage = async (e) => {
    if (!data?.avatar) {
      toast("Lựa chọn ảnh");
      return;
    }
    const image = await getBase64(e.target.file[0]);
    setData((pre) => ({ ...pre, avatar: image }));
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Tạo tin tức</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <Input
            type="text"
            placeholder="Title"
            required
            id="Tên"
            className="flex-1"
          />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Loai" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <Input type="file" accept="image/*" />
          <Button gradientDuoTone="purpleToBlue" type="button">
            Chọn Ảnh
          </Button>
        </div>
        <TextEditor value={data} setValue={setData} />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Tạo Tin Tức
        </Button>
      </form>
    </div>
  );
}
