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
      className={`
    font-medium
    transition-colors
    duration-200
    disabled:opacity-50
    disabled:cursor-not-allowed
    ${className}
  `}
    >
      {children ? children : text}
    </button>
  );
}
