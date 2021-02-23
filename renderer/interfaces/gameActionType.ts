// ゲームを実行するときに必要に成る型
export type GameCommand =
  | 'BackgroundImage'
  | 'Bgm'
  | 'Character'
  | 'addCharacter'
  | 'deleteCharacter'
  | 'startSE'
  | '';
