import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render (): JSX.Element {
    return (
      <Html style={{ height: '100%' }}>
      <Head>
        <meta charSet="utf-8" />
        <style>{`
            #__next { height: 100% }
          `}
          </style>
      </Head>
        <body style={{ height: '100%', margin: '0' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
