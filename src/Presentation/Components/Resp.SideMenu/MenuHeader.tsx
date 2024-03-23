import { Typography } from "antd";
import { RespSideMenuType } from "../../Types/Resp.SideMenu.Type";

const { Text, Title } = Typography;

const MenuHeader = (props: RespSideMenuType) => {
  return (
    <>
      <div
        className={`mx-6 mt-3  duration-300 ${props.collapsed ? "hidden" : "block sm:hidden md:block"}`}
      >
        <Title
          style={{ padding: 0, margin: 0 }}
          level={3}
          className=" !text-mediumSpringBud"
        >
          TopWorks
        </Title>
        <Text className="!text-white/35">a product of vijaycreations</Text>
      </div>
    </>
  );
};

export default MenuHeader;
