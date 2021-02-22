
/**
 * 編集するデータのActionコマンド
 */
export type DataActionType =
  | 'init'
  | 'addPage' // 指定したインデックスにページを追加する
  | 'deletePage' // 指定したインデックスのページを削除する
  | 'addChapter' // ノードを指定したインデックスに付与する
  | 'deleteChapter' // ノードを削除する。削除した後の前後のchapterをつなげる
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

export interface Chapter {
  kind:'chapter'
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
  chapter: Chapter[];
}

export interface GameData {
  project: Project;
}

export interface DataAction {
  action: DataActionType
  payloadProjectIndex?: number // ChapterやProjectの編集先の配列のインデックス
  payloadChapterIndex?: number
  payloadProject?:Project
  payloadChapter?: Chapter
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
//   chapter: Chapter[];
// }

// folderState
