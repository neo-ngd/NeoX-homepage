export default function EarlyAccessProgram() {

    return (
        <div className="w-full relative  flex flex-col bg-black">
        <a name="earlyaccessprogram"/>
            <div className="relative max-w-6xl mx-auto w-full px-8 z-40 py-20 lg:py-24 flex lg:flex-row flex-col lg:items-center gap-10">
                <div className="lg:w-1/2 h-full relative lg:p-10">
                    <img className=" " src="/assets/early_access_program.png" />
                </div>
                <div className="lg:w-1/2 flex flex-col text-white gap-5">
                    <p className="font-bold text-2xl lg:text-3xl">Get a head start.</p>
                    <p className="font-medium lg:text-lg">Developers are invited to apply to join the Early-Access Group to test and provide feedback on Neo X’s features. Get direct support from the core development team and access to essential testing resources. Input from members will be crucial in refining Neo X and enhancing the overall developer experience.</p>
                    <div className="mt-8">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSemZXX2YzUtcEwxFW13bCNa1EHyJ6YXPSCcNjPwuXu0m_BhKg/viewform" target="_blank" className="font-semibold bg-white rounded-full px-5 py-2 text-black">Apply Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}