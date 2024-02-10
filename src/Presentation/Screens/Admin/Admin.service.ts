import React from "react";
import { useState } from "react";
import {
  IoGrid,
  IoSettingsSharp,
  IoNewspaper,
  IoPersonCircleSharp,
  IoFileTrayFull,
  IoBarChart,
  IoPeopleSharp,
} from "react-icons/io5";

const AdminPanelService = () => {
  const [broken, setBroken] = useState(false);

  const [currentRoute, setCurrentRoute] = useState("/dashboard");

  const menuNames = [
    "Dashboard",
    "Contracts",
    "Projects",
    "Clients",
    "Reports",
    "Settings",
    "Profile",
  ];
  const routes = [
    "/dashboard",
    "/contracts",
    "/projects",
    "/clients",
    "/reports",
    "/settings",
    "/profile",
  ];

  const [collapsed, setCollapsed] = useState(false);

  const [open, setOpen] = useState(false);

  const items = [
    IoGrid,
    IoNewspaper,
    IoFileTrayFull,
    IoPeopleSharp,
    IoBarChart,
    IoSettingsSharp,
    IoPersonCircleSharp,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon, {
      className: `w-auto`,
      style: { fontSize: "20px" },
    }),
    label: React.createElement(
      "div",
      {
        className: "",
      },
      menuNames[index]
    ),
    routes: routes[index],
  }));

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };
  return {
    collapsed,
    setCollapsed,
    items,
    broken,
    setBroken,
    open,
    setOpen,
    showDrawer,
    closeDrawer,
    currentRoute,
    setCurrentRoute,
    routes,
  };
};

export default AdminPanelService;
