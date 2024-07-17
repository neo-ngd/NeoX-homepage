export default function Partners() {
    return (
        <div className="w-full relative flex flex-col py-24  overflow-hidden">
            <a name="partners" />
            <div className="max-w-6xl mx-auto w-full px-8 z-40">

                <div className="flex flex-col">
                    <p className="lg:text-lg text-[#02DCA3] font-semibold">Partners</p>
                    <p className="font-bold text-2xl lg:text-5xl py-5">Partnerships that make the difference.</p>

                    <div className="flex lg:flex-row flex-col lg:items-center gap-5">
                        <p className="lg:text-lg font-medium text-[#404056]">We’re proud to be partnering with some amazing organizations. Find some of the groups that are benefiting from working with Neo and Neo X.</p>
                        <div className="ml-auto">

                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto w-full px-8 z-40 mt-14 flex items-center flex-wrap gap-5">
                <div className="rounded-xl bg-gray-100 p-4 border">
                    <img src="/assets/partners/coz.png" className="h-6" />
                </div>

                <div className="rounded-xl bg-gray-100 p-4 border">
                    <img src="/assets/partners/nnt.png" className="h-6" />
                </div>
                <div className="rounded-xl bg-gray-100 p-4 border">
                    <img src="/assets/partners/item-systems.png" className="h-6" />
                </div>
                <div className="rounded-xl bg-gray-100 p-4 border">
                    <img src="/assets/partners/axlabs.png" className="h-6" />
                </div>

            </div>



        </div>
    )
}