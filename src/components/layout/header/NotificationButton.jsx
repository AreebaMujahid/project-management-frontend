import { Bell } from "lucide-react";

export default function NotificationButton({ count = 0 }) {
  return (
    <button
      aria-label="Notifications"
      className="
        relative
        p-2
        rounded-full
        hover:bg-gray-100
      "
    >
      <Bell size={20} />

      {count > 0 && (
        <span
          className="
            absolute
            -top-1
            -right-1
            bg-red-500
            text-white
            text-xs
            h-5
            w-5
            rounded-full
            flex
            items-center
            justify-center
          "
        >
          {count}
        </span>
      )}
    </button>
  );
}
