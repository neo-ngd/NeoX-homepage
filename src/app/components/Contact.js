export default function Contact() {
    return (
        <div className="bg-black py-20 lg:py-24 flex w-full relative overflow-hidden">
            <a name="contact"/>
            <div className="max-w-6xl mx-auto w-full px-8 z-40 flex flex-col">
                <p className="font-bold text-2xl lg:text-5xl text-white mb-5">Let&apos;s talk.</p>
                <p className="lg:text-lg font-medium text-white max-w-3xl">
                    Interested in joining the Neo X ecosystem? Reach out to Neo to discuss potential partnerships, media opportunities, grants, events, and sponsorships.
                </p>
                <div className="mt-10">
                    <a href="mailto:eg@neo.org" className="font-semibold bg-white rounded-full px-5 py-2 text-black">Contact Us</a>
                </div>
            </div>  

            <div className="absolute top-0 right-0 ">
                <img src="/assets/contact_decorator.png" className="lg:h-96 translate-x-1/2 lg:translate-x-0 object-cover"/>
            </div>

        </div>
    )
}