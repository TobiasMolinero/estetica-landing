const ModalConfirm = () => {
    return (
        <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Turno Reservado!</h3>
              <p className="text-gray-600 mb-6">Tu turno ha sido confirmado exitosamente</p>
              
              <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
                <p className="text-sm text-gray-600">Número de turno:</p>
                <p className="text-lg font-bold text-pink-600 mb-2"># id</p>
                
                <p className="text-sm text-gray-600">Servicio:</p>
                <p className="font-semibold text-gray-800 mb-2">Nombre de servicio</p>
                
                <p className="text-sm text-gray-600">Fecha y hora:</p>
                <p className="font-semibold text-gray-800 mb-2">fecha y hora</p>
                
                <p className="text-sm text-gray-600">Nombre:</p>
                <p className="font-semibold text-gray-800">Nombre cliente</p>
              </div>
              
              <button
                className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-8 py-3 rounded-full font-semibold cursor-pointer hover:shadow-lg transform hover:-translate-y-1 active:translate-y-1 transition-all duration-300"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
    )
}

export default ModalConfirm;