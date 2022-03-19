import { Button, HStack, Text } from '@chakra-ui/react'
import useScreenSize from 'lib/use-screen-size'
import Link from 'next/link'
import React from 'react'
import plr from 'lib/plr'

const HeaderButton: React.FC<{ page: string }> = ({ children, page }) => {
    return (
        <Link href={`${page}/`} passHref>
            <Button variant='ghost' color='white' _hover={{ color: 'black', backgroundColor: 'white' }}>
                {children}
            </Button>
        </Link>
    )
}
const Header = () => {
    const screenSize = useScreenSize()
    return (
        <HStack width='100%' height='60px' backgroundColor='black' pl={plr} pr={plr}>
            <Text fontSize='2xl' color='white' mr={20} _hover={{ cursor: 'pointer' }}>
                Erik Sherman
            </Text>
            <HeaderButton page='/classes/sympy'>Sympy</HeaderButton>
            <HeaderButton page='/classes/math461'>MATH461</HeaderButton>
            <Text color='white'>{screenSize}</Text>
        </HStack>
    )
}
export default Header
