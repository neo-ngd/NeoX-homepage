'use client';
import React from "react";
export default function Blog() {
    const posts = [
        {
            "date": "21/09/2026",
            "title": "Try WhisperDark: Experience Autonomous AI Payments on Neo X",
            "url": "https://x.com/ngd_neo/status/2101946949142474760",
            "image_url": "https://pbs.twimg.com/media/HSubNSpasAAEq-5?format=jpg&name=small"
        },
        {
            "date": "18/09/2026",
            "title": "Neo 3650: Turn the First Decade of Neo MainNet into Art and Mint It Onchain",
            "url": "https://x.com/ngd_neo/status/2100885034781880557",
            "image_url": "https://pbs.twimg.com/media/HSfW5yva4AABkAp?format=jpg&name=small"
        },
        {
            "date": "14/09/2026",
            "title": "USDC.e and WETH Now Available on Neo X via Transporter",
            "url": "https://x.com/ngd_neo/status/2099422916354228572",
            "image_url": "https://pbs.twimg.com/media/HSKix8NbQAA8unZ?format=jpg&name=small"
        },
        {
            "date": "10/08/2026",
            "title": "Neo X MainNet v0.6.2 Upgrade Announcement",
            "url": "https://neo.org/blog/details/4341",
            "image_url": "https://neo.org/upload/275484b8ed434aff47ad.jpg"
        },
        {
            "date": "07/07/2026",
            "title": "BitGo Integrates the Neo X Network",
            "url": "https://x.com/ngd_neo/status/2074372846420197441",
            "image_url": "https://pbs.twimg.com/media/HMmhOfIbIAAmDEW?format=png&name=small"
        },
        {
            "date": "16/06/2026",
            "title": "Play Rock Paper Scissors and Experience Anti-MEV on Neo X",
            "url": "https://x.com/ngd_neo/status/2066793344261365884",
            "image_url": "https://pbs.twimg.com/media/HK625LkbEAA3geW?format=jpg&name=small"
        },
        {
            "date": "14/04/2026",
            "title": "Neo Partners with LayerZero to Expand Neo X Cross-Chain Connectivity",
            "url": "https://x.com/ngd_neo/status/2043905657213202598",
            "image_url": "https://pbs.twimg.com/media/HF1pTSJasAADG6w?format=jpg&name=small"
        },
        {
            "date": "15/12/2025",
            "title": "Introducing the Message Bridge on the Neo Ecosystem",
            "url": "https://neo.org/blog/details/4329",
            "image_url": "https://neo.org/upload/ea3d4833910858cf89d7.jpg"
        },
        {
            "date": "29/10/2025",
            "title": "Opening the Neo X Core Repositories to the Community",
            "url": "https://neo.org/blog/details/4327",
            "image_url": "https://neo.org/upload/38ba75ae8c3f63f1b24a.jpg"
        },
        {
            "date": "15/09/2025",
            "title": "Neo X MainNet v0.4.2 Upgrade: Anti-MEV Now Live",
            "url": "https://neo.org/blog/details/4326",
            "image_url": "https://neo.org/upload/d72142c0e3259e058753.jpg"
        }
    ]

    React.useEffect(() => {
        const carousel = document.getElementById("blog-scrollable-div")
        const leftButton = document.getElementById("left-button")
        const rightButton = document.getElementById("right-button")

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
        <div className="w-full relative flex flex-col py-20 lg:py-24 border-t border-b bg-[#D9D9D9]/10 overflow-hidden">
            <a name="news" />

            <div className="hidden lg:flex lg:absolute z-50 top-0 right-0 bg-gradient-to-l from-[#D9D9D9]/50 w-96 h-full pointer-events-none">

            </div>
            <div className="max-w-6xl mx-auto w-full px-8 z-40">

                <div className="flex flex-col">
                    <p className="lg:text-lg text-[#02DCA3] font-semibold">News</p>
                    <p className="font-bold text-2xl lg:text-5xl py-5">Latest news.</p>

                    <div className="flex lg:flex-row flex-col lg:items-center gap-5">
                        
                        <p className="lg:text-lg font-medium text-[#404056]">Let’s catch you up on what is happening in the Neo X ecosystem.</p>

                        <div className="lg:ml-auto flex items-center gap-5">

                            <button id="left-button" className="disabled:opacity-25">
                                <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.8277 10.4127L2.00236 10.4127" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.251 2.16797L2.00448 10.4145L10.251 18.661" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </button>

                            <button id="right-button" className="disabled:opacity-25">
                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.32265 10.4127L20.148 10.4127" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.8994 2.16797L20.1459 10.4145L11.8994 18.661" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="blog-scrollable-div" className="snap-x pt-14 relative xl:pl-52 w-full px-8 z-40 overflow-x-hidden flex items-center gap-6 ">

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