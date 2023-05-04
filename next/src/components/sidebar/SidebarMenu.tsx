import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import Image from "next/image";

import cn from "classnames";
import { MenuStruct } from "./type";
import { MenuContext } from "../layout/Layout";
import { menuItem } from "./config";

const SidebarMenu = () => {
  const { menu, handleClickMenu } = useContext(MenuContext);

  return (
    <div className="flex mt-8 w-[260px] mx-auto justify-around">
      {menuItem.map((item) => (
        <div
          key={item}
          className={cn({
            "pb-2 px-2 cursor-pointer hover:border-b-2 border-green2 ease-out duration-100":
              true,
            "border-b-2 border-green2": menu === item,
          })}
          onClick={() => handleClickMenu(item)}
        >
          {menu === item ? (
            <Image
              src={`/image/sidebar/${item}_green.svg`}
              className="m-auto"
              alt="Logo"
              width={23}
              height={23}
            />
          ) : (
            <Image
              src={`/image/sidebar/${item}.svg`}
              className="m-auto"
              alt="Logo"
              width={23}
              height={23}
            />
          )}
        </div>
      ))}
    </div>
  );
};
export default SidebarMenu;
