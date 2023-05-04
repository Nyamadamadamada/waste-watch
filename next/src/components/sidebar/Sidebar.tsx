import React, {
  Dispatch,
  SetStateAction,
  useState,
  createContext,
  useContext,
} from "react";
import Image from "next/image";

import cn from "classnames";
import { MenuStruct } from "./type";
import SidebarMenu from "./SidebarMenu";
import SidebarContent from "./SidebarContent";
import { MenuContext } from "../layout/Layout";

const Sidebar = () => {
  return (
    <div
      className={
        "bg-gray2 text-gray md:sticky mr-auto fixed flex flex-col h-full w-[400px]"
      }
    >
      <div className={" bg-white"}>
        <div className="w-full pt-4 px-14 pb-2">
          <Image
            src="/image/title_logo.png"
            className={"m-auto"}
            alt="Logo"
            width={122}
            height={43}
          />
          <SidebarMenu />
        </div>
      </div>
      <SidebarContent />
    </div>
  );
};
export default Sidebar;
