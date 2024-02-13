import { Menu } from "antd";
import MenuHeader from "./MenuHeader";
import { useNavigate } from "react-router-dom";
import React from "react";
import { IoLogOut } from "react-icons/io5";
import { RespSideMenuType } from "../../Types/Resp.SideMenu.Type";

const SideMenu = (props: RespSideMenuType) => {
  const navigate = useNavigate();
  const {
    broken,
    setCollapsed,
    items,
    routes,
    setCurrentRoute,
    collapsed,
    closeDrawer,
  } = props;

  const logoutmenu = [IoLogOut].map((icon, index) => ({
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
      "Logout"
    ),
    routes: "/",
  }));

  return (
    <>
      <MenuHeader collapsed={collapsed} />
      <Menu
        className={`bg-timberGreen ${broken ? "pt-6 sm:pt-0" : "pt-6"}`}
        style={{ fontSize: "15px" }}
        mode="inline"
        theme="dark"
        onClick={(e) => {
          if (broken) {
            setCollapsed!(broken);
            closeDrawer!();
          }
          navigate(items ? items[parseInt(e.key) - 1].routes : "/");
          setCurrentRoute!(items ? items[parseInt(e.key) - 1].routes : "/");
        }}
        defaultSelectedKeys={[String(routes!.indexOf(location.pathname) + 1)]}
        items={items}
      />
      <div className="content-container"></div>
      <Menu
        className={`bg-timberGreen`}
        style={{ fontSize: "15px" }}
        mode="inline"
        theme="dark"
        onClick={(e) => {
          navigate(items ? items[parseInt(e.key) - 1].routes : "/");
          setCurrentRoute!(items ? items[parseInt(e.key) - 1].routes : "/");
        }}
        items={logoutmenu}
      />
    </>
  );
};

export default SideMenu;
