import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Theme } from "../../styles/theme";
import { createClient } from "../../utils/server";

export const PainelAdm = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const supabase = createClient({ req: undefined });
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          backgroundColor: Theme.dark,
          height: "100vh",
        }}
      >
        <img
          src="/bonatto-white-nbg.png"
          style={{
            width: collapsed ? "60px" : "100px",
            marginLeft: collapsed ? "10%" : "25%",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        />
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
        <Button
          danger
          style={{ position: "absolute", bottom: 8, width: "100%" }}
          onClick={() => {
            supabase.auth.signOut();
            localStorage.removeItem("token"), navigate("/admin");
          }}
        >
          Sair
        </Button>
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
