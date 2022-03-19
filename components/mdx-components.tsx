import { Box, Text } from '@chakra-ui/react'

export default {
    p: (props) => <Text as='p' fontSize='lg' fontWeight={400} {...props} />,
    h1: (props) => <Text as='h1' fontSize='3xl' fontWeight={700} {...props} />,
    h2: (props) => <Text as='h2' fontSize='2xl' fontWeight={700} {...props} />,
    h3: (props) => <Text as='h3' fontSize='xl' fontWeight={700} {...props} />,
    br: (props) => <Box height='24px' {...props} />,
}
