"use client";
import { createClient } from "@/utils/supbase/server";
import { KeyOutlined, LoginOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Layout, Row, Typography } from "antd";
import FormItem from "antd/lib/form/FormItem";
import Password from "antd/es/input/Password";
import Title from "antd/es/typography/Title";
import { Theme } from "@/theme/theme";
import { useState, useEffect } from "react";

export default function Home() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    async function fetchData() {
      const supabase = createClient({ req: undefined });

      // Sign in with Supabase authentication
      const { data, error } = await supabase.auth.signInWithPassword({
        email: "leo.san9@hotmail.com",
        password: "Dezenbro2//",
      });

      if (error) {
        console.error("Supabase authentication error:", error);
        return;
      }

      // Fetch products using Axios
      const { data: products, error: productsError } = await supabase
        .from("products")
        .select("*");

      if (productsError) {
        console.error("Supabase query error:", productsError);
        return;
      }

      // Fetch brands using Supabase client
      const { data: brands, error: brandsError } = await supabase
        .from("brands")
        .select("*");

      if (brandsError) {
        console.error("Supabase query error:", brandsError);
        return;
      }

      console.log("Products fetched using Supabase client:", products);
      console.log("Brands fetched using Supabase client:", brands);
    }

    fetchData();
  }, []);

  const handleLogin = async () => {
    // Login logic here
  };

  return (
    <Layout style={{ width: "100vw", height: "100vh" }}>
      <Row gutter={8} style={{ width: "100%", height: "100%", padding: 36 }}>
        <Col
          xs={{ span: 12 }}
          md={{ span: 12 }}
          style={{
            backgroundColor: Theme.primary,
            borderRadius: 16,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingRight: 36,
          }}
        >
          <Title
            level={1}
            style={{
              color: Theme.dark,
              marginLeft: 36,
              fontFamily: "westgate",
              fontWeight: 800,
              fontSize: 64,
            }}
          >
            AREA ADMINISTRATIVA
          </Title>
          <img src="/secure.svg" style={{ width: "60%" }} />
        </Col>
        <Col
          xs={{ span: 12 }}
          md={{ span: 12 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            gutter={[8, 8]}
          >
            <Form
              layout="vertical"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {" "}
              <img
                src="/bonatto-white-nbg.png"
                style={{ width: "210px", marginBottom: 16 }}
              />
              <Col span={12} style={{ width: "100%" }}>
                <FormItem
                  label={<Typography>Email</Typography>}
                  style={{ fontWeight: 600 }}
                  name={"email"}
                >
                  <Input
                    size="large"
                    style={{ width: "100%" }}
                    addonBefore={<MailOutlined />}
                    name={"email"}
                    value={credentials.email}
                    onChange={(e) =>
                      setCredentials({ ...credentials, email: e.target.value })
                    }
                  />
                </FormItem>
              </Col>
              <Col span={12} style={{ width: "100%" }}>
                <FormItem
                  label={<Typography>Senha</Typography>}
                  style={{ fontWeight: 600 }}
                  name={"password"}
                >
                  <Password
                    size="large"
                    style={{ width: "100%" }}
                    addonBefore={<KeyOutlined />}
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        password: e.target.value,
                      })
                    }
                  />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem>
                  <Button
                    htmlType="submit"
                    size="large"
                    type="primary"
                    style={{ width: "100%" }}
                    icon={<LoginOutlined />}
                    onClick={handleLogin}
                  >
                    Acessar
                  </Button>
                </FormItem>
              </Col>
            </Form>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
}
