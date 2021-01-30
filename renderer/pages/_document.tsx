import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render ():JSX.Element {
    return (
      <Html>
      <Head>
        <meta charSet="utf-8" />
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
