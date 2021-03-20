
// import App from "next/app";
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps /*, AppContext */ } from 'next/app'
import Header from '../components/layout/header'
import PesumiProvider from '../utils/customHooks/usePesumi'
const MyApp:React.FC <AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
        <PesumiProvider>
          <ChakraProvider>
            <Header />
            <Component {...pageProps} />
          </ChakraProvider>
        </PesumiProvider>
    </>
  )
}

export default MyApp
