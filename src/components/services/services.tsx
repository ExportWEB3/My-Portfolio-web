import { servicesDropdown } from "../../data"
import { Div } from "../divComponent/div"
import { ToggleBox } from "../toggle/toggle"


export function Services() { 
    return (
             <div className="w-full sm:h-[900px] md:h-[1000px] lg:h-[900px] md:px-20 px-5 py-10 !space-y-10 overflow-hidden">
                    {servicesDropdown.map((s, id) => (
          <Div className="w-full min-h-fit flex md:space-x-10 lg:space-x-28" animateOnView>
            <p className="text-white text-4xl hidden sm:flex">{s.No}</p>
<ToggleBox
  title={
    <div className="w-full h-full">
        <div className="w-full h-full space-y-2 md:space-y-0" key={id}>
          <h3 className="text-2xl lg:text-3xl">{s.title}</h3>
          <div className="flex sm:grid sm:grid-cols-2 md:flex-row flex-col">
            <span className="px-4 py-2 md:px-10 border text-center flex items-center justify-center border-gray-300"> {s.span.first} </span>
            <span className="px-4 py-2 md:px-10 border text-center flex items-center justify-center border-gray-300"> {s.span.second} </span>
            <span className="px-4 py-2 md:px-10 border text-center flex items-center justify-center border-gray-300"> {s.span.third} </span>
            <span className="px-4 py-2 md:px-10 border text-center flex items-center justify-center border-gray-300"> {s.span.fourth} </span>
          </div>
     </div>
    </div>
  }
>
  <div className="text-sm">
    <p>{s.toggelText}</p>
  </div>
</ToggleBox>
          </Div>
                ))}
        </div>
    )
}
