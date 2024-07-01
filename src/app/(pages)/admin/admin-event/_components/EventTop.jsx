"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ButtonAdd, FormItem, DatePicker } from "@/components/_personal";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { createEventAPI } from "@/app/_utils/services/event.api";
import { setIsGetEventList } from "@/app/_utils/store/admin.slice";
import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import moment from "moment";
import { getBase64 } from "@/app/_utils/functions/functions";

export default function EventTop() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userAuth);

  const isGetEventList = useSelector((state) => state.admin.isGetEventList);
  const eventTypeList = useSelector((state) => state.setting.eventTypeList);
  const toDay = new Date();
  const defaultData = {
    name: "",
    userId: user?.userId ||"e4f125a1-1020-4931-bcbc-fc262b2e8abb",
    club: {
clubId:'',
clubName:''
    },
    startDate: toDay,
    endDate: "",
    location: "",
    eventTypeId: "",
    description: "a",
    banner: "",
    setting: {
      settingId: "",
      name: "",
    },
  };

  const [data, setData] = useState(defaultData);
  const handleUploadImage = async (e) => {
    const file = await getBase64(e.target.files[0]);
    setData((prev) => ({ ...prev, banner: file }));
  };
  const createEvent = async () => {
    const res = await createEventAPI({
      ...data,
      startDate: moment(data?.startDate).format(),
      endDate: moment(data?.endDate).format(),
      clubId: data?.club?.clubId,
    });
    console.log(res);

    if (res?.status == 200) {
      toast("Thêm mới sự kiện thành công!");
      dispatch(setIsGetEventList(!isGetEventList));
    } else {
      toast("Thêm mới sự kiện thất bại!");
    }
  };
  const [open, setOpen] = useState(false);
  const onOpenModal = () => {
    setOpen(!open);
    if (open) {
      setData(defaultData);
    }
  };
  return (
    <Dialog className="bg-black/20" open={open} onOpenChange={onOpenModal}>
      <div className="w-full flex p-4 items-center justify-between">
        <DialogTrigger asChild>
          <ButtonAdd />
        </DialogTrigger>
      </div>
      <DialogContent className="flex flex-col gap-y-2 lg:min-w-[620px] min-h-[550px] bg-blue-200/90">
        <h2 className="text-center font-bold text-xl capitalize">
          Thêm sự kiện
        </h2>
        <form className="grid grid-cols-2 gap-3 mt-2 text-sm">
          {/* Name */}
          <FormItem
            name="Tên Sự Kiện:"
            id="name"
            value={data?.name}
            placeHolder="Tên Sự Kiện"
            type="text"
            onChange={(e) =>
              setData((pre) => ({ ...pre, name: e.target.value }))
            }
          />
          <FormItem
            name="Đơn vị Tổ Chức:"
            id="clubName"
            value={data?.club?.clubId}
            placeHolder="Đơn vị Tổ Chức"
            type="text"
            onChange={(e) =>
              setData((pre) => ({ ...pre, club: {
                clubId:e.target.value
              } }))
            }
          />
          <div className="flex flex-col gap-y-3 relative">
            <Label htmlFor="user_startDate" className="font-semibold">
              Ngày Bắt Đầu
            </Label>
            <DatePicker
              disabled={false}
              title={"Ngày Bắt Đầu"}
              date={data?.startDate}
              setDate={(value) =>
                setData((pre) => ({ ...pre, startDate: value }))
              }
            />
          </div>
          <div className="flex flex-col gap-y-3 relative">
            <Label htmlFor="user_endDate" className="font-semibold">
              Ngày Kết Thúc
            </Label>
            <DatePicker
              disabled={false}
              title={"Ngày Kết Thúc"}
              date={data?.endDate}
              setDate={(value) =>
                setData((pre) => ({ ...pre, endDate: value }))
              }
            />
          </div>
          <FormItem
            name="Địa Điểm:"
            id="location"
            value={data?.location}
            placeHolder="Địa Điểm"
            type="text"
            onChange={(e) =>
              setData((pre) => ({ ...pre, location: e.target.value }))
            }
          />

          <div className="flex flex-col items-start gap-y-3">
            <Label htmlFor="clubCategoryId" className="">
              Loại Sự Kiện:
            </Label>
            <Select
              className="border-b"
              value={JSON.stringify(data?.setting)}
              onValueChange={(value) =>
                setData((pre) => ({
                  ...pre,
                  setting: Boolean(value)? JSON.parse(value) :defaultData?.setting,
                  eventTypeId:Boolean(value)? JSON.parse(value)?.settingId:defaultData?.eventTypeId,
                }))
              }>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Chọn Loại Sự Kiện" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Loại Sự Kiện</SelectLabel>
                  {eventTypeList?.map((item, index) => (
                    <SelectItem value={JSON.stringify(item)} key={index}>
                      {item?.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          <FormItem
            name="Banner:"
            id="banner"
            className="col-span-2"
            value={data?.banner}
            placeHolder="Banner"
            type="file"
            onChange={(e) => handleUploadImage(e)}
          />
        </form>
        <div
          className="w-full flex items-center justify-center mt-auto"
          onClick={createEvent}>
          <Button className="bg-blue-600 hover:bg-blue-500 w-1/2">Thêm</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
