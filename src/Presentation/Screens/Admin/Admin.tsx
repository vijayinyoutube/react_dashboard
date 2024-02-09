import { Button, Layout } from "antd";
import RouteGenerator from "../../Routes/Route";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import AdminPanelService from "./Admin.service";
import ResponsiveSlider from "../../Components/ResponsiveSlider";

const Admin = () => {
  const { Header, Content, Footer } = Layout;

  const {
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
  } = AdminPanelService();
  return (
    <div>
      <Layout className="h-screen" hasSider={true}>
        {/* Responsive slider */}
        <ResponsiveSlider
          open={open}
          items={items}
          broken={broken}
          collapsed={collapsed}
          currentRoute={currentRoute}
          routes={routes}
          setOpen={setOpen}
          setBroken={setBroken}
          showDrawer={showDrawer}
          closeDrawer={closeDrawer}
          setCollapsed={setCollapsed}
          setCurrentRoute={setCurrentRoute}
        />
        <Layout>
          <Header style={{ padding: 0}} className="bg-transparent">
            <div className="hidden sm:block">
              {collapsed && (
                <Button
                  type="text"
                  icon={
                    collapsed ? (
                      <AiOutlineMenuUnfold className="h-5 w-5 text-black " />
                    ) : (
                      <AiOutlineMenuFold className="ml-4 h-5 w-5 text-black " />
                    )
                  }
                  onClick={() => setCollapsed(!collapsed)}
                />
              )}
            </div>
            <div className="block sm:hidden">
              <Button
                type="text"
                icon={
                  collapsed ? (
                    <AiOutlineMenuUnfold className="h-5 w-5 text-black " />
                  ) : (
                    <AiOutlineMenuFold className="h-5 w-5 text-black " />
                  )
                }
                onClick={() => showDrawer()}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </div>
          </Header>
          <Content className="p-4">
            <RouteGenerator />
          </Content>
          <Footer style={{ textAlign: "center" }} className="bottom-0">
            TopWork ©{new Date().getFullYear()} Created by VIJAY R
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Admin;
