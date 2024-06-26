"use client";
import { useSelector } from "react-redux";
import ManagerHeader from "../_components/ManagerHeader";
import FunTop from "./_components/FundTop";

export default function ManagerFund() {
  const user = useSelector((state) => state.auth.userAuth);

  return (
    <div className="w-full flex flex-col">
      <ManagerHeader user={user} title="Quản Lý Quỹ" />
      <main className="w-full flex flex-col">
        <FunTop />
      </main>
    </div>
  );
}
