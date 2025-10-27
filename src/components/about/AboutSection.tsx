import { Div } from "../divComponent/div";
import userImg from "../../images/user.webp";

export function AboutSection(): JSX.Element {
  return (
    <>
      <Div id="about" className="w-full h-h350 Container relative bg-black padding space-y-10 containerCustom aboutRes" >
        <p className="text-gray-400">(About)</p>
        <Div className="w-full lg:w-3/5 h-60 lg:h-32 relative flex items-center" animateOnView>
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
            </span> Websites That Drive Real Results.
          </p>
        </Div>
      </Div>

      <Div className="w-full h-96 bg-black Container flex items-end containerCustom " >
        <Div className="w-full h-1/2 flex items-center availaRes" animateOnView>
          <Div className="w-4/6 h-1/2 flex items-center">
            <img src={userImg} className="w-24 -ml-5" />
            <Div className="w-72 h-12 flex flex-col">
              <p className="text-white font-medium">Emmanuel O.</p>
              <p className="text-gray-400 flex items-center">
                <span className="relative mr-2 w-3 h-3 flex items-center justify-center">
                  <span className="absolute w-full h-full rounded-full bg-green-400 opacity-75 animate-ping-custom"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 z-10"></span>
                </span>
                Available for work
              </p>
            </Div>
          </Div>
          <Div className="w-1/2 h-full space-y-5 py-5 descDiv">
            <p className="text-gray-400">002</p>
            <p className="text-gray-400">I'm a web Developer specializing in creating sleek, high-converting websites that turn visitors into clients. 
              I help freelancers and agencies elevate their online presence with clean, strategic Websites that drive real results.</p>
          </Div>
        </Div>
      </Div>
    </>
  );
}

export default AboutSection;
