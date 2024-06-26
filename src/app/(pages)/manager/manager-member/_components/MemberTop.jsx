"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ButtonAdd, DatePicker, FormItem } from "@/components/_personal";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useDispatch, useSelector } from "react-redux";
export default function MemberTop() {
  const dispatch = useDispatch();
  const defaultData = {
    id: "",
    name: "",
    date: "",
    status: true,
    member_count: 0,
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
      <DialogContent className="flex flex-col gap-y-2 lg:min-w-[620px] min-h-[350px] bg-yellow-50/90">
        <h2 className="text-center font-bold text-xl capitalize">
          Thêm mới Giải thưởng
        </h2>
        <form className="grid grid-cols-2 gap-3 mt-2 text-sm">
          {/* Name */}
          <FormItem
            name="Tên Giải thưởng:"
            id="name"
            value={data?.name}
            placeHolder="Tên Giải thưởng"
            type="text"
            onChange={(e) =>
              setData((pre) => ({ ...pre, name: e.target.value }))
            }
          />
          {/* founding date */}
          <div className="flex flex-col gap-y-3 relative">
            <Label htmlFor="user_profile_date" className="font-semibold">
              Ngày
            </Label>
            <DatePicker
              disabled={false}
              title={"Ngày"}
              date={data?.date}
              setDate={(value) => setData((pre) => ({ ...pre, date: value }))}
            />
          </div>
          {/* member count */}
          <FormItem
            name="Số Lượng Thành Viên:"
            id="member_count"
            value={data?.member_count}
            placeHolder="Số Lượng Thành Viên"
            type="number"
            onChange={(e) =>
              setData((pre) => ({ ...pre, member_count: e.target.value }))
            }
          />{" "}
          {/* status */}
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
                  status: value === "true" ? true : false,
                }))
              }>
              <div className="flex items-center gap-x-3">
                <RadioGroupItem value="true" id="status_1" />
                <Label htmlFor="status_1">Đang hoạt động</Label>
              </div>
              <div className="flex items-center gap-x-3">
                <RadioGroupItem value="false" id="status_2" />
                <Label htmlFor="status_2">Không hoạt động</Label>
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
