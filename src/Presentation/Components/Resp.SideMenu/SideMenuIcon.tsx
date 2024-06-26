import { Button } from "antd";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { RespSideMenuType } from "../../Types/Resp.SideMenu.Type";

const SideMenuIcon = (props: RespSideMenuType) => {
  const { collapsed, setCollapsed, showDrawer } = props;

  return (
    <>
      <div className={`hidden pr-1.5 lg:hidden bg-red-100`}>
        {
          <Button
            type="text"
            icon={
              collapsed ? (
                <AiOutlineMenuUnfold className="h-5 w-5 text-black" />
              ) : (
                <AiOutlineMenuFold
                  className={` h-5 w-5 text-black ${collapsed ? "hidden" : "hidden sm:block"}`}
                />
              )
            }
            onClick={() => setCollapsed!(!collapsed)}
          />
        }
      </div>
      <div className={`block pr-1.5 sm:hidden`}>
        <Button
          type="text"
          icon={
            collapsed ? (
              <AiOutlineMenuUnfold className="h-5 w-5 text-black " />
            ) : (
              <AiOutlineMenuFold className="h-5 w-5 text-black " />
            )
          }
          onClick={() => showDrawer!()}
        />
      </div>
    </>
  );
};

export default SideMenuIcon;
