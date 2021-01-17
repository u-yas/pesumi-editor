import { remote } from 'electron'
import { readFile } from 'fs'

export class PesumiData {
  pesumiFileData!: string
  constructor () {
    const dialog = remote.dialog
    dialog.showOpenDialog(
      remote.getCurrentWindow(),
      {
        properties: ['openFile'],
        filters: [
          {
            name: 'Document',
            extensions: ['pesumi']
          }
        ]
      }
    ).then((fileName) => {
      if (fileName) {
        readFile(fileName.filePaths[0], { encoding: 'utf-8' }, (err, data) => {
          if (data === undefined) {
            throw err
          } else {
            this.pesumiFileData = data
          }
        })
      }
    })
  }
}
