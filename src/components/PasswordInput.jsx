// components/PasswordInput.jsx

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput({ placeholder = "Password", ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="
          w-full
          border-b
          border-gray-400
          py-2
          pr-10
          outline-none
          bg-transparent
        "
        {...props}
      />

      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          text-gray-600
        "
      >
        {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
      </button>
    </div>
  );
}
