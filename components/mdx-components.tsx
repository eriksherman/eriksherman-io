import { Box, Text } from '@chakra-ui/react'

export default {
    h1: (props) => <Text as='h1' size='3xl' {...props} />,
    h2: (props) => <Text as='h2' size='lg' fontWeight='bold' {...props} />,
    h3: (props) => <Text as='h3' size='md' fontWeight='bold' {...props} />,
    h4: (props) => <Text as='h4' size='sm' fontWeight='bold' {...props} />,
    h5: (props) => <Text as='h5' size='sm' fontWeight='bold' {...props} />,
    h6: (props) => <Text as='h6' size='xs' fontWeight='bold' {...props} />,
    br: (props) => <Box height='24px' {...props} />,
}
