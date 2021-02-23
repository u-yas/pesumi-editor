// import App from "next/app";
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps /*, AppContext */ } from 'next/app'
import { useReducer } from 'react'
import Header from '../components/layout/header'
import * as Type from '../interfaces/projectType'
import { folderContext } from '../utils/customHooks/useFolder'
import { pesumiGameContext, pesumiGameReducer } from '../utils/customHooks/usePesumi'

/**
 * reducerの初期データ
 */
const initialState:Type.Project = {
  projectName: '',
  projectId: '',
  media: {
    character: [],
    bgImage: [],
    bgm: [],
    se: []
  },
  author: {
    writer: [],
    illustrator: []
  },
  chapter: []
}
const MyApp:React.FC <AppProps> = ({ Component, pageProps }: AppProps) => {
  // エクスポートするjsonデータのstate
  const [pesumiState, pesumiDispatch] = useReducer(pesumiGameReducer, initialState)

  return (
    <>
      <pesumiGameContext.Provider value = {{ pesumiState, pesumiDispatch }}>
        <folderContext.Provider value = ''>
          <ChakraProvider>
            <Header />
            <Component {...pageProps} />
          </ChakraProvider>
        </folderContext.Provider>
      </pesumiGameContext.Provider>
    </>
  )
}

export default MyApp
