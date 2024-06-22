"use client";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../_components/AdminHeader";
import UserTable from "./_components/UserTable";
import UserTop from "./_components/UserTop";
import { getAllUserAPI } from "@/app/_utils/services/user.api";
import { setUserList } from "@/app/_utils/store/admin.slice";
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
  return (
    <div className="w-full flex flex-col">
      <AdminHeader user={user} title="Quản Lý Người Dùng" />
      <main className="w-full flex flex-col">
        <UserTop />
        <UserTable userList={userList} />
      </main>
    </div>
  );
}
