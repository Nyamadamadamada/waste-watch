import {
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import Sidebar from "@/components/sidebar";
import { MenuStruct } from "@/components/sidebar/type";
import Map from "@/components/Map";
import AttachedModal from "@/components/attachedModal";
import { FactoryStruct } from "@/components/Map/type";
import { factory } from "typescript";

type MenuContextStruct = {
  menu: MenuStruct;
  handleClickMenu: (menu: MenuStruct) => void;
};

type PrefContextStruct = {
  pref: number | "";
  handleClickPref: (pref: number) => void;
};

type ModalContextStruct = {
  setModal: Dispatch<SetStateAction<ReactNode>>;
};

type OperationContextStruct = {
  operation: OperationType | "";
  handleClickOperation: (id: OperationType) => void;
};

type FactoryContextStruct = {
  factory: FactoryStruct;
  modalOpen: boolean;
  setFactory: Dispatch<SetStateAction<FactoryStruct>>;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const MenuContext = createContext({ menu: "info" } as MenuContextStruct);
export const PrefContext = createContext({ pref: "" } as PrefContextStruct);
export const ModalContext = createContext({} as ModalContextStruct);
export const OperationContext = createContext({
  operation: "total",
} as OperationContextStruct);
export const FactoryContext = createContext({} as FactoryContextStruct);

const Layout = ({ children }: PropsWithChildren) => {
  const [menu, setMenu] = useState<MenuStruct>("info");
  const [pref, setProf] = useState<number | "">("");
  const [operation, setOperation] = useState<OperationType | "">("total");
  const [factory, setFactory] = useState<FactoryStruct>({
    factoryType: "",
    name: "",
    address: "",
    coordinates: { lat: 0, lng: 0 },
    local_government: "",
    annual_throughput: "",
    industrial_waste: "",
    remarks: "",
  });
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleClickMenu = useCallback((menu: MenuStruct) => {
    setMenu(menu);
    setModalOpen(false);
  }, []);

  const handleClickPref = useCallback((pref: number) => {
    setProf(pref);
    setModalOpen(false);
  }, []);

  const handleClickOperation = useCallback((key: OperationType) => {
    setOperation(key);
    setModalOpen(false);
  }, []);

  const contextMenu = useMemo(
    () => ({
      menu,
      handleClickMenu,
    }),
    [menu, handleClickMenu]
  );

  const contextPref = useMemo(
    () => ({
      pref,
      handleClickPref,
    }),
    [pref, handleClickPref]
  );

  const contextOperation = useMemo(
    () => ({
      operation,
      handleClickOperation,
    }),
    [operation, handleClickOperation]
  );

  const contextFactory = useMemo(
    () => ({
      factory,
      modalOpen,
      setFactory,
      setModalOpen,
    }),
    [factory, modalOpen, setFactory, setModalOpen]
  );

  return (
    <div>
      <PrefContext.Provider value={contextPref}>
        <MenuContext.Provider value={contextMenu}>
          <OperationContext.Provider value={contextOperation}>
            <FactoryContext.Provider value={contextFactory}>
              <div className="flex flex-row-reverse	 min-h-screen  bg-zinc-100">
                {children}
                <Sidebar />
              </div>
            </FactoryContext.Provider>
          </OperationContext.Provider>
        </MenuContext.Provider>
      </PrefContext.Provider>
    </div>
  );
};

export default Layout;
