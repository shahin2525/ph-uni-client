import { Layout, Menu, MenuProps } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: 1,
    label: "profile",
  },
  {
    key: 2,
    label: "user",
  },
  {
    key: 3,
    label: "admin",
    children: [
      {
        key: 31,
        label: "create admin",
      },
      {
        key: 32,
        label: "admin profile",
      },
    ],
  },
  {
    key: 4,
    label: "super admin",
  },
];

const MainLayout = () => {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "30px",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Ph-uni
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout style={{ height: "100vh" }}>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
