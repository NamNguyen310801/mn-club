import Link from "next/link";
import React from "react";
export default function DashboardItem({ pathname = "", item = null }) {
  return (
    <Link
      href={`/admin/${item?.href}`}
      className={`${
        pathname === "/admin/" + item?.href
          ? "bg-red-500 rounded-e-full w-4/5"
          : "w-full"
      }  flex items-center justify-start px-4 py-3`}>
      {item?.icon && item?.icon}
      <span className="ml-2">Dash board</span>
    </Link>
  );
}
