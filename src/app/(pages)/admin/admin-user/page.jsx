"use client";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../_components/AdminHeader";
import UserTable from "./_components/UserTable";
import UserTop from "./_components/UserTop";
import { deleteUserAPI, getAllUserAPI } from "@/app/_utils/services/user.api";
import { setIsGetUserList, setUserList } from "@/app/_utils/store/admin.slice";
import { useEffect } from "react";

export default function UserList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userAuth);
  const userList = useSelector((state) => state.admin.userList);
  const isGetUserList = useSelector((state) => state.admin.isGetUserList);

  useEffect(() => {
    getAllUser();
  }, [isGetUserList]);

  const getAllUser = async () => {
    const res = await getAllUserAPI();
    if (res?.status) {
      dispatch(setUserList(res));
    }
  };
  const handleDelete = async (rowData) => {
    const res = await deleteUserAPI(rowData);
    if (res?.status == 200) {
      dispatch(setIsGetUserList(!isGetUserList));
      toast("Xóa thành công!");
    } else {
      toast("Xóa không thành công!");
    }
  };
  return (
    <div className="w-full flex flex-col">
      <AdminHeader user={user} title="Quản Lý Người Dùng" />
      <main className="w-full flex flex-col">
        <UserTop />
        <UserTable userList={userList} onDelete={handleDelete} />
      </main>
    </div>
  );
}
