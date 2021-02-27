import { ReturnOpenFolder } from '../../main/helpers/ipc/openProjectFolder'
declare global{
  interface Baka {
    name:string
  }

}
// electronのcontextIsolationBridgeで使う
 interface MyIpcRenderer {
  openFolder: () => Promise<ReturnOpenFolder | null>
}
