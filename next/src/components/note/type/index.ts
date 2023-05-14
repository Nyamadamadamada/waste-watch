import { ReactNode } from "react";

export type NoteTextStruct = {
  id: number;
  title: string;
  description: string | ReactNode;
  image?: string;
  link?: {
    name: string;
    url: string;
  };
};
