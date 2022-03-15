import { Stack } from '@chakra-ui/react'

const paddingLR = { sm: '2%', md: '4%', lg: '6%', xl: '8%', '2xl': '10%' }

export default function RestictedWidthContainer({ children, ...props }) {
    return (
        <Stack width='100%' pl={paddingLR} pr={paddingLR} {...props}>
            {children}
        </Stack>
    )
}
