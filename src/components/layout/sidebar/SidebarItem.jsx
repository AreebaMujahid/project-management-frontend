import { NavLink } from "react-router-dom";

export default function SidebarItem({ item }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `
        flex items-center gap-3 px-4 py-3 rounded-md
        transition
        ${
          isActive
            ? "bg-gray-200 text-black"
            : "text-gray-600 hover:bg-gray-100"
        }
        `
      }
    >
      <Icon size={18} />
      <span className="text-sm font-medium">{item.label}</span>
    </NavLink>
  );
}
