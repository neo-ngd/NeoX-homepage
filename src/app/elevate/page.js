'use client'
import React, { Fragment } from "react"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from "lucide-react";
import clsx from "clsx";
import { AnimatePresence, easeOut, motion } from 'framer-motion'

export default function ElevatePage(props) {

    React.useEffect(() => {
        const carousel = document.getElementById("carousel")
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
            const totalItems = document.querySelectorAll('.item').length;
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



    const faqs = [
        {
            "q": "What types of proposals can I create?",
            "a": "this is an answer"
        },
        {
            "q": "What types of proposals can I create?",
            "a": "this is an answer"
        },
        {
            "q": "What types of proposals can I create?",
            "a": "this is an answer"
        }
    ]

    return (
        <main className="antialiased w-full  flex flex-col">
            <Navbar />

            <div id="hero" className="py-32 border-b">

                <div className="max-w-6xl mx-auto w-full px-8 z-40 flex flex-col items-center justify-center">

                    <svg className="w-60 lg:w-80" viewBox="0 0 447 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.87791 95V0.499994H65.4079V18.05H21.1279V39.245H61.3579V55.04H21.1279V77.45H66.7579V95H0.87791ZM77.4746 95V0.499994H97.1846V95H77.4746ZM143.22 96.35C125.4 96.35 107.85 86.495 107.85 59.765C107.85 33.575 124.455 23.45 143.085 23.45C161.175 23.45 176.43 32.9 176.43 59.495C176.43 62.06 176.295 63.41 176.025 64.895H126.615C127.695 76.64 133.77 81.365 143.49 81.365C152.535 81.365 156.45 77.72 158.07 72.05H175.485C171.975 88.115 159.555 96.35 143.22 96.35ZM126.615 53.285H157.8C157.53 45.185 153.345 38.435 142.545 38.435C133.365 38.435 127.965 43.565 126.615 53.285ZM203.074 95L177.559 24.8H197.674L215.224 76.1H215.899L233.449 24.8H253.429L227.914 95H203.074ZM276.732 96.35C265.257 96.35 254.187 90.815 254.187 76.37C254.187 60.845 266.877 57.47 279.027 55.715L290.907 53.96C297.387 53.015 299.412 51.935 299.412 48.02V47.075C299.412 39.65 294.552 37.625 288.477 37.625C282.132 37.625 276.462 39.65 276.462 46.94V48.29H257.967V45.05C257.967 31.28 267.147 23.45 289.017 23.45C310.212 23.45 318.717 31.01 318.717 46.265V95H299.952V82.58H299.142C297.792 86.36 292.122 96.35 276.732 96.35ZM283.482 82.31C292.797 82.31 299.412 76.1 299.412 70.565V62.735C298.332 64.355 294.957 64.895 291.852 65.435L281.997 67.19C275.922 68.135 273.897 71.105 273.897 74.75C273.897 79.07 276.732 82.31 283.482 82.31ZM361.241 95.945C347.201 95.945 337.886 89.6 337.886 73.94V40.055H326.006V24.8H337.886V6.70999H357.596V24.8H371.501V40.055H357.596V71.105C357.596 76.505 359.216 80.15 366.506 80.15C367.991 80.15 369.206 80.15 372.041 79.88V94.595C368.936 95.405 365.156 95.945 361.241 95.945ZM413.351 96.35C395.531 96.35 377.981 86.495 377.981 59.765C377.981 33.575 394.586 23.45 413.216 23.45C431.306 23.45 446.561 32.9 446.561 59.495C446.561 62.06 446.426 63.41 446.156 64.895H396.746C397.826 76.64 403.901 81.365 413.621 81.365C422.666 81.365 426.581 77.72 428.201 72.05H445.616C442.106 88.115 429.686 96.35 413.351 96.35ZM396.746 53.285H427.931C427.661 45.185 423.476 38.435 412.676 38.435C403.496 38.435 398.096 43.565 396.746 53.285Z" fill="url(#paint0_linear_279_161)" />
                        <defs>
                            <linearGradient id="paint0_linear_279_161" x1="48.5" y1="44" x2="562" y2="44" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#02DCA3" />
                                <stop offset="0.515" stop-color="#0066FF" />
                                <stop offset="0.965" stop-color="#FF006B" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p className="text-2xl lg:text-4xl font-bold mt-8 text-center">
                        Rising together through grants and investment.
                    </p>
                    <p className="text-base lg:text-lg font-medium mt-8 text-center">
                        Neo is excited to announce the Elevate Program, designed to support innovative projects launching on Neo X. With a total funding pool of up to US $20 million, the program offers various tracks to support projects at different stages of their growth lifecycle. We encourage projects and developers to apply early to be among the first to launch on this groundbreaking network.
                    </p>
                </div>

            </div>
            <div className="w-full relative  flex flex-col py-24">

                <div className="max-w-6xl mx-auto w-full px-8 z-40 flex flex-col lg:items-center">
                    <p className="lg:text-5xl text-3xl lg:text-center text-left font-bold mb-10 lg:mb-24">Elevate Goals</p>

                    <div id="carousel" className="w-full snap-x overflow-x-auto flex items-center lg:items-start gap-10 lg:grid lg:grid-cols-4 lg:gap-10">

                        <div className="item snap-center flex flex-col w-full flex-none">
                            <div className="rounded-xl bg-[#F5F5F5] border border-black/10 h-20 w-20 flex items-center justify-center">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z" stroke="#03DDA4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.6004 15.9999L16.0004 10.3999L10.4004 15.9999" stroke="#03DDA4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 21.6V10.4" stroke="#03DDA4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                            <p className="mt-8 text-2xl font-semibold">Lift up early-stage and growing projects.</p>
                            <p className="mt-6 text-lg font-medium">
                                Crucial financial resources for early-stage Web3 initiatives ensuring that these projects have the necessary funds to develop, grow, and scale their operations effectively.
                            </p>
                        </div>


                        <div className="item snap-center flex flex-col w-full flex-none">
                            <div className="rounded-xl bg-[#F5F5F5] border border-black/10 h-20 w-20 flex items-center justify-center">
                                <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.543 20.5111L28.443 11.2556L16.543 2V20.5111Z" stroke="#02AACB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2 20.5111L13.9 11.2556L2 2V20.5111Z" stroke="#02AACB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className="mt-8 text-2xl font-semibold">Boost innovation and development.</p>
                            <p className="mt-6 text-lg font-medium">
                                Designed to support innovative projects on the Neo X sidechain, stimulating the creation of cutting-edge technologies and applications in the Web3 space.
                            </p>
                        </div>

                        <div className="item snap-center flex flex-col w-full flex-none">
                            <div className="rounded-xl bg-[#F5F5F5] border border-black/10 h-20 w-20 flex items-center justify-center">
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5547 2H25.3325V9.77778" stroke="#018DE2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.77778 25.3332H2V17.5554" stroke="#018DE2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M25.3338 2L16.2598 11.0741" stroke="#018DE2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2 25.3334L11.0741 16.2593" stroke="#018DE2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                            <p className="mt-8 text-2xl font-semibold">Grow the Neo X ecosystem.</p>
                            <p className="mt-6 text-lg font-medium">
                                Build a diverse and dynamic ecosystem, from mainstream dApps to infrastructure solutions, ensuring a comprehensive and well-rounded environment on Neo X .
                            </p>
                        </div>

                        <div className="item snap-center flex flex-col w-full flex-none">
                            <div className="rounded-xl bg-[#F5F5F5] border border-black/10 h-20 w-20 flex items-center justify-center">
                                <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.4 27.2V24.4C24.4 22.9148 23.81 21.4905 22.7598 20.4403C21.7096 19.39 20.2852 18.8 18.8 18.8H7.6C6.11479 18.8 4.69041 19.39 3.6402 20.4403C2.59 21.4905 2 22.9148 2 24.4V27.2H24.4Z" stroke="#3452E2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.1996 13.2C16.2924 13.2 18.7996 10.6928 18.7996 7.6C18.7996 4.50721 16.2924 2 13.1996 2C10.1068 2 7.59961 4.50721 7.59961 7.6C7.59961 10.6928 10.1068 13.2 13.1996 13.2Z" stroke="#3452E2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M32.7996 27.1999V24.3999C32.7987 23.1592 32.3857 21.9538 31.6255 20.9732C30.8653 19.9925 29.801 19.2921 28.5996 18.9819" stroke="#3452E2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M23 2.18188C24.2046 2.49031 25.2723 3.19087 26.0347 4.17312C26.7971 5.15537 27.211 6.36345 27.211 7.60689C27.211 8.85032 26.7971 10.0584 26.0347 11.0407C25.2723 12.0229 24.2046 12.7235 23 13.0319" stroke="#3452E2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                            <p className="mt-8 text-2xl font-semibold">Onboard established projects.</p>
                            <p className="mt-6 text-lg font-medium">
                                Bring established projects with proven business models and growing user bases to Neo X , providing strategic advantages and enhancing the network's capabilities and competitiveness.
                            </p>
                        </div>


                    </div>

                    <div id="carousel-indicators" className="carousel-indicators flex lg:hidden items-center justify-center gap-3 mt-14">
                    </div>


                </div>
            </div>

            <div className="bg-[#D9D9D9]/10 py-24">

                <div className="max-w-6xl mx-auto w-full px-8 z-40 flex flex-col ">
                    <svg className="w-60 lg:w-96" viewBox="0 0 334 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.6 36V0.999998H24.5V7.5H8.1V15.35H23V21.2H8.1V29.5H25V36H0.6ZM28.9691 36V0.999998H36.2691V36H28.9691ZM53.3191 36.5C46.7191 36.5 40.2191 32.85 40.2191 22.95C40.2191 13.25 46.3691 9.5 53.2691 9.5C59.9691 9.5 65.6191 13 65.6191 22.85C65.6191 23.8 65.5691 24.3 65.4691 24.85H47.1691C47.5691 29.2 49.8191 30.95 53.4191 30.95C56.7691 30.95 58.2191 29.6 58.8191 27.5H65.2691C63.9691 33.45 59.3691 36.5 53.3191 36.5ZM47.1691 20.55H58.7191C58.6191 17.55 57.0691 15.05 53.0691 15.05C49.6691 15.05 47.6691 16.95 47.1691 20.55ZM75.4875 36L66.0375 10H73.4875L79.9875 29H80.2375L86.7375 10H94.1375L84.6875 36H75.4875ZM102.768 36.5C98.5184 36.5 94.4184 34.45 94.4184 29.1C94.4184 23.35 99.1184 22.1 103.618 21.45L108.018 20.8C110.418 20.45 111.168 20.05 111.168 18.6V18.25C111.168 15.5 109.368 14.75 107.118 14.75C104.768 14.75 102.668 15.5 102.668 18.2V18.7H95.8184V17.5C95.8184 12.4 99.2184 9.5 107.318 9.5C115.168 9.5 118.318 12.3 118.318 17.95V36H111.368V31.4H111.068C110.568 32.8 108.468 36.5 102.768 36.5ZM105.268 31.3C108.718 31.3 111.168 29 111.168 26.95V24.05C110.768 24.65 109.518 24.85 108.368 25.05L104.718 25.7C102.468 26.05 101.718 27.15 101.718 28.5C101.718 30.1 102.768 31.3 105.268 31.3ZM134.068 36.35C128.868 36.35 125.418 34 125.418 28.2V15.65H121.018V10H125.418V3.3H132.718V10H137.868V15.65H132.718V27.15C132.718 29.15 133.318 30.5 136.018 30.5C136.568 30.5 137.018 30.5 138.068 30.4V35.85C136.918 36.15 135.518 36.35 134.068 36.35ZM153.368 36.5C146.768 36.5 140.268 32.85 140.268 22.95C140.268 13.25 146.418 9.5 153.318 9.5C160.018 9.5 165.668 13 165.668 22.85C165.668 23.8 165.618 24.3 165.518 24.85H147.218C147.618 29.2 149.868 30.95 153.468 30.95C156.818 30.95 158.268 29.6 158.868 27.5H165.318C164.018 33.45 159.418 36.5 153.368 36.5ZM147.218 20.55H158.768C158.668 17.55 157.118 15.05 153.118 15.05C149.718 15.05 147.718 16.95 147.218 20.55ZM196.718 36.5C186.168 36.5 180.368 29.75 180.368 18.65C180.368 7.15 186.768 0.549997 196.568 0.549997C203.918 0.549997 210.318 4.15 211.368 12.1H203.968C202.918 8 199.468 7 196.568 7C190.268 7 187.968 12 187.968 18.4C187.968 24.95 190.418 30.05 196.718 30.05C200.418 30.05 204.568 28.3 204.568 22.75H197.818V16.75H212.018V20.4C212.018 31 206.268 36.5 196.718 36.5ZM216.713 36V10H224.013V16.3H224.213C225.113 12.5 227.563 9.7 231.713 9.7C232.313 9.7 232.963 9.75 233.713 9.95V16.1C232.913 16 232.313 15.95 231.663 15.95C227.763 15.95 224.013 18.2 224.013 24.5V36H216.713ZM243.003 36.5C238.753 36.5 234.653 34.45 234.653 29.1C234.653 23.35 239.353 22.1 243.853 21.45L248.253 20.8C250.653 20.45 251.403 20.05 251.403 18.6V18.25C251.403 15.5 249.603 14.75 247.353 14.75C245.003 14.75 242.903 15.5 242.903 18.2V18.7H236.053V17.5C236.053 12.4 239.453 9.5 247.553 9.5C255.403 9.5 258.553 12.3 258.553 17.95V36H251.603V31.4H251.303C250.803 32.8 248.703 36.5 243.003 36.5ZM245.503 31.3C248.953 31.3 251.403 29 251.403 26.95V24.05C251.003 24.65 249.753 24.85 248.603 25.05L244.953 25.7C242.703 26.05 241.953 27.15 241.953 28.5C241.953 30.1 243.003 31.3 245.503 31.3ZM281.529 21.25C281.529 17.3 279.779 15.55 276.729 15.55C273.679 15.55 271.279 17.3 271.279 21.25V36H263.979V10H271.279V15.45H271.579C272.029 13 274.529 9.5 279.879 9.5C284.929 9.5 288.829 12.75 288.829 19.5V36H281.529V21.25ZM304.82 36.35C299.62 36.35 296.17 34 296.17 28.2V15.65H291.77V10H296.17V3.3H303.47V10H308.62V15.65H303.47V27.15C303.47 29.15 304.07 30.5 306.77 30.5C307.32 30.5 307.77 30.5 308.82 30.4V35.85C307.67 36.15 306.27 36.35 304.82 36.35ZM322.264 36.5C315.314 36.5 311.064 33.45 311.014 27.45H317.564C317.814 29.9 319.464 31.05 322.314 31.05C324.764 31.05 326.414 30.2 326.414 28.35C326.414 27.15 325.614 26.4 323.914 26.05L319.114 25.05C313.664 23.8 311.714 20.9 311.714 17.45C311.714 12.4 316.064 9.5 322.364 9.5C329.314 9.5 332.964 12.9 333.064 18.5H326.964C326.664 15.9 324.964 14.95 322.464 14.95C319.964 14.95 318.814 15.85 318.814 17.25C318.814 18.55 319.764 19.4 321.514 19.75L326.414 20.8C330.514 21.7 333.914 23.6 333.914 28.2C333.914 34 328.564 36.5 322.264 36.5Z" fill="url(#paint0_linear_279_305)" />
                        <defs>
                            <linearGradient id="paint0_linear_279_305" x1="-2" y1="7.5" x2="399" y2="7.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#01E599" />
                                <stop offset="0.525" stop-color="#0066FF" />
                                <stop offset="1" stop-color="#FF006B" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <p className="text-lg font-medium mt-8">The Grants section of Neo's Elevate Program is dedicated to fostering innovation and supporting the development of the Neo X ecosystem by providing financial support to a diverse range of projects without the expectation of financial return. Elevate Grants aim to catalyze the creation of groundbreaking technologies and applications that will contribute to a vibrant and thriving Neo X network.</p>


                    <div className="flex lg:flex-row flex-col items-start gap-x-12 gap-y-8 mt-20">
                        <div className="flex-none rounded-xl bg-[#F5F5F5] border border-black/10 h-20 w-20 flex items-center justify-center">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.4458 29.8414C33.1989 27.0869 34.4153 22.1967 34.8887 17.3126C35.363 12.4185 35.0945 7.48818 34.8439 4.61365C34.6833 2.76746 33.2294 1.31277 31.3841 1.15205L31.3147 1.146L31.3087 1.15196C28.4234 0.902912 23.5326 0.640459 18.6785 1.10914C13.7951 1.58064 8.9067 2.79543 6.15483 5.549C-0.746691 12.4543 -0.941631 23.5093 5.73118 30.2139L5.73139 30.2142L5.73141 30.2142L5.73145 30.2142L5.73164 30.2144L5.73233 30.2151L5.73469 30.2175L5.7408 30.2236L5.74082 30.2236L5.75961 30.2424L5.75963 30.2424C9.03576 33.5203 13.3637 35.15 17.7368 35.15C22.1106 35.15 26.9145 33.3769 30.4458 29.8414ZM30.4458 29.8414L30.3397 29.7353M30.4458 29.8414L30.3397 29.7353M30.3397 29.7353C35.7654 24.3068 35.195 10.3676 34.6944 4.62668L5.86572 30.1364C9.11198 33.3844 13.401 35 17.7368 35C22.0727 35 26.8378 33.2414 30.3397 29.7353ZM7.71812 7.12404C9.36446 5.47681 12.0641 4.46346 15.1102 3.86443C18.1512 3.2664 21.5128 3.08584 24.4588 3.08584C27.3193 3.08584 29.7818 3.25499 31.1752 3.37898L31.176 3.37905C31.9549 3.44443 32.5433 4.03758 32.6104 4.8147L32.6105 4.81476C32.7955 6.94653 33.0921 11.5838 32.7202 16.3083C32.5343 18.6706 32.1815 21.0502 31.5661 23.1473C30.9502 25.2463 30.0749 27.0494 28.8524 28.2715L28.6106 28.5133L28.6129 28.5134C22.7449 34.1378 13.6804 34.4055 7.89402 29.2048C9.18301 26.5781 11.0075 24.206 13.2122 22.3216C15.2455 20.5845 17.5552 19.2532 20.0913 18.3669C20.6711 18.1661 20.9763 17.5246 20.7766 16.9467C20.5761 16.3665 19.9406 16.0611 19.3574 16.2606L19.3563 16.261C16.5594 17.2405 14.0083 18.7054 11.764 20.6268C9.53669 22.5338 7.66101 24.8817 6.26619 27.4845C1.55049 21.6034 2.06583 12.785 7.71812 7.12404ZM7.71812 7.12404L7.61202 7.018L7.71812 7.12404Z" fill="#02DEA0" stroke="#02DEA0" stroke-width="0.3" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-2xl">
                                Genesis <span className="opacity-30">Track</span>
                            </p>
                            <p className="font-medium text-lg mt-5 text-[#80808E]">
                                The Genesis track is designed to support innovative, early-stage projects that will contribute to a robust and thriving Neo X ecosystem. With individual grants available for up to $50,000—the Genesis track aims to fund a diverse range of projects including DeFi platforms, games, AI, NFT-related ventures, decentralized social networks, and other Web3 initiatives.
                                <br /><br />
                                This track is also ideal for development environments, open-source tools, and libraries such as wallets, explorers, and on-chain data aggregators, as well as educational initiatives and community-building activities like hackathons, tutorials, and social events.
                            </p>
                            <div className="mt-12 w-full">
                                <a href="#" className="flex text-center items-center lg:inline-block justify-center font-semibold text-white bg-black rounded-full px-5 py-2">Apply Now</a>
                            </div>
                        </div>
                    </div>


                    <div className="flex lg:flex-row flex-col items-start gap-x-12 gap-y-8 mt-20">
                        <div className="flex-none rounded-xl bg-[#F5F5F5] border border-black/10 h-20 w-20 flex items-center justify-center">
                            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.318 0.904418L35.3181 0.904414C36.1018 0.859228 36.8542 1.16293 37.3827 1.72487C37.8836 2.2564 38.1365 2.95189 38.0942 3.68247L38.0942 3.6825C37.9878 5.51184 37.7776 8.07455 37.3677 10.557C36.9585 13.0357 36.3482 15.4486 35.4348 16.9688L35.3491 16.9173L35.4348 16.9689C33.1095 20.838 28.7577 24.6479 24.5846 27.7199L23.7883 33.8103C23.629 35.0285 22.8299 36.0884 21.7026 36.5769L21.6628 36.4852L21.7026 36.5769L18.3835 38.0146C18.2521 38.0715 18.1119 38.1 17.9721 38.1C17.8034 38.1 17.6346 38.0586 17.4819 37.9763C17.203 37.8266 17.0079 37.557 16.953 37.2449L16.2395 33.2073C15.7653 33.4869 15.3497 33.7267 15.011 33.9189L14.9616 33.8319L15.011 33.9189C14.6168 34.1425 14.1701 34.2606 13.718 34.2606C13.0172 34.2606 12.3569 33.9868 11.8599 33.4898L11.6973 33.3272L10.7773 34.2472C10.2746 34.7498 9.60588 35.0269 8.89534 35.0269C8.18439 35.0269 7.51561 34.7503 7.01292 34.2477L7.08363 34.1769L7.01291 34.2477L4.75237 31.9866L4.75234 31.9866C3.71515 30.9485 3.71513 29.26 4.75236 28.2223L4.75238 28.2223L5.67284 27.3018L5.51025 27.1392C4.67718 26.3061 4.50065 25.011 5.08116 23.9881C5.27338 23.6494 5.51351 23.2334 5.7928 22.7592L1.75507 22.0456L35.318 0.904418ZM35.318 0.904418C33.4887 1.01112 30.926 1.2213 28.4435 1.63108C25.9649 2.04023 23.5519 2.65047 22.0317 3.56386C18.1625 5.88865 14.3522 10.241 11.2806 14.414L5.19023 15.2103L5.2032 15.3095L5.19023 15.2103C3.972 15.3696 2.91211 16.1688 2.42357 17.296L2.51532 17.3358M35.318 0.904418L2.51532 17.3358M2.51532 17.3358L2.42357 17.296L0.985451 20.615M2.51532 17.3358L0.985451 20.615M0.985451 20.615C0.859141 20.9059 0.873644 21.2383 1.02375 21.5167M0.985451 20.615L1.02375 21.5167M12.4384 31.1392L12.4375 31.1378L12.4305 31.1308L7.8692 26.5695L7.86219 26.5625L7.86079 26.5616L6.97442 25.6752L12.4384 31.1392ZM12.4384 31.1392L13.3248 32.0256L12.4384 31.1392ZM6.88165 25.0098L6.8816 25.0098C6.7598 25.2239 6.79755 25.4979 6.97434 25.6751L6.88165 25.0098ZM6.88165 25.0098C7.88583 23.2412 10.1647 19.3887 13.0821 15.4441C16.0015 11.4969 19.5521 7.46883 23.0978 5.33848C24.4596 4.52038 26.8367 3.96781 29.2433 3.59998C31.6431 3.2332 34.0543 3.05248 35.4757 2.9702C35.6293 2.97093 35.7717 3.03278 35.8781 3.145C35.9843 3.25757 36.0378 3.40495 36.0286 3.56144C35.9471 4.96241 35.7668 7.36523 35.3999 9.76169C35.0322 12.1633 34.4797 14.5404 33.6616 15.9023C31.5312 19.448 27.5032 22.9984 23.5559 25.9177C19.6115 28.835 15.7591 31.1138 13.9905 32.1183M6.88165 25.0098L13.9905 32.1183M13.9905 32.1183C13.7786 32.238 13.4984 32.1987 13.3249 32.0257L13.9905 32.1183ZM1.02375 21.5167C1.17381 21.7956 1.44337 21.9907 1.755 22.0456L1.02375 21.5167ZM3.40595 20.2352L4.32294 18.1189L4.32296 18.1189C4.52309 17.6566 4.95833 17.3285 5.45834 17.2629C5.45835 17.2629 5.45837 17.2629 5.45838 17.2629L9.64242 16.716C8.61103 18.2152 7.69961 19.6324 6.94026 20.8601L3.40595 20.2352ZM9.31462 32.7826L9.3146 32.7826C9.09227 33.005 8.69979 33.0049 8.478 32.7827L8.47794 32.7826L6.2174 30.5221C5.98665 30.2913 5.98673 29.9157 6.21733 29.6855L6.21738 29.6854L7.13785 28.7654L10.2351 31.8626L9.31462 32.7826ZM18.1399 32.0598C19.3672 31.3008 20.7848 30.389 22.284 29.3576L21.7372 33.5417C21.7372 33.5417 21.7371 33.5417 21.7371 33.5417C21.6716 34.0417 21.3434 34.4769 20.8811 34.6771L20.8811 34.6771L18.7648 35.5941L18.1399 32.0598Z" fill="#01A0D2" stroke="#01A0D2" stroke-width="0.2" />
                            </svg>

                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-2xl">
                                Partner <span className="opacity-30">Track</span>
                            </p>
                            <p className="font-medium text-lg mt-5 text-[#80808E]">
                                The Partner track is tailored for established core infrastructure projects that are already operational on other EVM networks. With a total grants pool of $3,000,000, this track aims to support critical infrastructure solutions such as RPC node providers, indexing solutions, oracle networks, and interoperability projects.
                                <br /><br />
                                By providing substantial financial support, the Partner track seeks to enhance the foundational elements of the Neo X ecosystem, ensuring robust performance and seamless integration.

                            </p>

                            <div className="mt-12 w-full">
                                <a href="#" className="flex text-center items-center lg:inline-block justify-center font-semibold text-white bg-black rounded-full px-5 py-2">Apply Now</a>
                            </div>
                        </div>
                    </div>


                </div>

            </div>


            <div className="bg-black py-24">

                <div className="max-w-6xl mx-auto w-full px-8 z-40 flex flex-col ">

                    <svg width="442" height="36" viewBox="0 0 442 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.6 35V-2.38419e-06H24.5V6.5H8.1V14.35H23V20.2H8.1V28.5H25V35H0.6ZM28.9691 35V-2.38419e-06H36.2691V35H28.9691ZM53.3191 35.5C46.7191 35.5 40.2191 31.85 40.2191 21.95C40.2191 12.25 46.3691 8.5 53.2691 8.5C59.9691 8.5 65.6191 12 65.6191 21.85C65.6191 22.8 65.5691 23.3 65.4691 23.85H47.1691C47.5691 28.2 49.8191 29.95 53.4191 29.95C56.7691 29.95 58.2191 28.6 58.8191 26.5H65.2691C63.9691 32.45 59.3691 35.5 53.3191 35.5ZM47.1691 19.55H58.7191C58.6191 16.55 57.0691 14.05 53.0691 14.05C49.6691 14.05 47.6691 15.95 47.1691 19.55ZM75.4875 35L66.0375 9H73.4875L79.9875 28H80.2375L86.7375 9H94.1375L84.6875 35H75.4875ZM102.768 35.5C98.5184 35.5 94.4184 33.45 94.4184 28.1C94.4184 22.35 99.1184 21.1 103.618 20.45L108.018 19.8C110.418 19.45 111.168 19.05 111.168 17.6V17.25C111.168 14.5 109.368 13.75 107.118 13.75C104.768 13.75 102.668 14.5 102.668 17.2V17.7H95.8184V16.5C95.8184 11.4 99.2184 8.5 107.318 8.5C115.168 8.5 118.318 11.3 118.318 16.95V35H111.368V30.4H111.068C110.568 31.8 108.468 35.5 102.768 35.5ZM105.268 30.3C108.718 30.3 111.168 28 111.168 25.95V23.05C110.768 23.65 109.518 23.85 108.368 24.05L104.718 24.7C102.468 25.05 101.718 26.15 101.718 27.5C101.718 29.1 102.768 30.3 105.268 30.3ZM134.068 35.35C128.868 35.35 125.418 33 125.418 27.2V14.65H121.018V9H125.418V2.3H132.718V9H137.868V14.65H132.718V26.15C132.718 28.15 133.318 29.5 136.018 29.5C136.568 29.5 137.018 29.5 138.068 29.4V34.85C136.918 35.15 135.518 35.35 134.068 35.35ZM153.368 35.5C146.768 35.5 140.268 31.85 140.268 21.95C140.268 12.25 146.418 8.5 153.318 8.5C160.018 8.5 165.668 12 165.668 21.85C165.668 22.8 165.618 23.3 165.518 23.85H147.218C147.618 28.2 149.868 29.95 153.468 29.95C156.818 29.95 158.268 28.6 158.868 26.5H165.318C164.018 32.45 159.418 35.5 153.368 35.5ZM147.218 19.55H158.768C158.668 16.55 157.118 14.05 153.118 14.05C149.718 14.05 147.718 15.95 147.218 19.55ZM181.118 35V-2.38419e-06H188.618V35H181.118ZM211.363 20.25C211.363 16.3 209.613 14.55 206.563 14.55C203.513 14.55 201.113 16.3 201.113 20.25V35H193.813V9H201.113V14.45H201.413C201.863 12 204.363 8.5 209.713 8.5C214.763 8.5 218.663 11.75 218.663 18.5V35H211.363V20.25ZM230.566 35L221.116 9H228.566L235.066 28H235.316L241.816 9H249.216L239.766 35H230.566ZM262.743 35.5C256.143 35.5 249.643 31.85 249.643 21.95C249.643 12.25 255.793 8.5 262.693 8.5C269.393 8.5 275.043 12 275.043 21.85C275.043 22.8 274.993 23.3 274.893 23.85H256.593C256.993 28.2 259.243 29.95 262.843 29.95C266.193 29.95 267.643 28.6 268.243 26.5H274.693C273.393 32.45 268.793 35.5 262.743 35.5ZM256.593 19.55H268.143C268.043 16.55 266.493 14.05 262.493 14.05C259.093 14.05 257.093 15.95 256.593 19.55ZM288.719 35.5C281.769 35.5 277.519 32.45 277.469 26.45H284.019C284.269 28.9 285.919 30.05 288.769 30.05C291.219 30.05 292.869 29.2 292.869 27.35C292.869 26.15 292.069 25.4 290.369 25.05L285.569 24.05C280.119 22.8 278.169 19.9 278.169 16.45C278.169 11.4 282.519 8.5 288.819 8.5C295.769 8.5 299.419 11.9 299.519 17.5H293.419C293.119 14.9 291.419 13.95 288.919 13.95C286.419 13.95 285.269 14.85 285.269 16.25C285.269 17.55 286.219 18.4 287.969 18.75L292.869 19.8C296.969 20.7 300.369 22.6 300.369 27.2C300.369 33 295.019 35.5 288.719 35.5ZM315.367 35.35C310.167 35.35 306.717 33 306.717 27.2V14.65H302.317V9H306.717V2.3H314.017V9H319.167V14.65H314.017V26.15C314.017 28.15 314.617 29.5 317.317 29.5C317.867 29.5 318.317 29.5 319.367 29.4V34.85C318.217 35.15 316.817 35.35 315.367 35.35ZM355.661 20.25C355.661 16.3 354.011 14.55 351.361 14.55C348.761 14.55 346.661 16.3 346.661 20.25V35H339.361V20.25C339.361 16.3 337.711 14.55 335.061 14.55C332.461 14.55 330.361 16.3 330.361 20.25V35H323.061V9H330.361V14.45H330.661C331.061 12 333.711 8.5 338.261 8.5C341.861 8.5 344.911 10.45 346.111 14.45C346.611 12.05 349.461 8.5 354.361 8.5C359.311 8.5 362.961 11.75 362.961 18.5V35H355.661V20.25ZM380.028 35.5C373.428 35.5 366.928 31.85 366.928 21.95C366.928 12.25 373.078 8.5 379.978 8.5C386.678 8.5 392.328 12 392.328 21.85C392.328 22.8 392.278 23.3 392.178 23.85H373.878C374.278 28.2 376.528 29.95 380.128 29.95C383.478 29.95 384.928 28.6 385.528 26.5H391.978C390.678 32.45 386.078 35.5 380.028 35.5ZM373.878 19.55H385.428C385.328 16.55 383.778 14.05 379.778 14.05C376.378 14.05 374.378 15.95 373.878 19.55ZM413.804 20.25C413.804 16.3 412.054 14.55 409.004 14.55C405.954 14.55 403.554 16.3 403.554 20.25V35H396.254V9H403.554V14.45H403.854C404.304 12 406.804 8.5 412.154 8.5C417.204 8.5 421.104 11.75 421.104 18.5V35H413.804V20.25ZM437.095 35.35C431.895 35.35 428.445 33 428.445 27.2V14.65H424.045V9H428.445V2.3H435.745V9H440.895V14.65H435.745V26.15C435.745 28.15 436.345 29.5 439.045 29.5C439.595 29.5 440.045 29.5 441.095 29.4V34.85C439.945 35.15 438.545 35.35 437.095 35.35Z" fill="url(#paint0_linear_279_328)" />
                        <defs>
                            <linearGradient id="paint0_linear_279_328" x1="-2" y1="6.5" x2="526.5" y2="6.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#01E599" />
                                <stop offset="0.525" stop-color="#2377F4" />
                                <stop offset="1" stop-color="#FF006B" />
                            </linearGradient>
                        </defs>
                    </svg>



                    <div className="flex lg:flex-row flex-col items-start gap-x-12 gap-y-8 mt-20">
                        <div className="flex-none rounded-xl bg-[#F5F5F5] border border-black/10 h-20 w-20 flex items-center justify-center">
                            <svg width="28" height="37" viewBox="0 0 28 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_279_317)">
                                    <path d="M22.6793 34.0494C23.1049 33.7187 23.515 33.3626 23.8991 32.9861C26.4323 30.5035 28 27.0747 28 23.2846C28 19.4946 26.4323 16.0657 23.8991 13.5831C21.5944 11.3244 18.4902 9.84903 15.0382 9.60484V8.34827C16.9485 8.30249 18.677 7.52413 19.9436 6.28283C21.2414 5.00591 22.0512 3.2457 22.0512 1.30744C22.0512 0.742747 21.5892 0.289977 21.013 0.289977C19.0352 0.289977 17.2392 1.07851 15.9362 2.35542C15.604 2.68101 15.3029 3.04221 15.0382 3.42885V1.01746C15.0382 0.45277 14.5762 0 14 0C13.4238 0 12.9618 0.45277 12.9618 1.01746V3.42376C12.6971 3.03712 12.396 2.68101 12.0638 2.35034C10.7608 1.07851 8.96478 0.284889 6.98702 0.284889C6.41083 0.284889 5.94883 0.73766 5.94883 1.30235C5.94883 3.24062 6.75343 5.00082 8.05636 6.27774C9.31776 7.51396 11.0515 8.2974 12.9618 8.34319V9.59975C9.50983 9.84394 6.40564 11.3193 4.10085 13.578C1.56767 16.0606 0 19.4946 0 23.2795C0 27.0645 1.56767 30.4984 4.10085 32.981C6.63404 35.4636 10.1327 37 14 37C16.3515 37 18.568 36.4302 20.5146 35.428L22.6793 34.0494Z" fill="#0184E8" />
                                    <path d="M18.4743 4.83294C19.1335 4.18685 19.6163 3.3678 19.8343 2.45208C18.8999 2.67083 18.0642 3.14395 17.405 3.78495C16.7457 4.43104 16.2629 5.2501 16.0449 6.16582C16.9793 5.94706 17.815 5.47394 18.4743 4.83294Z" fill="white" />
                                    <path d="M8.16602 2.45208C8.38923 3.3678 8.87199 4.18685 9.52605 4.83294C10.1801 5.47903 11.021 5.95215 11.9554 6.16582C11.7322 5.2501 11.2494 4.43104 10.5954 3.78495C9.93613 3.13887 9.10039 2.66575 8.16602 2.45208Z" fill="white" />
                                    <path d="M22.4358 15.0126C20.2763 12.8963 17.2967 11.5889 14.0056 11.5889C10.7146 11.5889 7.72979 12.8963 5.57554 15.0126C3.4213 17.129 2.08203 20.0491 2.08203 23.2744C2.08203 26.4998 3.41611 29.425 5.57554 31.5362C7.73498 33.6525 10.7146 34.96 14.0056 34.96C17.2967 34.96 20.2815 33.6525 22.4358 31.5362C24.59 29.4199 25.9293 26.4998 25.9293 23.2744C25.9293 20.0491 24.5952 17.1239 22.4358 15.0126Z" fill="white" />
                                    <path d="M20.6139 16.7983C18.9217 15.1398 16.5857 14.1173 14.0058 14.1173C11.4259 14.1173 9.0848 15.1449 7.39774 16.7983C5.71068 18.4517 4.66211 20.7461 4.66211 23.2744C4.66211 25.8028 5.71068 28.0972 7.39774 29.7506C9.0848 31.404 11.4259 32.4316 14.0058 32.4316C16.5857 32.4316 18.9268 31.404 20.6139 29.7506C22.301 28.0972 23.3495 25.8028 23.3495 23.2744C23.3495 20.7461 22.301 18.4517 20.6139 16.7983Z" fill="white" />
                                    <path d="M12.9666 15.7249C12.9666 15.1653 13.4286 14.7125 13.9996 14.7125C14.5706 14.7125 15.0326 15.1653 15.0326 15.7249V16.5744C15.614 16.7474 16.1331 17.0577 16.5536 17.4647C17.2076 18.1057 17.6125 18.9909 17.6125 19.9677C17.6125 20.5324 17.1505 20.9851 16.5743 20.9851C15.9981 20.9851 15.5361 20.5324 15.5361 19.9677C15.5361 19.5505 15.3648 19.1741 15.0845 18.9044L15.0326 18.8536V22.7301C16.3823 23.6204 17.6125 24.6175 17.6125 26.5812C17.6125 27.5579 17.2076 28.4431 16.5536 29.0841C16.1383 29.4911 15.614 29.8015 15.0326 29.9744V30.824C15.0326 31.3836 14.5706 31.8364 13.9996 31.8364C13.4286 31.8364 12.9666 31.3836 12.9666 30.824V29.9744C12.3852 29.8015 11.8661 29.4911 11.4457 29.0841C10.7916 28.4431 10.3867 27.5579 10.3867 26.5812C10.3867 26.0165 10.8487 25.5637 11.4249 25.5637C12.0011 25.5637 12.4631 26.0165 12.4631 26.5812C12.4631 26.9983 12.6344 27.3748 12.9147 27.6444L12.9666 27.6953V23.8188C11.6118 22.9285 10.3867 21.9314 10.3867 19.9677C10.3867 18.9909 10.7916 18.1057 11.4457 17.4647C11.8609 17.0577 12.3852 16.7474 12.9666 16.5744V15.7249Z" fill="#0184E8" />
                                    <path d="M15.0332 25.3602V27.7004L15.0851 27.6495C15.3654 27.3748 15.5367 26.9983 15.5367 26.5863C15.5367 26.1132 15.3395 25.7163 15.0332 25.3602Z" fill="white" />
                                    <path d="M12.9664 21.1937V18.8536L12.9145 18.9044C12.6342 19.1792 12.4629 19.5556 12.4629 19.9677C12.4629 20.4408 12.6601 20.8376 12.9664 21.1937Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_279_317">
                                        <rect width="28" height="37" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className="flex flex-col">

                            <p className="font-medium text-lg text-white">
                                The Investment track is designed for established projects that can provide strategic advantages to the Neo X network. Offering individual investment packages of up to $500,000, this track targets projects with a minimum of six months of operation and a proven business model. These projects should be able to demonstrate an outstanding user base, significant TVL numbers, and a stable operation history. Investments are also available to new projects led by teams with similar achievements on other chains.
                                <br /><br />
                                Ideal candidates include decentralized exchanges, lending protocols, perpetual products, launchpads, liquid staking derivatives, restaking platforms, account abstraction (smart contract wallets), stablecoins, and NFT platforms. By securing funding through the Elevate Investment track, projects can scale their operations, enhance their offerings, and significantly contribute to the growth and success of the Neo X ecosystem.
                            </p>
                            <div className="mt-12 w-full">
                                <a href="#" className="flex text-center items-center lg:inline-block justify-center font-semibold text-black bg-white rounded-full px-5 py-2">Apply Now</a>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

            <div className="bg- py-24">

                <div className="max-w-6xl mx-auto w-full px-8 z-40 flex flex-col ">
                    <p className="font-bold text-3xl lg:text-5xl">FAQ</p>


                    <div className="mt-10 flex flex-col">
                        {faqs.map((faq) => (
                            <div className="py-5 border-b">
                                <Disclosure >
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="w-full flex items-center">
                                                <p className="font-medium">{faq.q}</p>
                                                <ChevronDownIcon className={clsx('ml-auto w-5', open && 'rotate-180')} />
                                            </DisclosureButton>
                                            <div className="overflow-hidden">
                                                <AnimatePresence>
                                                    {open && (
                                                        <DisclosurePanel
                                                            static
                                                            as={motion.div}
                                                            initial={{ opacity: 0, y: -24 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -24 }}
                                                            transition={{ duration: 0.2, ease: easeOut }}
                                                            className="origin-top mt-5">
                                                            {faq.a}
                                                        </DisclosurePanel>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </>
                                    )}
                                </Disclosure>
                            </div>

                        ))}

                    </div>

                </div>


            </div>
            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    )
}