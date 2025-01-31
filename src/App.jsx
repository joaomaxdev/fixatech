import { ToastContainer } from "react-toastify";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-toastify/dist/ReactToastify.css";
import { AppRoutes } from "./routes/Routes";

function App() {
  return (
    <>
      <ToastContainer />
      <AppRoutes /> {/* Certifique-se de que AppRoutes está sendo usado aqui */}
    </>
  );
}

export default App;