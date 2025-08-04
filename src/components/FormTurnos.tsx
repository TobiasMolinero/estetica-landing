import InputCalendar from "./inputs/InputCalendar";
import InputMail from "./inputs/InputMail";
import InputText from "./inputs/InputText";
import InputNumber from "./inputs/InputNumber";

const FormTurnos = () => {
    return (
        <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div> 
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Servicio</label>
                  <select 
                    className="w-full p-3 border-2 border-pink-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors bg-pink-50"
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    {/* {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name} - {service.price}
                      </option>
                    ))} */}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Fecha</label>
                  <InputCalendar />
                  {/* <input 
                    type="date" 
                    className="w-full p-3 border-2 border-pink-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors bg-pink-50"
                    required
                  /> */}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Horario</label>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                  {/* {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedTime === time
                          ? 'bg-gradient-to-r from-pink-500 to-yellow-400 text-white'
                          : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))} */}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">N° Documento</label>
                  <InputText />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
                  <InputText placeholder="Tu nombre" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <InputMail />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                  <InputText placeholder="11-1234-5678" />
                </div>
              </div>
              
              <div className="text-center">
                <button 
                  type="button"
                  className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-12 py-4 rounded-full font-bold text-lg cursor-pointer hover:shadow-xl transform hover:-translate-y-1 active:translate-y-1 transition-all duration-300"
                >
                  Reservar Turno
                </button>
              </div>
            </form>
    )
}

export default FormTurnos;