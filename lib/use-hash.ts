/*
	CUSTOM-BUILT HOOK BY ERIK SHERMAN

	custom hook that allows hash to be set from javascript
	initialHash must contain all keys that are in use and initial values for these keys 
*/

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface URLHash {
    [key: string]: string | undefined
}

export default function useHash(initialHashKeys: string[]) {
    const inBrowser = typeof document !== 'undefined'
    const hashURL = inBrowser ? document.location.hash : undefined
    const router = useRouter()

    const [hashObj, setHashObj] = useState<URLHash>({})

    // build hashObj from the url hash
    useEffect(() => {
        if (!inBrowser) {
            return
        }

        // end up with each key and val that was present in the url hash
        const entries: URLHash = Object.assign(
            {},
            ...document.location.hash
                .slice(1)
                .split('&')
                .map((entry) => {
                    const [key, val] = entry.split('=')

                    // ignore
                    if (key == null || val == null) {
                        return {}
                    }

                    // if the entry is valid
                    return { [key]: val }
                })
        )

        const newHash: URLHash = Object.assign(
            {},
            ...initialHashKeys.map((key) => {
                const entriesVal = entries[key]

                // if the entriesVal is null or undefined, ignore
                if (entriesVal == null) {
                    return {}
                }

                return { [key]: entriesVal }
            })
        )
        setHashObj(newHash)
    }, [inBrowser, hashURL])

    // transform hash to string, navigate
    // hash object will get rebuilt from new url and sent back via hash object
    const setHash = (newHashObj: URLHash) => {
        if (!inBrowser) {
            return
        }

        const newHashString = Object.entries(newHashObj).reduce((acc, cur) => {
            // if a value in newHashObj is null or undefined, ignore it when building url hash
            if (cur[1] == null) {
                return acc
            }
            // if there are no entries the beginning & sign should not be present
            if (acc === '') {
                return cur[0] + '=' + cur[1]
            }
            return acc + '&' + cur[0] + '=' + cur[1]
        }, '')

        // everything before the hash
        const base = document.location.origin + document.location.pathname

        // if theres no navigating to do, do nothing
        if (newHashString === hashURL) {
            return
        }

        // if the newHashString is an empty string, # is not necessary
        if (newHashString === '') {
            router.push(base, null, { shallow: true })
            return
        }

        // navigate to new hash
        const newUrl = base + '#' + newHashString
        router.push(newUrl, null, { shallow: true })
        return
    }

    return { hash: hashObj, setHash }
}
