import React from "react";
import { Mail, Globe, ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Who We Are", href: "#about" },
    { name: "Our Offerings", href: "#offerings" },
    { name: "Impact Philosophy", href: "#impact" },
    { name: "Our Leadership", href: "#leadership" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="bg-[#FDFCFE] border-t border-[#EFE1D1] pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: BRAND & LINKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-20">
          
          {/* Column 1: Brand Info */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center overflow-visible group cursor-pointer h-12">
              <img
                src="/logos/step2impactlogo.png"
                alt="Step2Impact Logo"
                className="h-8 md:h-10 w-auto object-contain scale-[2.2] sm:scale-[2.5] origin-center sm:origin-left transition-transform duration-300"
              />
            </div>
            <div className="pt-4 sm:pt-2">
              <p className="text-[#101828]/60 font-bold text-lg italic leading-relaxed">
                Empower. Enable. Impact.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto sm:mx-0 mt-3">
                Building a globally connected ecosystem focused on measurable
                transformation and sustainable growth.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h4 className="text-[#101828] font-black uppercase tracking-widest text-[10px] md:text-xs mb-5 md:mb-6">
              Explore
            </h4>
            <ul className="space-y-3 md:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#FF7373] font-bold text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal/Policies */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h4 className="text-[#101828] font-black uppercase tracking-widest text-[10px] md:text-xs mb-5 md:mb-6">
              Legal
            </h4>
            <ul className="space-y-3 md:space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#FF7373] font-bold text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-8">
            <div className="text-center sm:text-left">
              <h4 className="text-[#101828] font-black uppercase tracking-widest text-[10px] md:text-xs mb-5 md:mb-6">
                Connect
              </h4>
              <div className="space-y-4 inline-block sm:block text-left">
                <a
                  href="mailto:info@step2impactglobal.org"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#101828] transition-colors group"
                >
                  <div className="shrink-0 w-8 h-8 bg-[#EFE1D1]/50 rounded-lg flex items-center justify-center group-hover:bg-[#101828] group-hover:text-white transition-all">
                    <Mail size={16} />
                  </div>
                  <span className="font-bold text-sm break-all">
                    info@step2impactglobal.org
                  </span>
                </a>
                <a
                  href="https://www.step2impactglobal.org"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#101828] transition-colors group"
                >
                  <div className="shrink-0 w-8 h-8 bg-[#EFE1D1]/50 rounded-lg flex items-center justify-center group-hover:bg-[#101828] group-hover:text-white transition-all">
                    <Globe size={16} />
                  </div>
                  <span className="font-bold text-sm">
                    www.step2impactglobal.org
                  </span>
                </a>
              </div>
            </div>

            <div className="flex justify-center sm:justify-start gap-4">
              {[
                { icon: <FaLinkedin size={18} />, href: "#" },
                { icon: <FaInstagram size={18} />, href: "#" },
                { icon: <FaFacebook size={18} />, href: "#" },
                { icon: <FaYoutube size={18} />, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 border border-[#EFE1D1] rounded-full flex items-center justify-center text-[#101828] hover:bg-[#FF7373] hover:text-white hover:border-[#FF7373] transition-all duration-300"
                  aria-label={`Social Link ${idx}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT */}
        <div className="pt-8 border-t border-[#EFE1D1] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest text-center md:text-left">
            &copy; {currentYear} Step2Impact Global Network. <br className="sm:hidden" /> All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="h-[1px] w-4 bg-[#FF7373] hidden md:block"></div>
            <span className="text-gray-300 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-center">
              Global Reach • Measurable Impact
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;