import { Dispatch, SetStateAction } from "react";

type ItemType = {
  key: string;
  icon: React.ReactElement;
  label: any;
  routes: string;
}[];

export type RespPageTitleMenuIcon = {
  collapsed: boolean;
  showDrawer: () => void;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

export type RespSideMenuType = {
  open?: boolean;
  broken?: boolean;
  routes?: string[];
  collapsed?: boolean;
  currentRoute?: string;
  items?: ItemType;
  showDrawer?: () => void;
  closeDrawer?: () => void;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  setBroken?: Dispatch<SetStateAction<boolean>>;
  setCurrentRoute?: Dispatch<SetStateAction<string>>;
  setCollapsed?: React.Dispatch<React.SetStateAction<boolean>>;
};
