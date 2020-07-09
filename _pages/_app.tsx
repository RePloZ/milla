import { AppProps } from 'next/app'
import 'styles/app.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merienda+One&display=swap"/>
    <Component {...pageProps} />
  </>)
}