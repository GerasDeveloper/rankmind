import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaBook, FaFileAlt, FaHome } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { FaRankingStar } from "react-icons/fa6";
import IconSidebar from "../assets/svg/IconSidebar.svg";
import { faker } from "@faker-js/faker"

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const image = faker.image.personPortrait();

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {mobile && (
        <button
          onClick={() => setOpen(!open)}
          className="
            fixed top-4 left-4 z-50 
            bg-[#0B0B1A] p-2 rounded-xl shadow-md
            hover:bg-[#141428] transition
          "
        >
          <img
            src={IconSidebar}
            alt="Abrir menu lateral"
            className="w-8 h-8 object-contain"
          />
        </button>
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full z-40
          ${collapsed ? "w-30" : "w-80"}
          ${mobile ? (open ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}
          bg-linear-to-b from-[#0B0B1A] to-[#0E0F1A]
          shadow-[0_0_80px_10px_rgba(255,183,77,0.2)]
          rounded-r-[2.5rem]
          text-white flex flex-col justify-between
          py-8 transition-all duration-500 ease-in-out

        `}
      >
        <div className="relative">
          {!mobile && (
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="
                flex
                absolute top-2 right-[-27px]
                w-[50px] h-[50px] rounded-full 
                border justify-center items-center
                bg-[#1a1b2e] hover:bg-[#FFA63F] 
                text-[#FFA63F] text-lg hover:text-white shadow-md transition
              "
            >
              {collapsed ? <ChevronRight size={30} /> : <ChevronLeft size={20} />}
            </button>
          )}

          <div
            className={`flex items-center gap-3 px-6 pb-6 border-b border-white/10 transition-all duration-500 ${collapsed ? "justify-center" : ""
              }`}
          >
            <img
              alt="Foto"
              src={image}
              className="w-14 h-14 rounded-full border-2 border-white/20 object-cover"
            />
            {!collapsed && (
              <div>
                <h2 className="font-semibold text-lg">Geraldo O.</h2>
              </div>
            )}
          </div>

          <nav
            className={`flex mt-10 flex-col gap-8 transition-all duration-500 ${collapsed ? "px-3 items-center" : "px-8"
              }`}
          >
            <button
              onClick={() => navigate("/home")}
              className={`
              transition
              ${location.pathname === "/home" ? "text-[#FFA63F]" : "hover:text-[#FFA63F] text-white"}
                ${collapsed ? "text-sm" : "text-base"}
              `}>
              {collapsed ? <FaHome size={25} /> : "Home"}
            </button>

          <button
            onClick={() => navigate("/cadastro")}
            className={`transition 
              ${location.pathname === "/cadastro" ? "text-[#FFA63F]" : "hover:text-[#FFA63F] text-white"}
              ${collapsed ? "text-sm" : "text-base"}
              `}
          >
            {collapsed ? <IoMdPersonAdd size={25} /> : "Cadastro de Alunos"}
          </button>

          <button
            onClick={() => navigate("/historico")}
            className={`transition 
              ${location.pathname === "/historico" ? "text-[#FFA63F]" : "hover:text-[#FFA63F] text-white"}
              ${collapsed ? "text-sm" : "text-base"
              }`}
          >
            {collapsed ? <FaBook size={25} /> : "Histórico Escolar"}
          </button>

          <button
            onClick={() => navigate("/ranking")}
            className={`transition 
              ${
                location.pathname === "/ranking" ? "text-[#FFA63F]" : "hover:text-[#FFA63F] text-white"
              }
              ${collapsed ? "text-sm" : "text-base"
              }`}
          >
            {collapsed ? <FaRankingStar size={25} /> : "Ranking"}
          </button>

          <button
            onClick={() => navigate("/relatorios")}
            className={`transition 
              ${location.pathname === "/relatorios" ? "text-[#FFA63F]" : " hover:text-[#FFA63F] text-white"}
              ${collapsed ? "text-sm" : "text-base"
              }`}
          >
            {collapsed ? <FaFileAlt size={25} /> : "Relatórios"}
          </button>
        </nav>
      </div>

      <div
        className={`px-8 mt-auto transition-all duration-500 ${collapsed ? "text-center px-0" : ""
          }`}
      >
        {!collapsed && !mobile && (
          <p className="text-xs text-gray-500">© 2025 Geraldo Developer</p>
        )}
      </div>
    </aside >

      { mobile && open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition"
        />
      )
}
    </>
  );
}
