import { Dispatch, SetStateAction } from "react";

type RespSideMenuType = {
  open?: boolean;
  broken?: boolean;
  routes?: string[];
  collapsed?: boolean;
  currentRoute?: string;
  items?: {
    key: string;
    icon: React.ReactElement;
    label: React.ReactElement;
    routes: string;
  }[];
  showDrawer?: () => void;
  closeDrawer?: () => void;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  setBroken?: Dispatch<SetStateAction<boolean>>;
  setCurrentRoute?: Dispatch<SetStateAction<string>>;
  setCollapsed?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default RespSideMenuType;
