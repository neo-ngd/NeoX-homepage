'use client'
import React from "react"
export default function Releases() {
    const releases = [
        {
            "date": "15/07/2024",
            "title": "Gamma TestNet Launch",
            "url": "https://medium.com/neo-smart-economy/neo-launches-the-neo-x-gamma-testnet-23440c5cd50b",
            "logs": [
                "New model for network transaction fee calculation and burning",
                "Enhanced system contracts for governance",
                "Transaction reannouncement mechansism",
                "Security and stability fixes",
                "Native bridge updates",
            ]
        },
        {
            "date": "22/04/2024",
            "title": "Beta TestNet Launch",
            "url": "https://medium.com/neo-smart-economy/neo-launches-the-neo-x-beta-testnet-0b861b3dd366",
            "logs": [
                "Support for candidate node registration and  election.",
                "Bidirectional token bridging between Neo N3 and Neo X."
            ]
        },
        {
            "date": "31/01/2024",
            "title": "Alpha TestNet Launch",
            "url": "https://medium.com/@neo-blockchain/neo-launches-the-neo-x-alpha-testnet-d791a1eed5ad",
            "logs": [
                "Multi-node consensus introduced.",
                "Consensus stability enhancements.",
                "Introduction of Neo N3 to Neo X bridge."
            ]
        },
        {
            "date": "29/12/2024",
            "title": "Pre-Alpha TestNet Launch",
            "url": "https://medium.com/@neo-blockchain/announcing-the-neo-x-pre-alpha-testnet-launch-4eff78560bdd",
            "logs": [
                "dBFT consensus integration.",
                "Ethereum P2P protocol is extended.",
                "N3 multisignature scheme adapted to Ethereum block structure."
            ]
        },
        {
            "date": "27/10/2023",
            "title": "Neo X Announced",
            "url": "https://medium.com/@neo-blockchain/neo-to-open-a-new-chapter-with-evm-compatible-mev-resistant-sidechain-44d99dd5b1c2",
            "logs": [
                "Neo X project is revealed in Hong Kong."
            ]
        }
    ]

    React.useEffect(() => {
        const carousel = document.getElementById("release-scrollable-div")
        const leftButton = document.getElementById("release-left-button")
        const rightButton = document.getElementById("release-right-button")

        leftButton.disabled = true


        const updateButtons = () => {
            // Check if the carousel is at the leftmost position
            if (carousel.scrollLeft === 0) {
                leftButton.disabled = true;
            } else {
                leftButton.disabled = false;
            }

            // Check if the carousel is at the rightmost position
            if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
                rightButton.disabled = true;
            } else {
                rightButton.disabled = false;
            }
        }
        carousel.addEventListener('scroll', updateButtons);

        leftButton.addEventListener('click', function () {
            carousel.scrollBy({ top: 0, left: -288, behavior: 'smooth' })  //w-72 = 288
        })

        rightButton.addEventListener('click', function () {
            carousel.scrollBy({ top: 0, left: 288, behavior: 'smooth' })  //w-72 = 288
        })
    }, [])


    return (
        <div className="w-full relative flex flex-col py-20 lg:py-24">
            <a name="releases" />
            <div className="max-w-6xl mx-auto w-full   z-40">

                <div className="flex flex-col px-5">
                    <p className="lg:text-lg text-[#02DCA3] font-semibold">Releases</p>
                    <p className="font-bold text-2xl lg:text-5xl py-5">Keep up with the progress.</p>

                    <div className="flex lg:flex-row flex-col lg:items-center gap-5">
                        <p className="lg:text-lg font-medium text-[#404056]">Our developers are hard at work. Stay up to date on the latest releases from the Neo X team. </p>

                        <div className="lg:ml-auto flex items-center gap-5">
                            <button id="release-left-button" className="disabled:opacity-25">
                                <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.8277 10.4127L2.00236 10.4127" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.251 2.16797L2.00448 10.4145L10.251 18.661" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </button>

                            <button id="release-right-button" className="disabled:opacity-25">
                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.32265 10.4127L20.148 10.4127" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.8994 2.16797L20.1459 10.4145L11.8994 18.661" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>

            </div>

            <div className="w-full relative">


                <div id="release-scrollable-div" className="snap-x pt-14 relative xl:pl-52 w-full px-8 z-40 overflow-x-hidden flex items-start gap-6 ">

                    {
                        releases.map((r, index) => (
                            <a href={r.url} target="_blank" key={` release-${index}`} className="snap-center w-full min-w-72  border rounded-2xl bg-white p-8 flex flex-col gap-3 group hover:shadow-lg transition ease-in-out duration-300 hover:cursor-pointer">
                                <div className="flex items-center">
                                    <p className="opacity-70">{r.date}</p>
                                    <button className="ml-auto opacity-0 group-hover:opacity-100 transition ease-in-out duration-300 hover:cursor-pointer">
                                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.25">
                                                <rect width="30.2681" height="30.2681" rx="5" fill="#D9D9D9" />
                                                <rect x="0.5" y="0.5" width="29.2681" height="29.2681" rx="4.5" stroke="black" strokeOpacity="0.25" />
                                            </g>
                                            <path d="M9.68557 14.9546L20.2226 14.9545" stroke="#00001D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.5977 10.3381L20.2134 14.9539L15.5977 19.5697" stroke="#00001D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </button>
                                </div>
                                <p className="font-semibold lg:text-lg hover:underline">
                                    {r.title}
                                </p>
                                <ul className="list-disc list-outside text-[#404056] space-y-3">
                                    {
                                        r.logs.map((log, logIndex) => (
                                            <li className="font-medium" key={`release-${index}-log-${logIndex}`}>{log}</li>
                                        ))
                                    }

                                </ul>
                            </a>
                        ))
                    }

                </div>
                <div className="absolute z-10 left-0 lg:bottom-48 bottom-48 bg-gradient h-6 w-full flex ">&nbsp;</div>
            </div>
        </div>

    )
}