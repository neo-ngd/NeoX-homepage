export default function Funding(props) {
    return (
        <div className="w-full relative  flex flex-col bg-black">
            <a name="funding" />

            <div className="relative w-full z-40">


                <div className="max-w-6xl mx-auto relative w-full  flex flex-col text-white gap-5 p-8 py-24 z-50">
                    <div>
                        <svg className="w-60 lg:w-80" viewBox="0 0 331 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.205859 70V-4.76837e-06H48.0059V13H15.2059V28.7H45.0059V40.4H15.2059V57H49.0059V70H0.205859ZM56.9441 70V-4.76837e-06H71.5441V70H56.9441ZM105.644 71C92.4441 71 79.4441 63.7 79.4441 43.9C79.4441 24.5 91.7441 17 105.544 17C118.944 17 130.244 24 130.244 43.7C130.244 45.6 130.144 46.6 129.944 47.7H93.3441C94.1441 56.4 98.6441 59.9 105.844 59.9C112.544 59.9 115.444 57.2 116.644 53H129.544C126.944 64.9 117.744 71 105.644 71ZM93.3441 39.1H116.444C116.244 33.1 113.144 28.1 105.144 28.1C98.3441 28.1 94.3441 31.9 93.3441 39.1ZM149.981 70L131.081 18H145.981L158.981 56H159.481L172.481 18H187.281L168.381 70H149.981ZM204.543 71C196.043 71 187.843 66.9 187.843 56.2C187.843 44.7 197.243 42.2 206.243 40.9L215.043 39.6C219.843 38.9 221.343 38.1 221.343 35.2V34.5C221.343 29 217.743 27.5 213.243 27.5C208.543 27.5 204.343 29 204.343 34.4V35.4H190.643V33C190.643 22.8 197.443 17 213.643 17C229.343 17 235.643 22.6 235.643 33.9V70H221.743V60.8H221.143C220.143 63.6 215.943 71 204.543 71ZM209.543 60.6C216.443 60.6 221.343 56 221.343 51.9V46.1C220.543 47.3 218.043 47.7 215.743 48.1L208.443 49.4C203.943 50.1 202.443 52.3 202.443 55C202.443 58.2 204.543 60.6 209.543 60.6ZM267.142 70.7C256.742 70.7 249.842 66 249.842 54.4V29.3H241.042V18H249.842V4.6H264.442V18H274.742V29.3H264.442V52.3C264.442 56.3 265.642 59 271.042 59C272.142 59 273.042 59 275.142 58.8V69.7C272.842 70.3 270.042 70.7 267.142 70.7ZM305.742 71C292.542 71 279.542 63.7 279.542 43.9C279.542 24.5 291.842 17 305.642 17C319.042 17 330.342 24 330.342 43.7C330.342 45.6 330.242 46.6 330.042 47.7H293.442C294.242 56.4 298.742 59.9 305.942 59.9C312.642 59.9 315.542 57.2 316.742 53H329.642C327.042 64.9 317.842 71 305.742 71ZM293.442 39.1H316.542C316.342 33.1 313.242 28.1 305.242 28.1C298.442 28.1 294.442 31.9 293.442 39.1Z" fill="url(#paint0_linear_283_78)" />
                            <defs>
                                <linearGradient id="paint0_linear_283_78" x1="-9.5" y1="32" x2="422" y2="32" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#02DCA3" />
                                    <stop offset="0.515" stop-color="#0066FF" />
                                    <stop offset="0.965" stop-color="#FF006B" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                    <p className="mt-5 font-bold text-2xl lg:text-3xl max-w-xl">Rising together through grants and investment.</p>
                    <p className="font-medium lg:text-lg max-w-xl">The Elevate Program features a $20 million funding pool for innovative projects building on Neo X. Various tracks are available to support different growth stages. Apply early to be among the first to launch.</p>
                    <div className="mt-8">
                        <a href="/elevate" className="hover:opacity-70 font-semibold bg-white rounded-full px-5 py-2 text-black">Learn More</a>
                    </div>

                    
                </div>

                <div>
                    <img className="z-10 lg:absolute right-0 top-0 h-full" src="/assets/elevate_banner.png" />
                </div>
               
            </div>

        </div>
    )
} 