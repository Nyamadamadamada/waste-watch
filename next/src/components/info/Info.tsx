import { ReactNode, useState } from "react";
import { InfoTextStruct } from "./type";
import Image from "next/image";

type Props = {
  info: InfoTextStruct;
  children?: ReactNode;
};

const Info = ({ info, children }: Props) => {
  return (
    <div className="p-4">
      <h5 className="my-2 text-gray-700 text-lg">{info.title}</h5>
      {info.image && (
        <Image
          src={info.image}
          className={"pt-8 pb-4 m-auto"}
          alt="説明画像"
          width={500}
          height={500}
        />
      )}
      <p className="text-gray-700">{info.description}</p>
      {children}
    </div>
  );
};
export default Info;
