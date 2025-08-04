import { useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Spanish } from "flatpickr/dist/l10n/es";
import "flatpickr/dist/themes/confetti.css";

export default function InputCalendar() {
  useEffect(() => {
    const calendario = document.getElementById("input-calendar");
    flatpickr.localize(Spanish);
    if (calendario) {
      flatpickr(calendario, {
        inline: false,
        minDate: "today",
        dateFormat: "d/m/Y",
      });
    }
  }, []);

  return (
    <input id="input-calendar" type="text" required placeholder="Seleccionar fecha"
        className="w-full p-3 border-2 border-pink-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors bg-pink-50"/>
  );
}
