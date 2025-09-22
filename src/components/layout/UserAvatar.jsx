import React from "react";

export const UserAvatar = ({ user, size = 32 }) => {
  if (user?.avatar) {
    return (
      <img
        src={user.avatar}
        alt={user.name || "Usuario"}
        className="rounded-full object-cover"
        style={{ width: size, height: size }}
      />
    );
  }

  const initial = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <div
      className="flex items-center justify-center rounded-full text-white font-bold backdrop-blur-md bg-white/20 shadow-inner"
      style={{ width: size, height: size }}
    >
      {initial}
    </div>
  );
};
