
export type Command =
  | 'text'
  | 'BackgroundImage'
  | 'Bgm'
  | 'Character'
  | 'Character';

export interface OptionClass {
  type: string;
  font?: string;
  path?: string;
}

export interface Page {
  command: Command;
  option: OptionClass | string;
  text?: string;
}

export interface Node {
  label: string;
  id: number;
  page: Page[];
}

export interface Author {
  writer: string[];
  illustrator: string[];
}

export interface Project {
  projectName: string;
  projectId: string;
  author: Author;
  node: Node[];
}

export interface Action {
  command: Command,
}
