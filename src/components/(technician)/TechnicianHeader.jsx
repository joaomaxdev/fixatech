import { Link } from "react-router-dom";
import { Home, Calendar, Bell, User, LogOut } from "lucide-react";
import fixatechlogo from '../../assets/fixatech.svg'

function TechnicianHeader() {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo e Links */}
          <div className="flex items-center">
            <Link to="/tecnico" className="flex items-center">
              <img
                src={fixatechlogo}
                alt="FixaTech Logo"
                className="w-32"
              />
            </Link>
          </div>

          {/* Menu de Navegação */}
          <nav className="flex items-center space-x-6">
            <Link
              to="/tecnico"
              className="text-gray-600 hover:text-blue-500 flex items-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Início
            </Link>
            <Link
              to="/tecnico/calendario"
              className="text-gray-600 hover:text-blue-500 flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Calendário
            </Link>
            <Link
              to="/tecnico/notificacoes"
              className="text-gray-600 hover:text-blue-500 flex items-center"
            >
              <Bell className="w-5 h-5 mr-2" />
              Notificações
            </Link>
          </nav>

          {/* Perfil e Logout */}
          <div className="flex items-center space-x-4">
            <Link
              to="/tecnico/perfil"
              className="text-gray-600 hover:text-blue-500"
            >
              <User className="w-5 h-5" />
            </Link>
            <Link to="/logout" className="text-gray-600 hover:text-blue-500">
              <LogOut className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TechnicianHeader;