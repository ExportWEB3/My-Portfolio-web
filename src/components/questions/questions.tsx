import { Div } from "../divComponent/div";
import { ToggleBox } from "../toggle/toggle";
import "./questions.css";

export function Questions() {
  return (
    <Div className="w-full h-h1200 bg-black Container paddingQ">
      <Div className="w-full h-40 flex items-end justify-between" animateOnView>
        <p className="text-8xl tracking-tighter font-semibold text-white">
          Questions
          <span className="ml-2">
            <span className="inline-block w-4 h-4 rounded-full bg-gray-500 animate-pulse"></span>
          </span>
        </p>
        <p className="text-base text-gray-400">+answers</p>
      </Div>

      <Div className="w-full h-h800 overflow-y-auto scrollbar-thumb-only">
        <Div className="w-full h-72 bg-black">
          <Div className="w-full h-full padding01 flex space-x-28" animateOnView>
            <p className="text-white text-4xl">01</p>
            <Div className="flex-1 h-full relative overflow-hidden">
              <Div className="top-0 left-0 w-full h-full flex bg-black" style={{ zIndex: 2 }}>
                <ToggleBox
                  title={
                    <Div className="w-full h-full ">
                      <h3 className="text-3xl mb-6 -mt-3">
                        How customizable is the solution you’ll build for me?
                      </h3>
                    </Div>
                  }
                >
                  <div className="text-white">
                    <p>
                      Everything I build is fully customizable. Whether you need a unique design, custom API
                      integration, or tailored backend logic, I’ll structure it to match your exact business goals.
                    </p>
                  </div>
                </ToggleBox>
              </Div>
            </Div>
          </Div>
        </Div>

        <Div className="w-full h-72 -mt-36 bg-black">
          <Div className="w-full h-full padding01 flex space-x-28" animateOnView>
            <p className="text-white text-4xl">02</p>
            <Div className="flex-1 h-full relative overflow-hidden">
              <Div className="top-0 left-0 w-full h-full flex bg-black" style={{ zIndex: 2 }}>
                <ToggleBox
                  title={
                    <Div className="w-full h-full">
                      <h3 className="text-3xl mb-6 -mt-3">
                        Will the website or app work on all devices?
                      </h3>
                    </Div>
                  }
                >
                  <div className="text-white">
                    <p>
                      Absolutely. I always build with responsive design in mind, so your site or app will look and
                      function perfectly across mobile, tablet, and desktop.
                    </p>
                  </div>
                </ToggleBox>
              </Div>
            </Div>
          </Div>
        </Div>

        <Div className="w-full h-72 -mt-36 bg-black">
          <Div className="w-full h-full padding01 flex space-x-28" animateOnView>
            <p className="text-white text-4xl">03</p>
            <Div className="flex-1 h-full relative overflow-hidden">
              <Div className="top-0 left-0 w-full h-full flex bg-black" style={{ zIndex: 2 }}>
                <ToggleBox
                  title={
                    <Div className="w-full h-full ">
                      <h3 className="text-3xl mb-6 -mt-3">How soon can you launch my project?</h3>
                    </Div>
                  }
                >
                  <div className="text-white">
                    <p>
                      Depending on the complexity, I can get a basic MVP live in a few days. For fully customized
                      platforms, I’ll share a clear timeline upfront — and I stick to it.
                    </p>
                  </div>
                </ToggleBox>
              </Div>
            </Div>
          </Div>
        </Div>

        <Div className="w-full h-72 -mt-36 bg-black">
          <Div className="w-full h-full padding01 flex space-x-28" animateOnView>
            <p className="text-white text-4xl">04</p>
            <Div className="flex-1 h-full relative overflow-hidden">
              <Div className="top-0 left-0 w-full h-full flex bg-black" style={{ zIndex: 2 }}>
                <ToggleBox
                  title={
                    <Div className="w-full h-full ">
                      <h3 className="text-3xl mb-6 -mt-3">
                        Can you support multi-language content if I need it?
                      </h3>
                    </Div>
                  }
                >
                  <div className="text-white">
                    <p>
                      Absolutely. I can implement multi-language support using best practices, ensuring your content is
                      accessible to a global audience.
                    </p>
                  </div>
                </ToggleBox>
              </Div>
            </Div>
          </Div>
        </Div>

        <Div className="w-full h-72 -mt-36 bg-black">
          <Div className="w-full h-full padding01 flex space-x-28" animateOnView>
            <p className="text-white text-4xl">05</p>
            <Div className="flex-1 h-full relative overflow-hidden">
              <Div className="top-0 left-0 w-full h-full flex bg-black" style={{ zIndex: 2 }}>
                <ToggleBox
                  title={
                    <Div className="w-full h-full ">
                      <h3 className="text-3xl mb-6 -mt-3">
                        Can you connect it to my existing tools or backend?
                      </h3>
                    </Div>
                  }
                >
                  <div className="text-white">
                    <p>
                      Definitely. I can integrate your system with any third-party service, internal backend, or custom
                      API — whether it's REST, GraphQL, or something more specialized.
                    </p>
                  </div>
                </ToggleBox>
              </Div>
            </Div>
          </Div>
        </Div>

        <Div className="w-full h-72 -mt-36 bg-black">
          <Div className="w-full h-full padding01 flex space-x-28" animateOnView>
            <p className="text-white text-4xl">06</p>
            <Div className="flex-1 h-full relative overflow-hidden">
              <Div className="top-0 left-0 w-full h-full flex bg-black" style={{ zIndex: 2 }}>
                <ToggleBox
                  title={
                    <Div className="w-full h-full ">
                      <h3 className="text-3xl mb-6 -mt-3">
                        What about security — is that something you handle?
                      </h3>
                    </Div>
                  }
                >
                  <div className="text-white">
                    <p>
                      Absolutely. I follow industry best practices to secure your application — from input validation
                      and HTTPS enforcement to auth layers like JWT or OAuth.
                    </p>
                  </div>
                </ToggleBox>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
