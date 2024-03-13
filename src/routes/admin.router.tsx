import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPath2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create-Admin",
        path: "/admin/create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create-Faculty",
        path: "/admin/create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Create-student",
        path: "/admin/create-student",
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Offered Course",
        path: "/admin/offered-course",
        element: <CreateAdmin></CreateAdmin>,
      },
    ],
  },
];
export const adminPath = [
  {
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "create-student",
    element: <CreateStudent />,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty />,
  },
  {
    path: "create-admin",
    element: <CreateAdmin />,
  },
];
