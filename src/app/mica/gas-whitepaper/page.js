'use client'
import { useEffect } from 'react'

export default function GasWhitepaperRedirect() {
    useEffect(() => {
        window.location.replace('/mica/gas-whitepaper.pdf')
    }, [])
    return null
}
