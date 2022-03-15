import useScreenSize from 'lib/use-screen-size'

export default function useIsMobile() {
    const screenSize = useScreenSize()
    return screenSize === 'base' || screenSize === 'sm'
}
