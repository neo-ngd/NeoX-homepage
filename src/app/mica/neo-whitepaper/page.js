'use client'
import { useEffect } from 'react'

export default function NeoWhitepaperRedirect() {
    useEffect(() => {
        window.location.replace('/mica/neo-whitepaper.pdf')
    }, [])
    return null
}
