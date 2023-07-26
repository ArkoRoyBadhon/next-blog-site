import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
import { useSession, signOut } from "next-auth/react";

const RootLayout = ({ children }) => {
  const { data: session } = useSession();

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
              color: "white",
            }}
            href="/"
          >
            Home
          </Link>
          <Link
            style={{
              marginRight: "10px",
              color: "white",
            }}
            href="/feedbacks"
          >
            Feedbacks
          </Link>
          {session?.user ? (
            <>
              <Link
                style={{
                  marginRight: "10px",
                  color: "white",
                }}
                href="/dashboard"
              >
                DashBoard
              </Link>
              <Link
                style={{
                  marginRight: "10px",
                  color: "white",
                }}
                href="/profile"
              >
                Profile
              </Link>
              <div
                style={{
                  marginRight: "10px",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => signOut()}
              >
                Logout
              </div>
            </>
          ) : (
            <Link
              style={{
                marginRight: "10px",
                color: "white",
              }}
              href="/login"
            >
              Login
            </Link>
          )}
        </div>
      </Header>
      <Content
        style={{
          padding: "",
        }}
      >
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
