import { useEffect, useRef, useState } from "react";
import { Div } from "../divComponent/div";
import "./footer.css";


export function Footer () {
      const [expanded, setExpanded] = useState(false);
      const contentRef = useRef<HTMLDivElement>(null);
      const wrapperRef = useRef<HTMLDivElement>(null);



    useEffect(() => {
        const wrapper = wrapperRef.current;
        const content = contentRef.current;
        if (!wrapper || !content) return;
    
        if (expanded) {
          const contentHeight = content.scrollHeight;
          content.style.opacity = "1";
          content.style.padding = "1rem";
        } else {
          content.style.opacity = "0";
          content.style.padding = "0rem";
        }
      }, [expanded]);
    


    return (
        <Div className="w-full h-h1100 bg-black padding01">
            <Div className="w-full h-20 Container containerCustom ">            
                <Div className="w-full h-20 bg-black flex items-end justify-between mainFooterRes">
                <p className="text-gray-400 foothide">( footer )</p>
                <p className="text-6xl font-bold text-white È×þÖR†" style={{ transform: 'scaleY(0.6)' }}>È×þÖR†</p>
                <p className="text-gray-400">( Made by Emmanuel )</p>
            </Div>
            </Div>


            <Div className="footBack w-full h-h950 bg-black Container flex flex-col items-center containerCustom">
                <Div className=" h-h500 mt-10 flex items-center justify-center relative containerCustom smallFooterTxtDiv">
                    <p className="text-9xl text-center tracking-tight text-gray-400 smallFooterTxt">Every Success Starts with the First <a className="text-white">Step</a>
                                  <span className="ml-2">
            <span className="inline-block w-4 h-4 rounded-full bg-gray-500 animate-pulse animate-pulseX"></span>
          </span>
                    </p>
<Div className="hoverChangeDiv absolute top-14 h-96 w-1/2 bg-white/5 border border-white/20 rounded-3xl backdrop-blur-sm hover:bg-white group flex items-center justify-center transition-colors duration-200">
  {/* + Sign */}
  <div className="text-white text-4xl transition-all duration-200 transform group-hover:rotate-180 group-hover:scale-150 group-hover:text-black origin-center">
    +
  </div>

  {/* Get in touch Text */}
  <div
    className="absolute hoverChangeDivTxt bottom-32 font-medium text-2xl text-white group-hover:text-black opacity-0 translate-y-32 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-100"
  >
    Get in touch
  </div>
</Div>
                </Div>


            <Div className="w-full h-52 mt-12 gap-2 flex almLastDiv">
                <Div className="w-1/3 h-full flex flex-col space-y-5 almLastDiv1">
                <p className="text-gray-400">( links )</p>
                <p className="text-white font-medium">Home</p>
                <p className="text-white font-medium">About</p>
                <p className="text-white font-medium">Projects</p>
                <p className="text-white font-medium">Book a call</p>
                </Div>
                <Div className="w-1/3 h-full flex flex-col items-center relative almLastDiv2">
                <p className="text-gray-400">( È×þÖR† ) </p>
                <p className="absolute bottom-0 text-center text-gray-400 almLastDiv2Top">I'm a web developer specialized in creating sleek, high-converting websites that turn visitors into clients.</p>
                </Div>
                <Div className="w-1/3 h-full flex flex-col items-end relative almLastDiv3">
                <p className="text-gray-400">( follow me )</p>
<Div className="w-fit h-12 flex space-x-5 absolute bottom-0 ">
          {/* Social Icons */}
          <Div className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg bg-black/60 border border-white/10 group hover:bg-white transition-all ease-in-out duration-200">
            {/* LinkedIn SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white group-hover:text-black transition-colors ease-in-out duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/>
            </svg>
          </Div>
          <Div className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg bg-black/60 border border-white/10 group hover:bg-white transition-all ease-in-out duration-200">
            {/* YouTube SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white group-hover:text-black transition-colors ease-in-out duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112c-1.867-.502-9.386-.502-9.386-.502s-7.519 0-9.386.502a2.994 2.994 0 0 0-2.112 2.112c-.502 1.867-.502 5.773-.502 5.773s0 3.906.502 5.773a2.994 2.994 0 0 0 2.112 2.112c1.867.502 9.386.502 9.386.502s7.519 0 9.386-.502a2.994 2.994 0 0 0 2.112-2.112c.502-1.867.502-5.773.502-5.773s0-3.906-.502-5.773zm-13.498 9.314v-7l6 3.5-6 3.5z"/>
            </svg>
          </Div>
          <Div className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg bg-black/60 border border-white/10 group hover:bg-white transition-all ease-in-out duration-200">
            {/* Facebook SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white group-hover:text-black transition-colors ease-in-out duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.733-.592-1.325-1.325-1.325z"/>
            </svg>
          </Div>
        </Div>
                </Div>
                
            </Div>
                        <hr className=" w-full border-gray-800 mt-14" />

                        <Div className="w-full h-14 bg-black mt-5 justify-between flex items-center lastFooterDiv">
                            <Div className="w-64 h-full flex items-center gap-7">
                                <p className="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</p>
                                <p className="text-gray-400 hover:text-white cursor-pointer">Terms of Service</p>
                            </Div>
                            <p className="text-gray-400">( © 2025 Emmanuel. All rights reserved. )</p>
                        </Div>

            </Div>
            
        </Div>
    )
}