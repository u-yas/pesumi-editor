import { ipcRenderer, contextBridge } from 'electron'
import { ReturnOpenFolder } from './ipc/openProjectFolder'
// Since we disabled nodeIntegration we can reintroduce
// needed node functionality here
// 設定情報（著者名、プロジェクト名、メディア情報（キャラクターとか背景とか））の設定に必要に成る型

declare global {
  interface Window {
    myIpcRenderer: MyIpcRenderer
  }
}

// electronのcontextIsolationBridgeで使う
export interface MyIpcRenderer {
  openFolder: () => Promise<ReturnOpenFolder | null>
}

contextBridge.exposeInMainWorld('myIpcRenderer', {
  openFolder: async (): Promise<ReturnOpenFolder | null> => {
    const returnValue: ReturnOpenFolder | null = await ipcRenderer.invoke('openProjectFolder')
    return returnValue
  }

})
