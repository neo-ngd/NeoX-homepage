'use client'
import React from "react"
export default function Resources() {
    

    React.useEffect(() => {
        const carousel = document.getElementById("resource-carousel")
        const indicators = document.getElementById('resource-carousel-indicators');
        const itemWidth = 326;

        function scrollToItem(index) {
            carousel.scrollTo({
                top: 0,
                left: index * itemWidth,
                behavior: 'smooth'
            });
        }

        const updateButtons = () => {
            const totalItems = document.querySelectorAll('.resource-item').length;
            const currentIndicator = Math.round(carousel.scrollLeft / itemWidth);

            indicators.innerHTML = '';
            for (let i = 0; i < totalItems; i++) {
                const dot = document.createElement('div');
                dot.classList.add('carousel-indicator', 'rounded-full', 'w-2', 'h-2', 'bg-black', 'opacity-20');
                if (i === currentIndicator) {
                    dot.classList.remove('opacity-20');
                    dot.classList.add('opacity-100');
                }
                indicators.appendChild(dot);
                dot.addEventListener('click', () => scrollToItem(i));
            }
        }
        carousel.addEventListener('scroll', updateButtons);
        updateButtons()
    }, [])


    return (
        <div className="w-full relative  flex flex-col py-20 lg:py-24">
            <a name="resources" />
            <div className="max-w-6xl mx-auto w-full px-8 z-40">

                <div className="flex flex-col">
                    <p className="lg:text-lg text-[#02DCA3] font-semibold">Use</p>
                    <p className="font-bold text-2xl lg:text-5xl py-5">Resources.</p>

                    <div className="flex lg:flex-row flex-col lg:items-center gap-5">
                        <p className="lg:text-lg font-medium text-[#404056]">Find resources that will help you navigate, use, and build on the Neo X network. </p>
                        <div className='lg:ml-auto'>
                            <a href="https://docs.banelabs.org/" target="_blank" className=" text-white btn-gradient font-semibold text-center text-base">
                                Go to Docs
                            </a>
                        </div>
                    </div>
                </div>

                <div id="resource-carousel" className='mt-14 snap-x overflow-hidden  flex overflow-x-auto lg:grid lg:grid-cols-2 gap-6'>

                    <a href="https://testnet.governance.banelabs.org/" target="_blank" className='resource-item group flex-none snap-center w-full flex lg:flex-row flex-col lg:items-center border rounded-xl hover:shadow-lg overflow-hidden lg:h-40 transition ease-in-out duration-300 hover:cursor-pointer'>
                        <div className='aspect-square flex items-center justify-center box-gradient w-full lg:w-40 h-40'>
                            <svg width="54" height="56" viewBox="0 0 54 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 25.7677H52" stroke="white" stroke-width="2.5" />
                                <path d="M10.197 4.43359H7.05313C6.06426 4.43359 5.22384 5.15627 5.0757 6.13398L2 26.4336V48.7669C2 51.5283 4.23858 53.7669 7 53.7669H47C49.7614 53.7669 52 51.5283 52 48.7669V26.4336L48.9243 6.13398C48.7762 5.15627 47.9357 4.43359 46.9469 4.43359H42.9091" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                                <path d="M37.9997 15.9644H15.333V4.38867C15.333 3.00796 16.4523 1.88867 17.833 1.88867H35.4997C36.8804 1.88867 37.9997 3.00796 37.9997 4.38867V15.9644Z" stroke="white" stroke-width="2.5" />
                                <path d="M21.3184 9.21469H31.5456" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                                <line x1="11.0908" y1="16.5468" x2="42.909" y2="16.5468" stroke="white" stroke-width="2.5" />
                            </svg>

                        </div>
                        <div className='p-8'>

                            <div className='flex items-center mb-2'>
                                <p className='font-semibold text-xl'>Governance</p>
                                <div className='ml-auto group-hover:opacity-100 opacity-0 transition ease-in-out duration-300'>
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.25">
                                            <rect width="30.2681" height="30.2681" rx="5" fill="#D9D9D9" />
                                            <rect x="0.5" y="0.5" width="29.2681" height="29.2681" rx="4.5" stroke="black" stroke-opacity="0.25" />
                                        </g>
                                        <path d="M9.68557 14.9545L20.2226 14.9545" stroke="#00001D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.5977 10.3381L20.2134 14.9539L15.5977 19.5697" stroke="#00001D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <p className='font-medium text-[#404056]'>Earn rewards by using your GAS to vote for Neo X validators.</p>
                        </div>
                    </a>


                    <a href="https://testnet.bridge.banelabs.org/" target="_blank" className='resource-item group flex-none snap-center w-full flex lg:flex-row flex-col lg:items-center border rounded-xl hover:shadow-lg overflow-hidden lg:h-40 transition ease-in-out duration-300 hover:cursor-pointer'>
                        <div className='aspect-square flex items-center justify-center box-gradient w-full lg:w-40 h-40'>
                            <svg width="68" height="61" viewBox="0 0 68 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0415 41.0963C12.8774 48.3612 19.8791 53.1428 27.6778 53.1407C28.5971 53.1404 29.3425 53.8854 29.3428 54.8047C29.343 55.7239 28.598 56.4694 27.6788 56.4696C18.5083 56.4722 10.2752 50.8495 6.94047 42.3069C6.60619 41.4505 7.0294 40.4854 7.88574 40.1511C8.74207 39.8168 9.70725 40.24 10.0415 41.0963ZM35.1656 4.47042C44.336 4.46789 52.5692 10.0905 55.9039 18.6332C56.2381 19.4895 55.8149 20.4547 54.9586 20.789C54.1023 21.1232 53.1371 20.7 52.8028 19.8437C49.9669 12.5788 42.9652 7.79722 35.1665 7.79938C34.2472 7.79963 33.5018 7.05463 33.5016 6.13536C33.5013 5.2161 34.2463 4.47068 35.1656 4.47042Z" fill="white" stroke="url(#paint0_linear_92_4069)" stroke-width="0.5" />
                                <path d="M2.83652 7.18448L3.94424 7.64596L2.83653 7.18448C3.71085 5.08582 6.52223 4.70683 7.92107 6.49905L12.5083 12.3763L19.8479 2.91793C20.9556 1.49047 23.0704 1.37403 24.3281 2.67125L26.1598 4.5605C27.2233 5.65731 27.2816 7.3818 26.2946 8.54791L17.6445 18.7685L24.635 27.6003C25.7927 29.0629 25.3319 31.218 23.6774 32.0794L21.7192 33.0989C20.4231 33.7737 18.8287 33.4058 17.9593 32.2312L12.4456 24.7823L8.68765 29.2635C7.4028 30.7956 5.00183 30.6467 3.91622 28.9675L3.28855 27.9966C2.61517 26.955 2.65968 25.6048 3.40019 24.6098L7.91523 18.5433L2.68073 11.2024C2.08478 10.3667 1.96246 9.28252 2.35721 8.335L2.83652 7.18448Z" stroke="white" stroke-width="2.4" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M59.1966 48.5094C58.6806 48.7229 58.1022 48.8297 57.4616 48.8297C56.465 48.8297 55.6486 48.6451 55.0124 48.2758C54.4473 47.9478 54.0349 47.4741 53.7752 46.8547C53.7192 46.7213 53.7883 46.5711 53.922 46.5158L55.7983 45.739C55.9762 45.6654 56.1706 45.794 56.2092 45.9827C56.2361 46.1139 56.2754 46.2265 56.3271 46.3205C56.425 46.4985 56.5607 46.6208 56.7342 46.6875C56.9077 46.7543 57.0923 46.7876 57.2881 46.7876C57.4838 46.7876 57.6551 46.7543 57.8019 46.6875C57.9487 46.6208 58.0622 46.5207 58.1422 46.3872C58.2223 46.2538 58.2624 46.0981 58.2624 45.9201C58.2624 45.7155 58.2201 45.5553 58.1356 45.4396C58.051 45.3239 57.9376 45.2416 57.7952 45.1927C57.6529 45.1438 57.4883 45.1193 57.3014 45.1193C57.1768 45.1193 57.0678 45.1237 56.9744 45.1326C56.9377 45.1361 56.8985 45.1403 56.857 45.1452C56.7462 45.1582 56.6474 45.0729 56.6474 44.9613V43.7253C56.6474 43.6151 56.7441 43.5302 56.8541 43.5373L56.861 43.5377C56.9321 43.5422 57.0211 43.5444 57.1279 43.5444C57.4571 43.5444 57.6974 43.4732 57.8486 43.3308C57.9999 43.1885 58.0755 42.9571 58.0755 42.6368C58.0755 42.3699 58.0021 42.163 57.8553 42.0162C57.7085 41.8694 57.5061 41.796 57.248 41.796C56.9722 41.796 56.7386 41.8783 56.5473 42.0429C56.4125 42.1588 56.3186 42.3421 56.2656 42.5928C56.2284 42.7684 56.0541 42.8902 55.8832 42.8352L54.0766 42.2534C53.95 42.2127 53.8692 42.0867 53.8971 41.9567C53.9905 41.5222 54.1799 41.1527 54.4652 40.8483C54.7989 40.4924 55.2215 40.221 55.7332 40.0342C56.2448 39.8473 56.812 39.7539 57.4349 39.7539C58.1378 39.7539 58.7317 39.8518 59.2167 40.0475C59.7016 40.2433 60.0709 40.5236 60.3244 40.8884C60.578 41.2532 60.7048 41.6981 60.7048 42.2231C60.7048 42.6235 60.6403 42.9527 60.5113 43.2107C60.3823 43.4688 60.2199 43.6734 60.0241 43.8247C59.8284 43.9759 59.6415 44.0849 59.4636 44.1517C59.2856 44.2184 59.1477 44.2518 59.0498 44.2518V44.3051C59.1566 44.3051 59.3101 44.3274 59.5103 44.3719C59.7105 44.4164 59.9151 44.5009 60.1242 44.6255C60.3333 44.75 60.5113 44.9347 60.6581 45.1794C60.8049 45.424 60.8783 45.7466 60.8783 46.147C60.8783 46.6987 60.7271 47.1769 60.4245 47.5818C60.122 47.9866 59.7127 48.2958 59.1966 48.5094ZM46.6511 48.4225C46.6511 48.5743 46.528 48.6974 46.3761 48.6974H44.5504C44.3985 48.6974 44.2754 48.5743 44.2754 48.4225V40.1635C44.2754 40.0117 44.3985 39.8886 44.5504 39.8886H47.0892C47.1894 39.8886 47.2817 39.9431 47.3301 40.0309L49.6541 44.253L50.228 45.4408H50.2414L50.188 43.7057V40.1635C50.188 40.0117 50.3111 39.8886 50.463 39.8886H52.3021C52.454 39.8886 52.5771 40.0117 52.5771 40.1635V48.4225C52.5771 48.5743 52.454 48.6974 52.3021 48.6974H49.7499C49.6497 48.6974 49.5574 48.6429 49.509 48.5551L47.185 44.333L46.6244 43.1452H46.5977L46.6511 44.8803V48.4225Z" fill="white" />
                                <rect x="38.5625" y="30.4688" width="27.437" height="27.437" rx="4" stroke="white" stroke-width="2.2" />
                                <defs>
                                    <linearGradient id="paint0_linear_92_4069" x1="31.4222" y1="0.476562" x2="20" y2="54.5" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#02A0D2" />
                                        <stop offset="1" stop-color="#02B7C0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className='p-8'>

                            <div className='flex items-center mb-2'>
                                <p className='font-semibold text-xl'>Bridge</p>
                                <div className='ml-auto group-hover:opacity-100 opacity-0 transition ease-in-out duration-300'>
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.25">
                                            <rect width="30.2681" height="30.2681" rx="5" fill="#D9D9D9" />
                                            <rect x="0.5" y="0.5" width="29.2681" height="29.2681" rx="4.5" stroke="black" stroke-opacity="0.25" />
                                        </g>
                                        <path d="M9.68557 14.9545L20.2226 14.9545" stroke="#00001D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.5977 10.3381L20.2134 14.9539L15.5977 19.5697" stroke="#00001D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <p className='font-medium text-[#404056]'>Bridge your token assets between the Neo N3 and Neo X networks.</p>
                        </div>
                    </a>

                    <a href="https://neoxscan.ngd.network/" target="_blank" className='resource-item group flex-none snap-center w-full flex lg:flex-row flex-col lg:items-center border rounded-xl hover:shadow-lg overflow-hidden lg:h-40 transition ease-in-out duration-300 hover:cursor-pointer'>
                        <div className='aspect-square flex items-center justify-center box-gradient w-full lg:w-40 h-40'>
                            <svg width="69" height="62" viewBox="0 0 69 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M45.4998 35.8282V16.495C45.4989 15.6474 45.2752 14.8149 44.851 14.0811C44.4268 13.3473 43.8171 12.7379 43.0831 12.3142L26.1665 2.64754C25.4318 2.22333 24.5983 2 23.7499 2C22.9015 2 22.068 2.22333 21.3332 2.64754L4.41665 12.3142C3.68263 12.7379 3.07295 13.3473 2.64878 14.0811C2.22461 14.8149 2.00087 15.6474 2 16.495V35.8282C2.00087 36.6758 2.22461 37.5082 2.64878 38.242C3.07295 38.9759 3.68263 39.5852 4.41665 40.009L21.3332 49.6756C22.068 50.0998 22.9015 50.3232 23.7499 50.3232C24.5983 50.3232 25.4318 50.0998 26.1665 49.6756L43.0831 40.009C43.8171 39.5852 44.4268 38.9759 44.851 38.242C45.2752 37.5082 45.4989 36.6758 45.4998 35.8282Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2.65234 13.9805L23.7497 26.1846L44.8471 13.9805" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M23.75 50.522V26.1621" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M48.3995 54.2014C55.6068 54.2014 61.4495 48.3588 61.4495 41.1515C61.4495 33.9442 55.6068 28.1016 48.3995 28.1016C41.1923 28.1016 35.3496 33.9442 35.3496 41.1515C35.3496 48.3588 41.1923 54.2014 48.3995 54.2014Z" fill="white" fill-opacity="0.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M67.2489 60.0014L58.9355 51.6895" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div className='p-8'>
                            <div className='flex items-center mb-2'>
                                <p className='font-semibold text-xl'>Explorer</p>
                                <div className='ml-auto group-hover:opacity-100 opacity-0 transition ease-in-out duration-300'>
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.25">
                                            <rect width="30.2681" height="30.2681" rx="5" fill="#D9D9D9" />
                                            <rect x="0.5" y="0.5" width="29.2681" height="29.2681" rx="4.5" stroke="black" stroke-opacity="0.25" />
                                        </g>
                                        <path d="M9.68557 14.9545L20.2226 14.9545" stroke="#00001D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.5977 10.3381L20.2134 14.9539L15.5977 19.5697" stroke="#00001D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <p className='font-medium text-[#404056]'>Find transactions and review activty on the Neo X blockchain.</p>
                        </div>
                    </a>

                    <a href="https://neoxwish.ngd.network/" target="_blank" className='resource-item group flex-none snap-center w-full flex lg:flex-row flex-col lg:items-center border rounded-xl hover:shadow-lg overflow-hidden lg:h-40 transition ease-in-out duration-300 hover:cursor-pointer'>
                        <div className='aspect-square flex items-center justify-center box-gradient w-full lg:w-40 h-40'>
                            <svg width="73" height="74" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="36.5" cy="37" r="28.6294" transform="rotate(-14.7444 36.5 37)" stroke="white" stroke-width="2.5" />
                                <circle cx="36.4997" cy="36.9994" r="19.068" transform="rotate(-14.7444 36.4997 36.9994)" stroke="white" stroke-width="2.5" />
                                <path d="M50.1982 38.8996L55.6622 33.4356C56.2922 32.8057 57.3693 33.2518 57.3693 34.1427V44.8754H50.1982V38.8996Z" fill="#02A4CF" />
                                <rect x="58.5645" y="43.6797" width="8.36623" height="4.7807" fill="#02A2D1" />
                                <rect x="54.8809" y="57.3281" width="8.36623" height="4.7807" transform="rotate(97.8475 54.8809 57.3281)" fill="#02ADC8" />
                                <path d="M39.6224 54.7918L44.3627 47.418L49.741 55.1866L43.8005 57.8588L40.0679 56.2509C39.5006 56.0066 39.2883 55.3114 39.6224 54.7918Z" fill="#02AACA" />
                                <path d="M56.1744 37.8555L44.2227 52.1976H54.9792L53.7841 61.759L65.7358 47.4169H54.9792L56.1744 37.8555Z" fill="#02A6CE" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className='p-8'>
                            <div className='flex items-center mb-2'>
                                <p className='font-semibold text-xl'>Faucet</p>
                                <div className='ml-auto group-hover:opacity-100 opacity-0 transition ease-in-out duration-300'>
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.25">
                                            <rect width="30.2681" height="30.2681" rx="5" fill="#D9D9D9" />
                                            <rect x="0.5" y="0.5" width="29.2681" height="29.2681" rx="4.5" stroke="black" stroke-opacity="0.25" />
                                        </g>
                                        <path d="M9.68557 14.9545L20.2226 14.9545" stroke="#00001D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.5977 10.3381L20.2134 14.9539L15.5977 19.5697" stroke="#00001D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <p className='font-medium text-[#404056]'>Claim Neo X TestNet GAS to help you develop your own dApps.</p>
                        </div>
                    </a>

                </div>

                <div id="resource-carousel-indicators" className="resource-carousel-indicators flex lg:hidden items-center justify-center gap-3 mt-14">
                </div>


            </div>
        </div>
    )
}