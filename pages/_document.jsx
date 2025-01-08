import { Html, Head, Main, NextScript } from 'next/document'
 
const Document = () => {
  return (
    <Html lang="en">
      <Head>
      <link
      rel="icon"
      type="image/png"
      href="b-logo.png"
    />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;