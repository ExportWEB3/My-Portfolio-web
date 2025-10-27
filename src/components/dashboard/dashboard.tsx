import { useState, useEffect } from "react";
import { Div } from "../divComponent/div";
import './dashboard.css'
import { HeaderComponent } from "../header/header";
import { Button } from "../button/botton";
import { PlusGridBackground } from "../gridBackground/gridBackground";
import { Testimonials } from "../testimonials/testimonials";
import { Questions } from "../questions/questions";
import { Footer } from "../footer/footer";
import { Services } from "../services/services";
import {ProjectsSection} from "../projects/ProjectsSection";
import {ServicesBlock} from "../services/ServicesBlock";
import AboutSection from "../about/AboutSection";
import {DiscoveryCards} from "../discoSection/DiscoveryCards";
import userImg from "../../images/user.webp";
import { useNavigate } from "react-router-dom";



export function DashboardComponent() {
  // Text slider state
  const [showAlt, setShowAlt] = useState(false);
  const navigate =  useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlt(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleRedirect = (project: any) => {
    console.log("handleRedirect received:", project);
    const title = typeof project === "string"
      ? project
      : project?.title ?? project?.name ?? "";

    const slug = title.toString().trim().toLowerCase();

    if (slug === "tildette" || slug.includes("tildette")) {
      window.open("https://exportweb3.github.io/Ad-Projects/", "_blank", "noopener,noreferrer");
    } else {
      window.open("https://formula-ai-4ylf.vercel.app/", "_blank", "noopener,noreferrer");
    }
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
        <Div className="w-full md:w-full lg:w-[400px] md:h-h270 bg-white  rounded-xl p-0.5" animateOnView>
          <Div className="w-full bg-black rounded-xl px-5 py-2 ">
          <Div className="w-full h-10 flex items-center justify-between ">
            <p className="font-xs font-semibold text-gray-300">Web Developer</p>
          </Div>

          <Div className="w-full h-16 mt-5 flex items-center ">
            <img src={userImg} className="w-24" />
            <Div className="flex flex-col w-72 h-full">
              <p className="font-semibold text-xl text-white">Emmanuel O.</p>
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

          <Div className="w-full h-16 mt-5 flex gap-3 items-center !text-xs">
            <Button
            type="button"
            btnText="Get In Touch"
            className="h-10 !w-28 sm:!w-40 fontBtnDivXohBtn bg-slate-50 text-black hover:text-white hover:bg-black hover:border hover:border-white transition-colors duration-200"
            onClick={handleEmail}
             />

            <Button
            type="button"
            btnText="About Me"
            className="h-10 !w-28 sm:!w-40 fontBtnDivXohBtn sm:border-white/90 text-white transition-all duration-200 sm:shadow-[inset_0_0_24px_0_rgba(255,255,255,0.15)] sm:hover:shadow-[inset_0_0_24px_0_rgba(100,100,100,0.15)]"
            onClick={() => navigate("/about-me")}
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
              <span className="block w-full h-1 mt-2 bg-green-500 rounded absolute left-0 bottom-0 bottomResLine"></span>
            </div>
            <h1 className="text-6xl moveResTxt moveResTxtX font-medium font12 text-gray-300 tracking-tighter mt-2">
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
       </Div>

        <AboutSection />


        <ServicesBlock />
        <Services />

        

        <ProjectsSection onProjectClick={handleRedirect} />

              <Div className="w-full md:h-[2000px] relative flex items-center justify-center lg:px-20">
                                <PlusGridBackground />
                                <DiscoveryCards />
                        </Div>

                 <Testimonials />

                 <Questions />

                 <Footer onNavigate={handleScrollTo} onEmailClick={handleEmail} onGetStarted={handleGetStarted} />

    </Div>
    </>


  );
}


