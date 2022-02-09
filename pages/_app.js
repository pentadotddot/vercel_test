
import '../styles/globals.css'
import {MoralisProvider} from "react-moralis";
import { SessionProvider } from "next-auth/react"
import {ChakraProvider} from "@chakra-ui/react"


export default function MyApp({
  Component, 
  pageProps:{session, ...pageProps },
}){
  return( 
    <ChakraProvider>
      <MoralisProvider 
          appId={process.env.MORALIS_appId}
          serverUrl={process.env.MORALIS_server_url}
          >
            <SessionProvider session={session}>

              <Component {...pageProps} />  
            
            </SessionProvider>
      </MoralisProvider>
    </ChakraProvider>
    
  );
}

