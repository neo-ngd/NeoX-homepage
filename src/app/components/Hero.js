export default function Hero() {
    return (
        <div className="w-full relative  flex flex-col overflow-hidden lg:overflow-visible">

            <div className="max-w-6xl mx-auto w-full py-20 lg:py-32 px-8 z-40">
                <div className="w-full lg:w-2/3 flex flex-col gap-8">
                    <div>
                        <a href="/elevate" target="_blank" className="inline-flex items-center gap-2 rounded-full border shadow-sm px-3 pr-5 py-2 bg-white">
                            <span className="text-xs font-bold btn-gradient text-white">OPEN</span>
                            <span className="font-semibold whitespace-nowrap text-sm lg:text-base">$20m in funding available now</span>
                            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.957031 1.29688L5.09867 5.43852L0.957031 9.58016" stroke="black" strokeWidth="1.60248" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <p className="font-bold text-5xl lg:text-[90px] flex flex-col">
                        <span className="whitespace-nowrap">New horizons.</span><span>It’s Neo X.</span>
                    </p>
                    <p className="font-medium lg:text-lg text-[#404056] max-w-md">Neo X is an EVM-compatible sidechain creating a bridge between Neo N3 and the widely adopted EVM network</p>
                    <div className=" flex items-center gap-8">
                        <a href="https://docs.banelabs.org/" target="_blank" className="bg-black font-semibold !py-3 !px-5 text-white rounded-full">Go to Docs</a>
                    </div>
                </div>
            </div>

            <div className="mt-auto w-full hero-top-shadow h-1 z-50 ">
                &nbsp;
            </div>

            <div className="absolute top-0 lg:right-0 -right-40 translate-x-1/2 lg:translate-x-0  lg:flex z-10">
                <img src="/assets/hero-x.png" className="h-[740px] lg:h-[1065px]" />
            </div>

        </div>
    )
}