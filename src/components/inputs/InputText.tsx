interface Props {
    placeholder?: string;
}

const InputText = ({ placeholder = '' }: Props) => {
    return (
        <input 
          type="text" 
          className="w-full p-3 border-2 border-pink-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors bg-pink-50"
          placeholder={placeholder}
          required
        />
    )
}  

export default InputText;