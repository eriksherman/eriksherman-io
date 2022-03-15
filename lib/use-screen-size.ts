import { useBreakpointValue } from '@chakra-ui/media-query'

export default function useScreenSize() {
    const screenSize = useBreakpointValue({
        base: 'base',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl',
        '2xl': '2xl',
    })
    return screenSize || 'sm'
}
