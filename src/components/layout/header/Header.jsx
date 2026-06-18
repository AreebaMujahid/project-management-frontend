import BrandSection from "./BrandSection";
import SearchBar from "./SearchBar";
import NotificationButton from "./NotificationButton";
import UserProfile from "./UserProfile";
import Icon from "../../../assets/dashboard/icon.svg";
export default function Header({ user }) {
  return (
    <header className="relative flex items-center justify-between px-6 py-4 bg-white border-b">
      {/* Left */}
      <div className="flex items-center gap-3">
        <BrandSection logo={Icon} appName="AProjectO" />
      </div>
      {/* Center (true center of screen) */}
      <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-md">
        <SearchBar placeholder="Search for anything..." />
      </div>
      {/* Right */}
      <div className="flex items-center gap-5">
        <NotificationButton count={3} />
        <UserProfile user={user} />
      </div>
    </header>
  );
}
