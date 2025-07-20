import { Div } from "../divComponent/div";
import "./testimonials.css"
import "../dashboard/dashboard.css"
import { useState } from "react";
import { testimonials } from "../../data";

export function Testimonials () {
      const [activeId, setActiveId] = useState(testimonials[0].id);
      const activeTestimonial = testimonials.find(t => t.id === activeId)!;



    return (
        <Div className="w-full h-h1000 bg-black Container paddingT containerRog containerCustom">
            <Div className="w-full h-40 flex items-end relative testiDiv">
                <p className="text-gray-400">( What People Say )</p>
                <h1 className="text-8xl font-medium tracking-tighter text-white ml-72">Testimonials
                                            <span className="ml-2">
              <span className="inline-block w-4 h-4 rounded-full bg-gray-500 animate-pulse"></span>
            </span>
                </h1>
                <p className="text-gray-400 absolute right-0 md:hidden lg:hidden sm:hidden datehidden">( 2021-date )</p>
            </Div>

            <Div className="bg-black w-full h-h600 mt-12 space-x-3 flex p-2 testiHoldDiv">
      {/* Left side list */}
<div className="w-1/4 h-full flex flex-col overflow-y-auto p-2 gap-3 bg-black testiHoldDivTop">
  {testimonials.map(t => (
    <div
      key={t.id}
      onClick={() => setActiveId(t.id)}
      className={`relative group rounded-lg overflow-hidden cursor-pointer ${
        activeId === t.id ? "border ring-white/10 backdrop-blur-sm bg-white/10" : "opacity-60 hover:opacity-90"
      }`}
    >
      <img src={t.image} alt={t.name} className="w-full h-56 object-cover" />
      
      {/* Bottom Gradient with Name + Icon */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/40 to-transparent p-2 flex items-center justify-between">
        <p className="text-sm font-medium text-white">{t.name}</p>
        
        {/* Icon beside name */}
        <div
          className={`transform transition-transform duration-500 group-hover:rotate-[360deg] text-white text-xl font-bold`}
        >
          {activeId === t.id ? "×" : "+"}
        </div>
      </div>
    </div>
  ))}
</div>


      {/* Right side content */}
      <div className="w-3/4 h-full p-10 bg-white/20 border border-white/10 rounded-lg text-white flex flex-col justify-between testiHoldDivDown">
        <div>
          <h2 className="text-xl font-bold mb-2">EXPORT</h2>
          <p className="text-3xl md:text-4xl font-semibold italic mt-4 mb-6">
            “{activeTestimonial.quote}”
          </p>
          <p className="text-sm text-white/80 max-w-3xl">{activeTestimonial.description}</p>
        </div>

        <div className="flex justify-between items-center mt-10">
          <div>
            <p className="font-bold">{activeTestimonial.name}</p>
            <p className="text-sm text-white/60">{activeTestimonial.role}</p>
          </div>
          <div className="flex gap-1 text-white text-lg">
            {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>
      </div>
            </Div>
        </Div>
    )
}