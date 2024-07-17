import ProjectsData from '../data/projects.json'
export default function Projects() {
    const projects = ProjectsData
    return (
        <div className="mt-14 w-full relative  flex flex-col py-20 lg:py-24 bg-gray-50">
        <a name="projects"/>
            <div className="max-w-6xl mx-auto w-full px-8 z-40">

                <div className="flex flex-col">
                    <p className="lg:text-lg text-[#02DCA3] font-semibold">Projects</p>
                    <p className="font-bold text-2xl lg:text-5xl py-5">Launching on Neo X.</p>

                    <div className="flex lg:flex-row flex-col lg:items-center gap-5">
                        <p className="lg:text-lg font-medium text-[#404056]">The Neo X family is growing fast. Jump onboard with the many projects that have already joined the Neo ecosystem.</p>
                        <a href="/projects" className="hidden lg:ml-auto lg:text-lg font-medium text-[#80808E] lg:flex items-center gap-2">
                            View All
                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.71094 4.70704L10.414 4.70701" stroke="#80808E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.59375 0.894409L10.4062 4.70682L6.59375 8.51923" stroke="#80808E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>


                <div className="mt-14 grid grid-cols-2 lg:grid-cols-6 gap-6">
                    {
                        projects.slice(0,6).map((p, index) => (
                            <div key={`project-${index}`} className="cursor-pointer flex flex-col gap-5">
                                <div className="bg-white relative rounded-2xl border aspect-square flex items-center justify-center p-8 hover:shadow-lg transition ease-in-out duration-300 hover:cursor-pointer">
                                <img className="w-20 object-fit" src={p.icon_url} />
                                    <div className="absolute top-3 left-3 flex items-center flex-wrap gap-3">
                                        {
                                            p.networks.map((network, networkIndex) => (
                                                <div key={`project-${index}-network-${networkIndex}`} className="bg-black/25 border border-black/10 shadow-lg px-2 py-1 rounded-full text-white text-xs font-medium">{network}</div>
                                            ))
                                        }

                                    </div>

                                </div>
                                <p className="text-center lg:text-lg font-medium text-[#404056]">{p.title}</p>
                            </div>
                        ))
                    }

                </div>

                <a href="/projects" className="mt-14 lg:text-lg font-medium text-[#80808E] lg:hidden flex items-center justify-end gap-2">
                            View All
                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.71094 4.70704L10.414 4.70701" stroke="#80808E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.59375 0.894409L10.4062 4.70682L6.59375 8.51923" stroke="#80808E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </a>

            </div>
        </div>
    )
}