import FormTurnos from "./FormTurnos";

const Turnos = () => {
  return (
      <section id="turnos" className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Reservar Turno</h2>
            <p className="text-lg text-gray-600">
              Elige el servicio y la fecha
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <FormTurnos />
          </div>
        </div>
      </section>
  );
}

export default Turnos;