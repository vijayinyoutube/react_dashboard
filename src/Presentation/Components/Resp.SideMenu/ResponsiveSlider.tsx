import { Menu, Drawer, Button } from "antd";
import Sider from "antd/es/layout/Sider";
import { Dispatch, SetStateAction } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MenuHeader from "./MenuHeader";
import SideMenu from "./SideMenu";
import RespSideMenuType from "../../Types/Resp.SideMenu.Type";

// interface Props {
//   collapsed?: boolean;
//   setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
//   broken?: boolean;
//   items?: {
//     key: string;
//     icon: React.ReactElement;
//     label: React.ReactElement;
//     routes: string;
//   }[];
//   setBroken: Dispatch<SetStateAction<boolean>>;
//   open: boolean;
//   setOpen: Dispatch<SetStateAction<boolean>>;
//   showDrawer: () => void;
//   closeDrawer: () => void;
//   currentRoute: string;
//   routes: string[];
//   setCurrentRoute: Dispatch<SetStateAction<string>>;
// }

const ResponsiveSlider = (props: RespSideMenuType) => {
  const {
    collapsed,
    setCollapsed,
    broken,
    items,
    setBroken,
    open,
    closeDrawer = () => {},
    routes,
    setCurrentRoute,
  } = props;
  const navigate = useNavigate();

  return (
    <div>
      {/* Slider Component : Web View */}
      <Sider
        className="hidden h-full !bg-timberGreen sm:block"
        collapsed={collapsed}
        reverseArrow={true}
        breakpoint="md"
        width={250}
        collapsedWidth="55"
        onBreakpoint={(brokenVal) => {
          console.log("broken:", brokenVal);
          if (!brokenVal) {
            closeDrawer();
          }
          setBroken!(brokenVal);
          setCollapsed!(brokenVal);
        }}
        onCollapse={(collapsed, type) => {
          setCollapsed!(collapsed);
        }}
      >
        <SideMenu
          items={items}
          setCollapsed={setCollapsed}
          broken={broken}
          setCurrentRoute={setCurrentRoute}
          routes={routes}
          closeDrawer={closeDrawer}
        />
      </Sider>

      {/* Drawer Component : Mobile View */}
      <Drawer
        width={225}
        className="!bg-timberGreen !text-white"
        placement={"left"}
        closable={false}
        onClose={closeDrawer}
        open={open}
      >
        <SideMenu
          items={items}
          setCollapsed={setCollapsed}
          broken={broken}
          setCurrentRoute={setCurrentRoute}
          routes={routes}
          closeDrawer={closeDrawer}
        />
      </Drawer>
    </div>
  );
};

export default ResponsiveSlider;
