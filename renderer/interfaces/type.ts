import { background } from '@chakra-ui/react'

/**
 * 編集するデータのActionコマンド
 */
export type DataActionType =
  | 'init'
  | 'addPage' // 指定したインデックスにページを追加する
  | 'deletePage' // 指定したインデックスのページを削除する
  | 'addNode' // ノードを指定したインデックスに付与する
  | 'deleteNode' // ノードを削除する。削除した後の前後のnodeをつなげる
  | 'movePrevious' // 次のページに移動する
  | 'moveNext';

export type EditorCommand =
  | 'text'
  | 'setBackgroundImage'
  | 'setCharacter'
  | 'changeCharacter'
  | 'setBgm';

/**
 * 実際のゲーム画面にActionを起こすCommand
 */
export type GameCommand =
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
  id:string
  command: DataActionType;
  option: OptionClass | string;
  content?: string; // コンテンツのpathや本文
}

export interface Node {
  kind:'node'
  label: string;
  id: string;
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

export interface DataAction {
  action: DataActionType
  payloadProjectIndex?: number // NodeやProjectの編集先の配列のインデックス
  payloadNodeIndex?: number
  payloadProject?:Project
  payloadNode?: Node
  payloadPage?: Page
}

export interface FileAction {
  command: EditorCommand
}

// キャラクターの立ち絵の画像、イベントCG、BGM、SEなどを追加で管理する。以下のinterfaceは上のPageと入れ替える
// export interface Media {
//       character: Character;
//       bgImage: BackgroundImage;
//       eventCG: EventCG;
//       music: Music;
//       se: SE;
// }

// export interface Project {
//   projectName: string;
//   projectId: string;
//   author: Author;
//   media: Media:
//   node: Node[];
// }
