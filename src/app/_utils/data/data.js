import {
  CalendarDays,
  ContactRound,
  LayoutDashboard,
  Users,
  WalletMinimal,
} from "lucide-react";

export const NavLinkList = [
  {
    href: "",
    name: "Trang chủ",
  },
  {
    href: "club",
    name: "Câu lạc bộ",
  },
  {
    href: "news",
    name: "Tin tức",
  },
  {
    href: "events",
    name: "Sự kiện",
  },
  {
    href: "achievements",
    name: "Thành tích",
  },
  {
    href: "contact-me",
    name: "Liên hệ",
  },
];

export const AdminDashboardList = [
  {
    href: "",
    name: "Trang chủ",
    icon: <LayoutDashboard color="#ffffff" />,
    children: [
      {
        name: "AAA",
        href: "user-list",
      },
      {
        name: "Add",
        href: "user-add",
      },
    ],
  },
  {
    href: "/admin-user",
    name: "Quản lý người dùng",
    icon: <Users color="#ffffff" />,
    children: [
      {
        name: "AAA",
        href: "user-list",
      },
      {
        name: "Add",
        href: "user-add",
      },
    ],
  },
  {
    href: "/admin-student",
    name: "Quản lý Sinh Viên",
    icon: <Users color="#ffffff" />,
    children: [
      {
        name: "AAA",
        href: "user-list",
      },
      {
        name: "Add",
        href: "user-add",
      },
    ],
  },
  {
    href: "/admin-club",
    name: "Quản lý Câu Lạc Bộ",
    icon: <ContactRound color="#ffffff" />,
    children: [
      {
        name: "AAA",
        href: "user-list",
      },
      {
        name: "Add",
        href: "user-add",
      },
    ],
  },
  {
    href: "/admin-event",
    name: "Quản lý Sự Kiện",
    icon: <CalendarDays color="#ffffff" />,
    children: [
      {
        name: "AAA",
        href: "user-list",
      },
      {
        name: "Add",
        href: "user-add",
      },
    ],
  },
  {
    href: "/admin-news",
    name: "Quản lý Tin Tức",
    icon: <WalletMinimal color="#ffffff" />,
    children: [
      {
        name: "AAA",
        href: "user-list",
      },
      {
        name: "Add",
        href: "user-add",
      },
    ],
  },
  {
    href: "/admin-offer",
    name: "Quản Lý Yêu Cầu",
    icon: <WalletMinimal color="#ffffff" />,
    children: [
      {
        name: "AAA",
        href: "user-list",
      },
      {
        name: "Add",
        href: "user-add",
      },
    ],
  },
  {
    href: "/admin-report",
    name: "Quản lý Báo Cáo",
    icon: <WalletMinimal color="#ffffff" />,
    children: [
      {
        name: "AAA",
        href: "user-list",
      },
      {
        name: "Add",
        href: "user-add",
      },
    ],
  },
  {
    href: "/admin-achievement",
    name: "Quản Lý Thành Tích",
    icon: <WalletMinimal color="#ffffff" />,
    children: [
      {
        name: "AAA",
        href: "user-list",
      },
      {
        name: "Add",
        href: "user-add",
      },
    ],
  },
  {
    href: "/admin-type-event",
    name: "Quản lý Loại Sự Kiện",
    icon: <WalletMinimal color="#ffffff" />,
    children: [
      {
        name: "AAA",
        href: "user-list",
      },
      {
        name: "Add",
        href: "user-add",
      },
    ],
  },
  {
    href: "/admin-semester",
    name: "Quản lý Học kỳ",
    icon: <WalletMinimal color="#ffffff" />,
    children: [
      {
        name: "AAA",
        href: "user-list",
      },
      {
        name: "Add",
        href: "user-add",
      },
    ],
  },
];

export const listTime = [
  {
    title: "Last Day",
  },
  {
    title: "Last Week",
  },
  {
    title: "Last Month",
  },
  {
    title: "Last Year",
  },
];
