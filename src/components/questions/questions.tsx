import { Div } from "../divComponent/div";
import { ToggleBoxQuestion } from "../toggle/toggleQ";
import { faqs } from "../../data";
import "./questions.css";

export function Questions() {
  return (
    <Div className="w-full h-h1200 bg-black Container containerCustomX">
      <Div className="w-full h-40 flex items-end justify-between questionDiv" animateOnView>
        <p className="text-8xl questionDivTxt tracking-tighter font-semibold text-white">
          Questions
          <span className="ml-2">
            <span className="inline-block w-4 h-4 rounded-full bg-gray-500 animate-pulse questionDivTxtSpan"></span>
          </span>
        </p>
        <p className="text-base text-gray-400">+answers</p>
      </Div>

      <Div className="w-full h-h800 overflow-y-auto scrollbar-thumb-only">
        {faqs.map((q, idx) => {
          const num = String(idx + 1).padStart(2, "0");
          const itemClass = idx === 0 ? "w-full h-72 bg-black" : "w-full h-72 -mt-36 bg-black";

          return (
            <Div key={q.title} className={itemClass}>
              <Div className="w-full h-full padding01 flex space-x-28 questionsAnsDiv" animateOnView>
                <p className="text-white text-4xl hidden sm:flex">{num}</p>
                <Div className="flex-1 h-full relative overflow-hidden questionsAnsDivInner">
                  <Div className="top-0 left-0 w-full h-full flex bg-black" style={{ zIndex: 2 }}>
                    <ToggleBoxQuestion
                      title={
                        <Div className="w-full h-full">
                          <h3 className="text-3xl mb-6 -mt-3 questionsAnsDivInnerTxt">{q.title}</h3>
                        </Div>
                      }
                    >
                      <div className="text-white questionsAnsDivInnerContent questionsAnsDivInnerContentXr questionsAnsDivInnerContentX">
                        <p className="questionsAnsDivInnerContentTxt">{q.answer}</p>
                      </div>
                    </ToggleBoxQuestion>
                  </Div>
                </Div>
              </Div>
            </Div>
          );
        })}
      </Div>
    </Div>
  );
}