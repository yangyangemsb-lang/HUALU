import svgPaths from "./svg-ksbya1bs4h";
import imgLogoLetters from "figma:asset/85d8544f8d8bfb4f7b0d221249bfabace34a388d.png";
import imgLogoIcon from "figma:asset/0321b5c8ec24da75a254284732b1adcfa2be1adf.png";

function Button() {
  return (
    <div className="absolute contents left-[993px] top-[39px]" data-name="Button">
      <div className="absolute flex h-[9px] items-center justify-center left-[1115.96px] top-[51px] w-[17.134px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
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
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[993px] not-italic text-[#2ba24b] text-[0px] top-[54px] translate-y-[-50%] w-[153px]">
        <p className="leading-[1.5] text-[20px]">
          <span className="font-['Inter:Medium',sans-serif] font-medium not-italic">English</span>
          <span>{` | EN  `}</span>
        </p>
      </div>
    </div>
  );
}

export default function Navigation() {
  return (
    <div className="bg-white relative size-full" data-name="Navigation">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1190px] not-italic text-[#0b58a6] text-[24px] text-nowrap top-[54px] translate-y-[-50%] uppercase">
        <p className="leading-[1.5]">Contact Us</p>
      </div>
      <Button />
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[280px] not-italic text-[#454545] text-[24px] text-nowrap top-[54px] translate-y-[-50%]">
        <p className="leading-[1.5]">{`About  Us`}</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[95px] not-italic text-[#454545] text-[24px] text-nowrap top-[54px] translate-y-[-50%]">
        <p className="leading-[1.5]">Home</p>
      </div>
      <div className="absolute left-[632px] size-[187px] top-[-41px]" data-name="Logo letters">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoLetters} />
      </div>
      <div className="absolute left-[567px] size-[65px] top-[17px]" data-name="Logo icon">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoIcon} />
      </div>
    </div>
  );
}