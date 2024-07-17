"use client"
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
export default function ProjectDialog(props) {
    const { project, isOpen, setIsOpen } = props
    return (
        <AnimatePresence>
            {isOpen && (
                <Dialog static open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/30"
                    />
                    <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                        <DialogPanel
                            as={motion.div}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="max-w-6xl h-full lg:h-auto overflow-y-auto rounded-xl bg-white p-12 relative"
                        >
                            <div className='flex flex-col lg:flex-row lg:items-start gap-10'>
                                <div className='flex-none bg-gray-50 border shadow rounded-xl w-44 h-44 flex items-center justify-center'>
                                    <img src={project.icon_url} className='w-20' />
                                </div>
                                <div className='w-full'>
                                    <div className='flex items-center gap-3 mb-3'>
                                    <p className='text-3xl font-bold'>{project.title}</p>
                                    {
                                                project.networks.map((network, networkIndex) => (
                                                    <div key={`network-${networkIndex}`} className="bg-black/25 border border-black/10 shadow-lg px-2 py-1 rounded-xl text-white text-xs font-medium">{network}</div>
                                                ))
                                            }
                                    </div>
                                    
                                    <p className='lg:text-lg font-medium text-[#404056] mb-3'>{project.subtitle}</p>
                                    <div className='flex items-center gap-3 w-full'>
                                        {
                                            project.links.map((link, index) => (
                                                <div key={`link-${index}`}>
                                                    <a  href={link.url} target='_blank' className='hover:underline lg:text-lg text-[#404056]/50 pr-3'>
                                                        {link.title}
                                                    </a>
                                                    {
                                                        index !== project.links.length - 1 ?
                                                            <span className='lg:text-lg text-[#404056]/50'>|</span>
                                                            : null
                                                    }

                                                </div>
                                            ))
                                        }
                                    </div>
                                    <hr className='my-4 w-full' />
                                    <div className='flex items-center gap-3'>
                                        {
                                            project.tags.map((tag, index) => (
                                                <div key={`tag-${index}`} className='text-white bg-[#02DCA3] border border-[#02D19B] rounded-full px-3 py-1'>{tag}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='mt-12'>
                                <p className='lg:text-lg font-medium text-[#404056]'>{project.description}</p>
                            </div>
                            <button onClick={(e)=>{setIsOpen(false)}} className='absolute top-10 right-10 focus:outline-none'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.40576 1L15.8076 15.4019" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M15.4019 1L1 15.4019" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                </svg>

                            </button>
                        </DialogPanel>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    )
}