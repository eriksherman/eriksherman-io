/*
	Wraps components and uses media query to only render them if the viewport width is md or greater (according to chakra ui theme)
*/

import { Flex } from '@chakra-ui/layout'
import React from 'react'

export default function DesktopOnly({ children }) {
    return (
        <Flex width='100%' display={{ base: 'none', md: 'flex' }}>
            {children}
        </Flex>
    )
}
