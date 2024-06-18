import Link from "next/link";
export default function DashboardItem({
  pathname = "",
  item = null,
  mainHref,
}) {
  return (
    <Link
      href={`/${mainHref}${item?.href}`}
      className={`${
        pathname === "/" + mainHref + item?.href
          ? "bg-red-500 rounded-e-full w-4/5"
          : "w-full"
      }  flex items-center justify-start px-4 py-3`}>
      {item?.icon && item?.icon}
      <span className="ml-2">{item?.name}</span>
    </Link>
  );
}
