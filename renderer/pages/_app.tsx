// import App from "next/app";
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps /*, AppContext */ } from 'next/app'
import { useReducer } from 'react'
import Header from '../components/layout/header'
import * as Type from '../interfaces/type'
import { folderContext, pesumiGameContext, pesumiGameReducer } from '../utils/customHooks/usePesumi'

/**
 * reducerの初期データ
 */
const initialState:Type.Project = {
  projectName: '',
  projectId: '',
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
