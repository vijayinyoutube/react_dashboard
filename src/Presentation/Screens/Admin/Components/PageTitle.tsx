import { Flex } from "antd";
import SideMenuIcon from "../../../Components/Resp.SideMenu/SideMenuIcon";
import { RespPageTitleMenuIcon } from "../../../Types/Resp.SideMenu.Type";
import Search from "antd/es/input/Search";

const PageTitle = (props: RespPageTitleMenuIcon) => {
  const { collapsed, setCollapsed, showDrawer } = props;
  return (
    <Flex className="justify-between px-1 py-3 sm:px-3 md:px-4 lg:px-2">
      <Flex>
        <SideMenuIcon
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          showDrawer={showDrawer}
        />
        <Flex vertical className="item-center justify-center pl-3">
          <div className="md:text-3xl text-lg font-medium">Hi Alice Joe</div>
          <div className="md:text-sm text-xs font-base text-slate-500">
            this is your personal dashboard panel
          </div>
        </Flex>
      </Flex>

      <Flex className="item-center justify-center pr-3">
        <div className="flex items-center justify-center">
          {" "}
          <Search
            className="w-44 md:w-52"
            placeholder="input search text"
            onSearch={() => {}}
          />
        </div>
      </Flex>
    </Flex>
  );
};

export default PageTitle;
