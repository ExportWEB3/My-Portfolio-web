// ...existing code...
import { useState } from "react";
import { Div } from "../divComponent/div";
import { ExploreProjectHover } from "../projectHover/hover";
import { projects } from "../../data";
import proj1Img from "../../images/proj1.png";
import signUp from "../../images/signUp.png";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ProjectsSection({ onProjectClick }: { onProjectClick?: (project: any) => void }) {
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);
  const navigate = useNavigate()

  const handleGo = () => {
    window.open("https://github.com/ExportWEB3", "_blank", "noopener,noreferrer");
  }

  const imageMap: Record<string, string> = {
    "/src/images/proj1.png": proj1Img,
    "/src/images/signUp.png": signUp,
  };

  const toggleExpand = (id: number) => {
    setExpandedProjectId(prev => (prev === id ? null : id));
  };

  return (
    <Div id="projects" className="w-full min-[h-h1800] px-2 md:px-[20px] lg:px-20">
      <Div className="w-full h-28 flex relative items-end " animateOnView>
        <h1 className="text-8xl font-medium tracking-tighter text-gray-400 recentDivTxt">
          Recent <a className="text-white">Works.</a>
        </h1>
        <p className="text-gray-400 absolute right-0">(  Projects )</p>
      </Div>

      <Div className="w-full h-full md:min-h-h700 flex sm:flex-row flex-col mt-20 gap-5">
        {projects.map((p) => {
          const isExpanded = expandedProjectId === p.id;
          const rolesToShow = p.roles ? (isExpanded ? p.roles : p.roles.slice(0, 3)) : [];

          return (
            <div
              key={p.id}
              className="w-full md:w-1/2 h-[40%] md:h-full relative pb-10 group space-y-3 border-2 !border-white/20 px-2 rounded-xl"
              onClick={() => onProjectClick?.(p)}
              role="button"
            >
              <ExploreProjectHover />
              <img src={imageMap[p.image] ?? p.image} className="w-full h-h350 lg:h-h400 mt-16 projImgRes rounded-md" />
              <Div className="w-full h-12 flex items-center relative mt-16">
                <h6 className="absolute right-0 text-gray-300 font-light">{p.title} (click to view project)</h6>
              </Div>

              <h2 className="text-white text-4xl tracking-tight mt-10">{p.title}</h2>

              <div className="w-full h-fit flex flex-col">
                <ul className="list-none m-0 p-0 space-y-2">
                  {rolesToShow.map((role: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 font-light">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>

                {p.roles && p.roles.length > 3 && (
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); toggleExpand(p.id); }}
                    className="mt-2 text-sm text-green-400 hover:underline z-10 items-left"
                    aria-expanded={isExpanded}
                    aria-controls={`roles-${p.id}`}
                  >
                    {isExpanded ? "See less" : `See more (${p.roles.length - 3})`}
                  </button>
                )}
              </div>

              <Div className="w-full h-fit grid grid-cols-2 lg:flex items-center gap-5">
                {p.tags.slice(0, 4).map((tag) => (
                  <button key={tag} className=" px-1 sm:px-2 md:px-6 py-2 overflow-hidden rounded-full bg-black/80 border text-white border-white/20 hover:bg-black/60 transition-all duration-200">
                    {tag}
                  </button>
                ))}
              </Div>
            </div>
          );
        })}
      </Div>
      <div className="w-full h-10 flex justify-end items-center">
        <p onClick={handleGo} className="text-blue-500 cursor-pointer hover:underline">View all projects</p>
      </div>
    </Div>
  );
}
