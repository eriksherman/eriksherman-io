import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link href='https://rsms.me/inter/inter.css' rel='stylesheet' />
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css' />
                {/* <link
                    rel='stylesheet'
                    href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/default.min.css'
                /> */}
                <link
                    rel='stylesheet'
                    href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/github.min.css'
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
