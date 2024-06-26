"use client";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../_components/AdminHeader";
import ClubTop from "./_components/ClubTop";
import ClubTable from "./_components/ClubTable";
import { useEffect } from "react";
import { getAllClubAPI } from "@/app/_utils/services/club.api";
import { setClubList, setIsGetClubList } from "@/app/_utils/store/admin.slice";
import { toast } from "sonner";

export default function AdminClub() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userAuth);
  const clubList = useSelector((state) => state.admin.clubList);
  const isGetClubList = useSelector((state) => state.admin.isGetClubList);
  useEffect(() => {
    getAllClub();
  }, [isGetClubList]);

  const getAllClub = async () => {
    const res = await getAllClubAPI();
    if (res?.status == 200) {
      dispatch(setClubList(res?.data));
    }
  };
  const handleDelete = async (rowData) => {
    const res = await deleteClubAPI(rowData);
    if (res?.status == 200) {
      dispatch(setIsGetClubList(!isGetClubList));
      toast("Xóa thành công!");
    } else {
      toast("Xóa không thành công!");
    }
  };
  return (
    <div className="w-full flex flex-col">
      <AdminHeader user={user} title="Quản Lý Câu Lạc Bộ" />
      <main className="w-full flex flex-col">
        <ClubTop />
        <ClubTable clubList={clubList} onDelete={handleDelete} />
      </main>
    </div>
  );
}
