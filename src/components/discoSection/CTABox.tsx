import { Div } from '../divComponent/div';
import { Button } from '../button/botton';

export function CTABox({ onGetStarted }: { onGetStarted?: () => void }) {
  return (
    <Div className="w-full h-80 bg-white rounded-3xl mt-20 backdrop-blur-sm py-7 px-5 flex flex-col gap-3 hover:bg-white/80" animateOnView>
      <Div className="w-full h-12 flex justify-between">
        <p className="text-white text-4xl tracking-tighter">Take the next step</p>
        <Button type="button" btnText="Get Started" className="h-10 w-32 fontBtn bg-white hover:bg-white/60" onClick={onGetStarted} />
      </Div>
      <Div className="w-full h-14">
        <p className="text-gray-400">Ready to transform your online presence? Let's talk and build something exceptional together.</p>
      </Div>
    </Div>
  );
}

