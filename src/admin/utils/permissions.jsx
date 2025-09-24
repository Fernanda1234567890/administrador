export const hasPermission = (userPermissions, requiredPermissions) => {
  if (!requiredPermissions || requiredPermissions.length === 0) return true;
  if (!userPermissions || userPermissions.length === 0) return false;

  return requiredPermissions.some((perm) => userPermissions.includes(perm) || userPermissions.includes("*"));
};
