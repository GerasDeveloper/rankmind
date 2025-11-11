import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Layout() {
  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-[#0e0f1a] text-white">
      <Sidebar />
      <main className="flex w-full overflow-hidden justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
}
