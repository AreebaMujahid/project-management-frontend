import {
  Home,
  Folder,
  CheckSquare,
  Clock,
  BarChart3,
  Settings,
} from "lucide-react";

export const sidebarItems = [
  {
    label: "Home",
    icon: Home,
    path: "/",
  },
  {
    label: "Projects",
    icon: Folder,
    path: "/projects",
  },
  {
    label: "Tasks",
    icon: CheckSquare,
    path: "/tasks",
  },
  {
    label: "Worklogs",
    icon: Clock,
    path: "/worklogs",
  },
  {
    label: "Performance",
    icon: BarChart3,
    path: "/performance",
  },
  {
    label: "Settings",
    icon: Settings,
    path: "/settings",
  },
];
