import { NoteTextStruct } from "../note/type";

type Props = {
  note: NoteTextStruct;
};

const Note = ({ note }: Props) => {
  return (
    <div className="p-4">
      <h5 className="my-2 text-gray-700 text-lg">{note.title}</h5>
      <p className="text-gray-700">{note.description}</p>
    </div>
  );
};
export default Note;
