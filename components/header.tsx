import { Button, HStack, Text } from '@chakra-ui/react'
import useScreenSize from 'lib/use-screen-size'
import Link from 'next/link'
import React from 'react'

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
        <HStack width='100%' height='60px' backgroundColor='black' pl={10} pr={10}>
            <Text fontSize='2xl' color='white' mr={20} _hover={{ cursor: 'pointer' }}>
                Erik Sherman
            </Text>
            <HeaderButton page='classes/MATH461'>MATH461 Linear Algebra</HeaderButton>
            <Text color='white'>{screenSize}</Text>
        </HStack>
    )
}
export default Header
