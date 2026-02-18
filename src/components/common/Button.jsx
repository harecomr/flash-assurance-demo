const Button = ({ text, onClick, variant = 'primary', icon: Icon, className = '', children }) => {
  const baseStyle = "font-semibold transition duration-200 flex items-center justify-center space-x-2 cursor-pointer";
  
  const variants = {
    primary: "px-6 py-3 rounded-lg !bg-orange-500 hover:!bg-orange-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    secondary: "px-6 py-3 rounded-lg !bg-slate-800 hover:!bg-slate-700 text-white shadow-md",
    outline: "px-6 py-3 rounded-lg !border-2 !border-slate-200 hover:!border-orange-500 text-slate-700 hover:text-orange-500 !bg-transparent",
    ghost: "px-3 py-2 rounded-md text-sm hover:!bg-slate-100 text-slate-600 hover:text-orange-600 !bg-transparent !border !border-transparent",
    ghostActive: "px-3 py-2 rounded-md text-sm !bg-orange-50 text-orange-600 !border !border-orange-100 font-bold"
  };

  const selectedVariant = variants[variant] || variants.primary;

  return (
    <button onClick={onClick} className={`${baseStyle} ${selectedVariant} ${className}`}>
      {text || children}
      {Icon && <Icon className={variant.includes('ghost') ? "w-4 h-4 ml-1" : "w-5 h-5"} />}
    </button>
  );
};

export default Button;