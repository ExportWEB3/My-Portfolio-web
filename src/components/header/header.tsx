import { useState } from "react";
import { Button, ButtonComponent } from "../button/botton";
import { Div } from "../divComponent/div";
import './header.css';


export function HeaderComponent () {
    const [hovered, setHovered] = useState(false);


    return (
        <Div className="w-full h-24 bg-black px-24 flex items-center relative">
            <h1 className="export text-white font-extrabold">EXPORT</h1>
            <Div className="w-48 h-10 ml-20 flex items-center justify-between">
                <p className="text-gray-300 hover:text-gray-500 cursor-pointer">Home</p>
                <p className="text-gray-300 hover:text-gray-500 cursor-pointer">Projects</p>
                <p className="text-gray-300 hover:text-gray-500 cursor-pointer">About</p>
            </Div>
            {/* Refactored button group */}
            <Div className="flex items-center gap-x-4 ml-auto">
                <Div
                    className={`flex items-center justify-center rounded-lg transition-all duration-300 cursor-pointer bg-black/60 border border-white/10 overflow-hidden ${
                        hovered ? "w-32 px-2" : "w-12"
                    } h-12`}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {!hovered ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4zm0 0l8 8 8-8" />
                        </svg>
                    ) :  (
                        <>
                            <span className="text-gray-300 mr-2 whitespace-nowrap">Get in touch</span>
                            {/* Envelope Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4zm0 0l8 8 8-8" />
                            </svg>
                        </>
                    )  }
                </Div>
                    <Button
                    type="button"
                    btnText="Get Started"
                    className="h-10 px-6 text-base bg-slate-50 text-black"
                />
            </Div>
        </Div>
    )
}