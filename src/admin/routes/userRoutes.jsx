import Activities from "@admin/pages/user/Activities";
import Settings from "@admin/pages/user/Settings";
import ChangePassword from "@admin/pages/user/ChangePassword";

const userRoutes = [
  { path: "activities", element: <Activities /> },
  { path: "settings", element: <Settings /> },
  { path: "change-password", element: <ChangePassword /> },
];

export default userRoutes;
