import { ReactNode } from "react";
import AdminDeshboard from "../pages/admin/AdminDeshboard";
import CreatAdmin from "../pages/admin/CreatAdmin";
import CreatFaculty from "../pages/admin/CreatFaculty";
import CreatStudent from "../pages/admin/CreatStudent";
import { NavLink } from "react-router-dom";


type TRoute = {
  path: string;
  element: ReactNode;
};

type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

const adminPaths = [
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

export const adminSidebarItems = adminPaths.reduce(
  (acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  },
  []
);

//* Programatical way

export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  return acc;
}, []);