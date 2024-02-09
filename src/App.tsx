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
              darkItemHoverColor: "#afe67f",

              darkItemHoverBg: "#122626",

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
