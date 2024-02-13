import { Flex } from "antd";
import SideMenuIcon from "../../../Components/Resp.SideMenu/SideMenuIcon";
import { RespPageTitleMenuIcon } from "../../../Types/Resp.SideMenu.Type";

const PageTitle = (props: RespPageTitleMenuIcon) => {
  const { collapsed, setCollapsed, showDrawer } = props;
  return (
    <>
      <SideMenuIcon
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        showDrawer={showDrawer}
      />
      <Flex>
        <div className="text-2xl text-bold"><div>Hai</div></div>
      </Flex>
    </>
  );
};

export default PageTitle;
