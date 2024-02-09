import { Typography } from "antd";

const { Text, Title } = Typography;
const MenuHeader = () => {
  return (
    <>
      <div className="mx-6 mt-5 hidden duration-300 md:block">
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
