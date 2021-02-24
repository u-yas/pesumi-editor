
// import App from "next/app";
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps /*, AppContext */ } from 'next/app'
import { useReducer } from 'react'
import Header from '../components/layout/header'
import { folderContext } from '../utils/customHooks/useFolder'
import { pesumiDataContext, pesumiGameReducer } from '../utils/customHooks/usePesumi'

const MyApp:React.FC <AppProps> = ({ Component, pageProps }: AppProps) => {
  // エクスポートするjsonデータのstate
  const [pesumiState, pesumiDispatch] = useReducer(pesumiGameReducer, initialState)

  return (
    <>
      <pesumiDataContext.Provider value = {{ pesumiState, pesumiDispatch }}>
        <folderContext.Provider value = ''>
          <ChakraProvider>
            <Header />
            <Component {...pageProps} />
          </ChakraProvider>
        </folderContext.Provider>
      </pesumiDataContext.Provider>
    </>
  )
}

export default MyApp
