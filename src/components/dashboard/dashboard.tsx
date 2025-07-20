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
import { Testimonials } from "../testimonials/testimonials";
import { Questions } from "../questions/questions";
import { Footer } from "../footer/footer";
import { Services } from "../services/services";
import userImg from "../../images/user.webp"
import ipsum from "../../images/ipsumlog.png"
import loo from "../../images/loo.avif"
import framer from "../../images/framer.png"
import logoo from "../../images/logoo.png"
import tildetteVid from "../../videos/TildetteProject.webm"
import signUp from "../../images/signUp.png"



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
        <Div id="home" className=" bg-black h-screen w-full responsive-main" >
      <Div className="w-full Container containerRes heightF flex items-center" >
        <Div className="w-w100 h-h270 bg-white cardRes rounded-xl p-0.5" animateOnView>
          <Div className="w-full bg-black rounded-xl px-5 py-2 ">
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

          <Div className="w-full h-16 mt-5 flex items-center ">
            <img src={userImg} className="w-24" />
            <Div className="flex flex-col w-72 h-full">
              <p className="font-semibold text-xl text-white">Emmanuel O.</p>
          <p className="text-gray-400 flex items-center">
            <span className="mr-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </span>
            Available for work
          </p>            </Div>
          </Div>

          <Div className="w-full h-16 mt-5 flex gap-3 items-center p-2 fontBtnDivXoh">
            <Button
            type="button"
            btnText="Get In Touch"
            className="h-10 w-40 fontBtnDivXohBtn bg-slate-50 text-black"
             />

            <Button
            type="button"
            btnText="About Me"
            className="h-10 w-40 fontBtnDivXohBtn  btnGrad text-white "
             />
          </Div>
          </Div>
          
          <Div className="w-full h-10 flex justify-center items-center">
            <p className="font-semibold">Available for work</p>
          </Div>
        </Div>

        <Div className="w-w130 h-56 ml-32 flex justify-center flex-col relative overflow-hidden moveRes" animateOnView>
          <div style={{ height: "100px", position: "relative" }}>
            <div style={{ position: "relative", height: "72px" }}>
              <h1
                className={`text-6xl moveResTxt font-medium font12 text-gray-300 tracking-tighter absolute left-0 top-0 transition-all duration-500 ${
                  showAlt ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
                }`}
                style={{ width: "100%", willChange: "transform, opacity" }}
              >
                Build a website that
              </h1>
              <h1
                className={`text-6xl moveResTxt font-medium font12 text-gray-300 tracking-tighter absolute left-0 top-0 transition-all duration-500 ${
                  showAlt ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
                style={{ width: "100%", willChange: "transform, opacity" }}
              >
                <span className="text-gray-300">Let's help you</span>
              </h1>
              {/* Fixed green underline */}
              <span className="block w-32 h-1 mt-2 bg-green-500 rounded absolute left-0 bottom-0"></span>
            </div>
            <h1 className="text-6xl moveResTxt font-medium font12 text-gray-300 tracking-tighter mt-2">
              <a className="text-white">stands out</a>---and sells.
            </h1>
          </div>
        </Div>
      </Div>
      <Div className="w-full h-64 flex bg-black flex-col Container containerResX  iconsTxtRes" > 
        <Div className="w-full h-2/5 flex items-center mt-10 containerResX" animateOnView>
        <Div className="w-52 h-12 flex space-x-8 iconTxtIconRes">
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
        <Div className="w-w38 ml-80 portRes h-full flex items-center">
          <p className="text-gray-400 portResTxt">
            Welcome to my portfolio! Here you'll find a showcase of my latest projects, creative solutions, and passion for web development. I build modern, impactful websites that help brands and individuals stand out. Explore my work and let’s create something amazing together.
          </p>
        </Div>    
        </Div>
        <hr className="border-gray-800 my-4 mt-14" />
        <Div className="w-full h-10 flex items-center res001">
          <p className="text-gray-400">001</p>
          <Div className="exMargin flex-1 h-full flex justify-between resHomeEx">
            <p className="text-gray-400">Home</p>
            <p className=" text-gray-400">Export</p>
          </Div>
        </Div>
      </Div>

      <Div id="about" className="w-full h-h350 Container bg-black padding space-y-10 containerCustom aboutRes" >
        <p className="text-gray-400">(About)</p>
        <Div className="w-3/5 h-32 relative flex items-center aboutResTxtDiv" animateOnView>
          <p className="text-6xl aboutResTxt text-gray-400 tracking-tighter relative inline-block">
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

      <Div className="w-full h-96 bg-black Container flex items-end containerCustom " >
        <Div className="w-full h-1/2 flex items-center availaRes" animateOnView>
        <Div className="w-1/2 h-1/2 flex items-center">
        <img src={userImg} className="w-24 -ml-5" />
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
        <Div className="w-1/2 h-full space-y-5 py-5 descDiv">
        <p className="text-gray-400">002</p>
        <p className="text-gray-400">I'm a web designer specializing in creating sleek, high-converting websites that turn visitors into clients. 
          I help freelancers and agencies elevate their online presence with clean, strategic designs that drive real results.</p>
        </Div>
        </Div>
      </Div>

      <Div className="w-full h-40 bg-black Container containerCustom" >
          <p className="text-gray-400 tracking-tight">
            // Worked with companies like
          </p>
          <Div className="w-full h-full flex items-center justify-center space-x-8 logoDiv" animateOnView>
            {/* Example logos, replace src with your actual logo paths */}
            <Div className="logoDivImg logoDivImg1 w-64 h-28 flex items-center justify-center rounded-lg bg-black/60 border border-white/10 shadow-[0_0_24px_0_rgba(16,255,16,0.15)]">
              <img src={ipsum} alt="Logo 1" className="h-16 object-contain" />
            </Div>
            <Div className="logoDivImg logoDivImg2 w-64 h-28 flex items-center justify-center rounded-lg bg-black/60 border border-white/10 shadow-[0_0_24px_0_rgba(16,255,16,0.15)]">
              <img src={loo} alt="Logo 2" className="h-16 object-contain" />
            </Div>
            <Div className="logoDivImg logoDivImg3 w-64 h-28 flex items-center justify-center rounded-lg bg-black/60 border border-white/10 shadow-[0_0_24px_0_rgba(16,255,16,0.15)]">
              <img src={framer} alt="Logo 3" className="h-10 object-contain" />
            </Div>
            <Div className="logoDivImg logoDivImg4 w-64 h-28 flex items-center justify-center rounded-lg bg-black/60 border border-white/10 shadow-[0_0_24px_0_rgba(16,255,16,0.15)]">
              <img src={logoo} alt="Logo 4" className="h-8 object-contain" />
            </Div>
            <Div className="logoDivImg logoDivImg5 w-64 h-28 flex items-center justify-center rounded-lg bg-black/60 border border-white/10 shadow-[0_0_24px_0_rgba(16,255,16,0.15)]">
              <img src={ipsum} alt="Logo 5" className="h-12 object-contain" />
            </Div>
            <Div className="logoDivImg logoDivImg6 w-64 h-28 flex items-center justify-center rounded-lg bg-black/60 border border-white/10 shadow-[0_0_24px_0_rgba(16,255,16,0.15)]">
              <img src={ipsum} alt="Logo 6" className="h-12 object-contain" />
            </Div>
          </Div>
        </Div>

        <Div className="w-full h-h450 bg-black Container flex relative containerCustom">
          <Div className="flex flex-col w-1/2 h-full justify-end space-y-10 servDiv" animateOnView>
            <p className="text-gray-400">( Services )</p>
          <Div className="w-full h-48 flexitems-end driveDiv">
          <p className="text-gray-400 textWds tracking-tight driveDivTxt">Customized Web Design Solutions to Elevate Your Brand and <a className="text-white"> Drive Conversions.</a></p>
          </Div>
          </Div>
          <Div className="w-1/2 h-20 flex justify-end items-center absolute bottom-0 right-24 driveDivBtnDiv">
          <Button
          type="button"
          btnText="Get In Touch"
          className=" h-10 w-40 fontBtn bg-black/60 hover:bg-white/10 transition-colors duration-200 border border-white/10 text-white"
           />
          </Div>
        </Div>

        <Services />

        

        <Div id="projects" className="w-full h-h1100 bg-black padding Container containerCustomX containerRog">
          <Div className="w-full h-28 mt-10 flex relative items-end recentDiv" animateOnView>
            <h1 className="text-8xl font-medium tracking-tighter text-gray-400 recentDivTxt">Recent <a className="text-white">Works.</a></h1>
            <p className="text-gray-400 absolute right-0">(  Projects )</p>
          </Div>
          <Div className="w-full h-h700 flex mt-20 gap-5 projectDivHover">

            <Div className="w-1/2 h-full relative group projectDivHover1" onClick={handleRedirect}>
                          <ExploreProjectHover />
            <video
              src={tildetteVid}
              className="w-full h-h70 rounded-xl"
              autoPlay
              loop
              muted
            ></video>
            <Div className="w-full h-12 flex items-center relative">
              <p className="text-gray-300 font-medium">May 15,2025</p>
              <p className="absolute right-0 text-gray-300 font-medium">Tildette Project</p>
            </Div>
            <h2 className="text-white text-4xl tracking-tight mt-10">Landing Page</h2>
            <Div className="w-full h-20 flex items-center gap-5">
            <button className="px-6 py-2 rounded-full HoverBtnP bg-black/80 border text-white border-white/20 hover:bg-black/60 transition-all duration-200">
          Typescript
        </button>
            <button className="px-6 py-2 rounded-full HoverBtnP bg-black/80 border text-white border-white/20 hover:bg-black/60 transition-all duration-200">
          Tailwind / Css
        </button>
                <button className="px-6 hiddenHoverBtnP HoverBtnP py-2 rounded-full bg-black/80 border text-white border-white/20 hover:bg-black/60 transition-all duration-200">
          Animate.Css
        </button>
                <button className="px-6 py-2 hiddenHoverBtnP HoverBtnP rounded-full bg-black/80 border text-white border-white/20 hover:bg-black/60 transition-all duration-200">
          Landing Page
        </button>
            </Div>
            </Div>

            <Div className="w-1/2 h-full relative group projectDivHover2" onClick={handleRedirect}>
                          <ExploreProjectHover />
            <div className="w-full h-h380 mt-16 relative group">
              <img src={signUp} className="w-full h-h380 mt-16" />
              <Div className="w-full h-12 flex items-center relative mt-16">
                <p className="text-gray-300 font-medium">May 15,2025</p>
                <p className="absolute right-0 text-gray-300 font-medium">Tildette Project</p>
              </Div>
              <h2 className="text-white text-4xl tracking-tight mt-10">Login and Sign-Up Auth </h2>
              <Div className="w-full h-20 flex items-center gap-5">
                <button className="px-6 py-2 HoverBtnP rounded-full bg-black/80 border text-white border-white/20 hover:bg-black/60 transition-all duration-200">
                  Backend In.
                </button>
                <button className="px-6 py-2 HoverBtnP rounded-full bg-black/80 border text-white border-white/20 hover:bg-black/60 transition-all duration-200">
                  Notification
                </button>
                <button className="px-6 py-2 HoverBtnP hiddenHoverBtnP rounded-full bg-black/80 border text-white border-white/20 hover:bg-black/60 transition-all duration-200">
                  OTP integration
                </button>
                <button className="px-6 py-2 HoverBtnP hiddenHoverBtnP rounded-full bg-black/80 border text-white border-white/20 hover:bg-black/60 transition-all duration-200">
                  Register/Login Page
                </button>
              </Div>
              </div>
            </Div>
          </Div>
        </Div>

<Div className="w-full h-72 bg-black Container flex items-center containerCustomX containerRog">
  <a className="w-full"   target="_blank"
  rel="noopener noreferrer" href="https://github.com/ExportWEB3"
>
    <Div className="w-full h-14 group seeAllPDiv" animateOnView>
    <p className="text-3xl font-medium seeAllPDivTxt tracking-tighter text-gray-400 group-hover:text-white transition-colors duration-200">
      See all Projects
    </p>
    <hr className="border-gray-400 group-hover:border-white transition-colors duration-200 mt-3" />
  </Div>
</a>

</Div>

      <Div className="w-full h-40 bg-black Container flex items-end relative containerCustom containerRog">
        <Div className="w-full h-32 flex items-end getDiv" animateOnView>
          <p className="text-gray-400">( Get Started )</p>
          <h1 className="text-8xl text-white font-medium tracking-tighter ml-80 getDivTxt">Process
                        <span className="ml-2">
              <span className="inline-block w-4 h-4 rounded-full bg-green-500 animate-pulse"></span>
            </span>
          </h1>
          <p className="text-gray-400 absolute right-0 getDivTxtHide">( Steps 1-4 )</p>
        </Div>
      </Div>

              <Div className="w-full h-h1900 relative z-10 bg-black flex items-center justify-center containerCustom discoMainDiv">
                                <PlusGridBackground />
        <Div className="w-2/5 h-full z-20 flex items-center absolute ml-24 flex-col discoDiv" >
        <Div className="w-full h-72 bg-white/5 border border-white/20 rounded-3xl mt-20 backdrop-blur-sm py-10 px-5 flex flex-col space-y-7 blurDiscoDiv" animateOnView>
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

        <Div className="w-full h-72 bg-white/5 border border-white/20 rounded-3xl mt-20 backdrop-blur-sm py-10 px-5 flex flex-col justify-between blurDiscoDiv" animateOnView>
        <Div className="w-full h-12 flex justify-between">
          <p className="text-white text-4xl tracking-tighter">OnBoarding</p>
        </Div>
        <Div className="w-full h-14">
          <p className="text-gray-400">Outlining timelines, deliverables, and communication channels to ensure a smooth, aligned workflow from day one.</p>
        </Div>
        </Div>

        <Div className="w-full h-72 bg-white/5 border border-white/20 rounded-3xl mt-20 backdrop-blur-sm py-10 px-5 flex flex-col justify-between blurDiscoDiv" animateOnView>
        <Div className="w-full h-12 flex justify-between">
          <p className="text-white text-4xl tracking-tighter">Strategy</p>
        </Div>
        <Div className="w-full h-14">
          <p className="text-gray-400">Translating insights into structure—defining layout, content hierarchy, and user flow to guide the design.</p>
        </Div>

        </Div>

        <Div className="w-full h-72 bg-white/5 border border-white/20 rounded-3xl mt-20 backdrop-blur-sm py-10 px-5 flex flex-col justify-between blurDiscoDiv" animateOnView>
        <Div className="w-full h-12 flex justify-between">
          <p className="text-white text-4xl tracking-tighter">Launch</p>
        </Div>
        <Div className="w-full h-14">
          <p className="text-gray-400">Bringing your vision to life—developing, testing, and refining the final product for a successful launch.</p>
        </Div>
        </Div>

        <Div className="w-full h-80 bg-white rounded-3xl mt-20 backdrop-blur-sm py-7 px-5 flex flex-col gap-3 hover:bg-white/80" animateOnView>
        <Div className="w-full h-12 flex">
          <p className="text-gray-700 text-base tracking-tight">Book your free audit call today</p>
        </Div>
        <Div className="w-80 h-28">
          <p className="text-black text-5xl tracking-tight font-medium">Grab the Opportunity</p>
        </Div>
        <Div className="w-full h-14 mt-10 flex relative">
          <Div className="w-1/2 h-full">
          <p className="font-medium">Get Started today</p>
          <p className="text-gray-700">FullStack Development</p>
          </Div>
          <p className="text-gray-700 absolute right-0 bottom-0 text-base">( Get in touch )</p>
        </Div>
        </Div>
        </Div>
      </Div>

                 <Testimonials />

                 <Questions />

                 <Footer />

    </Div>
    </>


  );
}


