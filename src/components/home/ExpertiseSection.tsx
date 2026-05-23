import React from 'react';
import { statsData } from '../../data/home';
import { StarIcon } from '../ui/Icons';
import { SectionHeading } from '../ui/SectionHeading';

export const ExpertiseSection = () => {

  return (
    <section className="pt-0 pb-12 md:pb-24 px-0 w-full text-center noise-bg overflow-hidden relative">
      <div className="px-4 md:px-12 lg:px-24 max-w-7xl mx-auto mb-[15px]">
        <SectionHeading align="center" className="mb-6">Наша експертність у цифрах та фактах</SectionHeading>
        <p className="font-serif opacity-80 max-w-3xl mx-auto text-sm md:text-base">
          Ми пишаємося тим, що стали частиною життя сотень людей. Наша статистика — це кредит довіри, який ми виправдовуємо щодня
        </p>
      </div>

      <div className="marquee-wrapper flex w-full" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div className="flex gap-[50px] pr-[50px] animate-marquee items-center">
          {statsData.map((stat, index) => (
            <img
              key={`set1-img-${index}`}
              src={`${import.meta.env.BASE_URL}${stat.img}`}
              alt={`Статистика ${index + 1}`}
              className="h-64 md:h-80 lg:h-96 w-auto max-w-none flex-none rounded-[32px] object-cover shadow-2xl"
            />
          ))}
        </div>
        <div className="flex gap-[50px] pr-[50px] animate-marquee items-center" aria-hidden="true">
          {statsData.map((stat, index) => (
            <img
              key={`set2-img-${index}`}
              src={`${import.meta.env.BASE_URL}${stat.img}`}
              alt={`Статистика ${index + 1}`}
              className="h-64 md:h-80 lg:h-96 w-auto max-w-none flex-none rounded-[32px] object-cover shadow-2xl"
            />
          ))}
        </div>
      </div>

      <div className="marquee-wrapper flex w-full mt-12 text-xl md:text-2xl font-serif text-[#EBEBDF]" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div className="flex gap-[13px] pr-[13px] animate-marquee items-center whitespace-nowrap" style={{ animationDirection: 'normal', animationDuration: '40s' }}>
          {statsData.map((stat, index) => (
            <React.Fragment key={`set1-txt-${index}`}>
              <span>{stat.text}</span>
              <StarIcon className="w-6 h-6 text-[#EBEBDF]" />
            </React.Fragment>
          ))}
        </div>
        <div className="flex gap-[13px] pr-[13px] animate-marquee items-center whitespace-nowrap" aria-hidden="true" style={{ animationDirection: 'normal', animationDuration: '40s' }}>
          {statsData.map((stat, index) => (
            <React.Fragment key={`set2-txt-${index}`}>
              <span>{stat.text}</span>
              <StarIcon className="w-6 h-6 text-[#EBEBDF]" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
