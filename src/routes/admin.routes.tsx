
import AdminDeshboard from "../pages/admin/AdminDeshboard";
import CreatAdmin from "../pages/admin/CreatAdmin";
import CreatFaculty from "../pages/admin/CreatFaculty";
import CreatStudent from "../pages/admin/CreatStudent";


export const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDeshboard />,
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreatAdmin />,
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: <CreatFaculty/>,
      },
      {
        name: 'Create Student',
        path: 'create-student',
        element: <CreatStudent />,
      },     
      {
        name: 'Create Members',
        path: 'create-member',
        element: <CreatStudent />,
      },     
    ],
  },
];