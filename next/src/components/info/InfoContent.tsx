import Info from "./Info";
import Image from "next/image";
import AttachedModal from "@/components/attachedModal";
import { useContext, useState } from "react";
import { InfoStruct, InfoTextStruct } from "./type";
import cn from "classnames";
import { MenuContext } from "../layout/Layout";

const infoText: InfoTextStruct[] = [
  {
    key: "map",
    title: "マップをみてみよう",
    description:
      "色の違いから、地域によって異なる分布を俯瞰してみましょう。マップ設定からデータを切り替えることができます。",
    image: "/image/info/info1.png",
  },
  {
    key: "detail",
    title: "詳細情報をみてみよう",
    description: "各県のごみの排出量や種別など、詳細情報を確認できます。",
    image: "/image/info/info2.png",
  },
  {
    key: "facility",
    title: "最終処分場の場所と情報",
    description:
      "各自治体の最終処分場の情報を確認できます。新設の処分場と位置情報が取れなかった処分場はマップにない可能性があります。",
    image: "/image/info/info3.png",
  },
];

const InfoContent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeInfo, setActiveInfo] = useState<InfoStruct>("");
  const { handleClickMenu } = useContext(MenuContext);

  const handleClickClose = () => {
    setOpen(false);
    setActiveInfo("");
  };
  const handleClickInfo = (info: InfoStruct) => {
    setOpen(true);
    setActiveInfo(info);
  };

  const activeInfoText = (): InfoTextStruct => {
    const info = infoText.find((info) => info.key === activeInfo);
    return info ?? { key: "", title: "", description: "", image: "" };
  };
  const textChildren = () => {
    if (activeInfo === "map") {
      return (
        <div className="mt-10">
          <button
            className="btn mx-auto flex bg-white hover:bg-gray-100 text-gray-800  border border-gray-400"
            onClick={() => handleClickMenu("map")}
          >
            <Image
              src={`/image/sidebar/map_green.svg`}
              alt="icon"
              width="0"
              height="0"
              className="w-5 h-5 z-10 my-auto mr-2 "
            />
            マップ設定
          </button>
        </div>
      );
    }
    return <div />;
  };

  return (
    <div className="relative py-8 px-4 h-[calc(100vh-134px)]">
      <div className="">
        <h4 className="pb-4 border-b border-gray-400 text-gray-700">使い方</h4>
        <div className="flex flex-col gap-3 mt-6">
          {infoText.map((info) => (
            <div
              key={info.key}
              className={cn({
                "flex justify-between px-3 py-2 text-gray-700 bg-gray2 cursor-pointer":
                  true,
                " bg-green2": activeInfo === info.key,
              })}
              onClick={() => handleClickInfo(info.key)}
            >
              <p
                className={cn({
                  "text-md": true,
                  "text-white": activeInfo === info.key,
                })}
              >
                {info.title}
              </p>
              {activeInfo === info.key ? (
                <Image
                  src="/image/common/right_white.svg"
                  alt="icon"
                  width="0"
                  height="0"
                  className="w-4 h-4 z-10 my-auto"
                />
              ) : (
                <Image
                  src="/image/common/right.svg"
                  alt="icon"
                  width="0"
                  height="0"
                  className="w-4 h-4 z-10 my-auto"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <h4 className="pb-4 border-b border-gray-400 text-gray-700">
          お問い合わせ
        </h4>
        <div className="flex flex-col gap-3 mt-6 text-gray-700">
          何かお気づきの点がありましたら、twitterにてご連絡ください。
          <p className="text-sm text-gray-500 -mb-2">鹿テック@madamadaTech</p>
          <a
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href="https://twitter.com/madamadaTech"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://twitter.com/madamadaTech
          </a>
        </div>
      </div>
      {open && (
        <AttachedModal handleClick={handleClickClose}>
          <Info info={activeInfoText()}>{textChildren()}</Info>
        </AttachedModal>
      )}
    </div>
  );
};
export default InfoContent;
