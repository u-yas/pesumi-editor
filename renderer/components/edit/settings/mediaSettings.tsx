
import BackgroundButton from './components/background/backgroundButton'
import BgmButton from './components/bgm/bgmButton'
import CharacterButton from './components/character/characterButton'
import SeButton from './components/se/seButton'

/**
 * どのメディア（キャラクター、立ち絵、ボイス、背景、BGM、SE）などを設定するかのボタンを表示する
 * @param props
 */
const MediaSetting:React.FC = () => {
  return (
    <>
      <CharacterButton />
      <BackgroundButton />
      <BgmButton />
      <SeButton />
    </>
  )
}

export default MediaSetting
