import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Search, Bell, User, LogOut, ChevronDown } from "lucide-react";
import fixatech from "../../assets/fixatech.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const handleLogout = () => {
    if (window.confirm("Tem certeza que deseja sair?")) {
      navigate("/");
    }
  };

  const menuItems = [
    { title: "Dashboard", path: "/admin" },
    { title: "Usuários", path: "/admin/users" },
    { title: "Ordens de Serviço", path: "/admin/orders" },
    { title: "Relatórios", path: "/admin/reports" },
    { title: "Configurações", path: "/admin/settings" },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo e botão do menu (mobile) */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="lg:hidden text-gray-600 hover:text-blue-500 focus:outline-none"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/admin" className="flex items-center ml-4 lg:ml-0">
              <img
                src={fixatech || "/placeholder.svg"}
                alt="FixaTech logo"
                className="w-32"
              />
            </Link>
          </div>

          {/* Menu de navegação */}
          <nav
            className={`lg:flex ${isMenuOpen ? "block" : "hidden"} lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-4 p-4 lg:p-0">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block py-2 px-4 text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-blue-500 bg-blue-50 rounded-lg"
                        : "text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Ícones de ações (notificações, perfil, logout) */}
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="text-gray-600 hover:text-blue-500 focus:outline-none"
              aria-label="Notificações"
            >
              <Bell className="w-5 h-5" />
            </button>

            {/* Dropdown do perfil */}
            <div className="relative">
              <button
                onClick={toggleProfileDropdown}
                className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none"
                aria-label="Perfil do usuário"
              >
                <User className="w-5 h-5" />
                <span className="ml-2">João Silva</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              {/* Dropdown menu */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sair
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}