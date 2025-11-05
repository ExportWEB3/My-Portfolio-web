import { Div } from "../divComponent/div";
import { HeaderComponent } from "../header/header";
import ipsum from "../../images/ipsumlog.png"
import loo from "../../images/loo.avif"
import framer from "../../images/framer.png"
import logoo from "../../images/logoo.png"
import userImg from "../../images/user.webp"
import "./aboutMe.css"
import "../dashboard/dashboard.css"
import { Button } from "../button/botton";
import { Testimonials } from "../testimonials/testimonials";
import { Questions } from "../questions/questions";
import { Footer } from "../footer/footer";
import { CountUpOnScroll } from "../countUpOnscroll/countUp";
import { stackCard } from "../../data";




export function AboutMeComponent () {



const handleScrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn("Element not found:", id);
  }
};

  const handleEmail = () => {
    window.location.href = "mailto:emmanuel00timi@gmail.com?subject=Project Inquiry&body=Hi Emmanuel, I’d like to work with you...";
  };

  const handleGetStarted = () => {
    window.open("https://calendly.com/emmanuel00timi/30min", "_blank");
  };


    return (
        <>
            <HeaderComponent  onNavigate={handleScrollTo} onEmailClick={handleEmail} onGetStarted={handleGetStarted}/>
        <Div className="w-full h-full flex flex-col overflow-visible">
            <Div className="w-full h-[800px] md:h-[500px] flex flex-col  md:flex-row md:space-x-5 overflow-hidden px-2 md:px-10 lg:px-28">

                <Div className="w-full md:w-[30%] h-[200px] relative" animateOnView>
                    <Div className="w-4/6 h-1/2 flex items-center">
        <img src={userImg} className="w-24 -ml-5" />
        <Div className=" md:w-72 h-12 flex flex-col">
          <p className="text-white font-medium">Emmanuel O.</p>
<p className="text-gray-400 flex items-center">
  <span className="relative mr-2 w-3 h-3 flex items-center justify-center">
    {/* Outer ring animation */}
    <span className="absolute w-full h-full rounded-full bg-green-400 opacity-75 animate-ping-custom"></span>
    
    {/* Inner solid dot */}
    <span className="w-1.5 h-1.5 rounded-full bg-green-500 z-10"></span>
  </span>
  Available for work
</p>
        </Div>
        </Div>

         <Div className="w-52 h-12 flex absolute bottom-0 space-x-8">
          {/* Social Icons */}
{/* <a
  href="https://linkedin.com/in/your-profile"
  target="_blank"
  rel="noopener noreferrer"
>
  <Div className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg bg-black/60 border border-white/10 group hover:bg-white transition-all ease-in-out duration-200">
    {/* LinkedIn SVG 
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white group-hover:text-black transition-colors ease-in-out duration-200" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/>
    </svg>
  </Div>
</a> */}

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


                <Div className=" w-full md:w-[65%] h-full bg-black ">
                          <Div id="about" className="w-full h-h350 " >
        <p className="text-gray-400 mt-10">(About)</p>
        <Div className="w-full h-[400px] relative flex items-center -mt-24 aboutResTxtDiv" animateOnView>
          <p className="text-6xl  text-gray-400 tracking-tighter relative inline-block aboutResTxtM">
            Crafting <span className="relative inline-block">
              <a className="text-white z-10 relative">Conversion-Focused</a>
              {/* Animated rectangle border */}
              <span className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
                <span className="block absolute border-2 border-green-500 rounded-md"
                  style={{
                    width: '100%',
                    height: '100%',
                    boxSizing: 'border-box',
                    animation: 'rectMove 4s linear infinite'
                  }}
                ></span>
              </span>
            </span> Designs That Drive Real Results.
          </p>
        </Div>
      </Div>
      

      <Div className="w-full h-[100px] bg-black" animateOnView>
        <p className="text-gray-400">002</p>
        <p className="text-gray-400">I'm a web Developer specializing in creating sleek, high-converting websites that turn visitors into clients. 
          I help freelancers and agencies elevate their online presence with clean, strategic designs that drive real results.</p>
        </Div>
                </Div>
                
            </Div>

<Div className="w-full h-32 overflow-hidden">
  <div className="slider">
    <div className="slide-track">
      {stackCard.map((stack, index) => (
        <Div
          key={`first-${index}`}
          className="slide w-[80px] md:w-[100px] h-20 flex flex-col items-center justify-center rounded-lg bg-black/60 border border-white/10 shadow-[inset_0_0_24px_0_rgba(255,255,255,0.15)] hover:shadow-[inset_0_0_24px_0_rgba(100,100,100,0.15)]"
        >
          <img 
            src={stack.img} 
            alt={`Stack ${index}`} 
            className={`w-16 h-16 ${stack.img.includes('express') ? 'invert brightness-200' : ''}`}
          />
        </Div>
      ))}
      {/* Duplicate for seamless loop */}
      {stackCard.map((stack, index) => (
        <Div
          key={`second-${index}`}
          className="slide w-[80px] md:w-[100px] h-20 flex flex-col items-center justify-center rounded-lg bg-black/60 border border-white/10 shadow-[inset_0_0_24px_0_rgba(255,255,255,0.15)] hover:shadow-[inset_0_0_24px_0_rgba(100,100,100,0.15)]"
        >
          <img 
            src={stack.img} 
            alt={`Stack ${index}`} 
            className={`w-16 h-16 ${stack.img.includes('express') ? 'invert brightness-200' : ''}`}
          />
        </Div>
      ))}
    </div>
  </div>
</Div>

            <Div className="w-full h-[200px] Container x001ResMainHr" animateOnView>
                <hr className="border-gray-800 my-4 mt-14" />
        <Div className="w-full h-10 flex items-center res001">
          <p className="text-gray-400">001</p>
          <Div className="exMargin flex-1 h-full flex justify-between resHomeEx">
            <p className="text-gray-400" >Home</p>
            <p className=" text-gray-400">Export</p>
          </Div>
        </Div>
            </Div>

            <Div className="w-full h-[650px] md:!h-[400px] flex flex-col" animateOnView>
                <Div className="w-full h-10 flex justify-center">
                    <p className="text-gray-500">( Numbers )</p>
                </Div>
                <Div className="w-full h-28 flex justify-center">
                    <p className="text-8xl font-medium text-gray-400 numbersDivResInnerTxt">By the <a className="text-white">Numbers.</a></p>
                </Div>
                          <Div className="w-full min-h-[400px] !px-5 md:h-36 flex items-center justify-center space-y-5 md:space-y-0 md:space-x-4 flex-col md:flex-row " animateOnView>
            <Div className="w-[320px] h-32 space-y-5 flex flex-col items-center justify-center rounded-lg bg-black/60 border border-white/10 shadow-[inset_0_0_24px_0_rgba(255,255,255,0.15)] hover:shadow-[inset_0_0_24px_0_rgba(100,100,100,0.15)]">
<CountUpOnScroll target={14} className="text-white text-3xl" suffix="+" />
            <p className="text-white text-lg">Projects Completed</p>
            </Div>
            <Div className=" w-[320px] h-32 space-y-5 flex flex-col items-center justify-center rounded-lg bg-black/60 border border-white/10 shadow-[inset_0_0_24px_0_rgba(255,255,255,0.15)] hover:shadow-[inset_0_0_24px_0_rgba(100,100,100,0.15)]">
<CountUpOnScroll target={8} className="text-white text-3xl" suffix="+" />
            <p className="text-white text-lg">Website Experience</p>
            </Div>
            <Div className="w-[320px] h-32 space-y-5 flex flex-col items-center justify-center rounded-lg bg-black/60 border border-white/10 shadow-[inset_0_0_24px_0_rgba(255,255,255,0.15)] hover:shadow-[inset_0_0_24px_0_rgba(100,100,100,0.15)]">
<CountUpOnScroll target={99.99} className="text-white text-3xl" suffix="%" />
            <p className="text-white text-lg">Client Satisfaction rate</p>
            </Div>
            </Div>
            </Div>

            <Div className="w-full h-[1300px] md:h-[900px] bg-black flex flex-col md:flex-row items-center space-y-2 gap-10 px-2 md:px-10 lg:px-28" animateOnView> 
              <Div className="w-full md:w-1/2 h-[75%]">
              <img src="https://framerusercontent.com/images/9KSq3srT4hJAp5lQl3HXOxQbiS8.png" className="w-full h-full rounded-2xl" />
              </Div>
                          <Div className="w-full md:w-1/2 h-[50%]">
                          <p className="text-gray-400">( About )</p>
                          <p className="text-gray-400 text-6xl tracking-tighter mt-10">Websites that works. <a className="text-white"> Without the fluff.</a></p>
                          <p className="text-gray-400 mt-10 font-medium text-lg tracking-tighter">I help modern brands turn Designs into clean, high-converting websites and scalable WebPage systems—without overcomplicating the process.</p>
                          <Button
                          type="button"
                          btnText="Get Started"
                          className="w-32 h-10 border border-white/10 mt-10 text-white text-xs shadow-[inset_0_0_24px_0_rgba(200,220,200,0.15)] hover:shadow-[inset_0_0_24px_0_rgba(100,100,90,0.15)] transition-all duration-200"
                          />
                  </Div>
            </Div>
            <Testimonials />
            <Questions />
                 <Footer onNavigate={handleScrollTo} onEmailClick={handleEmail} onGetStarted={handleGetStarted} />

        </Div>
        </>
    )
}