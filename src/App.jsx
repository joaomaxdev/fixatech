import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import TechnicianDashboard from "./pages/TechnicianDashboard";
import SupervisorDashboard from "./pages/SupervisorDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/tecnico" element={<TechnicianDashboard />} />
        <Route path="/supervisor" element={<SupervisorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
