import { ConfigProvider } from "antd";
import Admin from "./Presentation/Screens/Admin/Admin";

const App = () => {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {},
          components: {
            Menu: {
              itemHoverBg: "#214040",
              itemHoverColor: "white",
              itemSelectedColor: "#afe67f",
              itemSelectedBg: "#284d4d",
              itemColor: "white",

              darkItemColor: "white",
              darkItemSelectedBg: "#284d4d",
              darkItemSelectedColor: "#afe67f",
              darkItemHoverBg: "#122626",

              activeBarBorderWidth: 10,
              horizontalItemBorderRadius: 10,
              colorBorder: "white",
              colorBorderBg: "white",
              borderRadiusOuter: 10,
              colorPrimaryBorder: "white",
              colorBorderSecondary: "white",
              colorInfoBorder: "red",

              itemBorderRadius: 0,
              itemMarginInline: 0,
              itemMarginBlock: 0,
              itemHeight: 55,
            },
          },
        }}
      >
        <Admin />
      </ConfigProvider>
    </div>
  );
};

export default App;
