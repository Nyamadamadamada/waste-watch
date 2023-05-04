export type NoteTextStruct = {
  id: number;
  title: string;
  description: string;
  image?: string;
  link?: {
    name: string;
    url: string;
  };
};
