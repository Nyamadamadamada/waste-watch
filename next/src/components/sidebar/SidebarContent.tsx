import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import Image from "next/image";

import GraphContent from "@/components/graph";
import Info from "@/components/info";
import NoteContent from "@/components/note";
import { MenuContext } from "../layout/Layout";
import MapOperationContent from "@/components/mapOperation";

const SidebarContent = () => {
  const { menu } = useContext(MenuContext);

  return (
    <div className="mx-auto w-full">
      {menu === "map" && <MapOperationContent />}
      {menu === "graph" && <GraphContent />}
      {menu === "note" && <NoteContent />}
      {menu === "info" && <Info />}
    </div>
  );
};
export default SidebarContent;
