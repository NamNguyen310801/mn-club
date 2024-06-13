import AsideDashboard from "./_components/AsideDashboard";
export default function RootLayout({ children }) {
  return (
    <div className="w-full h-full lg:grid grid-cols-6">
      <AsideDashboard />
      <div className="flex flex-col lg:col-span-5">{children}</div>
    </div>
  );
}
