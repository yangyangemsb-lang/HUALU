import svgPaths from "../imports/svg-ksbya1bs4h";
import imgLogoLetters from "figma:asset/85d8544f8d8bfb4f7b0d221249bfabace34a388d.png";
import imgLogoIcon from "figma:asset/0321b5c8ec24da75a254284732b1adcfa2be1adf.png";

interface HeaderProps {
  currentPage: 'home' | 'sustainability' | 'about' | 'projects' | 'aerogel';
  onNavigate: (page: 'home' | 'sustainability' | 'about' | 'projects' | 'aerogel') => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <div className="bg-white h-[108px] relative w-full border-b border-gray-200">
      {/* Contact Us Button */}
      <button
        onClick={() => {/* Contact modal or page */}}
        className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] right-[50px] not-italic text-[#0b58a6] text-[24px] text-nowrap top-[54px] translate-y-[-50%] uppercase hover:text-[#094a8a] transition-colors cursor-pointer"
      >
        <p className="leading-[1.5]">Contact Us</p>
      </button>

      {/* Language Selector */}
      <div className="absolute contents right-[227px] top-[39px]">
        <div className="absolute flex h-[9px] items-center justify-center right-[50px] top-[51px] w-[17.134px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <div className="h-[17.134px] relative w-[9px]">
              <div className="absolute inset-[-2.11%_-8.06%_-2.11%_-3.83%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0699 17.8587">
                  <path d={svgPaths.p2f101180} id="Vector 1" stroke="var(--stroke-0, #2BA24B)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <button className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] right-[74px] not-italic text-[#2ba24b] text-[0px] top-[54px] translate-y-[-50%] w-[153px] cursor-pointer hover:opacity-80 transition-opacity">
          <p className="leading-[1.5] text-[20px]">
            <span className="font-['Inter:Medium',sans-serif] font-medium not-italic">English</span>
            <span>{` | EN  `}</span>
          </p>
        </button>
      </div>

      {/* Navigation Links - Left Side */}
      <button
        onClick={() => onNavigate('home')}
        className={`absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[95px] not-italic text-[24px] text-nowrap top-[54px] translate-y-[-50%] cursor-pointer transition-colors ${
          currentPage === 'home' ? 'text-[#2ba24b]' : 'text-[#454545] hover:text-[#2ba24b]'
        }`}
      >
        <p className="leading-[1.5]">Home</p>
      </button>

      <button
        onClick={() => onNavigate('about')}
        className={`absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[280px] not-italic text-[24px] text-nowrap top-[54px] translate-y-[-50%] cursor-pointer transition-colors ${
          currentPage === 'about' ? 'text-[#2ba24b]' : 'text-[#454545] hover:text-[#2ba24b]'
        }`}
      >
        <p className="leading-[1.5]">{`About  Us`}</p>
      </button>

      {/* Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[17px] flex items-center">
        <div className="relative w-[65px] h-[65px]">
          <img alt="Hualu Logo Icon" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoIcon} />
        </div>
        <div className="relative w-[187px] h-[187px] -mt-[41px] -ml-[10px]">
          <img alt="Hualu Logo Letters" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoLetters} />
        </div>
      </div>
    </div>
  );
}
