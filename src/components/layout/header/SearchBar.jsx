import { Search } from "lucide-react";
export default function SearchBar({ placeholder }) {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={18}
        className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
      />

      <input
        type="text"
        placeholder={placeholder}
        className="
          w-full
          pl-10
          pr-4
          py-2
          border
          rounded-md
          outline-none
          focus:ring-2
          focus:ring-blue-400
        "
      />
    </div>
  );
}
