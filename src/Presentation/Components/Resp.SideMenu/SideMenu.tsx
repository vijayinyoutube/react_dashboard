import { Menu } from "antd";
import MenuHeader from "./MenuHeader";
import { useNavigate } from "react-router-dom";
import RespSideMenuType from "../../Types/Resp.SideMenu.Type";

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
  return (
    <>
      <MenuHeader collapsed={collapsed} />
      <Menu
        className={`bg-timberGreen ${broken ? "pt-6 sm:pt-0" : "pt-6"} `}
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
    </>
  );
};

export default SideMenu;
