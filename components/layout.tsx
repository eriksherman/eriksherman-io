import { Stack } from '@chakra-ui/react'
import Footer from 'components/footer'
import Header from 'components/header'

export default function Layout({ children }) {
    return (
        <Stack alignItems='center' width='100%'>
            <Header />

            {children}

            <Footer />
        </Stack>
    )
}
