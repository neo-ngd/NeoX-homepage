'use client';
import React from "react";
export default function Blog() {
    const posts = [
        {
            "date": "18/07/2024",
            "title": "Neo Launches the Neo X Gamma TestNet",
            "url": "https://medium.com/neo-smart-economy/neo-launches-the-neo-x-gamma-testnet-23440c5cd50b",
            "image_url": "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*dHvJLY9AA6DMCkjTmeBkeA.png",
        },
        {
            "date": "14/05/2024",
            "title": "Neo X launches TestNet Bug Bounty Program",
            "url": "https://neo.org/blog/details/4305",
            "image_url": "https://neo.org/upload/7111e3ecfdcc2a23182c.jpg",
        },
        {
            "date": "22/04/2024",
            "title": "Neo launches the Neo X Beta TestNet, more information on GAS utility revealed",
            "url": "https://medium.com/neo-smart-economy/neo-launches-the-neo-x-beta-testnet-0b861b3dd366",
            "image_url": "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*QqUxQCKoDb_P9HU2",
        },
        {
            "date": "28/02/2024",
            "title": "How Neo eliminates Toxic MEV",
            "url": "https://neo-blockchain.medium.com/how-neo-eliminates-toxic-mev-d0ecd3ff5717",
            "image_url": "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*IWnWS8MYvB3kZNF9",
        },
        {
            "date": "31/01/2024",
            "title": "Neo launches the Neo X Alpha TestNet",
            "url": "https://neo-blockchain.medium.com/neo-launches-the-neo-x-alpha-testnet-d791a1eed5ad",
            "image_url": "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*Kvmitoee16NZJ1ed",
        },
        {
            "date": "29/12/2023",
            "title": "Announcing the Neo X Pre-Alpha TestNet launch",
            "url": "https://neo-blockchain.medium.com/announcing-the-neo-x-pre-alpha-testnet-launch-4eff78560bdd",
            "image_url": "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*HHl3ptLqkNBotH8Z",
        },
        {
            "date": "27/10/2023",
            "title": "Neo opens a new chapter with EVM-compatible, MEV-resistant sidechain",
            "url": "https://neo-blockchain.medium.com/neo-to-open-a-new-chapter-with-evm-compatible-mev-resistant-sidechain-44d99dd5b1c2",
            "image_url": "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Qdc6ORAyYJTXm5nmdV4Gog.png",
        },
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