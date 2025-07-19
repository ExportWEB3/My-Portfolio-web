import { Div } from "../divComponent/div";
import "./testimonials.css"

export function Testimonials () {
    return (
        <Div className="w-full h-h1000 bg-black Container paddingT">
            <Div className="w-full h-40 flex items-end relative">
                <p className="text-gray-400">( What People Say )</p>
                <h1 className="text-8xl font-medium tracking-tighter text-white ml-72">Testimonials
                                            <span className="ml-2">
              <span className="inline-block w-4 h-4 rounded-full bg-gray-500 animate-pulse"></span>
            </span>
                </h1>
                <p className="text-gray-400 absolute right-0">( 2021-date )</p>
            </Div>

            <Div className="bg-black w-full h-h600 mt-12 space-x-3 flex p-2 ">
                <Div className="bg-white w-1/4 h-full flex flex-col overflow-y-auto"></Div>
                <Div className="bg-white w-3/4 h-full"></Div>
            </Div>
        </Div>
    )
}