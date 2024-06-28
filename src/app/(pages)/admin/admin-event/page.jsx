"use client";
import { useSelector } from "react-redux";
import AdminHeader from "../_components/AdminHeader";
import EventTop from "./_components/EventTop";
import EventTable from "./_components/EventTable";
import {
  setEventList,
  setIsGetEventList,
} from "@/app/_utils/store/admin.slice";
import {
  deleteEventAPI,
  getAllEventAPI,
} from "@/app/_utils/services/event.api";
import { useEffect } from "react";

export default function AdminEvent() {
  const user = useSelector((state) => state.auth.userAuth);
  const eventList = useSelector((state) => state.admin.eventList);
  const isGetEventList = useSelector((state) => state.admin.isGetEventList);
  useEffect(() => {
    getAllEvent();
  }, [isGetEventList]);

  const getAllEvent = async () => {
    const res = await getAllEventAPI();
    if (res?.status) {
      dispatch(setEventList(res));
    }
  };
  const handleDelete = async (rowData) => {
    const res = await deleteEventAPI(rowData);
    if (res?.status == 200) {
      dispatch(setIsGetEventList(!isGetEventList));
      toast("Xóa thành công!");
    } else {
      toast("Xóa không thành công!");
    }
  };
  return (
    <div className="w-full flex flex-col">
      <AdminHeader user={user} title="Quản Lý Sự Kiện" />
      <main className="w-full flex flex-col">
        <EventTop />
        <EventTable eventList={eventList} onDelete={handleDelete} />
      </main>
    </div>
  );
}
