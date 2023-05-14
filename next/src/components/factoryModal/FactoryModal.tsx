import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import cn from "classnames";
import styles from "./factoryModal.module.css";
import { FactoryContext } from "@/components/layout/Layout";

const FactoryModal = () => {
  const { factory, modalOpen, setModalOpen } = useContext(FactoryContext);

  useEffect(() => {
    if (factory.name) {
      setModalOpen(true);
    }
  }, [factory, setModalOpen]);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div
      className={cn(modalOpen ? styles.overlay : "")}
      onClick={handleModalClose}
    >
      <div
        className={cn(modalOpen ? styles.open : styles.factory)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="m-6 bg-white text-gray-700">
          <div className="relative overflow-x-auto mx-4">
            <h5 className="my-4 font-bold">{factory.name}</h5>
            <table className="w-full text-sm text-left">
              <tbody>
                <tr className="border-b">
                  <th
                    scope="row"
                    className="p-4 font-medium  whitespace-nowrap"
                  >
                    施設名
                  </th>
                  <td className="p-4">{factory.name}</td>
                </tr>
                <tr className="border-b">
                  <th
                    scope="row"
                    className="p-4 font-medium  whitespace-nowrap"
                  >
                    地方公共団体名
                  </th>
                  <td className="p-4">{factory.local_government}</td>
                </tr>
                <tr className="border-b">
                  <th
                    scope="row"
                    className="p-4 font-medium  whitespace-nowrap"
                  >
                    年間処理量
                  </th>
                  <td className="p-4">{factory.annual_throughput}（t/年度）</td>
                </tr>
                <tr className="border-b">
                  <th
                    scope="row"
                    className="p-4 font-medium  whitespace-nowrap"
                  >
                    産業廃棄物の搬入の有無
                  </th>
                  <td className="p-4">{factory.industrial_waste}</td>
                </tr>
                {factory.remarks && (
                  <tr className="border-b">
                    <th
                      scope="row"
                      className="p-4 font-medium  whitespace-nowrap"
                    >
                      備考
                    </th>
                    <td className="p-4">{factory.remarks}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <p className="m-2 text-sm">※ピンの位置は目安です。</p>
        </div>
        <div
          className="absolute top-0 right-0 cursor-pointer"
          onClick={() => setModalOpen(false)}
        >
          <Image
            src="/image/common/batu.svg"
            className={"m-2 z-20"}
            alt="icon"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};
export default FactoryModal;
