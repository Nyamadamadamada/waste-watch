import { ReactNode, useState } from "react";
import Image from "next/image";

type Props = {
  handleClick: () => void;
  children?: ReactNode | undefined;
};

const AttachedModal = ({ handleClick, children }: Props) => {
  return (
    <div className="absolute top-0 left-[420px] bg-gray2 w-[500px] h-[calc(100vh-134px)]">
      <div className="w-full h-full">{children}</div>
      <div
        className="absolute top-0 right-0 cursor-pointer"
        onClick={handleClick}
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
  );
};
export default AttachedModal;
