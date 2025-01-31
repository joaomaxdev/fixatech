import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import enUS from "date-fns/locale/en-US"
import { ptBR } from "date-fns/locale"

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { "pt-BR": ptBR },
})

const events = [
  {
    title: "Service Order #1234",
    start: new Date(2023, 5, 1, 9, 0),
    end: new Date(2023, 5, 1, 11, 0),
  },
  {
    title: "Service Order #5678",
    start: new Date(2023, 5, 3, 14, 0),
    end: new Date(2023, 5, 3, 16, 0),
  },
]

function ServiceOrderCalendar() {
  return (
    <div className="h-[500px]">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
      />
    </div>
  )
}

export default ServiceOrderCalendar

