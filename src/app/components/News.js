'use client';
import React from "react"
export default function News() {
    const posts = [
        {
            "date": "21/06/24",
            "image_url": "https://static.news.bitcoin.com/wp-content/uploads/2024/06/3-3-news-bytes.png",
            "source": "koreaittimes",
            "title": "Neo and Phoenix join forces: Skynet to power new era of AI-enhanced blockchain technology",
            "url": "https://news.bitcoin.com/neo-and-phoenix-join-forces-skynet-to-power-new-era-of-ai-enhanced-blockchain-technology/",
        },
        {
            "date": "19/06/24",
            "image_url": "https://www.koreaittimes.com/news/photo/202406/132380_80872_322.png",
            "source": "koreaittimes",
            "title": "SubQuery integrating with Neo X for advanced data indexing",
            "url": "https://www.koreaittimes.com/news/articleView.html?idxno=132380",
        },
        {
            "date": "30/04/2024",
            "image_url": "https://blockchainreporter.net/wp-content/uploads/2023/10/nft-art.webp",
            "source": "BlockchainReporter",
            "title": "Neo Collaborates with Fansland to Drive Web3 Adoption in Entertainment Industry",
            "url": "https://blockchainreporter.net/neo-collaborates-with-fansland-to-drive-web3-adoption-in-entertainment-industry/",
        },
        {
            "date": "11/03/2024",
            "source": "Blockster",
            "title": "Decrypting MEV: Da Hongfei on Neo's MEV-Resistant Solutions",
            "url": "https://blockster.com/decrypting-mev-da-hongfei-on-neos-mev-resistant-solutions",
            "image_url": "https://ik.imagekit.io/blockster/254aa721-320d-4c50-acdf-3de4fe58fd8c.png?tr=w-400,h-400#keepProtocol"
        },
        {
            "date": "27/02/2024",
            "title": "This EVM-compatible blockchain seeks to annihilate toxic MEV",
            "source": "CoinTelegraph",
            "url": "https://cointelegraph.com/news/this-evm-compatible-blockchain-seeks-to-annihilate-toxic-mev",
            "image_url": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/storage/uploads/view/d62bf77b100075acdb7d755a2da9e4de.jpg"
        },
        {
            "date": "13/02/2024",
            "source": "Bitcoin News",
            "title": "As the blockchain industry loses billions annually to MEV, the solution is staring us in the face",
            "url": "https://news.bitcoin.com/as-the-blockchain-industry-loses-billions-annually-to-mev-the-solution-is-staring-us-in-the-face-neo-founder-da-hongfei/",
            "image_url": "https://static.news.bitcoin.com/wp-content/uploads/2024/02/hhhggggg.jpg"
        },
        {
            "date": "29/01/2024",
            "source": "Cryptopolitan",
            "title": "Neo bolsters Web3 ambitions with new Hong Kong office and CyberPort collaboration",
            "url": "https://www.cryptopolitan.com/neo-web3-hong-kong-cyberport-collaboration/",
            "image_url": "https://www.cryptopolitan.com/wp-content/uploads/2024/01/DALL%C2%B7E-2024-01-29-21.44.05-Create-an-abstract-image-representing-the-strategic-expansion-and-innovative-collaboration-between-a-blockchain-platform-and-a-digital-tech-hub.-Inclu.jpg.webp"
        },
        {
            "date": "22/01/2024",
            "source": "BlockchainReporter",
            "title": "Neo joins Web3 KYC Alliance in landmark move",
            "url": "https://blockchainreporter.net/neo-joins-web3-kyc-alliance-in-landmark-move/",
            "image_url": "https://blockchainreporter.net/wp-content/uploads/2024/01/green-kyc-block-1140x570.webp"
        },
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