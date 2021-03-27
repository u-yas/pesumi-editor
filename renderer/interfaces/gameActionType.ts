// ゲームを実行するときに必要に成る型
// (set/delete)(BackgroundImage/Bgm/Character/Se/Text/Quote)
export type GameCommand =
// text
  | 'text'
  // quote(キャラクターがしゃべる)
  | 'quote'
  // backgroundImage
  | 'setBackgroundImage'
  | 'deleteBackgroundImage'
  // BGM
  | 'setBgm'
  | 'deleteBgm'
  // キャラクターの立ち絵
  | 'setCharacter'
  | 'deleteCharacter'
  | 'changeCharacter' // キャラクターを入れ替える
  | 'changeCharacterStandingImage' // キャラクターの立ち絵を変える
  | 'setSe'
  | 'deleteSe'
