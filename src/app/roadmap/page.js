"use client"
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RoadmapData from '../data/roadmap.json'

export default function ProjectsPage() {

    const roadmap = RoadmapData

    return (
        <main className="antialiased w-full flex flex-col">
            <Navbar />

            <div className="pt-20 md:pt-40 relative overflow-hidden">

                <div className="max-w-6xl mx-auto w-full px-8 z-40 flex flex-col items-center justify-center">
                    <p className="text-2xl md:text-7xl font-bold mb-2 md:mb-4">Your Journey,</p>
                    <svg className="h-6 md:h-16" viewBox="0 0 562 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5221 65.5055C12.3421 65.5055 0.46208 52.3655 0.46208 33.1055C0.46208 13.7555 12.3421 0.795464 30.5221 0.795464C48.7021 0.795464 60.5821 13.7555 60.5821 33.1055C60.5821 52.3655 48.7021 65.5055 30.5221 65.5055ZM30.5221 53.8955C40.8721 53.8955 46.7221 45.6155 46.7221 33.1055C46.7221 20.5055 40.8721 12.4055 30.5221 12.4055C20.1721 12.4055 14.3221 20.5055 14.3221 33.1055C14.3221 45.6155 20.1721 53.8955 30.5221 53.8955ZM80.4095 44.3555C80.4095 51.4655 83.5595 54.6155 89.0495 54.6155C94.5395 54.6155 98.8595 51.4655 98.8595 44.3555V17.8055H112V64.6055H98.8595V54.7955H98.3195C97.5095 59.2055 93.0095 65.5055 83.3795 65.5055C74.2895 65.5055 67.2695 59.6555 67.2695 47.5055V17.8055H80.4095V44.3555ZM120.422 64.6055V17.8055H133.562V29.1455H133.922C135.542 22.3055 139.952 17.2655 147.422 17.2655C148.502 17.2655 149.672 17.3555 151.022 17.7155V28.7855C149.582 28.6055 148.502 28.5155 147.332 28.5155C140.312 28.5155 133.562 32.5655 133.562 43.9055V64.6055H120.422ZM175.312 64.6055V1.60546H200.782C217.522 1.60546 224.812 10.3355 224.812 22.6655C224.812 31.5755 220.942 38.7755 212.212 41.9255L225.442 64.6055H212.122L200.152 43.6355H188.812V64.6055H175.312ZM200.332 31.9355C207.712 31.9355 210.952 28.2455 210.952 22.6655C210.952 16.9955 207.712 13.3055 200.332 13.3055H188.812V31.9355H200.332ZM252.429 65.5055C240.639 65.5055 228.939 58.2155 228.939 41.2055C228.939 24.1955 240.639 16.9055 252.429 16.9055C264.219 16.9055 275.919 24.1955 275.919 41.2055C275.919 58.2155 264.219 65.5055 252.429 65.5055ZM252.429 54.6155C258.729 54.6155 263.589 50.4755 263.589 41.2055C263.589 31.9355 258.729 27.7955 252.429 27.7955C246.129 27.7955 241.269 31.9355 241.269 41.2055C241.269 50.4755 246.129 54.6155 252.429 54.6155ZM294.925 65.5055C287.275 65.5055 279.895 61.8155 279.895 52.1855C279.895 41.8355 288.355 39.5855 296.455 38.4155L304.375 37.2455C308.695 36.6155 310.045 35.8955 310.045 33.2855V32.6555C310.045 27.7055 306.805 26.3555 302.755 26.3555C298.525 26.3555 294.745 27.7055 294.745 32.5655V33.4655H282.415V31.3055C282.415 22.1255 288.535 16.9055 303.115 16.9055C317.245 16.9055 322.915 21.9455 322.915 32.1155V64.6055H310.405V56.3255H309.865C308.965 58.8455 305.185 65.5055 294.925 65.5055ZM299.425 56.1455C305.635 56.1455 310.045 52.0055 310.045 48.3155V43.0955C309.325 44.1755 307.075 44.5355 305.005 44.8955L298.435 46.0655C294.385 46.6955 293.035 48.6755 293.035 51.1055C293.035 53.9855 294.925 56.1455 299.425 56.1455ZM349.173 65.5055C339.363 65.5055 328.653 58.3955 328.653 41.2055C328.653 24.0155 339.363 16.9055 349.173 16.9055C356.103 16.9055 361.233 20.5055 362.943 24.5555V1.60546H376.083V64.6055H362.943V57.8555C361.233 61.9055 356.103 65.5055 349.173 65.5055ZM352.323 54.6155C358.083 54.6155 363.483 50.3855 363.483 41.2055C363.483 32.0255 358.083 27.7955 352.323 27.7955C346.473 27.7955 341.073 32.0255 341.073 41.2055C341.073 50.3855 346.473 54.6155 352.323 54.6155ZM443.263 38.0555C443.263 30.9455 440.293 27.7955 435.523 27.7955C430.843 27.7955 427.063 30.9455 427.063 38.0555V64.6055H413.923V38.0555C413.923 30.9455 410.953 27.7955 406.183 27.7955C401.503 27.7955 397.723 30.9455 397.723 38.0555V64.6055H384.583V17.8055H397.723V27.6155H398.263C398.983 23.2055 403.753 16.9055 411.943 16.9055C418.423 16.9055 423.913 20.4155 426.073 27.6155C426.973 23.2955 432.103 16.9055 440.923 16.9055C449.833 16.9055 456.403 22.7555 456.403 34.9055V64.6055H443.263V38.0555ZM477.674 65.5055C470.024 65.5055 462.644 61.8155 462.644 52.1855C462.644 41.8355 471.104 39.5855 479.204 38.4155L487.124 37.2455C491.444 36.6155 492.794 35.8955 492.794 33.2855V32.6555C492.794 27.7055 489.554 26.3555 485.504 26.3555C481.274 26.3555 477.494 27.7055 477.494 32.5655V33.4655H465.164V31.3055C465.164 22.1255 471.284 16.9055 485.864 16.9055C499.994 16.9055 505.664 21.9455 505.664 32.1155V64.6055H493.154V56.3255H492.614C491.714 58.8455 487.934 65.5055 477.674 65.5055ZM482.174 56.1455C488.384 56.1455 492.794 52.0055 492.794 48.3155V43.0955C492.074 44.1755 489.824 44.5355 487.754 44.8955L481.184 46.0655C477.134 46.6955 475.784 48.6755 475.784 51.1055C475.784 53.9855 477.674 56.1455 482.174 56.1455ZM514.531 81.7055V17.8055H527.671V24.5555C529.381 20.5055 534.511 16.9055 541.441 16.9055C551.251 16.9055 561.961 24.0155 561.961 41.2055C561.961 58.3955 551.251 65.5055 541.441 65.5055C534.511 65.5055 529.381 61.9055 527.671 57.8555V81.7055H514.531ZM538.291 54.6155C544.141 54.6155 549.541 50.3855 549.541 41.2055C549.541 32.0255 544.141 27.7955 538.291 27.7955C532.531 27.7955 527.131 32.0255 527.131 41.2055C527.131 50.3855 532.531 54.6155 538.291 54.6155Z" fill="url(#paint0_linear_29_129)" />
                        <defs>
                            <linearGradient id="paint0_linear_29_129" x1="7.71415" y1="76.6055" x2="561.006" y2="76.6055" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#04DCA3" />
                                <stop offset="0.505" stop-color="#01CFCB" />
                                <stop offset="1" stop-color="#5D4DC1" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <p className="text-base lg:text-lg font-medium mt-8 text-center">
                        Neo X is an EVM-compatible sidechain creating a bridge between Neo N3 and the widely adopted EVM network
                    </p>
                </div>

            </div>

            <div className="w-full py-24 max-w-6xl mx-auto px-8">

                <div>
                    {Object.entries(roadmap).map(([year, quarters]) => (
                        Object.entries(quarters).map(([quarter, data]) => (
                            <div key={`${year}-${quarter}`} className=" relative">
                                
                                <div className="z-50 relative w-20 flex items-center justify-center pb-8">
                                    <div className="w-auto inline-flex bg-white px-4 py-2 h-12 border border-black/10 rounded-lg shadow text-center">
                                        <p className="font-bold text-2xl whitespace-nowrap">{year} {quarter}</p>
                                    </div>
                                    <div className="absolute top-12 left-0 w-20 h-full flex items-center justify-center z-10">
                                        <div style={{backgroundColor: data.color}} className="w-px h-full"></div>
                                    </div>
                                </div>
                                
                                {data.items.map((item, index) => (
                                    <div key={index} className="z-50 relative flex items-start pb-8">

                                        {(index !== data.items.length - 1 || quarter !== Object.keys(quarters).pop() || year !== Object.keys(roadmap).pop()) && (
                                            <div className="absolute top-6 left-0 w-20 h-full flex items-center justify-center z-10">
                                                <div style={{backgroundColor: data.color}} className="w-px h-full"></div>
                                            </div>
                                        )}
                                        
                                        <div className="w-20 flex-none flex items-center justify-center">
                                            <div style={{backgroundColor: data.color}} className="rounded-md w-6 h-6 border border-black/10 flex items-center justify-center">
                                                {item.done && (
                                                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.2831 1.64648L4.82608 9.10352L1.43652 5.71396" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-xl font-bold">{item.title}</p>
                                            <p className="text-lg">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                    ))}
                </div>

            </div>
            <Footer />
        </main>
    )
}