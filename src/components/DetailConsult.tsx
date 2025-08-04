let appointmentDetails = {
  error: false
}

const DetailConsult = () => {

    return (
              <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
                {appointmentDetails.error ? (
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </div>
                    <p className="text-red-600 font-semibold">Error</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-800">Detalles de la Cita</h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Confirmada
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-600">Número de cita</p>
                        <p className="font-semibold text-gray-800"># id</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Servicio</p>
                        <p className="font-semibold text-gray-800">Nombre de servicio</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Fecha</p>
                        <p className="font-semibold text-gray-800">Fecha</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Hora</p>
                        <p className="font-semibold text-gray-800">Hora</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Nombre</p>
                        <p className="font-semibold text-gray-800">Nombre</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-semibold text-gray-800">Email</p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        className="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Cancelar Cita
                      </button>
                    </div>
                  </div>
                )}
              </div>
    )
}

export default DetailConsult;