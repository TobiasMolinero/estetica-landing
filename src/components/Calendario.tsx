import { useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Spanish } from "flatpickr/dist/l10n/es";
import "flatpickr/dist/themes/material_orange.css";

export default function Calendario() {
  useEffect(() => {
    const calendarContainer = document.getElementById("calendar-container");
    if (calendarContainer) {
      flatpickr.localize(Spanish);
      flatpickr(calendarContainer, {
        inline: true,
        minDate: "today",
        dateFormat: "d/m/Y",
      });
    }
  }, []);

  return (
    <div id="calendar-container"></div>
  );
}
