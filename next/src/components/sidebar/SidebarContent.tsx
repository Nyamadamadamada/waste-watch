import React, { SetStateAction, useContext } from "react";

import GraphContentDynamic from "@/components/graph/GraphContentDynamic";
import Info from "@/components/info";
import NoteContent from "@/components/note";
import { MenuContext } from "../layout/Layout";
import MapOperationContent from "@/components/mapOperation";

const SidebarContent = () => {
  const { menu } = useContext(MenuContext);

  return (
    <div className="mx-auto w-full">
      {menu === "map" && <MapOperationContent />}
      {menu === "graph" && <GraphContentDynamic />}
      {menu === "note" && <NoteContent />}
      {menu === "info" && <Info />}
    </div>
  );
};
export default SidebarContent;
