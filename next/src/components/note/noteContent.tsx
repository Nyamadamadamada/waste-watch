import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Description from "./Description";
import Image from "next/image";
import AttachedModal from "@/components/attachedModal";
import { useState } from "react";
import { NoteTextStruct } from "./type";
import cn from "classnames";

const noteText: NoteTextStruct[] = [
  {
    id: 1,
    title: "ごみの区分",
    description: (
      <div>
        収集区分は、次のものをいいます。
        <table className="my-8">
          <tr>
            <th className="whitespace-nowrap p-2">可燃ごみ</th>
            <td className="break-words px-4 py-2 ">
              焼却施設にて中間処理することを主に目的として収集されるもの
            </td>
          </tr>
          <tr>
            <th className="whitespace-nowrap p-2">不燃ごみ</th>
            <td className="break-words px-4 py-2 ">
              焼却施設以外の中間処理施設にて処理する、または最終処分することを目的として収集されるもの
            </td>
          </tr>
          <tr>
            <th className="whitespace-nowrap p-2">資源ごみ</th>
            <td className="break-words px-4 py-2 ">
              再資源化することを目的とし収集されるもの
            </td>
          </tr>
          <tr>
            <th className="whitespace-nowrap p-2">粗大ごみ</th>
            <td className="break-words px-4 py-2 ">
              比較的大きなものとして上記とは別に収集されるもの
            </td>
          </tr>
          <tr>
            <th className="whitespace-nowrap p-2">その他のごみ</th>
            <td className="break-words px-4 py-2 ">
              有害ごみや危険ごみ等で収集されるもの
            </td>
          </tr>
          <tr>
            <th className="whitespace-nowrap p-2">混合ごみ</th>
            <td className="break-words px-4 py-2 ">
              可燃または不燃を問わずに収集されるもの
            </td>
          </tr>
        </table>
      </div>
    ),
    link: {
      name: "日本の廃棄物処理に関する基本的な用語",
      url: "https://www.env.go.jp/recycle/waste_tech/ippan/glossary.pdf",
    },
  },
  {
    id: 2,
    title: "リサイクル率",
    description: "1年間のごみの排出総量に対し、資源化した量の割合のことです。",
  },
  {
    id: 3,
    title: "事業系ごみとは",
    description:
      "会社やお店などから出る事業活動に伴って生じた廃棄物ごみを事業系ごみと言います。事業系ごみは、「事業系一般廃棄物」と「産業廃棄物」があり、「事業系一般廃棄物」は認可された廃棄物回収業者に収集してもらいます。",
  },
  {
    id: 4,
    title: "環境ラベル",
    description:
      "環境ラベルとは、商品やサービスがどのように環境負荷低減に資するかを教えてくれるマークや目じるしのことです。製品や包装などについており、環境負荷低減に資するモノやサービスを買いたいときに、参考になるマークです。",
    image: "/image/note/3.png",
    link: {
      name: "環境省 環境ラベル等データベース",
      url: "https://www.env.go.jp/policy/hozen/green/ecolabel/c01_03.html",
    },
  },
  {
    id: 5,
    title: "3R(スリーアール)",
    description:
      "Reduce, Reuse, Recycleの略で、廃棄物の削減、再利用、リサイクルを総合的に行うことを目的とした用語。Reduce ゴミを出さないことが最も重要度が高いとされています。",
    image: "/image/note/4.png",
    link: {
      name: "経済産業省 ３Ｒ政策ホーム",
      url: "https://www.meti.go.jp/policy/recycle/index.html",
    },
  },
  {
    id: 6,
    title: "資源化量（ｔ）",
    description: "資源化量＝直接資源化量+中間処理後再生利用量+集団回収量",
    link: {
      name: "日本の廃棄物処理に関する基本的な用語",
      url: "https://www.env.go.jp/recycle/waste_tech/ippan/glossary.pdf",
    },
  },
];

const NoteContent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeNoteId, setActiveNoteId] = useState<number | "">("");

  const handleClickClose = () => {
    setOpen(false);
    setActiveNoteId("");
  };
  const handleClickNote = (id: number) => {
    setOpen(true);
    setActiveNoteId(id);
  };

  const activeNoteText = (): NoteTextStruct => {
    const note = noteText.find((note) => note.id === activeNoteId);
    return note ?? { id: 0, title: "", description: "" };
  };

  return (
    <div className="relative py-8 px-4 text-gray-700 h-[calc(100vh-134px)]">
      <div className="">
        <h4 className="pb-4 border-b border-gray-400 text-gray-700">
          用語辞典
        </h4>
        <div className="flex flex-col gap-3 mt-6">
          {noteText.map((note) => (
            <div
              key={note.id}
              className={cn({
                "flex justify-between px-3 py-2 text-gray-700 bg-gray2 cursor-pointer":
                  true,
                " bg-green2": activeNoteId === note.id,
              })}
              onClick={() => handleClickNote(note.id)}
            >
              <p
                className={cn({
                  "text-md": true,
                  "text-white": activeNoteId === note.id,
                })}
              >
                {note.title}
              </p>
              {activeNoteId === note.id ? (
                <Image
                  src="/image/common/right_white.svg"
                  alt="icon"
                  width="0"
                  height="0"
                  className="w-4 h-4 z-10"
                />
              ) : (
                <Image
                  src="/image/common/right.svg"
                  alt="icon"
                  width="0"
                  height="0"
                  className="w-4 h-4 z-10"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {open && (
        <AttachedModal handleClick={handleClickClose}>
          <Description note={activeNoteText()} />
        </AttachedModal>
      )}
    </div>
  );
};
export default NoteContent;
