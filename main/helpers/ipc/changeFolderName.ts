import { rename } from 'fs'

const changeCharacterFolderName = (fromName:string, toName:string):Promise<string> => {
  return new Promise((resolve, reject) => {
    rename(`./character/${fromName}`, `./character/${toName}`, (err) => {
      if (err) reject(err)
      else resolve('名前変更が完了しました')
    })
  })
}
export default changeCharacterFolderName
