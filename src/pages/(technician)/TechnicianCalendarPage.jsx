import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Header from "../../components/(common)/Header";
import Footer from "../../components/(common)/Footer";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Configuração do calendário com date-fns
const locales = {
  "pt-BR": ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Dados de exemplo (eventos no calendário)
const mockOrders = [
  {
    id: "OS001",
    title: "Troca de Roteador",
    start: new Date(2024, 0, 29, 14, 0), // 29 de janeiro de 2024, 14:00
    end: new Date(2024, 0, 29, 15, 0), // 29 de janeiro de 2024, 15:00
    client: "Nome do Cliente da Silva",
    location: "Av. Anatácio Braga, 123",
  },
  {
    id: "OS002",
    title: "Sinal Alto",
    start: new Date(2024, 0, 29, 9, 30), // 29 de janeiro de 2024, 09:30
    end: new Date(2024, 0, 29, 10, 30), // 29 de janeiro de 2024, 10:30
    client: "Nome do Cliente da Silva",
    location: "Av Anastácio Braga, 456",
  },
  {
    id: "OS003",
    title: "Organizar DROP",
    start: new Date(2024, 0, 29, 16, 0), // 29 de janeiro de 2024, 16:00
    end: new Date(2024, 0, 29, 17, 0), // 29 de janeiro de 2024, 17:00
    client: "Supermercado",
    location: "Av. Anastácio Braga, 789",
  },
];

function TechnicianCalendarPage() {
  const [events, setEvents] = useState(mockOrders);

  // Formatação personalizada para os eventos
  const eventStyleGetter = (event) => {
    const backgroundColor = event.title.includes("Urgente") ? "#ef4444" : "#3b82f6";
    return {
      style: {
        backgroundColor,
        color: "#fff",
        borderRadius: "4px",
        border: "none",
      },
    };
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Calendário de Ordens de Serviço</h1>
          <p className="text-gray-600">Visualize suas ordens de serviço agendadas.</p>
        </div>

        {/* Calendário */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            defaultView="week"
            views={["month", "week", "day", "agenda"]}
            messages={{
              today: "Hoje",
              previous: "Anterior",
              next: "Próximo",
              month: "Mês",
              week: "Semana",
              day: "Dia",
              agenda: "Agenda",
            }}
            eventPropGetter={eventStyleGetter}
            onSelectEvent={(event) => alert(`Detalhes da OS: ${event.title}`)}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TechnicianCalendarPage;