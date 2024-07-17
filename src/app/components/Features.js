'use client'
import React from "react"
export default function Features() {

    React.useEffect(() => {
        const carousel = document.getElementById("feature-carousel")
        const indicators = document.getElementById('carousel-indicators');
        const itemWidth = 326;

        function scrollToItem(index) {
            carousel.scrollTo({
                top: 0,
                left: index * itemWidth,
                behavior: 'smooth'
            });
        }

        const updateButtons = () => {
            const totalItems = document.querySelectorAll('.feature-item').length;
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
        <div className="w-full relative  flex flex-col mt-20 lg:mt-24">
            <a name="features" />
            <div className="max-w-6xl mx-auto w-full px-8 z-40">

                <div className="flex flex-col lg:items-center lg:justify-center">
                    <p className="lg:text-lg text-[#02DCA3] font-semibold">Features</p>
                    <p className="font-bold text-2xl lg:text-5xl py-5 lg:text-center">The Neo universe is <span className="gradient-text">expanding.</span></p>
                    <p className="lg:text-lg font-medium text-[#404056] max-w-5xl lg:text-center">Neo X is a high performance EVM-based sidechain that incorporates Neo’s distinctive dBFT consensus and toxic MEV resistant features to make it one of the fairest and most efficient blockchains on the market.</p>
                </div>

                <div id="feature-carousel" className="w-full mx-auto snap-x overflow-x-auto flex items-center lg:grid lg:grid-cols-11 gap-5 mt-14 ">

                    <div className="feature-item snap-center h-[262px] w-full flex-none lg:col-span-4 border rounded-xl bg-gray-50 flex flex-col p-8 gap-5">
                        <svg className="flex-none" width="65" height="67" viewBox="0 0 65 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.6809 41.1723C31.909 41.8832 33.4258 41.8734 34.6445 41.1465L44.8557 35.0567L32.711 52.3477C32.6995 52.364 32.6902 52.3701 32.6832 52.3736C32.6742 52.3782 32.6611 52.382 32.6453 52.3821C32.6294 52.3822 32.6163 52.3786 32.6072 52.3741C32.6002 52.3707 32.5908 52.3647 32.5791 52.3486L20.0299 35.0069L30.6809 41.1723ZM32.5916 2.52854C32.604 2.50799 32.6138 2.50193 32.6195 2.49884C32.6282 2.4941 32.6425 2.48948 32.6609 2.48948C32.6793 2.48948 32.6936 2.4941 32.7023 2.49884C32.708 2.50193 32.7178 2.50799 32.7302 2.52853L47.7704 27.3771L33.3774 35.8383C32.9354 36.0981 32.3873 36.0979 31.9455 35.8378L17.5578 27.3675L32.5916 2.52854Z" fill="#FAFAFA" stroke="#01E8BF" strokeWidth="2.5" strokeLinejoin="round" />
                            <path d="M32.7246 5.12109L32.7246 35.8348" stroke="#01E8BF" strokeWidth="2.5" />
                            <path d="M32.7246 40.9531L32.7246 51.191" stroke="#01E8BF" strokeWidth="2.5" />
                            <path d="M18.707 46.4648C16.31 46.4648 14.2755 46.4648 14.2755 46.4648L2 64.8781H63.0545L50.9405 46.4648H46.3476" stroke="#01E8BF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="font-semibold text-xl">EVM-Based</p>
                        <p className="font-medium lg:text-lg text-[#404056]">Compatible with all existing EVM tooling and infrastructure.</p>
                    </div>

                    <div className="feature-item snap-center h-[262px] w-full flex-none lg:col-span-4 border rounded-xl bg-gray-50 flex flex-col p-8 gap-5">
                        <svg className="flex-none" width="67" height="63" viewBox="0 0 67 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M53.5328 47.9582C54.1926 49.0734 53.3977 50.4845 52.102 50.4983L14.6809 50.8955C13.3853 50.9092 12.5606 49.5152 13.1965 48.3863L31.5631 15.78C32.199 14.6511 33.8186 14.6339 34.4783 15.7491L53.5328 47.9582Z" stroke="#01C0D3" strokeWidth="2.5" />
                            <path d="M36.6413 1.9078C37.4915 1.89878 38.282 2.34404 38.7149 3.07586L42.9178 10.1803C43.3507 10.9121 43.3604 11.8193 42.9431 12.5601L38.8919 19.7521C38.4746 20.493 37.6938 20.9549 36.8435 20.9639L28.5895 21.0516C27.7393 21.0606 26.9488 20.6153 26.5159 19.8835L22.313 12.7791C21.88 12.0473 21.8704 11.1401 22.2877 10.3992L26.3389 3.20721C26.7562 2.46637 27.537 2.00443 28.3873 1.99541L36.6413 1.9078Z" fill="#FAFAFA" stroke="#01C0D3" strokeWidth="2.5" />
                            <path d="M58.1628 41.6148C59.013 41.6058 59.8035 42.0511 60.2364 42.7829L64.4393 49.8873C64.8722 50.6191 64.8819 51.5263 64.4646 52.2672L60.4134 59.4592C59.9961 60.2 59.2153 60.662 58.365 60.671L50.111 60.7586C49.2607 60.7676 48.4703 60.3223 48.0373 59.5905L43.8345 52.4861C43.4015 51.7543 43.3919 50.8471 43.8092 50.1063L47.8603 42.9142C48.2777 42.1734 49.0585 41.7115 49.9087 41.7024L58.1628 41.6148Z" fill="#FAFAFA" stroke="#01C0D3" strokeWidth="2.5" />
                            <path d="M16.5397 41.8492C17.39 41.8402 18.1804 42.2854 18.6134 43.0173L22.8162 50.1217C23.2492 50.8535 23.2588 51.7607 22.8415 52.5015L18.7904 59.6935C18.3731 60.4344 17.5922 60.8963 16.742 60.9054L8.48794 60.993C7.6377 61.002 6.84723 60.5567 6.41429 59.8249L2.21141 52.7205C1.77847 51.9887 1.76884 51.0815 2.18615 50.3406L6.2373 43.1486C6.6546 42.4078 7.43544 41.9458 8.28569 41.9368L16.5397 41.8492Z" fill="#FAFAFA" stroke="#01C0D3" strokeWidth="2.5" />
                        </svg>

                        <p className="font-semibold text-xl">dBFT Consensus</p>
                        <p className="font-medium lg:text-lg text-[#404056]">Neo’s own dBFT consensus mechanism is highly secure with one block finality.</p>
                    </div>

                    <div className="feature-item snap-center h-[262px] w-full flex-none lg:col-span-3 border rounded-xl bg-gray-50 flex flex-col p-8 gap-5">
                        <svg className="flex-none" width="64" height="63" viewBox="0 0 64 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.99609 14.8481V18.5808C4.99609 19.9173 6.07956 21.0008 7.41609 21.0008H58.2339C59.5705 21.0008 60.6539 19.9173 60.6539 18.5808V14.8326C60.6539 13.3443 59.7455 12.0068 58.3621 11.4582L34.3896 1.95191C33.5369 1.61376 32.5878 1.611 31.7331 1.94418L7.30765 11.466C5.91383 12.0093 4.99609 13.3521 4.99609 14.8481Z" stroke="#01A0E3" strokeWidth="2.5" />
                            <path d="M4.99609 48.7719V44.2122C4.99609 42.8757 6.07956 41.7922 7.41609 41.7922H58.2339C59.5705 41.7922 60.6539 42.8757 60.6539 44.2122V48.7822C60.6539 49.7744 60.0483 50.666 59.126 51.0318L33.9474 61.0164C33.3789 61.2419 32.7461 61.2437 32.1763 61.0216L6.53713 51.0266C5.60792 50.6644 4.99609 49.7692 4.99609 48.7719Z" fill="#FAFAFA" stroke="#01A0E3" strokeWidth="2.5" />
                            <path d="M20.1904 30.6654C20.7551 30.9914 20.7551 31.8065 20.1904 32.1325L14.885 35.1956C14.3203 35.5216 13.6145 35.1141 13.6145 34.4621L13.6145 28.3358C13.6145 27.6838 14.3203 27.2763 14.885 27.6023L20.1904 30.6654Z" fill="#01A0E3" />
                            <path d="M9.44239 30.6654C10.0071 30.9914 10.0071 31.8065 9.44239 32.1325L4.13693 35.1956C3.57227 35.5216 2.86643 35.1141 2.86643 34.4621L2.86643 28.3358C2.86643 27.6838 3.57226 27.2763 4.13693 27.6023L9.44239 30.6654Z" fill="#01A0E3" />
                            <path d="M30.9717 30.6654C31.5364 30.9914 31.5364 31.8065 30.9717 32.1325L25.6662 35.1956C25.1016 35.5216 24.3957 35.1141 24.3957 34.4621L24.3957 28.3358C24.3957 27.6838 25.1016 27.2763 25.6662 27.6023L30.9717 30.6654Z" fill="#01A0E3" />
                            <path d="M41.7315 30.6654C42.2961 30.9914 42.2961 31.8065 41.7315 32.1325L36.426 35.1956C35.8613 35.5216 35.1555 35.1141 35.1555 34.4621L35.1555 28.3358C35.1555 27.6838 35.8613 27.2763 36.426 27.6023L41.7315 30.6654Z" fill="#01A0E3" />
                            <path d="M52.4932 30.6654C53.0578 30.9914 53.0578 31.8065 52.4932 32.1325L47.1877 35.1956C46.623 35.5216 45.9172 35.1141 45.9172 34.4621L45.9172 28.3358C45.9172 27.6838 46.623 27.2763 47.1877 27.6023L52.4932 30.6654Z" fill="#01A0E3" />
                            <path d="M62.7315 30.6654C63.2961 30.9914 63.2961 31.8065 62.7315 32.1325L57.426 35.1956C56.8613 35.5216 56.1555 35.1141 56.1555 34.4621L56.1555 28.3358C56.1555 27.6838 56.8613 27.2763 57.426 27.6023L62.7315 30.6654Z" fill="#01A0E3" />
                        </svg>
                        <p className="font-semibold text-xl">High Throughput</p>
                        <p className="font-medium lg:text-lg text-[#404056]">Fast, efficient, and environmentally friendly.</p>
                    </div>


                    <div className="feature-item snap-center h-[262px] w-full flex-none lg:col-span-3 border rounded-xl bg-gray-50 flex flex-col p-8 gap-5">
                        <svg className="flex-none" width="70" height="55" viewBox="0 0 70 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.21" y="2.30741" width="46.635" height="12.8416" rx="2.42" stroke="#01E8BF" strokeWidth="2.42" />
                            <rect x="1.21" y="41.5498" width="46.635" height="11.7514" rx="2.42" fill="#FAFAFA" stroke="#01E8BF" strokeWidth="2.42" />
                            <ellipse cx="8.36409" cy="8.9305" rx="1.39534" ry="1.39534" fill="#01E8BF" />
                            <rect x="1.21" y="22.4991" width="46.635" height="11.7514" rx="2.42" stroke="#01E8BF" strokeWidth="2.42" />
                            <ellipse cx="8.36604" cy="28.4891" rx="1.39534" ry="1.39534" fill="#01E8BF" />
                            <ellipse cx="8.36409" cy="47.4539" rx="1.39534" ry="1.39534" fill="#01E8BF" />
                            <path d="M26.2862 24.7753V10.6972L47.4234 1.32364L68.5607 10.6972V24.7753C68.5607 37.9125 59.505 50.1584 47.4234 53.2583C35.3418 50.1584 26.2862 37.9125 26.2862 24.7753Z" fill="#FAFAFA" stroke="#01E8BF" strokeWidth="2.42" />
                        </svg>

                        <p className="font-semibold text-xl">Toxic MEV Resistant</p>
                        <p className="font-medium lg:text-lg text-[#404056]">A fairer environment for all in the DeFi ecosystem. </p>
                    </div>

                    <div className="feature-item snap-center h-[262px] w-full flex-none lg:col-span-4 border rounded-xl bg-gray-50 flex flex-col p-8 gap-5">
                        <svg className="flex-none" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="1.67969" width="53.3148" height="53.3149" rx="3.63" fill="#FAFAFA" stroke="#01C0D3" strokeWidth="2.42" />
                            <path d="M38.8343 36.7575C40.0773 36.7575 41.1994 36.5503 42.2007 36.136C43.202 35.7216 43.9962 35.1217 44.5831 34.3362C45.1701 33.5507 45.4636 32.6228 45.4636 31.5524C45.4636 30.7756 45.3212 30.1498 45.0363 29.675C44.7515 29.2003 44.4062 28.842 44.0005 28.6003C43.5948 28.3587 43.1977 28.1946 42.8093 28.1083C42.4209 28.022 42.1231 27.9789 41.9159 27.9789V27.8753C42.1058 27.8753 42.3734 27.8105 42.7187 27.6811C43.0639 27.5516 43.4265 27.3401 43.8063 27.0466C44.1861 26.7531 44.5011 26.3561 44.7515 25.8554C45.0018 25.3548 45.1269 24.716 45.1269 23.9391C45.1269 22.9206 44.8809 22.0574 44.3889 21.3496C43.8969 20.6418 43.1805 20.0979 42.2396 19.7181C41.2987 19.3383 40.1464 19.1484 38.7825 19.1484C37.5741 19.1484 36.4735 19.3297 35.4808 19.6922C34.4882 20.0548 33.6681 20.5813 33.0208 21.2719C32.4422 21.889 32.067 22.644 31.8952 23.5369C31.8592 23.7238 31.9742 23.9039 32.1554 23.9622L35.9436 25.1821C36.1881 25.2609 36.4394 25.0873 36.4807 24.8337C36.5749 24.2557 36.7682 23.841 37.0605 23.5895C37.4316 23.2702 37.8848 23.1105 38.42 23.1105C38.9206 23.1105 39.3134 23.2529 39.5982 23.5377C39.8831 23.8226 40.0255 24.224 40.0255 24.7419C40.0255 25.3634 39.8788 25.8122 39.5853 26.0885C39.2918 26.3647 38.8257 26.5028 38.1869 26.5028C37.9798 26.5028 37.8071 26.4985 37.669 26.4899C37.6294 26.4874 37.5899 26.4846 37.5503 26.4814C37.393 26.4687 37.2547 26.5904 37.2547 26.7482V29.3596C37.2547 29.5192 37.3961 29.6416 37.5545 29.6217C37.6756 29.6065 37.7871 29.5941 37.8891 29.5844C38.0704 29.5671 38.2819 29.5585 38.5236 29.5585C38.8861 29.5585 39.2055 29.606 39.4817 29.7009C39.7579 29.7959 39.978 29.9556 40.142 30.18C40.306 30.4044 40.3881 30.7152 40.3881 31.1122C40.3881 31.4575 40.3104 31.7596 40.155 32.0186C39.9996 32.2775 39.7795 32.4717 39.4947 32.6012C39.2098 32.7307 38.8775 32.7954 38.4977 32.7954C38.1179 32.7954 37.7596 32.7307 37.423 32.6012C37.0864 32.4717 36.8231 32.2344 36.6332 31.8891C36.5075 31.6606 36.4197 31.3755 36.3696 31.0336C36.3297 30.7609 36.0495 30.5778 35.7949 30.6832L31.8458 32.3181C31.6545 32.3973 31.5561 32.6119 31.6325 32.8044C32.1328 34.0657 32.9494 35.0252 34.0825 35.6828C35.3168 36.3992 36.9008 36.7575 38.8343 36.7575Z" fill="#01C0D3" />
                            <path d="M17.4639 36.4935C17.6813 36.4935 17.8575 36.3173 17.8575 36.0999V29.0873L17.7539 25.7209H17.8057L18.8933 28.0256L23.4423 36.2897C23.5115 36.4154 23.6436 36.4935 23.7871 36.4935H28.9616C29.1789 36.4935 29.3551 36.3173 29.3551 36.0999V19.7959C29.3551 19.5785 29.1789 19.4023 28.9616 19.4023H25.1133C24.896 19.4023 24.7198 19.5785 24.7198 19.7959V26.8085L24.8234 30.1749H24.7975L23.684 27.8702L19.1349 19.6061C19.0657 19.4804 18.9336 19.4023 18.7902 19.4023H13.6416C13.4242 19.4023 13.248 19.5785 13.248 19.7959V36.0999C13.248 36.3173 13.4242 36.4935 13.6416 36.4935H17.4639Z" fill="#01C0D3" />
                        </svg>

                        <p className="font-semibold text-xl">Bridge to Neo N3</p>
                        <p className="font-medium lg:text-lg text-[#404056]">Easily bridge token assets between the Neo N3 and Neo X blockchains.</p>
                    </div>

                    <div className="feature-item snap-center h-[262px] w-full flex-none lg:col-span-4 border rounded-xl bg-gray-50 flex flex-col p-8 gap-5">
                        <svg className="flex-none" width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="5.03125" width="40.4349" height="49.766" rx="4.235" transform="rotate(-3.01635 1 5.03125)" stroke="#01A0E3" strokeWidth="2.42" />
                            <path d="M13.8941 28.1553L20.0423 33.6157L30.7904 23.7053" stroke="#01A0E3" strokeWidth="2.42" strokeLinecap="round" />
                            <rect x="15.658" y="1.64844" width="40.4349" height="49.766" rx="4.235" transform="rotate(5.11784 15.658 1.64844)" fill="#FAFAFA" stroke="#01A0E3" strokeWidth="2.42" />
                            <path d="M25.1692 26.3648L30.483 32.6402L42.5252 24.3502" stroke="#01A0E3" strokeWidth="2.42" strokeLinecap="round" />
                        </svg>

                        <p className="font-semibold text-xl">Vote for Rewards</p>
                        <p className="font-medium lg:text-lg text-[#404056]">Use your GAS tokens to vote in validators to become eligible for rewards.</p>
                    </div>

                </div>

                <div id="carousel-indicators" className="carousel-indicators flex lg:hidden items-center justify-center gap-3 mt-14">
                </div>


            </div>
        </div>
    )
}