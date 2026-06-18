import { sidebarItems } from "./sidebarConfig";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside
      className="
        w-64
        h-screen
        bg-white
        border-r
        px-3
        py-4
        flex
        flex-col
        gap-1
      "
    >
      {sidebarItems.map((item) => (
        <SidebarItem key={item.path} item={item} />
      ))}
    </aside>
  );
}
