import { useEffect, useRef, useState } from "react";
import { Div } from "../divComponent/div";
import "./footer.css";
import { HeaderComponentProps } from "../../utilities/typedeclaration";


export function Footer ({ onEmailClick, onGetStarted, onNavigate }: HeaderComponentProps) {
      const [expanded, setExpanded] = useState(false);
      const contentRef = useRef<HTMLDivElement>(null);
      const wrapperRef = useRef<HTMLDivElement>(null);

        const handleScrollTo = (id: string) => {
    onNavigate(id);
  };



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
            <Div className="w-full h-20 Container containerCustom" animateOnView>            
                <Div className="w-full h-20 bg-black flex items-end justify-between mainFooterRes">
                <p className="text-gray-400 foothide">( footer )</p>
                <p className="text-6xl font-bold text-white È×þÖR†" style={{ transform: 'scaleY(0.6)' }}>È×þÖR†</p>
                <p className="text-gray-400">( Made by Emmanuel )</p>
            </Div>
            </Div>


            <Div className="footBack w-full h-h950 bg-black Container flex flex-col items-center containerCustom" >
                <Div className=" h-h500 mt-10 flex items-center justify-center relative containerCustom smallFooterTxtDiv"animateOnView>
                    <p className="text-9xl text-center tracking-tight text-gray-400 smallFooterTxt">Every Success Starts with the First <a className="text-white">Step</a>
                                  <span className="ml-2">
            <span className="inline-block w-4 h-4 rounded-full bg-gray-500 animate-pulse animate-pulseX"></span>
          </span>
                    </p>
<Div onClick={onGetStarted} className="hoverChangeDiv absolute top-14 h-96 w-1/2 bg-white/5 border border-white/20 rounded-3xl backdrop-blur-sm  hover:bg-white group flex items-center justify-center transition-colors duration-200">
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


            <Div className="w-full h-52 mt-12 gap-2 flex almLastDiv" animateOnView>
                <Div className="w-1/3 h-full flex flex-col space-y-5 almLastDiv1">
                <p className="text-gray-400">( links )</p>
                <p className="text-white font-medium" onClick={() => handleScrollTo("home")}>Home</p>
                <p className="text-white font-medium" onClick={() => handleScrollTo("about")}>About</p>
                <p className="text-white font-medium" onClick={() => handleScrollTo("projects")}>Projects</p>
                <p className="text-white font-medium" onClick={onGetStarted}>Book a call</p>
                </Div>
                <Div className="w-1/3 h-full flex flex-col items-center relative almLastDiv2">
                <p className="text-gray-400">( È×þÖR† ) </p>
                <p className="absolute bottom-0 text-center text-gray-400 almLastDiv2Top">I'm a web developer specialized in creating sleek, high-converting websites that turn visitors into clients.</p>
                </Div>
                <Div className="w-1/3 h-full flex flex-col items-end relative almLastDiv3">
                <p className="text-gray-400">( follow me )</p>
<Div className="w-fit h-12 flex space-x-5 absolute bottom-0 ">
          {/* Social Icons */}
          <a
  href="https://linkedin.com/in/your-profile"
  target="_blank"
  rel="noopener noreferrer"
>
  <Div className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg bg-black/60 border border-white/10 group hover:bg-white transition-all ease-in-out duration-200">
    {/* LinkedIn SVG */}
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white group-hover:text-black transition-colors ease-in-out duration-200" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/>
    </svg>
  </Div>
</a>

<a
  href="https://x.com/exportD_ev"
  target="_blank"
  rel="noopener noreferrer"
>
  <Div className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg bg-black/60 border border-white/10 group hover:bg-white transition-all ease-in-out duration-200">
    {/* X (Twitter) SVG */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" className="w-5 h-5 text-white group-hover:text-black transition-colors ease-in-out duration-200" fill="currentColor">
      <path d="M715.6 567.6 1176.3 0H1070L670.3 487.4 351.5 0H0l489.1 727.4L23.7 1227h134.3l430.5-525.3 339.1 525.3H1200L715.6 567.6zm-147.3 179.6-49.8-76.4L174.2 91.3h126.5l328.5 504.1 49.8 76.4L1025 1135.7H898.5L568.3 747.2z"/>
    </svg>
  </Div>
</a>


<a
  href="https://github.com/ExportWEB3"
  target="_blank"
  rel="noopener noreferrer"
>
  <Div className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg bg-black/60 border border-white/10 group hover:bg-white transition-all ease-in-out duration-200">
    {/* GitHub SVG */}
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white group-hover:text-black transition-colors ease-in-out duration-200" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.173c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.47-2.381 1.236-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.043.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  </Div>
</a>
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