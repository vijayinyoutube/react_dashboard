import { Flex } from "antd";
import SideMenuIcon from "../../../Components/Resp.SideMenu/SideMenuIcon";
import { RespPageTitleMenuIcon } from "../../../Types/Resp.SideMenu.Type";
import Search from "antd/es/input/Search";
import { IoIosNotifications } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

const PageTitle = (props: RespPageTitleMenuIcon) => {
  const { collapsed, setCollapsed, showDrawer } = props;

  const SearchField = ({ myStyle }: { myStyle: String }) => {
    return (
      <div
        className={`my-3 flex w-full items-center justify-end md:mx-0 lg:my-0 lg:px-5 ${myStyle}`}
      >
        <Search
          className="w-full lg:w-52"
          placeholder="input search text"
          onSearch={() => {}}
        />
      </div>
    );
  };

  const ProfileIcons = ({ className }: { className: String }) => {
    return (
      <Flex className={`${className} items-center`}>
        <div className="py-auto text-2xl ">
          <IoIosNotifications />
        </div>
        <Flex className="ml-5 h-fit items-center rounded-full border-2 px-1.5 py-1">
          <BsPersonFill className="p-0.5 text-2xl" />
          <div className="pl-1 pr-1 text-base">Alice</div>
          <IoMdArrowDropdown className="mr-1" />
        </Flex>
      </Flex>
    );
  };

  const TitleText = () => {
    return (
      <Flex className="w-full items-center">
        <SideMenuIcon
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          showDrawer={showDrawer}
        />
        <Flex className="flex w-full justify-between">
          <Flex vertical className="pr-2">
            <div className="text-lg font-medium md:text-2xl">Hi Alice Joe</div>
            <div className="font-base text-xs text-slate-500 md:text-sm">
              this is your personal dashboard panel
            </div>
          </Flex>
          <ProfileIcons className="md:flex lg:hidden" />
        </Flex>
      </Flex>
    );
  };

  return (
    <Flex className="flex-col items-center justify-start px-4 py-3 md:justify-between md:px-5 lg:flex-row">
      <TitleText />
      <SearchField myStyle="" />
      <ProfileIcons className="hidden lg:flex" />
    </Flex>
  );
};

export default PageTitle;
