"use client";
import { FaUserCircle } from "react-icons/fa";

import AdminHeader from "./_components/AdminHeader";
import { useSelector } from "react-redux";
import StatItem from "./_components/StatItem";

export default function Admin() {
  const user = useSelector((state) => state.auth.userAuth);
  const userList = useSelector((state) => state.admin.userList);
  const color = ["#1da256", "#48d483"];
  const color1 = ["#c012e2", "#eb64fe"];
  const color2 = ["#2c78e5", "#60aff5"];
  const color3 = ["#e1950e", "#f3cd29"];
  const color4 = ["#c51d2b", "#d59ca5"];
  return (
    <div className="w-full flex flex-col">
      <AdminHeader user={user} title="Quản Lý Hệ Thống" />
      <main className="w-full flex flex-col px-4 mt-4">
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
          {/* Item */}
          <StatItem
            color={color}
            name="Tổng người dùng"
            icon={<FaUserCircle />}
          />
          <StatItem
            color={color1}
            name="Tổng Sự kiên"
            icon={<FaUserCircle />}
            grow
          />
          <StatItem
            color={color2}
            name="Tổng Câu lạc bộ"
            icon={<FaUserCircle />}
            grow
          />
          <StatItem color={color3} name="Tổng kỳ học" icon={<FaUserCircle />} />
          <StatItem
            color={color4}
            name="Tổng Sinh viên"
            icon={<FaUserCircle />}
          />
        </div>
      </main>
    </div>
  );
}
