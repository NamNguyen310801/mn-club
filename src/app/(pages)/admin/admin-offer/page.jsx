"use client";
import { useSelector } from "react-redux";
import AdminHeader from "../_components/AdminHeader";
import OfferTop from "./_components/OfferTop";
import OfferTable from "./_components/OfferTable";

export default function OfferList() {
  const user = useSelector((state) => state.auth.userAuth);
  const userList = useSelector((state) => state.admin.userList);

  return (
    <div className="w-full flex flex-col">
      <AdminHeader user={user} title="Quản Lý Yêu Cầu" />
      <main className="w-full flex flex-col">
        <OfferTop />
        <OfferTable />
      </main>
    </div>
  );
}
