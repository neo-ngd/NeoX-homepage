'use client'
import React from "react";
import { Transition } from '@headlessui/react'

export default function Navbar() {
    const [isMobileMenuPresented, setIsMobileMenuPresented] = React.useState(false)
    return (
        <nav className="z-50 bg-black w-full shadow-lg text-white flex flex-col relative">
            
            <div className="z-50 max-w-6xl mx-auto w-full flex items-center px-8 py-3 relative bg-black">
                <a href="/" className="">
                    <svg width="69" height="31" viewBox="0 0 69 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M54.0469 21.6838L49.6466 26.931C48.8729 27.8536 47.4271 27.7639 46.7734 26.7527L45.5491 24.859C45.1436 24.2318 45.1704 23.4187 45.6164 22.8196L50.3025 16.5232L44.9956 9.0808C44.6367 8.57754 44.563 7.92469 44.8007 7.35412L45.7484 5.07945C46.2749 3.8157 47.9678 3.58749 48.8101 4.6667L54.0853 11.4253L61.7572 1.5387C62.4242 0.679129 63.6977 0.609013 64.455 1.39015L66.9967 4.01158C67.637 4.67204 67.6721 5.71047 67.0778 6.41266L58.3538 16.7206L65.5978 25.8727C66.295 26.7534 66.0175 28.0512 65.0212 28.5699L62.134 30.0731C61.3535 30.4794 60.3934 30.2579 59.8698 29.5506L54.0469 21.6838Z" stroke="#01E599" strokeWidth="1.37524" />
                        <path d="M9.44732 11.3358C10.3499 12.1381 10.8012 13.2974 10.8012 14.8138V22.3129C10.8012 22.5298 10.6254 22.7056 10.4085 22.7056H9.22323C9.00635 22.7056 8.83054 22.5298 8.83054 22.3129V15.5148C8.83054 14.2331 8.55474 13.3044 8.00314 12.7288C7.71596 12.4383 7.37101 12.2114 6.9906 12.0626C6.61019 11.9139 6.20279 11.8467 5.79476 11.8653C5.15288 11.8626 4.51923 12.0099 3.9444 12.2955C3.34147 12.6121 2.84771 13.1027 2.52731 13.7036C2.13247 14.4588 1.94165 15.3041 1.97371 16.1557V22.3129C1.97371 22.5298 1.79789 22.7056 1.58101 22.7056H0.392696C0.175816 22.7056 0 22.5298 0 22.3129V11.3357C0 11.0569 0.282383 10.8669 0.540627 10.9719L1.46398 11.3474C1.67274 11.4323 1.81477 11.6289 1.82981 11.8537L1.85937 12.2955C2.24045 11.5845 2.83501 11.011 3.55929 10.6558C4.32238 10.2946 5.15821 10.1134 6.00236 10.1263C7.26204 10.0811 8.49234 10.5131 9.44732 11.3358Z" fill="white" />
                        <path d="M24.8803 16.9377C24.8608 17.1333 24.6937 17.2785 24.4972 17.2785H15.5434C15.6577 18.5301 16.0729 19.5009 16.789 20.1909C17.1596 20.5387 17.5958 20.8094 18.072 20.9871C18.5483 21.1647 19.0551 21.2459 19.563 21.2259C20.342 21.2534 21.1161 21.0924 21.8195 20.7565C22.2526 20.5479 22.6101 20.2161 22.8503 19.8074C22.971 19.602 23.2294 19.4981 23.4406 19.6085L24.3386 20.0779C24.5332 20.1797 24.6078 20.4222 24.4877 20.6062C24.0412 21.2905 23.435 21.8589 22.7191 22.2609C21.7435 22.7573 20.6569 22.9956 19.563 22.9529C17.7036 22.9529 16.2444 22.3853 15.1853 21.25C14.1263 20.1147 13.5958 18.5451 13.5938 16.5414C13.5938 14.5356 14.0952 12.965 15.0981 11.8297C16.101 10.6945 17.5361 10.1268 19.4035 10.1268C20.45 10.1003 21.4832 10.3649 22.3882 10.891C23.2095 11.3822 23.8694 12.1028 24.2867 12.964C24.7237 13.8793 24.9431 14.8833 24.9275 15.8975C24.9304 16.2449 24.9146 16.5922 24.8803 16.9377ZM16.789 12.8076C16.1211 13.4494 15.7139 14.352 15.5675 15.5154H23.0411C22.9753 14.5116 22.5761 13.5585 21.9068 12.8076C21.5822 12.4807 21.193 12.2251 20.7641 12.0572C20.3351 11.8894 19.8758 11.8129 19.4156 11.8327C18.9349 11.812 18.4549 11.8876 18.0039 12.055C17.5528 12.2224 17.1398 12.4783 16.789 12.8076Z" fill="white" />
                        <path d="M37.9954 11.8309C39.0564 12.9641 39.587 14.5347 39.587 16.5425C39.587 18.5503 39.0564 20.1198 37.9954 21.2511C36.9363 22.3864 35.4771 22.954 33.6177 22.954C31.7583 22.954 30.2991 22.3864 29.2401 21.2511C28.179 20.1178 27.6484 18.5483 27.6484 16.5425C27.6484 14.5367 28.179 12.9661 29.2401 11.8309C30.2991 10.6976 31.7583 10.1299 33.6177 10.1279C35.4771 10.1259 36.9363 10.6936 37.9954 11.8309ZM30.6812 13.0885C29.9752 13.9289 29.6221 15.0802 29.6221 16.5425C29.6221 18.0047 29.9752 19.155 30.6812 19.9935C31.3873 20.8319 32.3661 21.2511 33.6177 21.2511C34.8693 21.2511 35.8472 20.8319 36.5512 19.9935C37.2572 19.155 37.6112 18.0047 37.6132 16.5425C37.6153 15.0802 37.2612 13.9289 36.5512 13.0885C35.8431 12.2481 34.8653 11.8289 33.6177 11.8309C32.3701 11.8329 31.3903 12.2521 30.6782 13.0885H30.6812Z" fill="white" />
                    </svg>
                </a>
                <div className="hidden lg:flex w-full gap-5 items-center justify-end font-medium">
                    <a href="/#features" className="hover:underline">Features</a>
                    <a href="/#projects" className="hover:underline">Projects</a>
                    <a href="/#resources" className="hover:underline">Use</a>
                    <a href="/#releases" className="hover:underline">Releases</a>
                    <a href="/#news" className="hover:underline">News</a>
                    <a href="/#contact" className="hover:underline">Contact</a>
                    <p className="opacity-30 pr-5">|</p>
                </div>

                <div className="hidden ml-auto lg:flex items-center gap-5 font-medium">
                    <a href="https://docs.banelabs.org/" target="_blank" className="flex items-center gap-2">
                        Docs
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.875 1L4.75177 4.87677L0.875 8.75354" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>

                    <a href="https://neo.org" target="_blank" className="flex items-center gap-2">
                        <span className="font-medium">Neo.org</span>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.875 1L4.75177 4.87677L0.875 8.75354" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

                {/* mobile */}
                <div className="ml-auto lg:hidden">
                    <button onClick={(e) => { setIsMobileMenuPresented(!isMobileMenuPresented) }} className="flex items-center justify-center">
                        {
                            isMobileMenuPresented ?
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="1.06066" y1="1" x2="14.1421" y2="14.0815" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                    <line x1="0.75" y1="-0.75" x2="19.25" y2="-0.75" transform="matrix(-0.707107 0.707107 0.707107 0.707107 15.1426 1)" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                </svg>

                                :
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.75" y1="1.25" x2="19.25" y2="1.25" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                    <line x1="0.75" y1="8.25" x2="19.25" y2="8.25" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                    <line x1="0.75" y1="15.25" x2="19.25" y2="15.25" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                        }


                    </button>
                </div>
            </div>

            {/* mobile menu */}

            <Transition
                show={isMobileMenuPresented}
                enter="duration-200 ease-out"
                enterFrom="scale-100 -translate-y-full opacity-100"
                enterTo="scale-100 translate-y-0 opacity-100"
                leave="duration-300 ease-out"
                leaveFrom="scale-100 opacity-100 translate-y-0"
                leaveTo="scale-100 opacity-100 -translate-y-full"
            >
                <div className="z-20 fixed top-[55px] bg-black w-full border-t border-white/20 px-8 py-8">
                    <div className="flex flex-col font-semibold text-xl gap-4">
                        <a href="/#features" onClick={(e)=>{setIsMobileMenuPresented(false)}} className="hover:underline">Features</a>
                        <a href="/#projects" onClick={(e)=>{setIsMobileMenuPresented(false)}} className="hover:underline">Projects</a>
                        <a href="/#resources" onClick={(e)=>{setIsMobileMenuPresented(false)}} className="hover:underline">Use</a>
                        <a href="/#releases" onClick={(e)=>{setIsMobileMenuPresented(false)}} className="hover:underline">Releases</a>
                        <a href="/#news" onClick={(e)=>{setIsMobileMenuPresented(false)}} className="hover:underline">News</a>
                        <a href="/#contact" onClick={(e)=>{setIsMobileMenuPresented(false)}} className="hover:underline">Contact</a>
                        <hr className="opacity-20" />

                        <a href="https://neo.org" target="_blank" className="hover:underline flex items-center gap-2">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7.55008L8.62212 1.62177C9.34434 1.06004 10.3557 1.06004 11.0779 1.62177L18.7 7.55008V18.3667C18.7 18.8883 18.4928 19.3886 18.124 19.7574C17.7552 20.1262 17.2549 20.3334 16.7333 20.3334H2.96667C2.44507 20.3334 1.94484 20.1262 1.57602 19.7574C1.2072 19.3886 1 18.8883 1 18.3667V7.55008Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.90039 20.3333V10.5H12.8004V20.3333" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Neo.org
                        </a>

                        <a href="https://docs.banelabs.org/" target="_blank" className="mt-2 btn-gradient font-semibold text-center text-base">
                            Go to Docs
                        </a>
                    </div>
                </div>
            </Transition>

        </nav>
    )
}