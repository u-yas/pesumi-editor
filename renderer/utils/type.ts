
export type GameCommand =
  | 'init'
  | 'text'
  | 'BackgroundImage'
  | 'Bgm'
  | 'Character'
  | 'Character';

export type FileCommand =
  | 'addFile'
  | 'deleteFile'
  | 'openFile'
  | 'createFile';

export interface OptionClass {
  type: string;
  font?: string;
  path?: string;
}

export interface Page {
  command: GameCommand;
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

export interface GameData {
  project: Project;
}
export interface GameAction {
  command: GameCommand,
  payloadProject:Project
  payloadNode: Node
  payloadPage: Page
}

export interface FileAction {
  type: FileCommand
}
