export default function UserProfile({ user }) {
  if (!user) {
    return null;
  }
  return (
    <div className="flex items-center gap-3">
      <div className="text-right">
        <h3 className="font-medium text-sm">{user.name}</h3>

        <p className="text-xs text-gray-500">{user.location}</p>
      </div>

      <img
        src={user.avatar}
        alt={user.name}
        className="
          h-10
          w-10
          rounded-full
          object-cover
        "
      />
    </div>
  );
}
