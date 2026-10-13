'use client';
import React from "react"
export default function News() {
    const posts = [
        {
            "date": "21/09/2026",
            "title": "NGD launches WhisperDark, a dungeon-crawler where an AI agent spends real xGAS",
            "source": "Neo News Today",
            "url": "https://neonewstoday.com/gaming/ngd-launches-whisperdark-a-dungeon-crawler-where-an-ai-agent-spends-real-xgas/",
            "image_url": "https://neonewstoday.com/wp-content/uploads/2026/09/neo-x-whisperdark-1.png"
        },
        {
            "date": "15/09/2026",
            "title": "AxLabs ships full Ax402 stack on Neo X",
            "source": "Neo News Today",
            "url": "https://neonewstoday.com/development/axlabs-ships-full-ax402-stack-on-neo-x/",
            "image_url": "https://neonewstoday.com/wp-content/uploads/2026/07/neo-x-ax402.png"
        },
        {
            "date": "14/09/2026",
            "title": "USDC, WETH arrive on Neo X through Chainlink CCIP-powered Transporter bridge",
            "source": "Neo News Today",
            "url": "https://neonewstoday.com/general/usdc-weth-arrive-on-neo-x-through-chainlink-ccip-powered-transporter-bridge/",
            "image_url": "https://neonewstoday.com/wp-content/uploads/2026/09/neo-x-usdc-weth-1.png"
        },
        {
            "date": "07/07/2026",
            "title": "BitGo brings institutional-grade custody infrastructure to Neo X",
            "source": "Neo News Today",
            "url": "https://neonewstoday.com/general/bitgo-brings-institutional-grade-custody-infrastructure-to-neo-x/",
            "image_url": "https://neonewstoday.com/wp-content/uploads/2026/07/bitgo-neo-x-integration.png"
        },
        {
            "date": "15/04/2026",
            "title": "Neo X goes live on LayerZero, connecting to 170+ chain ecosystem",
            "source": "Neo News Today",
            "url": "https://neonewstoday.com/general/neo-x-goes-live-on-layerzero-connecting-to-170-chain-ecosystem/",
            "image_url": "https://neonewstoday.com/wp-content/uploads/2026/04/layerzero-neo-x.png"
        },
        {
            "date": "04/03/2026",
            "title": "COZ releases AppKit adapters enabling unified wallet connections for Neo N3 and Neo X dApps",
            "source": "Neo News Today",
            "url": "https://neonewstoday.com/development/coz-releases-appkit-adapters-enabling-unified-wallet-connections-for-neo-n3-and-neo-x-dapps/",
            "image_url": "https://neonewstoday.com/wp-content/uploads/2026/03/coz-appkit-adaptors.png"
        },
        {
            "date": "03/03/2026",
            "title": "Da Hongfei positions Neo X as AI-agent-native blockchain in new strategy outline",
            "source": "Neo News Today",
            "url": "https://neonewstoday.com/ai/da-hongfei-positions-neo-x-as-ai-agent-native-blockchain-in-new-strategy-outline/",
            "image_url": "https://neonewstoday.com/wp-content/uploads/2026/03/neo-x-ai-agents.png"
        },
        {
            "date": "15/09/2025",
            "title": "Neo X Blockchain Launches MEV Protection on Mainnet",
            "source": "U.Today",
            "url": "https://u.today/neo-x-blockchain-launches-mev-protection-on-mainnet",
            "image_url": "https://u.today/sites/default/files/styles/1200x/public/2025-09/s9050.jpg.webp"
        }
    ]

    React.useEffect(() => {
        const carousel = document.getElementById("news-scrollable-div")
        const leftButton = document.getElementById("news-left-button")
        const rightButton = document.getElementById("news-right-button")
        
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

        leftButton.addEventListener('click', function(){
            carousel.scrollBy({ top: 0, left: -320, behavior: 'smooth' })  //w-80 = 320
        })

        rightButton.addEventListener('click', function(){
            carousel.scrollBy({ top: 0, left: 320, behavior: 'smooth' })  //w-72 = 288
        })

    }, [])


    return (
        <div className="w-full relative flex flex-col py-20 lg:py-24  overflow-hidden">
            <a name="media" />
            <div className="hidden lg:flex lg:absolute z-50 top-0 right-0 bg-gradient-to-l from-[#D9D9D9]/50 w-96 h-full pointer-events-none">

            </div>

            <div className="max-w-6xl mx-auto w-full px-8 z-40">

                <div className="flex flex-col">
                    <p className="lg:text-lg text-[#02DCA3] font-semibold">Media</p>
                    <p className="font-bold text-2xl lg:text-5xl py-5">Find what they’re saying about us.</p>

                    <div className="flex lg:flex-row flex-col lg:items-center gap-5">
                        <p className="lg:text-lg font-medium text-[#404056]">Browse some of the recent media coverage about Neo X.</p>
                        
                        <div className="lg:ml-auto flex items-center gap-5">
                            <button id="news-left-button" className="disabled:opacity-25">
                                <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.8277 10.4127L2.00236 10.4127" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.251 2.16797L2.00448 10.4145L10.251 18.661" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </button>

                            <button id="news-right-button" className="disabled:opacity-25">
                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.32265 10.4127L20.148 10.4127" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.8994 2.16797L20.1459 10.4145L11.8994 18.661" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="news-scrollable-div" className="snap-x pt-14 relative xl:pl-52 w-full px-8 z-40 overflow-x-hidden flex items-center gap-6 ">

                {
                    posts.map((p, index) => (
                        <a target="_blank" href={p.url} key={`post-${index}`} className="snap-center flex min-w-80 max-w-80 w-80 flex-col gap-3">
                            <div className=" h-44 bg-gray-100 rounded-xl mb-2 overflow-hidden">
                                <img src={p.image_url} className="w-full h-44 object-cover" />
                            </div>
                            <p className="font-semibold text-[#7E7E8C]">{p.date}</p>
                            <p className="font-semibold lg:text-lg line-clamp-2 h-14">{p.title}</p>
                            <button className="flex items-center gap-2">
                                <p className="font-medium text-[#80808E]">Read More</p>
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.71094 4.86426L10.414 4.86424" stroke="#80808E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.59375 1.05164L10.4062 4.86405L6.59375 8.67646" stroke="#80808E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </a>
                    ))
                }


            </div>


        </div>
    )
}