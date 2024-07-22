import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function BrandPage(props) {
    return (
        <main className="antialiased w-full  flex flex-col">
            <Navbar />

            <div className="w-full relative  flex flex-col py-24">

                <div className="max-w-6xl mx-auto w-full px-8 z-40">
                    <p className="font-bold text-5xl lg:text-5xl py-5 ">Brand Assets</p>

                    <div className="flex lg:flex-row flex-col lg:items-center py-10 gap-x-10 gap-y-10 border-b">
                        <div>
                            <p className="font-bold text-2xl mb-5">Neo X Brandbook</p>
                            <p className="text-lg font-medium opacity-70">Download the comprehensive Neo X brandbook to understand its visual identity the guidelines that define the brand. This document includes color schemes, typography, logo usage rules, and more to ensure consistent and effective branding.</p>
                        </div>
                        <div className="lg:ml-auto w-full lg:w-auto">
                            <a href="/assets/brand/NeoX-BrandBook-v0.1.pdf"  target="_blank" className="bg-black text-white font-semibold rounded-full px-5 py-2 w-full flex items-center justify-center">Download</a>
                        </div>
                    </div>

                    <div className="flex lg:flex-row flex-col lg:items-center py-10 gap-x-10 gap-y-10 border-b">
                        <div>
                            <p className="font-bold text-2xl mb-5">Neo X Logo</p>
                            <p className="text-lg font-medium opacity-70">Get the complete set of our logo assets in various formats and sizes. This ZIP file includes high-resolution versions suitable for web, print, and other media, ensuring you have the right logo for any application.</p>
                        </div>
                        <div className="lg:ml-auto">
                            <a href="/assets/brand/logos.zip" target="_blank" className="bg-black text-white font-semibold rounded-full px-5 py-2 w-full flex items-center justify-center">Download</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-auto">
            <Footer />
            </div>
        </main>
    )
}