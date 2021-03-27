import { renameSync } from 'fs'

const changeCharacterFolderName = async (fromName: string, toName: string): Promise<string> => {
  renameSync(`./character/${fromName}`, `./character/${toName}`)
  return ('名前変更が完了しました')
}

export default changeCharacterFolderName
