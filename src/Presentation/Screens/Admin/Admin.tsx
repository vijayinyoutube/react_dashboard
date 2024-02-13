import {   Layout } from "antd";
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
          <Header style={{ padding: 0 }} className=" bg-red-100">
            <PageTitle collapsed={collapsed} setCollapsed={setCollapsed} showDrawer={showDrawer}/>
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
