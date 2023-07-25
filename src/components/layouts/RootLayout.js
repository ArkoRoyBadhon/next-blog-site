import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="demo-logo">
          <Link
            style={{
              color: "Red",
              fontWeight: "700",
            }}
            href="/"
          >
            BLOG
          </Link>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <Link
            style={{
              marginRight: "10px",
            }}
            href="/"
          >
            Home
          </Link>
          <Link
            style={{
              marginRight: "10px",
            }}
            href="/"
          >
            About
          </Link>
          <Link
            style={{
              marginRight: "10px",
            }}
            href="/dashboard"
          >
            DashBoard
          </Link>
          <Link
            style={{
              marginRight: "10px",
            }}
            href="/profile"
          >
            Profile
          </Link>
        </div>
      </Header>
      <Content
        style={{
          padding: "",
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Blog Site ©2023 Created by Arko Roy Badhon
      </Footer>
    </Layout>
  );
};

export default RootLayout;
