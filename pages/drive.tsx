import { HStack, Input, Stack, Text, toast, useToast } from '@chakra-ui/react'
import Layout from 'components/layout'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function GoogleDrive() {
    const toast = useToast()
    interface FormData {
        inputUrl: string
    }

    const methods = useForm<FormData>({
        defaultValues: {
            inputUrl: '',
        },
    })

    const [newUrl, setNewUrl] = useState<string | null>(null)

    function onSubmit(data: FormData) {
        console.log('submit', data.inputUrl)
        const driveId = data.inputUrl.match(/\/d\/(.*)\/view?/)?.[1]
        console.log('driveId', driveId)
        if (driveId == null) {
            toast({
                title: 'Invalid Google Drive URL',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        } else {
            const cdnUrl = `https://drive.google.com/uc?export=view&id=${driveId}`

            setNewUrl(cdnUrl)
        }
    }

    return (
        <Layout>
            <Text
                as='h1'
                fontSize='4xl'
            >
                Google Drive CDN Tool:
            </Text>
            <HStack
                maxW='1200px'
                width='90%'
                gridGap={2}
                padding={2}
                alignItems='flex-start'
            >
                <Stack
                    as='form'
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
                    <Text>Enter SHARE link: </Text>
                    <Input
                        {...methods.register('inputUrl')}
                        width='1000px'
                    />
                    <Text>CDN link: </Text>
                    {newUrl && <Text color='red.500'>{newUrl}</Text>}
                </Stack>
            </HStack>
        </Layout>
    )
}
