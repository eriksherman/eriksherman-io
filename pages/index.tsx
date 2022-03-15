// import Image from 'next/image'

import { Button, Flex, HStack } from '@chakra-ui/react'
import Layout from 'components/layout'
import Link from 'next/link'

export default function Home() {
    return (
        <Layout>
            <HStack maxW='1200px' width='90%' gridGap={2} padding={2} alignItems='flex-start'>
                <Flex flexDirection={{ base: 'column', sm: 'row' }} gridGap={2}>
                    <Link href='/classes/math461' passHref>
                        <Button>MATH461</Button>
                    </Link>
                </Flex>
            </HStack>
        </Layout>
    )
}
