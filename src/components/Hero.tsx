import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative isolate min-h-[720px] overflow-hidden bg-white">
      <div className="absolute inset-0 -z-20">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source
            src="https://videos.pexels.com/video-files/3191887/3191887-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* <div className="absolute inset-0 -z-10 bg-white/72" /> */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/20 to-[#FFF0F0]/22" />
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-t from-white via-transparent" /> */}
      {/* <div className="absolute left-0 top-0 -z-10 h-full w-[46%] bg-[#FF7373]/10 [clip-path:polygon(0_0,72%_0,100%_100%,0_100%)]" /> */}

      <div className="mx-auto flex min-h-[720px] w-full max-w-7xl items-center px-6 pb-20 pt-36 md:pt-40">
        <div className="max-w-[840px]">
          <p className="mb-7 text-sm font-black uppercase tracking-[0.18em] text-[#FF7373] md:text-base">
            Step2Impact Global Network
          </p>

          <h1 className="mb-7 text-[54px] font-black leading-[1.04] tracking-normal text-[#101828] sm:text-[76px] lg:text-[96px]">
            Turning Intent <br className="hidden sm:block" />
            into <span className="text-[#FF7373]">Impact.</span>
          </h1>

          <p className="mb-9 max-w-[720px] text-xl font-semibold leading-relaxed text-[#101828]/75 md:text-2xl">
            Empowering People. Strengthening Businesses. Uplifting Communities.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="inline-flex h-14 items-center justify-center gap-3 border border-[#FF7373] bg-[#FF7373] px-8 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_16px_36px_rgba(255,115,115,0.28)] transition-colors hover:border-[#101828] hover:bg-[#101828]">
              Partner With Us
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
            <button className="inline-flex h-14 items-center justify-center border border-[#101828]/20 bg-white/85 px-8 text-sm font-black uppercase tracking-[0.16em] text-[#101828] shadow-[0_16px_36px_rgba(16,24,40,0.08)] backdrop-blur-sm transition-colors hover:border-[#FF7373] hover:text-[#FF7373]">
              Join The Network
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
