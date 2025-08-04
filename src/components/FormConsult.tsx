import AlertConfirm from "./AlertConfirm";
import DetailConsult from "./DetailConsult";

const FormConsult = () => {
    return (
      <section id="consultar" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Consultar turno</h2>
            <p className="text-lg text-gray-600">
              Ingresá tu DNI para verificar los detalles de tu turno
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-pink-50 to-yellow-50 rounded-2xl p-8">
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input 
                  type="text" 
                  placeholder="Número de DNI"
                  className="flex-1 p-3 border-2 border-pink-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors bg-white"
                  required
                />
                <button 
                  type="button"
                  className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-6 py-3 rounded-xl font-semibold cursor-pointer hover:shadow-lg transform hover:-translate-y-1 active:translate-y-1 transition-all duration-300"
                >
                  Consultar
                </button>
              </div>
            </form> 
            {/* <DetailConsult /> */}
          </div>
        </div>
      </section>
    )
}

export default FormConsult;