import { ConfigProvider } from "antd";
import { BaseRoutes } from "./routes";
import { Theme } from "./styles/theme";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Alert: {
            colorError: "#000",
            colorText: "#000",
          },
          Breadcrumb: {
            colorFill: "#fff",
            colorPrimary: "#000",
            colorTextLabel: "#000",
            lastItemColor: "#fff",
            linkHoverColor: "#ffffff",
          },
          Menu: {
            colorTextLightSolid: "dark" === "dark" ? "#fff" : "#000",
          },
          Tooltip: {
            colorTextLightSolid: "dark" === "dark" ? "#000" : "#fff",
          },
          DatePicker: {
            controlItemBgActive:
              "dark" === "dark" ? "#303030" : Theme.secondary,
            padding: 0,
            margin: 0,
            paddingXS: 5,
          },
          FloatButton: { colorBgElevated: "#e4e4e4" },

          Button: {
            colorTextLightSolid:
              "dark" === "dark" ? "rgba(0, 0, 0, 0.88)" : "#fff",
          },
          Select: {
            controlItemBgActive:
              "dark" === "dark" ? "#303030" : Theme.secondary,
          },
          Table: {
            controlItemBgActive: Theme.secondary,
            controlItemBgActiveHover: "#c0c0c09f",
          },
          Card: {
            boxShadow:
              "dark" === "dark"
                ? "0px 4px 15.7px -3px rgba(0, 0, 0, 0.25)"
                : "0px 4px 15.7px -3px rgba(0, 0, 0, 0.144)",
            boxShadowSecondary:
              "dark" === "dark"
                ? "0px 4px 15.7px -3px rgba(0, 0, 0, 0.25)"
                : "0px 4px 15.7px -3px rgba(0, 0, 0, 0.144)",
            boxShadowTertiary:
              "dark" === "dark"
                ? "0px 4px 15.7px -3px rgba(0, 0, 0, 0.25)"
                : "0px 4px 15.7px -3px rgba(0, 0, 0, 0.144)",
          },
          Layout: {
            colorBgHeader: "dark" === "dark" ? Theme.dark : "#fdfdfd",
          },
          Segmented: {
            colorBgElevated: Theme.secondary,
            colorBgLayout: "dark" === "dark" ? "#272727" : "#f1f1f1",
          },
          Badge: {
            colorError: Theme.secondary,
          },
          Form: {
            labelColor: "#fff",
            labelHeight: 42,
          },
        },

        token: {
          colorPrimary: Theme.secondary,
          colorBgTextHover: Theme.secondary,
          colorBgContainer: "dark" === "dark" ? Theme.dark : "#ffffff",
          colorBgLayout: "dark" === "dark" ? "#1a1a1a" : "#F5F6F8",
          colorText: "dark" === "dark" ? "#f5f5f5" : "rgba(0, 0, 0, 0.88)",
          colorTextHeading:
            "dark" === "dark" ? "#f5f5f5" : "rgba(0, 0, 0, 0.88)",
          colorTextLightSolid:
            "dark" === "dark" ? "#ffffff" : "rgba(0, 0, 0, 0.88)",
          colorTextBase: "dark" === "dark" ? "#f5f5f5" : "rgba(0, 0, 0, 0.88)",
          colorTextLabel: "dark" === "dark" ? "#f5f5f5" : "rgba(0, 0, 0, 0.88)",
          colorBgElevated: "dark" === "dark" ? "#1a1a1a" : "#ffffff",
          colorBorder: "#ACACAC",
          colorInfoBorder: "#ACACAC",
          colorBorderSecondary: "dark" === "dark" ? "#353535" : "#f5f5f5",
        },
      }}
    >
      <BaseRoutes />
    </ConfigProvider>
  );
};

export default App;
