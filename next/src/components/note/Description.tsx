import { NoteTextStruct } from "./type";
import Image from "next/image";

type Props = {
  note: NoteTextStruct;
};

const Note = ({ note }: Props) => {
  return (
    <div className="p-4">
      <h5 className="my-2 text-gray-700 text-lg">{note.title}</h5>
      <p className="text-gray-700">{note.description}</p>
      {note.image && (
        <Image
          src={note.image}
          className={"pt-8 pb-4 m-auto"}
          alt="説明画像"
          width={200}
          height={200}
        />
      )}
      {note.link && (
        <div className="my-4">
          <a
            href={note.link.url}
            className="font-medium  text-blue-600 dark:text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {note.link.name}
          </a>
        </div>
      )}
    </div>
  );
};
export default Note;
