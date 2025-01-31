// src/routes/Routes.jsx
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/(auth)/LoginPage";
import AdminDashboard from "../pages/(admin)/AdminDashboard";
import TechnicianDashboard from "../pages/(technician)/TechnicianDashboard";
import ServiceOrders from "../pages/(technician)/ServiceOrders"; // Importe o componente ServiceOrders
import ServiceOrderDetailsPage from "../pages/(technician)/ServiceOrderDetailsPage";
import TechnicianCalendarPage from "../pages/(technician)/TechnicianCalendarPage";
import NotificationsPage from "../pages/(technician)/NotificationsPage";
import TechnicianProfilePage from "../pages/(technician)/TechnicianProfilePage";
import SupervisorDashboard from "../pages/(supervisor)/SupervisorDashboard";

export const AppRoutes = () => (
  <Routes>
    {/* Rota de Login */}
    <Route path="/" element={<LoginPage />} />

    {/* Rotas do Admin */}
    <Route path="/admin" element={<AdminDashboard />} />

    {/* Rotas do Técnico */}
    <Route path="/tecnico" element={<TechnicianDashboard />}>
      <Route path="ordens" element={<ServiceOrders />} />
      <Route path="ordens/:id" element={<ServiceOrderDetailsPage />} />
      <Route path="calendario" element={<TechnicianCalendarPage />} />
      <Route path="notificacoes" element={<NotificationsPage />} />
      <Route path="perfil" element={<TechnicianProfilePage />} />
    </Route>

    {/* Rotas do Supervisor */}
    <Route path="/supervisor" element={<SupervisorDashboard />} />
  </Routes>
);