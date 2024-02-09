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

              itemBorderRadius: 0,
              itemMarginInline: 0,
              itemMarginBlock: 0,
              itemHeight:45
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
