export default function Button({
  text,
  children,
  onClick,
  className,
  disabled,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${className}`}
    >
      {children ? children : text}
    </button>
  );
}
