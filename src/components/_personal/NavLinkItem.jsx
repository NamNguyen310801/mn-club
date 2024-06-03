import Link from "next/link";

export default function NavLinkItem({ pathname, href, name }) {
  return (
    <Link
      className={`${
        pathname === "/" + href ? "text-blue-500 underline font-semibold" : ""
      }`}
      href={`/${href}`}>
      {name}
    </Link>
  );
}
