"use client"
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectsData from '../data/projects.json'
import ProjectDialog from "../components/ProjectDialog";



export default function ProjectsPage() {

    const projects = ProjectsData
    const [selectedTag, setSelectedTag] = React.useState(null)
    const [selectedProject, setSelectedProject] = React.useState(null)
    const uniqueTags = () => {
        var tags = []
        projects.map((p) => {
            p.tags.map((t) => {
                if (tags.includes(t) === false) {
                    tags.push(t)
                }

            })
        })
        return tags
    }

    return (
        <main className="antialiased w-full flex flex-col">
            <Navbar />

            <div className="w-full relative  flex flex-col py-24">

                <div className="max-w-6xl mx-auto w-full px-8 z-40">
                    <a href="/" className="flex items-center gap-2">
                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.70312 4.70704L1.00002 4.70701" stroke="#80808E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.82031 0.894531L1.0079 4.70694L4.82031 8.51936" stroke="#80808E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span className="lg:text-lg font-medium text-[#80808E]">Homepage</span>
                    </a>

                    <div className="mt-8 flex flex-col">
                        <p className="lg:text-lg text-[#02DCA3] font-semibold">Projects</p>
                        <p className="font-bold text-2xl lg:text-5xl py-5">Launching on Neo X.</p>

                        <div className="flex lg:flex-row flex-col lg:items-center gap-5">
                            <p className="lg:text-lg font-medium text-[#404056]">The Neo X family is growing fast. Jump onboard with the many projects that have already joined the Neo ecosystem.</p>
                        </div>
                    </div>

                    <div className="hidden mt-14 border-t border-b lg:flex flex-col lg:flex-row lg:items-center w-full py-5 lg:text-lg font-medium text-[#404056]/75 gap-3 overflow-x-auto">
                        <button onClick={(e) => { setSelectedTag(null) }} className={`py-1 px-3 rounded-lg ${selectedTag === null ? "bg-[#02DCA3] text-white" : ""}`}>All</button>
                        {
                            uniqueTags().map((t) => (
                                <button key={`tag-${t}`} onClick={(e) => { setSelectedTag(t) }} className={`py-1 px-3 whitespace-nowrap rounded-lg ${selectedTag === t ? "bg-[#02DCA3] text-white" : ""}`}>{t}</button>
                            ))
                        }
                        <div className="lg:ml-auto flex items-center gap-3">
                            <div className="btn-gradient text-xs font-bold text-white">TESTNET</div>
                            <p className="font-semibold text-black  whitespace-nowrap">Claim Neo X GAS Here</p>
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.1416 1.67969L5.28324 5.82133L1.1416 9.96297" stroke="black" strokeWidth="1.60248" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                    </div>


                    <div className="mt-14 grid grid-cols-2 lg:grid-cols-6 gap-6">
                        {
                            projects.filter((p) => { return selectedTag ? p.tags.includes(selectedTag) : true }).map((p, index) => (
                                <div key={`project-${index}`} onClick={(e) => { setSelectedProject(p) }} className="cursor-pointer flex flex-col gap-5">
                                    <div className="relative rounded-2xl border aspect-square flex items-center justify-center p-8 hover:shadow-lg transition ease-in-out duration-300 hover:cursor-pointer">
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

                </div>

            </div>

            {
                selectedProject ?
                    <ProjectDialog project={selectedProject} isOpen={selectedProject ? true : false} setIsOpen={(e) => { setSelectedProject(null) }} />
                    : null
            }


            <Footer />
        </main>
    )
}