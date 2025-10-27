import { Div } from "../divComponent/div";
import { services } from "../../data";

export function ServicesBlock() {
  return (
    <Div className="w-full h-h450 bg-black Container relative containerCustom">
      <Div className="flex gap-8 flex-col sm:flex-row">
        {services.map((s, id) => (
          <Div key={id} className="w-full flex flex-col justify-between p-6 bg-white/5 border border-white/10 rounded-2xl">
            <p className="text-gray-400">( Services )</p>
            <h3 className="text-3xl text-white font-medium">{s.title}</h3>
            <ul className="text-gray-400 mt-4 list-disc list-inside">
              {s.bullets.map((b: string) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-6">
              <button className=" h-10 w-40 fontBtn bg-black/60 hover:bg-white/10 transition-colors duration-200 border border-white/10 text-white">{s.cta}</button>
            </div>
          </Div>
        ))}
      </Div>
    </Div>
  );
}