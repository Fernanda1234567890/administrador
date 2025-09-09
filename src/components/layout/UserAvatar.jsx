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

  // Si no hay avatar, mostrar inicial del nombre
  const initial = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <div
      className="flex items-center justify-center rounded-full bg-blue-600 text-white font-bold"
      style={{ width: size, height: size }}
    >
      {initial}
    </div>
  );
};
