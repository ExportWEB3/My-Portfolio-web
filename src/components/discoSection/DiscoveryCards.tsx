import { ctaCard, discoveryCards } from '../../data';
import { Div } from '../divComponent/div';

export function DiscoveryCards() {
  return (
    <Div className="!w-full bg-gray- md:w-2/5 md:h-[2200px] z-20 md:mt-20 flex sticky top-0 items-center max-[768px]:top-0 flex-col">
      {discoveryCards.map((disco, index) => (
        <Div key={index} className="w-full h-72 bg-white/5 border border-white/20 rounded-3xl mt-20 backdrop-blur-sm py-7 px-2 sm:px-5 flex flex-col space-y-7 blurDiscoDiv" animateOnView>
       <div className='w-full h-full flex flex-col justify-between'>
        <p className='text-[30px] text-white'>{disco.title}</p>
        <p className='text-[20px] text-gray-500'>{disco.description}</p>
       </div>
      </Div>
      ))}

      {ctaCard.map((cta) => (
        <Div className="w-full h-72 bg-white rounded-3xl mt-20 backdrop-blur-[2px] py-7 px-2 sm:px-5 flex flex-col gap-3 hover:bg-white/80" animateOnView>
      <div className='w-full h-[70%] flex flex-col justify-between'>
        <p className='text-gray-700 text-base tracking-tight'>{cta.eyebrow}</p>
        <p className='text-black text-5xl font-medium'>{cta.title}</p>
      </div>
      <div className='w-full flex-1 flex flex-col sm:flex-row'>
        <div className='w-1/2 h-full flex flex-col'>
        <p className='font-medium'>{cta.subTitle}</p>
        <p className='text-gray-700'>{cta.subText}</p>
        </div>
        <div className='w-1/2 h-full flex items-center sm:justify-end'>
        <p className='font-medium'>{cta.note}</p>
        </div>
      </div>
      </Div>
      ))}
    </Div>
  );
}