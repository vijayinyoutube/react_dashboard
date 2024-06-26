import { Layout } from "antd";
import RouteGenerator from "../../Routes/Route";
import AdminPanelService from "./Admin.service";
import ResponsiveSlider from "../../Components/Resp.SideMenu/ResponsiveSlider";
import PageTitle from "./Components/PageTitle";

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
      <Layout style={{ minHeight: "100vh" }} hasSider={true}>
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
        <Layout className="bg-white">
          <Header style={{ padding: 0 }} className="h-auto bg-transparent">
            <PageTitle
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              showDrawer={showDrawer}
            />
          </Header>
          <Content className="px-4 lg:py-3">
            <RouteGenerator />
          </Content>
          <Footer style={{ textAlign: "center" }} className="bottom-0 mt-2">
            TopWork ©{new Date().getFullYear()} Created by VIJAY R
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Admin;
