import { Stack } from '@chakra-ui/react'
import Footer from 'components/footer'
import Header from 'components/header'
import plr from 'lib/plr'

export default function Layout({ children }) {
    return (
        <Stack width='100%'>
            <Header />
            <Stack width='100%' pl={plr} pr={plr}>
                {children}
            </Stack>
            <Footer />
        </Stack>
    )
}
