
/**
 * 実際のゲーム画面にActionを起こすCommand
 */

export interface GameData {
  project: Project;
}

export interface FileAction {
  command: EditorCommand
}

export type GameCommand =
  | 'BackgroundImage'
  | 'Bgm'
  | 'Character'
  | 'addCharacter'
  | 'deleteCharacter'
  | 'startSE'
  | '';
