import { Button, Layout } from "antd";
import RouteGenerator from "../../Routes/Route";

const Admin = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <div>
      <Layout>
        {/* slider */}
        <Layout>
        <Header style={{ padding: 0}}>
            <div className="hidden sm:block">
              {collapsed && (
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                  }}
                />
              )}
            </div>
            <div className="block sm:hidden">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => showDrawer()}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </div>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
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
