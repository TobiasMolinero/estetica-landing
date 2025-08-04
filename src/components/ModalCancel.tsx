const ModalCancel = () => {
    return (
        <div className="fixed inset-0 bg-[#00000080] bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Turno Cancelado</h3>
              <p className="text-gray-600 mb-6">
                Tu turno para <strong>Nombre de servicio</strong> ha sido cancelado exitosamente.
              </p>
              
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
        
export default ModalCancel;