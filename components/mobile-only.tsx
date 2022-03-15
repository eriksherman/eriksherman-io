/*
	Wraps components and uses media query to only render them if the viewport width is base or sm (according to chakra ui theme)
*/

import { Flex } from '@chakra-ui/layout'
import React from 'react'

export default function MobileOnly({ children }) {
    return (
        <Flex width='100%' display={{ base: 'flex', md: 'none' }}>
            {children}
        </Flex>
    )
}
