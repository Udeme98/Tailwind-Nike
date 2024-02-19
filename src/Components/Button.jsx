const Button = ({
  label,
  iconURL,
  borderColor,
  textColor,
  backgroundColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border rounded-full font-montserrat text-lg ${
        fullWidth && "w-full"
      } leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red  text-white border-coral-red"
    }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
