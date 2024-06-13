"use client";
import { useSelector } from "react-redux";
import AdminHeader from "../_components/AdminHeader";
import UserTable from "./_components/UserTable";
import UserTop from "./_components/UserTop";

export default function UserList() {
  const user = useSelector((state) => state.auth.userAuth);
  const userList = useSelector((state) => state.admin.userList);

  return (
    <div className="w-full flex flex-col">
      <AdminHeader user={user} title="Admin User" />
      <main className="w-full flex flex-col">
        <UserTop />
        <UserTable />
      </main>
    </div>
  );
}
