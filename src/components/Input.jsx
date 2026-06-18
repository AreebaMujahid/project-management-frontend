// components/Input.jsx

export default function Input({
  type = "text",
  placeholder,
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`
        w-full
        border-b
        border-gray-400
        py-2
        outline-none
        bg-transparent
        ${className}
      `}
      {...props}
    />
  );
}
