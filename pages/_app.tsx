import { ChakraProvider } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import components from 'components/mdx-components'
import theme from 'lib/theme'

export default function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <MDXProvider components={components}>
                <Component {...pageProps} />
            </MDXProvider>
        </ChakraProvider>
    )
}
