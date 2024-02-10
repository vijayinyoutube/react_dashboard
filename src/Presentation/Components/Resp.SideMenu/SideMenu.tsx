import { Collapse, Menu } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import MenuHeader from "./MenuHeader";
import { useNavigate } from "react-router-dom";

interface Props {
  collapsed?: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  broken?: boolean;
  setCurrentRoute: Dispatch<SetStateAction<string>>;
  items?: {
    key: string;
    icon: React.ReactElement;
    label: React.ReactElement;
    routes: string;
  }[];
  routes: string[];
  closeDrawer: () => void;
}

const SideMenu = (props: Props) => {
  const navigate = useNavigate();
  const { broken, setCollapsed, items, routes, setCurrentRoute, collapsed,closeDrawer } =
    props;
  return (
    <>
      <MenuHeader collapsed={collapsed} />
      <Menu
        className="bg-timberGreen pt-0 md:pt-6 "
        style={{ fontSize: "15px" }}
        mode="inline"
        theme="dark"
        onClick={(e) => {
          if (broken) {
            setCollapsed(broken);
            closeDrawer()
          }
          navigate(items ? items[parseInt(e.key) - 1].routes : "/");
          setCurrentRoute(items ? items[parseInt(e.key) - 1].routes : "/");
        }}
        defaultSelectedKeys={[String(routes.indexOf(location.pathname) + 1)]}
        items={items}
      />
    </>
  );
};

export default SideMenu;
