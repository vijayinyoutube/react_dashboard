import { Menu, Drawer, Button } from "antd";
import Sider from "antd/es/layout/Sider";
import { Dispatch, SetStateAction } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MenuHeader from "./MenuHeader";

interface Props {
  collapsed?: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  broken?: boolean;
  items?: {
    key: string;
    icon: React.ReactElement;
    label: React.ReactElement;
    routes: string;
  }[];
  setBroken: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  showDrawer: () => void;
  closeDrawer: () => void;
  currentRoute: string;
  routes: string[];
  setCurrentRoute: Dispatch<SetStateAction<string>>;
}

const ResponsiveSlider = (props: Props) => {
  const {
    collapsed,
    setCollapsed,
    broken,
    items,
    setBroken,
    open,
    closeDrawer,
    routes,
    setCurrentRoute,
  } = props;
  const navigate = useNavigate();
  const location = useLocation();

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
          console.log("Broken:", brokenVal);
          if (!brokenVal) {
            closeDrawer();
          }
          setBroken(brokenVal);
          setCollapsed(brokenVal);
        }}
        onCollapse={(collapsed, type) => {
          setCollapsed(collapsed);
        }}
      >
        <MenuHeader />
        <Menu
          className="bg-timberGreen pt-0 md:pt-6 "
          style={{ fontSize: "15px"}}
          mode="inline"
          theme="dark"
          onClick={(e) => {
            if (broken) {
              setCollapsed(true);
            }
            navigate(items ? items[parseInt(e.key) - 1].routes : "/");
            setCurrentRoute(items ? items[parseInt(e.key) - 1].routes : "/");
          }}
          defaultSelectedKeys={[String(routes.indexOf(location.pathname) + 1)]}
          items={items}
        />
      </Sider>

      {/* Drawer Component : Mobile View */}
      <Drawer
        width={225}
        className="!bg-[#001529] !text-white"
        title="Basic Drawer"
        placement={"left"}
        closable={false}
        onClose={closeDrawer}
        open={open}
      >
        <div className="">
          {items?.map((item) => {
            return (
              <div className="">
                <Button
                  icon={item.icon}
                  size="large"
                  className="text-sm my-1 ml-0  w-full border-0 text-left text-white hover:bg-blue-600 hover:!text-white"
                  onClick={() => {
                    navigate(item.routes);
                    closeDrawer();
                  }}
                >
                  {item.label}
                </Button>
              </div>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
};

export default ResponsiveSlider;
