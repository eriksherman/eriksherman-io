import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '50em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
})

const config = { initialColorMode: 'dark', useSystemColorMode: false }

export default extendTheme({
    breakpoints,
    config,
    fonts: {
        heading: 'Inter',
        body: 'Inter',
    },
    styles: {
        global: {
            div: {
                margin: '0 !important',
            },
        },
    },
    colors: {
        blue: {
            500: '#076CB4',
        },
    },
})
