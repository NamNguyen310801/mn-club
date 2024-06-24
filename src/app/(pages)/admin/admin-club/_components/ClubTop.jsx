"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ButtonAdd, DatePicker, FormItem } from "@/components/_personal";
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
import { getBase64 } from "@/app/_utils/functions/functions";
import { createClubAPI } from "@/app/_utils/services/club.api";
import { useDispatch, useSelector } from "react-redux";
import { setIsGetClubList } from "@/app/_utils/store/admin.slice";
export default function ClubTop() {
  const dispatch = useDispatch();
  const isGetClubList = useSelector((state) => state.admin.isGetClubList);

  const defaultData = {
    manager_id: "",
    name: "",
    code: "",
    founding_date: "",
    club_category_id: 1,
    status: "",
    member_count: 0,
    avatar: "",
    website: "",
    description: "",
    fund_amount: "",
    email: "",
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
  const createClub = async () => {
    const res = await createClubAPI(data);
    if (res?.status == 200) {
      toast("Thêm mới câu lạc bộ thành công");
      dispatch(setIsGetClubList(!isGetClubList));
    } else {
      toast("Thêm mới câu lạc bộ thất bại");
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
          Thêm mới Câu lạc bộ
        </h2>
        <form className="grid grid-cols-2 gap-3 mt-2 text-sm">
          {/* Name */}
          <FormItem
            name="Tên Câu Lạc Bộ:"
            id="name"
            value={data?.name}
            placeHolder="Tên Câu Lạc Bộ"
            type="text"
            onChange={(e) =>
              setData((pre) => ({ ...pre, name: e.target.value }))
            }
          />
          {/* Code */}
          <FormItem
            name="Tên Viết Tắt:"
            id="code"
            value={data?.code}
            placeHolder="Tên Viết Tắt"
            type="text"
            onChange={(e) =>
              setData((pre) => ({ ...pre, code: e.target.value }))
            }
          />
          {/* Manager */}
          <FormItem
            name="Chủ nhiệm:"
            id="manager_id"
            value={data?.manager_id}
            placeHolder="Chủ nhiệm"
            type="text"
            className="w-1/2"
            onChange={(e) =>
              setData((pre) => ({ ...pre, manager_id: e.target.value }))
            }
          />
          {/* ClubCate */}
          <div className="flex flex-col items-start gap-y-3">
            <Label htmlFor="club_category_id" className="">
              Loại Câu Lạc Bộ:
            </Label>
            <Select
              className="border-b"
              onValueChange={(value) =>
                setData((pre) => ({ ...pre, club_category_id: Number(value) }))
              }>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Chọn Loại Câu Lạc Bộ" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Loại Câu Lạc Bộ</SelectLabel>
                  <SelectItem value={"1"}>Admin</SelectItem>
                  <SelectItem value={"2"}>Manage</SelectItem>
                  <SelectItem value={"3"}>Basic</SelectItem>
                  <SelectItem value={"4"}>Guest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* founding date */}
          <div className="flex flex-col gap-y-3 relative">
            <Label htmlFor="user_profile_date" className="font-semibold">
              Ngày thành Lập
            </Label>
            <DatePicker
              disabled={false}
              title={"Ngày thành Lập"}
              date={data?.founding_date}
              setDate={(value) =>
                setData((pre) => ({ ...pre, founding_date: value }))
              }
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
          {/* member count */}
          <FormItem
            name="Quỹ:"
            id="fund_amount"
            value={data?.fund_amount}
            placeHolder="Quỹ"
            type="number"
            onChange={(e) =>
              setData((pre) => ({ ...pre, fund_amount: e.target.value }))
            }
          />
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
          <FormItem
            name="Email:"
            id="code"
            value={data?.email}
            placeHolder="Email"
            type="email"
            onChange={(e) =>
              setData((pre) => ({ ...pre, email: e.target.value }))
            }
          />
          <FormItem
            name="Website:"
            id="code"
            value={data?.website}
            placeHolder="Website"
            type="text"
            onChange={(e) =>
              setData((pre) => ({ ...pre, website: e.target.value }))
            }
          />
          <FormItem
            name="Mô tả:"
            id="code"
            value={data?.description}
            placeHolder="Mô tả"
            type="text"
            onChange={(e) =>
              setData((pre) => ({ ...pre, description: e.target.value }))
            }
          />
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
          onClick={onSubmit}>
          <Button className="bg-blue-600 hover:bg-blue-500 w-1/2">Thêm</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
