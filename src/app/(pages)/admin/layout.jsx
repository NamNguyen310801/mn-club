import { adminDashboardList } from "@/app/_utils/data/data";
import AsideDashboard from "../../../components/_personal/AsideDashboard";
export default function RootLayout({ children }) {
  return (
    <div className="w-full h-full lg:grid grid-cols-6">
      <AsideDashboard dashboardList={adminDashboardList} mainHref={"admin"} />
      <div className="flex flex-col lg:col-span-5">{children}</div>
    </div>
  );
}
