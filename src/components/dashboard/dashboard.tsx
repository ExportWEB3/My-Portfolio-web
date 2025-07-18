import { useState, useEffect } from "react";
import { Div } from "../divComponent/div";
import { Input } from "../input/input";
import { Icon } from "../iconComponent/icon";
import './dashboard.css'
import { HeaderComponent } from "../header/header";
import { Button } from "../button/botton";
import { ToggleBox } from "../toggle/toggle";
import { ExploreProjectHover } from "../projectHover/hover";
import { useInViewFade } from "../custom hooks/useInViewFade";
import { PlusGridBackground } from "../gridBackground/gridBackground";



export function DashboardComponent() {
  // Text slider state
  const [showAlt, setShowAlt] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlt(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleRedirect = () => {
window.open("https://exportweb3.github.io/Ad-Projects/", "_blank");
};

// Or for new tab:
// window.open("https://exportweb3.github.io/Ad-Projects/", "_blank");


  return (
    <>
    <HeaderComponent />
        <Div className=" bg-black h-screen w-full " >
      <Div className="w-full Container heightF flex items-center" >
        <Div className="w-w100 h-h270 bg-white rounded-xl p-0.5" animateOnView>
          <Div className="w-full bg-black rounded-xl px-5 py-2">
          <Div className="w-full h-10 flex items-center justify-between ">
            <Div className="flex space-x-2"> 
            <Icon
            icon="ri-map-pin-fill"
            className="text-gray-300 text-base"
             />
            <p className="font-xs font-semibold text-gray-300">Oyo, Nigeria</p>
            </Div>
            <p className="font-xs font-semibold text-gray-300">Web Developer</p>
          </Div>

          <Div className="w-full h-16 mt-5 flex items-center">
            <img src="src/images/user.webp" className="w-24" />
            <Div className="flex flex-col w-72 h-full">
              <p className="font-semibold text-xl text-white">Emmanuel O.</p>
          <p className="text-gray-400 flex items-center">
            <span className="mr-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </span>
            Available for work
          </p>            </Div>
          </Div>

          <Div className="w-full h-16 mt-5 flex gap-3 items-center p-2">
            <Button
            type="button"
            btnText="Get In Touch"
            className="h-10 w-40 fontBtn bg-slate-50 text-black"
             />

            <Button
            type="button"
            btnText="About Me"
            className="h-10 w-40 fontBtn  btnGrad text-white "
             />
          </Div>
          </Div>
          
          <Div className="w-full h-10 flex justify-center items-center">
            <p className="font-semibold">Available for work</p>
          </Div>
        </Div>

        <Div className="w-w130 h-56 ml-32 flex justify-center flex-col relative overflow-hidden" animateOnView>
          <div style={{ height: "100px", position: "relative" }}>
            <div style={{ position: "relative", height: "72px" }}>
              <h1
                className={`text-6xl font-medium font12 text-gray-300 tracking-tighter absolute left-0 top-0 transition-all duration-500 ${
                  showAlt ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
                }`}
                style={{ width: "100%", willChange: "transform, opacity" }}
              >
                Build a website
              </h1>
              <h1
                className={`text-6xl font-medium font12 text-gray-300 tracking-tighter absolute left-0 top-0 transition-all duration-500 ${
                  showAlt ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
                style={{ width: "100%", willChange: "transform, opacity" }}
              >
                <span className="text-gray-300">Let's help you</span>
              </h1>
              {/* Fixed green underline */}
              <span className="block w-32 h-1 mt-2 bg-green-500 rounded absolute left-0 bottom-0"></span>
            </div>
            <h1 className="text-6xl font-medium font12 text-gray-300 tracking-tighter mt-2">
              <a className="text-white">stands out</a>---and sells.
            </h1>
          </div>
        </Div>
      </Div>
      <Div className="w-full h-64 flex bg-black flex-col Container" > 
        <Div className="w-full h-2/5 flex items-center mt-10" animateOnView>
        <Div className="w-52 h-12 flex space-x-8">
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
        <Div className="w-w38 ml-80 h-full flex items-center">
          <p className="text-gray-400">
            Welcome to my portfolio! Here you'll find a showcase of my latest projects, creative solutions, and passion for web development. I build modern, impactful websites that help brands and individuals stand out. Explore my work and let’s create something amazing together.
          </p>
        </Div>    
        </Div>
        <hr className="border-gray-800 my-4 mt-14" />
        <Div className="w-full h-10 flex items-center ">
          <p className="text-gray-400">001</p>
          <Div className="exMargin flex-1 h-full flex relative">
            <p className="text-gray-400">Home</p>
            <p className="right-0 absolute text-gray-400">Export</p>
          </Div>
        </Div>
      </Div>
      <Div className="w-full h-h350 Container bg-black padding space-y-10" >
        <p className="text-gray-400">(About)</p>
        <Div className="w-3/5 h-32 relative flex items-center" animateOnView>
          <p className="text-6xl font- text-gray-400 tracking-tighter relative inline-block">
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

      <Div className="w-full h-96 bg-black Container flex items-end" >
        <Div className="w-full h-1/2 flex items-center" animateOnView>
        <Div className="w-1/2 h-1/2 flex items-center">
        <img src="src/images/user.webp" className="w-24 -ml-5" />
        <Div className="w-40 h-12 flex flex-col">
          <p className="text-white font-medium">Emmanuel O.</p>
          <p className="text-gray-400 flex items-center">
            <span className="mr-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </span>
            Available for work
          </p>
        </Div>
        </Div>
        <Div className="w-1/2 h-full space-y-5 py-5">
        <p className="text-gray-400">002</p>
        <p className="text-gray-400">I'm a web designer specializing in creating sleek, high-converting websites that turn visitors into clients. 
          I help freelancers and agencies elevate their online presence with clean, strategic designs that drive real results.</p>
        </Div>
        </Div>
      </Div>

      <Div className="w-full h-40 bg-black Container" >
          <p className="text-gray-400 tracking-tight">
            // Worked with companies like
          </p>
          <Div className="w-full h-full flex items-center justify-center space-x-8" animateOnView>
            {/* Example logos, replace src with your actual logo paths */}
            <Div className="w-64 h-28 flex items-center justify-center rounded-lg bg-black/60 border border-white/10 shadow-[0_0_24px_0_rgba(16,255,16,0.15)]">
              <img src="src/images/ipsum.avif" alt="Logo 1" className="h-16 object-contain" />
            </Div>
            <Div className="w-64 h-28 flex items-center justify-center rounded-lg bg-black/60 border border-white/10 shadow-[0_0_24px_0_rgba(16,255,16,0.15)]">
              <img src="src/images/loo.avif" alt="Logo 2" className="h-16 object-contain" />
            </Div>
            <Div className="w-64 h-28 flex items-center justify-center rounded-lg bg-black/60 border border-white/10 shadow-[0_0_24px_0_rgba(16,255,16,0.15)]">
              <img src="src/images/framer.png" alt="Logo 3" className="h-10 object-contain" />
            </Div>
            <Div className="w-64 h-28 flex items-center justify-center rounded-lg bg-black/60 border border-white/10 shadow-[0_0_24px_0_rgba(16,255,16,0.15)]">
              <img src="src/images/logoo.png" alt="Logo 4" className="h-8 object-contain" />
            </Div>
            <Div className="w-64 h-28 flex items-center justify-center rounded-lg bg-black/60 border border-white/10 shadow-[0_0_24px_0_rgba(16,255,16,0.15)]">
              <img src="src/images/ipsumlog.png" alt="Logo 5" className="h-12 object-contain" />
            </Div>
          </Div>
        </Div>

        <Div className="w-full h-h450 bg-black Container flex relative">
          <Div className="flex flex-col w-1/2 h-full justify-end space-y-10" animateOnView>
            <p className="text-gray-400">( Services )</p>
          <Div className="w-full h-48 flexitems-end">
          <p className="text-gray-400 textWds tracking-tight">Customized Web Design Solutions to Elevate Your Brand and <a className="text-white"> Drive Conversions.</a></p>
          </Div>
          </Div>
          <Div className="w-1/2 h-20 flex justify-end items-center absolute bottom-0 right-24">
          <Button
          type="button"
          btnText="Get In Touch"
          className="h-10 w-40 fontBtn bg-black/60 hover:bg-white/10 transition-colors duration-200 border border-white/10 text-white"
           />
          </Div>
        </Div>

        <Div className="w-full h-72 bg-black Container">
          <Div className="w-full h-full padding01 flex space-x-28" animateOnView>
            <p className="text-white text-4xl">01</p>
            <Div className="flex-1 h-full relative overflow-hidden">
              <Div
                className=" top-0 left-0 w-full h-full flex bg-black hover:text-white"
                style={{ zIndex: 2 }}
              >
<ToggleBox
  title={
    <Div className="w-full h-full ">
      <h3 className="text-3xl font-medium  mb-6 -mt-3">Digital Web Development</h3>
      <div className="flex gap-4">
        <button className="px-6 py-2 rounded-full bg-black/80  border border-white/20 hover:bg-black/60 transition-all duration-200">
          Portfolio Websites
        </button>
        <button className="px-6 py-2 rounded-full bg-black/80  border border-white/20 hover:bg-black/60 transition-all duration-200">
          Agency Websites
        </button>
        <button className="px-6 py-2 rounded-full bg-black/80   border border-white/20 hover:bg-black/60 transition-all duration-200">
          SaaS Websites
        </button>
        <button className="px-6 py-2 rounded-full bg-black/80   border border-white/20 hover:bg-black/60 transition-all duration-200">
          Personal Branding Sites
        </button>
      </div>
    </Div>
  }
>
  <div>
    <p>I create polished digital experiences that align with your brand and engage your audience—across websites, apps, and marketing visuals.</p>
  </div>
</ToggleBox>
            
      </Div>
            </Div>
          </Div>
        </Div>

                <Div className="w-full h-72 -mt-20 bg-black Container">
          <Div className="w-full h-full padding01 flex space-x-28" animateOnView>
            <p className="text-white text-4xl">02</p>
            <Div className="flex-1 h-full relative overflow-hidden">
              <Div
                className=" top-0 left-0 w-full h-full flex bg-black"
                style={{ zIndex: 2 }}
              >
<ToggleBox
  title={
    <Div className="w-full h-full">
      <h3 className="text-3xl font-medium  mb-6 -mt-3">UI Kits & Design Systems</h3>
      <div className="flex gap-4">
        <button className="px-6 py-2 rounded-full bg-black/80 border border-white/20 hover:bg-black/60 transition-all duration-200">
          Framer/Figma UI Kits
        </button>
        <button className="px-6 py-2 rounded-full bg-black/80  border border-white/20 hover:bg-black/60 transition-all duration-200">
          Design System for Agencies
        </button>
        <button className="px-6 py-2 rounded-full bg-black/80  border border-white/20 hover:bg-black/60 transition-all duration-200">
          Component Libraries
        </button>
        <button className="px-6 py-2 rounded-full bg-black/80 border border-white/20 hover:bg-black/60 transition-all duration-200">
          Custom UI Kits
        </button>
      </div>
    </Div>
  }
>
  <div>
    <p>Custom-built systems that make your design process faster, more consistent, and easier to scale with your product.</p>
  </div>
</ToggleBox>
            
      </Div>
            </Div>
          </Div>
        </Div>

                <Div className="w-full h-72 -mt-20 bg-black Container">
          <Div className="w-full h-full padding01 flex space-x-28" animateOnView>
            <p className="text-white text-4xl">03</p>
            <Div className="flex-1 h-full relative overflow-hidden">
              <Div
                className=" top-0 left-0 w-full h-full flex bg-black"
                style={{ zIndex: 2 }}
              >
<ToggleBox
  title={
    <Div className="w-full h-full ">
      <h3 className="text-3xl font-medium  mb-6 -mt-3">Landing Page Development</h3>
      <div className="flex gap-4">
        <button className="px-6 py-2 rounded-full bg-black/80  border border-white/20 hover:bg-black/60 transition-all duration-200">
          Lead Generation Pages
        </button>
        <button className="px-6 py-2 rounded-full bg-black/80  border border-white/20 hover:bg-black/60 transition-all duration-200">
          Sales Pages
        </button>
        <button className="px-6 py-2 rounded-full bg-black/80  border border-white/20 hover:bg-black/60 transition-all duration-200">
         Product Launch Pages
        </button>
        <button className="px-6 py-2 rounded-full bg-black/80   border border-white/20 hover:bg-black/60 transition-all duration-200">
          Market Campaign Pages
        </button>
      </div>
    </Div>
  }
>
  <div className="text-white">
    <p>Strategic, conversion-focused landing pages designed to capture attention and turn visitors into customers.</p>
  </div>
</ToggleBox>
            
      </Div>
            </Div>
          </Div>
        </Div>

                <Div className="w-full h-72 -mt-20 bg-black Container">
          <Div className="w-full h-full padding01 flex space-x-28" animateOnView>
            <p className="text-white text-4xl">04</p>
            <Div className="flex-1 h-full relative overflow-hidden">
              <Div
                className=" top-0 left-0 w-full h-full flex bg-black"
                style={{ zIndex: 2 }}
              >
<ToggleBox
  title={
    <Div className="w-full h-full ">
      <h3 className="text-3xl font-medium mb-6 -mt-3">Design Templates</h3>
      <div className="flex gap-4">
        <button className="px-6 py-2 rounded-full bg-black/80 border border-white/20 hover:bg-black/60 transition-all duration-200">
          Portfolio Templates
        </button>
        <button className="px-6 py-2 rounded-full bg-black/80 border border-white/20 hover:bg-black/60 transition-all duration-200">
          Agency Templates
        </button>
        <button className="px-6 py-2 rounded-full bg-black/80 border border-white/20 hover:bg-black/60 transition-all duration-200">
          SaaS Templates
        </button>
      </div>
    </Div>
  }
>
  <div className="text-white">
    <p>Fully responsive and easily customizable Framer templates, crafted to help you launch quickly without sacrificing design quality.</p>
  </div>
</ToggleBox>
            
      </Div>
            </Div>
          </Div>
        </Div>

        <Div className="w-full h-h1100 bg-black padding Container">
          <Div className="w-full h-28 mt-10 flex relative items-end" animateOnView>
            <h1 className="text-8xl font-medium tracking-tighter text-gray-400">Recent <a className="text-white">Works</a></h1>
            <p className="text-gray-400 absolute right-0">(  Projects )</p>
          </Div>
          <Div className="w-full h-h700 flex mt-20 gap-5">

            <Div className="w-1/2 h-full relative group" onClick={handleRedirect}>
                          <ExploreProjectHover />
            <video
              src="src/videos/TildetteProject.webm"
              className="w-full h-h70 rounded-xl"
              autoPlay
              loop
              muted
            ></video>
            <Div className="w-full h-12 flex items-center relative">
              <p className="text-gray-300 font-medium">May 15,2025</p>
              <p className="absolute right-0 text-gray-300 font-medium">Tildette Project</p>
            </Div>
            <h2 className="text-white text-4xl tracking-tight mt-10">Evolve</h2>
            <Div className="w-full h-20 flex items-center gap-5">
            <button className="px-6 py-2 rounded-full bg-black/80 border text-white border-white/20 hover:bg-black/60 transition-all duration-200">
          Typescript
        </button>
            <button className="px-6 py-2 rounded-full bg-black/80 border text-white border-white/20 hover:bg-black/60 transition-all duration-200">
          Tailwind / Css
        </button>
                <button className="px-6 py-2 rounded-full bg-black/80 border text-white border-white/20 hover:bg-black/60 transition-all duration-200">
          Animate.Css
        </button>
                <button className="px-6 py-2 rounded-full bg-black/80 border text-white border-white/20 hover:bg-black/60 transition-all duration-200">
          Landing Page
        </button>
            </Div>
            </Div>

            <Div className="w-1/2 h-full relative group" onClick={handleRedirect}>
                          <ExploreProjectHover />
            <div className="w-full h-h380 mt-16 relative group">
              <img src="src/images/signUp.png" className="w-full h-h380 mt-16" />
              <Div className="w-full h-12 flex items-center relative mt-16">
                <p className="text-gray-300 font-medium">May 15,2025</p>
                <p className="absolute right-0 text-gray-300 font-medium">Tildette Project</p>
              </Div>
              <h2 className="text-white text-4xl tracking-tight mt-10">Evolve</h2>
              <Div className="w-full h-20 flex items-center gap-5">
                <button className="px-6 py-2 rounded-full bg-black/80 border text-white border-white/20 hover:bg-black/60 transition-all duration-200">
                  Backend In.
                </button>
                <button className="px-6 py-2 rounded-full bg-black/80 border text-white border-white/20 hover:bg-black/60 transition-all duration-200">
                  Notification
                </button>
                <button className="px-6 py-2 rounded-full bg-black/80 border text-white border-white/20 hover:bg-black/60 transition-all duration-200">
                  OTP integration
                </button>
                <button className="px-6 py-2 rounded-full bg-black/80 border text-white border-white/20 hover:bg-black/60 transition-all duration-200">
                  Register/Login Page
                </button>
              </Div>
              </div>
            </Div>
          </Div>
        </Div>

<Div className="w-full h-72 bg-black Container flex items-center ">
  <Div className="w-full h-14 group" animateOnView>
    <p className="text-3xl font-medium tracking-tighter text-gray-400 group-hover:text-white transition-colors duration-200">
      See all Projects
    </p>
    <hr className="border-gray-400 group-hover:border-white transition-colors duration-200 mt-3" />
  </Div>
</Div>
      <Div className="w-full h-40 bg-black Container flex items-end relative">
        <Div className="w-full h-32 flex items-end" animateOnView>
          <p className="text-gray-400">( Get Started )</p>
          <h1 className="text-8xl text-white font-medium tracking-tighter ml-80">Process
                        <span className="ml-2">
              <span className="inline-block w-4 h-4 rounded-full bg-green-500 animate-pulse"></span>
            </span>
          </h1>
          <p className="text-gray-400 absolute right-0">( Steps 1-4 )</p>
        </Div>
      </Div>

              <Div className="w-full h-h1900 relative z-10 bg-gray-300 flex items-center justify-center">
                                <PlusGridBackground />
        <Div className="w-2/5 h-full z-20 flex items-center absolute ml-24 flex-col" >
        <Div className="w-full h-72 bg-white/5 border border-white/20 rounded-3xl mt-20 backdrop-blur-sm py-10 px-5 flex flex-col space-y-7" animateOnView>
        <Div className="w-full h-12 flex justify-between">
          <p className="text-white text-4xl tracking-tighter">Discovery</p>
        </Div>
        <Div className="w-full h-14">
          <p className="text-gray-400">Understanding your goals, audience, and vision to set a clear direction before design begins.</p>
        </Div>
        <Button
        type="button"
        btnText="Get Started"
        className="h-10 w-32 fontBtn bg-white hover:bg-white/60"
         />
        </Div>

        <Div className="w-full h-72 bg-white/5 border border-white/20 rounded-3xl mt-20 backdrop-blur-sm py-10 px-5 flex flex-col justify-between" animateOnView>
        <Div className="w-full h-12 flex justify-between">
          <p className="text-white text-4xl tracking-tighter">OnBoarding</p>
        </Div>
        <Div className="w-full h-14">
          <p className="text-gray-400">Outlining timelines, deliverables, and communication channels to ensure a smooth, aligned workflow from day one.</p>
        </Div>
        </Div>

        <Div className="w-full h-72 bg-white/5 border border-white/20 rounded-3xl mt-20 backdrop-blur-sm py-10 px-5 flex flex-col justify-between" animateOnView>
        <Div className="w-full h-12 flex justify-between">
          <p className="text-white text-4xl tracking-tighter">Strategy</p>
        </Div>
        <Div className="w-full h-14">
          <p className="text-gray-400">Translating insights into structure—defining layout, content hierarchy, and user flow to guide the design.</p>
        </Div>

        </Div>

        <Div className="w-full h-72 bg-white/5 border border-white/20 rounded-3xl mt-20 backdrop-blur-sm py-10 px-5 flex flex-col justify-between" animateOnView>
        <Div className="w-full h-12 flex justify-between">
          <p className="text-white text-4xl tracking-tighter">Launch</p>
        </Div>
        <Div className="w-full h-14">
          <p className="text-gray-400">Bringing your vision to life—developing, testing, and refining the final product for a successful launch.</p>
        </Div>
        </Div>

        <Div className="w-full h-72 bg-white rounded-3xl mt-20 backdrop-blur-sm py-10 px-5 flex flex-col space-y-7" animateOnView>
        <Div className="w-full h-12 flex justify-between">
          <p className="text-white text-4xl tracking-tighter">Discovery</p>
        </Div>
        <Div className="w-full h-14">
          <p className="text-gray-400">Understanding your goals, audience, and vision to set a clear direction before design begins.</p>
        </Div>
        </Div>


        </Div>
              </Div>
    </Div>
    </>


  );
}


