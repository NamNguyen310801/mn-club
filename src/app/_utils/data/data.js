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

export const adminDashboardList = [
  {
    href: "",
    name: "Trang chủ",
    icon: <LayoutDashboard color="#ffffff" />,
  },
  {
    href: "/admin-user",
    name: "Quản lý Người Dùng",
    icon: <Users color="#ffffff" />,
  },
  {
    href: "/admin-student",
    name: "Quản lý Sinh Viên",
    icon: <Users color="#ffffff" />,
  },
  {
    href: "/admin-club",
    name: "Quản lý Câu Lạc Bộ",
    icon: <ContactRound color="#ffffff" />,
  },
  {
    href: "/admin-event",
    name: "Quản lý Sự Kiện",
    icon: <CalendarDays color="#ffffff" />,
  },
  {
    href: "/admin-news",
    name: "Quản lý Tin Tức",
    icon: <WalletMinimal color="#ffffff" />,
  },
  {
    href: "/admin-offer",
    name: "Quản Lý Yêu Cầu",
    icon: <WalletMinimal color="#ffffff" />,
  },
  {
    href: "/admin-report",
    name: "Quản lý Báo Cáo",
    icon: <WalletMinimal color="#ffffff" />,
  },
  {
    href: "/admin-achievement",
    name: "Quản Lý Thành Tích",
    icon: <WalletMinimal color="#ffffff" />,
  },
  {
    href: "/admin-type-event",
    name: "Quản lý Loại Sự Kiện",
    icon: <WalletMinimal color="#ffffff" />,
  },
  {
    href: "/admin-semester",
    name: "Quản lý Học kỳ",
    icon: <WalletMinimal color="#ffffff" />,
  },
];
export const managerDashboardList = [
  {
    href: "",
    name: "Quản lý chung",
    icon: <LayoutDashboard color="#ffffff" />,
  },
  {
    href: "/manager-member",
    name: "Quản lý Người Dùng",
    icon: <Users color="#ffffff" />,
  },
  {
    href: "/manager-fund",
    name: "Quản lý Sinh Viên",
    icon: <Users color="#ffffff" />,
  },
  {
    href: "/manager-departments",
    name: "Quản lý Phòng Ban",
    icon: <Users color="#ffffff" />,
  },
  {
    href: "/manager-work",
    name: "Quản lý Công Việc",
    icon: <Users color="#ffffff" />,
  },
  {
    href: "/manager-event",
    name: "Quản lý Sự Kiện",
    icon: <Users color="#ffffff" />,
  },
  {
    href: "/manager-post",
    name: "Quản lý Bài Viết",
    icon: <Users color="#ffffff" />,
  },
  {
    href: "/manager-award",
    name: "Giải thưởng",
    icon: <Users color="#ffffff" />,
  },
  {
    href: "/manager-report",
    name: "Báo Cáo",
    icon: <Users color="#ffffff" />,
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
