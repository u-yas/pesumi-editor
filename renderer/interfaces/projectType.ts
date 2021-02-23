
// 設定情報（著者名、プロジェクト名、メディア情報（キャラクターとか背景とか））の設定に必要に成る型

/**
 * 編集するデータのActionコマンド
 */
export type PesumiDataActionType =
  | 'init'
  | 'addPage' // 指定したインデックスにページを追加する
  | 'deletePage' // 指定したインデックスのページを削除する
  | 'addChapter' // ノードを指定したインデックスに付与する
  | 'deleteChapter' // ノードを削除する。削除した後の前後のchapterをつなげる
  | 'movePrevious' // 次のページに移動する
  | 'moveNext';

export interface PesumiDataAction {
  action: PesumiDataAction
  payloadProjectIndex?: number // ChapterやProjectの編集先の配列のインデックス
  payloadChapterIndex?: number
  payloadProject?:Project
  payloadChapter?: Chapter
  payloadPage?: Page
}

export interface Author {
  writer: string[];
  illustrator: string[];
}

export interface Page {
  id:string
  command: PesumiDataActionType; //
  content?: string; // コンテンツのpathや本文
}

export interface Chapter {
  kind:'chapter'
  label: string;
  id: string;
  pages: Page[];
}

export interface SettingBgm {
  label: string
  fileName: string
}

export interface SettingSe {
  label:string
  fileName: string
}
export interface SettingBackgroundImage {
  label: string
  fileName: string
}
export interface SettingCharacter {
  name: string,
  standingImage?: [{ label: string, filename: string}]
  voice?:[ {label: string, fileName: string}]
}

export interface Media {
  character: SettingCharacter[];
  bgImage: SettingBackgroundImage[];
  bgm: SettingBgm[];
  se: SettingSe[];
}
export interface Project {
  projectName: string;
  projectId: string;
  author: Author;
  media: Media;
  chapter: Chapter[];
}
