import { ReactNode } from "react";
import { InfoStruct, InfoTextStruct } from "./type";

type Props = {
  info: InfoTextStruct;
  children?: ReactNode;
};

const Info = ({ info, children }: Props) => {
  return (
    <div className="p-4">
      <h5 className="my-2 text-gray-700 text-lg">{info.title}</h5>
      <p className="text-gray-700">{info.description}</p>
      {children}
    </div>
  );
};
export default Info;
