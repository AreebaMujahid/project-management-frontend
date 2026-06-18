import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
export default function AppLayout({ user, children }) {
  return (
    <div className="h-screen flex flex-col">
      {/* Top Navbar */}
      <Header user={user} />

      {/* Remaining Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-50 p-6">{children}</main>
      </div>
    </div>
  );
}
