import Agenda from "./Agenda";
import Calendario from "./Calendario";

const Turnos = () => {
  return (
    <section className="px-8">
        <h2 className="text-2xl text-center mb-4">Reservar turno</h2>
        <div className="flex justify-center items-start gap-x-10">
            <Calendario />
            <Agenda />
        </div>
    </section>
  );
}

export default Turnos;