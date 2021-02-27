import { MyIpcRenderer } from '../../main/helpers/preload'
declare global{
  interface Window {
    myIpcRenderer: MyIpcRenderer
  }

}
// electronのcontextIsolationBridgeで使う
