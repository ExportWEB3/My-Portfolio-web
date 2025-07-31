import { useEffect, useState } from "react";
import { Button, ButtonComponent } from "../button/botton";
import { Div } from "../divComponent/div";
import './header.css';
import { HeaderComponentProps } from "../../utilities/typedeclaration";
import { useNavigate } from "react-router-dom";


export function HeaderComponent({ onNavigate, onEmailClick, onGetStarted }: HeaderComponentProps) {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  const handleScrollTo = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  const handleEmail = () => {
    window.location.href = "mailto:emmanuel00timi@gmail.com?subject=Project Inquiry&body=Hi Emmanuel, I’d like to work with you...";
  };

  const handleGetStarted = () => {
    // You can replace this with Calendly or similar booking tool
    window.open("https://calendly.com/emmanuel00timi/30min", "_blank");
  };


  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <Div className="w-full bg-black px-6 md:px-24 py-4 flex items-center relative z-50 overflow-hidden">
      <h1 className="export text-white font-extrabold exportRes text-2xl md:text-3xl" style={{ transform: "scaleY(0.7)" }}>
        È×þÖR†
      </h1>

      {/* Desktop Navigation */}
      <Div className="hidden md:flex ml-20 w-48 h-10 items-center justify-between midTopHead">
        <p className="text-gray-300 hover:text-gray-500 cursor-pointer" onClick={() => handleScrollTo("home")}>Home</p>
        <p className="text-gray-300 hover:text-gray-500 cursor-pointer" onClick={() => handleScrollTo("projects")}>Projects</p>
        <p className="text-gray-300 hover:text-gray-500 cursor-pointer" onClick={() => navigate("/about-me")}>About</p>
      </Div>

      {/* Desktop Buttons */}
      <Div className="hidden md:flex items-center gap-x-4 ml-auto resHoverAction">
<Div
  onClick={onEmailClick}
  className={`flex items-center justify-center rounded-lg transition-all duration-300 cursor-pointer bg-black/60 border border-white/10 overflow-hidden ${
    hovered ? "w-32 px-2" : "w-12"
  } h-12`}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  {!hovered ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4h16v16H4V4zm0 0l8 8 8-8"
      />
    </svg>
  ) : (
    <>
      <span className="text-gray-300 mr-2 whitespace-nowrap">Get in touch</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4h16v16H4V4zm0 0l8 8 8-8"
        />
      </svg>
    </>
  )}
</Div>

        <Button onClick={onGetStarted} type="button" btnText="Get Started" className="h-10 px-6 text-base bg-slate-50 text-black" />
      </Div>

      {/* Mobile Menu Toggle */}
      <Div
        className="ml-auto flex items-center z-[100] cursor-pointer md:hidden resDropdown"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </Div>

      {/* Fullscreen Mobile Dropdown */}
     {menuOpen && (
  <Div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 backdrop-blur-md flex flex-col items-center justify-center space-y-6 z-50 animate-fade-down">
    <p className="text-white text-xl hover:text-gray-400 cursor-pointer" onClick={() => handleScrollTo("home")}>Home</p>
    <p className="text-white text-xl hover:text-gray-400 cursor-pointer" onClick={() => handleScrollTo("projects")}>Projects</p>
    <p className="text-white text-xl hover:text-gray-400 cursor-pointer" onClick={() => navigate("/about-me")}>About</p>

    <Div className="flex items-center justify-center w-40 h-12 bg-white/10 rounded-md border border-white/10 px-4 cursor-pointer" onClick={handleEmail}>
      <span className="text-gray-300 mr-2 whitespace-nowrap">Get in touch</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4zm0 0l8 8 8-8" />
      </svg>
    </Div>

    <Button
      type="button"
      btnText="Get Started"
      className="h-10 px-6 text-base bg-slate-50 text-black headerResBtn"
      onClick={handleGetStarted}
    />
  </Div>
)}

    </Div>
  );
}
