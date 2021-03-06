import { GameCommand } from './gameActionType'

/**
 * 編集するデータのActionコマンド
 */
export type PesumiDataActionType =
  | 'init'
  | 'addPage' // 指定したインデックスにページを追加する
  | 'deletePage' // 指定したインデックスのページを削除する
  | 'sortChapter'
  | 'sortPages' // react-beautiful-dndで並び替える
  | 'addChapter' // ノードを指定したインデックスに付与する
  | 'deleteChapter' // ノードを削除する。削除した後の前後のchapterをつなげる
  | 'movePrevious' // 次のページに移動する
  | 'moveNext'

/**
   * Editorで編集するPesumiDataのreducerで使うaction type
   */
export interface PesumiDataAction {
  type: PesumiDataActionType
  payloadProjectIndex?: number // ChapterやProjectの編集先の配列のインデックス
  payloadChapterIndex?: number
  payloadProject?: Project
  payloadChapters?: Chapter[]
  payloadChapter?: Chapter
  payloadPages?: Page[]
  payloadPage?: Page

}

export interface Author {
  writer: string[]
  illustrator: string[]
}

export interface Page {
  id: string
  command: GameCommand
  content?: string // コンテンツのpathや本文
}

export interface Chapter {
  label: string
  id: string
  pages: Page[]
}

export interface SettingBgm {
  label: string
  fileName: string
}

export interface SettingSe {
  label: string
  fileName: string
}
export interface SettingBackgroundImage {
  label: string
  fileName: string
}
export interface SettingCharacter {
  name: string
  standingImage?: Array<{ label: string, filename: string}>
  voice?: Array<{label: string, fileName: string}>
}

export interface Media {
  character: SettingCharacter[]
  bgImage: SettingBackgroundImage[]
  bgm: SettingBgm[]
  se: SettingSe[]
}
export interface Project {
  projectName: string
  projectId: string
  author: Author
  media: Media
  chapter: Chapter[]
}
