"use client";
import { KeyOutlined, LoginOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Layout, Row, Typography } from "antd";
import Password from "antd/es/input/Password";
import Title from "antd/es/typography/Title";
import FormItem from "antd/lib/form/FormItem";
import { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Theme } from "../../../styles/theme";
import { createClient } from "../../../utils/server";

export function AdminLogin() {
  const navigate = useNavigate();
  const supabase = createClient({ req: undefined });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const formRef = useRef(null);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  supabase.auth.signOut();

  const isAuthenticated = () => {
    // Lógica de autenticação aqui, por exemplo, verificar se o usuário possui um token válido
    return localStorage.getItem("token") !== null;
  };

  //   useEffect(() => {
  //     async function fetchData() {
  //       // Sign in with Supabase authentication

  //       // Fetch products using Axios
  //       const { data: products, error: productsError } = await supabase
  //         .from("products")
  //         .select("*");

  //       if (productsError) {
  //         console.error("Supabase query error:", productsError);
  //         return;
  //       }

  //       // Fetch brands using Supabase client
  //       const { data: brands, error: brandsError } = await supabase
  //         .from("brands")
  //         .select("*");

  //       if (brandsError) {
  //         console.error("Supabase query error:", brandsError);
  //         return;
  //       }

  //       console.log("Products fetched using Supabase client:", products);
  //       console.log("Brands fetched using Supabase client:", brands);
  //     }

  //     fetchData();
  //   }, []);

  return !isAuthenticated() ? (
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
              ref={formRef}
              layout="vertical"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
              onFinish={async () => {
                setLoading(true);
                const { data, error } = await supabase.auth.signInWithPassword({
                  email: credentials.email,
                  password: credentials.password,
                });
                console.log(data, error);
                if (error && !data.session) {
                  setError(true);
                  setLoading(false);
                  return;
                }
                if (data && data.session)
                  localStorage.setItem("token", data?.session?.access_token);
                setLoading(false);
                navigate("/auth/adm");
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
                    type="email"
                    size="large"
                    style={{ width: "100%" }}
                    addonBefore={<MailOutlined />}
                    name={"email"}
                    value={credentials.email}
                    onChange={(e) => {
                      setError(false);
                      setCredentials({ ...credentials, email: e.target.value });
                    }}
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
                    onChange={(e) => {
                      setError(false);
                      setCredentials({
                        ...credentials,
                        password: e.target.value,
                      });
                    }}
                  />
                  {error && (
                    <span style={{ color: "red" }}>
                      Usuário ou senha incorretos
                    </span>
                  )}
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
                    loading={loading}
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
  ) : (
    <Navigate to="/auth/adm" />
  );
}
