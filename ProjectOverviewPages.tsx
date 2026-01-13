import svgPaths from "./svg-hsk5oo2t47";
import clsx from "clsx";
import imgImage from "figma:asset/facb4f02fedcb7a9b0fe7127cea1290e0b6de463.png";
import imgRectangle4173 from "figma:asset/ebfe4efedc52790c153281ae76995bd54d27b134.png";
import imgImage1 from "figma:asset/161694c60b3d6414d7e4cadb7b755d3ed335d010.png";
import imgImage2 from "figma:asset/3ebf34f16eae4521473dbcee82fe24b3abcfc202.png";
import imgImage3 from "figma:asset/ab3f6fa45ab393e49cd93b87fba644f7aab727ea.png";
import imgImage4 from "figma:asset/e7fc93327aedff1c19c48183a5054da2c7d684b3.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="[grid-area:1_/_1] ml-[132px] mt-0 relative size-[72px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        {children}
      </svg>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("[grid-area:1_/_1] h-0 relative w-[317px]", additionalClassNames)}>
      <div className="absolute inset-[-0.2px_0]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317 0.4">
          <path d="M0 0.2H317" id="Vector 288" stroke="var(--stroke-0, white)" strokeWidth="0.4" />
        </svg>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[rgba(43,162,75,0.2)] h-[16px] left-0 rounded-[10px] top-0 w-[76px]">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[11px] py-[9px] relative size-full">
          <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2ba24b] text-[11px] text-center w-[68px]">
            <li className="ms-[16.5px]">
              <span className="leading-[1.2]">Timeline</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[129px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[27px] leading-[20px] left-0 not-italic text-[#f2f4f6] text-[16px] top-[97px] tracking-[0.16px] w-[466px]">From initial planning to full-scale expansion and innovation.</p>
      <p className="absolute capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] left-[calc(50%-305.5px)] not-italic text-[40px] text-center text-white top-[29px] tracking-[-0.8px] translate-x-[-50%] w-[564px]">Project Timeline (2019–2030)</p>
      <Frame16 />
    </div>
  );
}

function VerticalContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Vertical container">
      <Helper additionalClassNames="ml-[30px] mt-[202px]" />
      <div className="[grid-area:1_/_1] border-[0.5px] border-solid border-white h-[350px] ml-0 mt-0 rounded-[12px] w-[373px]" data-name="Text input" />
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[99px] leading-[1.72] ml-[27px] mt-[87px] not-italic relative text-[#d9d9d9] text-[16px] w-[301px]">Overall planning, approvals and Phase I construction – from site selection to completion of the 50 k m³/year aerogel line.</p>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[49px] leading-[1.72] ml-[27px] mt-[233px] not-italic relative text-[#f2f4f6] text-[16px] w-[301px]">Phase I facilities mechanically complete and ready for commercial start-up.</p>
      <p className="[grid-area:1_/_1] font-['Inter:Bold',sans-serif] font-bold leading-[1.65] ml-[27px] mt-[43px] not-italic relative text-[#f2f4f6] text-[20px] tracking-[0.2px] w-[265px]">Foundation (2019 – 2021)</p>
      <p className="[grid-area:1_/_1] font-['Inter:Bold',sans-serif] font-bold leading-[normal] ml-[27px] mt-[209px] not-italic relative text-[#61b8d3] text-[14px] tracking-[0.28px] uppercase w-[119px]">Key Milestone</p>
    </div>
  );
}

function VerticalContainer1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Vertical container">
      <Helper additionalClassNames="ml-[28px] mt-[220.16px]" />
      <div className="[grid-area:1_/_1] border-[0.5px] border-solid border-white h-[350px] ml-0 mt-0 rounded-[12px] w-[373px]" data-name="Text input" />
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[111.774px] leading-[1.72] ml-[28px] mt-[98.23px] not-italic relative text-[#d9d9d9] text-[16px] w-[317px]">Phase I aerogel line enters stable industrial operation with continuous optimization of process, quality and energy performance.</p>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[55.323px] leading-[1.72] ml-[28px] mt-[263.06px] not-italic relative text-[#f2f4f6] text-[16px] w-[317px]">Normal commercial production of 50 k m³/year achieved.</p>
      <div className="[grid-area:1_/_1] font-['Inter:Bold',sans-serif] font-bold h-[65px] leading-[1.65] ml-[28px] mt-[22px] not-italic relative text-[#f2f4f6] text-[20px] tracking-[0.2px] w-[297px]">
        <p className="mb-0">Industrial Operation (Phase I)</p>
        <p>2022</p>
      </div>
      <p className="[grid-area:1_/_1] font-['Inter:Bold',sans-serif] font-bold h-[19.194px] leading-[normal] ml-[28px] mt-[235.97px] not-italic relative text-[#61b8d3] text-[14px] tracking-[0.28px] uppercase w-[119px]">Key Milestone</p>
    </div>
  );
}

function VerticalContainer2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Vertical container">
      <Helper additionalClassNames="ml-[28px] mt-[202px]" />
      <div className="[grid-area:1_/_1] border-[0.5px] border-solid border-white h-[350px] ml-0 mt-0 rounded-[12px] w-[373px]" data-name="Text input" />
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[99px] leading-[1.72] ml-[28px] mt-[87px] not-italic relative text-[#d9d9d9] text-[16px] w-[317px]">Capacity expansion to 250 k m³/year and development of silicate ester, silicon–carbon and other advanced silica-based materials.</p>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[72px] leading-[1.72] ml-[28px] mt-[233px] not-italic relative text-[#f2f4f6] text-[16px] w-[330px]">Multi-phase smart factory complex completed and positioned as a high-performance silica materials innovation hub.</p>
      <p className="[grid-area:1_/_1] font-['Inter:Bold',sans-serif] font-bold leading-[1.65] ml-[28px] mt-[32px] not-italic relative text-[#f2f4f6] text-[20px] tracking-[0.2px] w-[310px]">{`Scale-up & Innovation (Phase II & III) (2022 – 2030)`}</p>
      <p className="[grid-area:1_/_1] font-['Inter:Bold',sans-serif] font-bold leading-[normal] ml-[28px] mt-[209px] not-italic relative text-[#61b8d3] text-[14px] tracking-[0.28px] uppercase w-[119px]">Key Milestone</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[28px] h-[384px] items-center leading-[0] relative shrink-0 w-full">
      <VerticalContainer />
      <VerticalContainer1 />
      <VerticalContainer2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#002144] content-stretch flex flex-col gap-[50px] h-[774px] items-center left-[-1px] overflow-clip pl-[130px] pr-[135px] py-[99px] top-[2821px] w-[1440px]" data-name="Frame">
      <Container />
      <Frame10 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[rgba(43,162,75,0.2)] content-stretch flex h-[19px] items-center justify-center relative rounded-[15px] shrink-0 w-[100px]">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold h-[13px] leading-[0] not-italic relative shrink-0 text-[#2ba24b] text-[11px] w-[96.282px]">
        <li className="ms-[16.5px]">
          <span className="leading-[1.2]">Smart Factory</span>
        </li>
      </ul>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] items-start justify-end left-[104px] px-[38px] py-0 top-[-40px] w-[640px]">
      <Frame15 />
      <p className="capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] not-italic relative shrink-0 text-[40px] text-black text-nowrap tracking-[-0.8px]">Data-Driven Architecture</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[45px] leading-[20px] not-italic relative shrink-0 text-[#454545] text-[16px] tracking-[0.16px] w-full">From data centers to business value – building a complete digital closed loop.</p>
    </div>
  );
}

function VerticalContainer3() {
  return (
    <div className="absolute h-[947px] left-[105px] top-[2075px] w-[1230px]" data-name="Vertical container">
      <Frame11 />
      <div className="absolute h-[820px] left-0 top-[125px] w-[1230px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-10 pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="absolute h-[576px] left-[-4px] top-[124px] w-[1234px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle4173} />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[rgba(43,162,75,0.2)] content-stretch flex h-[19px] items-center justify-center relative rounded-[15px] shrink-0 w-[115px]">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold h-[13px] leading-[0] not-italic relative shrink-0 text-[#2ba24b] text-[11px] text-justify w-[109px]">
        <li className="ms-[16.5px]">
          <span className="leading-[1.2]">{`R&D & Innovation`}</span>
        </li>
      </ul>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-center relative shrink-0 w-[527px]">
      <Frame14 />
      <p className="capitalize font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[37px] min-w-full not-italic relative shrink-0 text-[40px] text-black tracking-[-0.8px] w-[min-content]">{`Hualu’s Aerogel R&D Center`}</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[29px] items-center relative shrink-0 w-full">
      <Frame7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[42px] leading-[20px] not-italic relative shrink-0 text-[#002144] text-[16px] text-justify tracking-[0.16px] w-full">{`Our 5,000 m² aerogel R&D center continuously advances production processes and composite formulations to enable high-performance solutions for multiple industries.`}</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#2ba24b] content-stretch flex flex-col gap-[6px] items-center not-italic overflow-clip pb-[15px] pl-[48px] pr-[47px] pt-[30px] relative rounded-[20px] shrink-0 text-[#002144] w-[280px]">
      <p className="capitalize font-['Inter:Bold',sans-serif] font-bold h-[37px] leading-[42px] relative shrink-0 text-[40px] tracking-[-0.8px] w-full">5,000 m²</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[37px] leading-[1.72] relative shrink-0 text-[16px] text-center w-full">Research Facility</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-center left-[calc(25%+18px)] top-[1517px] w-[702px]" data-name="Frame">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[rgba(43,162,75,0.2)] content-stretch flex h-[19px] items-center justify-center relative rounded-[15px] shrink-0">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold h-[13px] leading-[0] not-italic relative shrink-0 text-[#2ba24b] text-[11px] text-justify w-[102px]">
        <li className="ms-[16.5px]">
          <span className="leading-[1.2]">Site Overview</span>
        </li>
      </ul>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start justify-end relative shrink-0 w-full">
      <Frame13 />
      <p className="capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] not-italic relative shrink-0 text-[40px] text-black tracking-[-0.8px] w-[441px]">Factory Area Planning</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[20px] not-italic relative shrink-0 text-[#454545] text-[16px] tracking-[0.16px] w-full">{`An integrated campus combining R&D, production, logistics and living facilities on a 67-hectare site.`}</p>
    </div>
  );
}

function PinAltDuotoneLine() {
  return (
    <Wrapper>
      <g id="PinAltDuotoneLine">
        <g id="Switch">
          <path d={svgPaths.p3d712b80} fill="var(--fill-0, #2BA24B)" />
          <path d={svgPaths.p13617d80} fill="var(--stroke-0, #0B58A6)" />
        </g>
        <path d={svgPaths.p3eccd118} id="Container" stroke="var(--stroke-0, #0B58A6)" strokeLinecap="round" strokeWidth="1.2" />
      </g>
    </Wrapper>
  );
}

function VerticalContainer4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Vertical container">
      <div className="[grid-area:1_/_1] bg-white h-[182px] ml-0 mt-[25px] rounded-[22px] shadow-[0px_6px_14px_0px_rgba(11,88,166,0.15)] w-[210px]" data-name="Card" />
      <PinAltDuotoneLine />
      <p className="[grid-area:1_/_1] font-['Inter:Black',sans-serif] font-black h-[18px] leading-[normal] ml-[93px] mt-[72px] not-italic relative text-[#002144] text-[16px] text-center translate-x-[-50%] w-[148px]">67 ha (~1,000 mu)</p>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[1.2] ml-[19px] mt-[113px] not-italic relative text-[#454545] text-[12px] tracking-[0.6px] w-[164px]">Overall site area for Phase I development.</p>
    </div>
  );
}

function HomeLight() {
  return (
    <div className="[grid-area:1_/_1] ml-[124px] mt-0 relative size-[86px]" data-name="HomeLight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 86">
        <g id="HomeLight">
          <path d={svgPaths.p1f312c00} id="Rectangle 1" stroke="var(--stroke-2, #0B58A6)" />
          <path d={svgPaths.p31807b00} fill="var(--fill-0, #2BA24B)" id="Rectangle 46" />
        </g>
      </svg>
    </div>
  );
}

function Card() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Card">
      <div className="[grid-area:1_/_1] bg-white h-[182px] ml-0 mt-[32px] rounded-[22px] shadow-[0px_6px_14px_0px_rgba(11,88,166,0.15)] w-[210px]" data-name="Card" />
      <HomeLight />
      <p className="[grid-area:1_/_1] font-['Inter:Black',sans-serif] font-black h-[36px] leading-[normal] ml-[73.5px] mt-[70px] not-italic relative text-[#002144] text-[16px] text-center translate-x-[-50%] w-[123px]">{`R&D and Administration`}</p>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[57px] leading-[1.2] ml-[14px] mt-[120px] not-italic relative text-[#454545] text-[12px] tracking-[0.6px] w-[178px]">{`Office Building & R&D Center, Analysis & Testing Center, Exhibition Hall and meeting facilities.`}</p>
    </div>
  );
}

function GroupDuotoneLine() {
  return (
    <div className="[grid-area:1_/_1] ml-[120px] mt-0 relative size-[84px]" data-name="GroupDuotoneLine">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 84">
        <g id="GroupDuotoneLine">
          <circle cx="42" cy="31.5" id="Vertical container" r="6.5" stroke="var(--stroke-0, #002144)" strokeLinecap="round" />
          <path d={svgPaths.p270e4c80} id="Vertical container_2" stroke="var(--stroke-0, #002144)" />
          <path d={svgPaths.pe599e00} id="Vertical container_3" stroke="var(--stroke-0, #002144)" />
          <path d={svgPaths.p3fc52380} fill="var(--stroke-0, #2BA24B)" id="Vertical container_4" />
          <path d={svgPaths.pcc71580} fill="var(--stroke-0, #2BA24B)" id="Vertical container_5" />
          <path d={svgPaths.p64fa000} fill="var(--fill-0, #2BA24B)" id="Rectangle 4161" stroke="var(--stroke-0, #2BA24B)" strokeLinecap="round" />
          <path d={svgPaths.p26b60116} id="Vector 280" stroke="var(--stroke-0, #0B58A6)" strokeLinecap="round" />
          <path d={svgPaths.p24f6d100} id="Vector 282" stroke="var(--stroke-0, #0B58A6)" strokeLinecap="round" />
          <path d={svgPaths.p167e880} id="Vector 281" stroke="var(--stroke-0, #0B58A6)" strokeLinecap="round" />
          <path d={svgPaths.p23275a80} id="Vector 283" stroke="var(--stroke-0, #0B58A6)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Card1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Card">
      <div className="[grid-area:1_/_1] bg-white h-[182px] ml-0 mt-[25px] rounded-[22px] shadow-[0px_6px_14px_0px_rgba(11,88,166,0.15)] w-[210px]" data-name="Card" />
      <GroupDuotoneLine />
      <p className="[grid-area:1_/_1] font-['Inter:Black',sans-serif] font-black h-[34px] leading-[normal] ml-[70.5px] mt-[64px] not-italic relative text-[#002144] text-[16px] text-center translate-x-[-50%] w-[87px]">{`Living & Amenities`}</p>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[45px] leading-[1.2] ml-[17px] mt-[113px] not-italic relative text-[#454545] text-[12px] tracking-[0.6px] w-[177px]">Canteen, activity center and expert apartments providing integrated on-site support.</p>
    </div>
  );
}

function SettingLineDuotoneLine() {
  return (
    <Wrapper>
      <g id="SettingLineDuotoneLine">
        <path d={svgPaths.p26384100} fill="var(--stroke-0, #0B58A6)" id="Container" />
        <path d={svgPaths.p18aa2b00} fill="var(--fill-0, #2BA24B)" id="Ellipse 5" stroke="var(--stroke-0, #2BA24B)" />
      </g>
    </Wrapper>
  );
}

function VerticalContainer5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Vertical container">
      <div className="[grid-area:1_/_1] bg-white h-[182px] ml-0 mt-[25px] rounded-[22px] shadow-[0px_6px_17px_0px_rgba(11,88,166,0.15)] w-[210px]" data-name="Card" />
      <SettingLineDuotoneLine />
      <p className="[grid-area:1_/_1] font-['Inter:Black',sans-serif] font-black h-[37px] leading-[normal] ml-[83px] mt-[62px] not-italic relative text-[#002144] text-[16px] text-center translate-x-[-50%] w-[120px]">{`Production & Infrastructure`}</p>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[75px] leading-[1.2] ml-[10px] mt-[113px] not-italic relative text-[#454545] text-[12px] tracking-[0.6px] w-[190px]">Central control room, production workshops, raw-material and finished-product warehouses, loading yards and wastewater treatment station.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[70.5px] items-end leading-[0] relative shrink-0 w-full">
      <VerticalContainer4 />
      <Card />
      <Card1 />
      <VerticalContainer5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[50px] h-[500px] items-center justify-center left-[129px] pb-[24px] pl-[70px] pr-[54px] pt-[56px] rounded-[25px] shadow-[2px_1px_100px_0px_rgba(0,0,0,0.1)] top-[905px] w-[1200px]" data-name="Frame">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Map() {
  return (
    <div className="absolute h-[584px] left-0 top-[81px] w-[555px]" data-name="Map">
      <div className="absolute aspect-[976/1020] left-0 right-0 top-0" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute flex inset-[40.14%_48.1%_3.1%_2.8%] items-center justify-center">
        <div className="flex-none h-[285.168px] rotate-[203.738deg] skew-x-[0.267deg] w-[173.638px]">
          <div className="relative size-full">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 173.638 285.168">
              <path d={svgPaths.p1f634100} fill="url(#paint0_linear_2_868)" id="Polygon 1" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_868" x1="137.599" x2="146.164" y1="235.259" y2="-37.052">
                  <stop offset="0.169434" stopColor="#D9D9D9" stopOpacity="0" />
                  <stop offset="1" stopColor="#0B58A6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[143px] size-[134px] top-[147px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[rgba(43,162,75,0.2)] content-stretch flex h-[19px] items-center justify-center relative rounded-[15px] shrink-0 w-[118px]">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold h-[13px] leading-[0] not-italic relative shrink-0 text-[#2ba24b] text-[11px] text-justify w-[126px]">
        <li className="ms-[16.5px]">
          <span className="leading-[1.2]">Project Location</span>
        </li>
      </ul>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[26.5px] py-0 relative w-full">
        <Frame12 />
        <p className="capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] min-w-full not-italic relative shrink-0 text-[40px] text-black tracking-[-0.8px] w-[min-content]">{`Location & Transportation Advantages `}</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-[578px] overflow-clip top-[263px] w-[561px]" data-name="Frame">
      <Frame6 />
      <ul className="block font-['Inter:Regular',sans-serif] font-normal h-[114px] leading-[0] not-italic relative shrink-0 text-[#454545] text-[16px] text-justify tracking-[0.16px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[20px]">The CNCEC Hualu New Materials project is located in Changshou Economic and Technological Development Zone, Chongqing.</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[20px]">It enjoys a “four-in-one” transportation network of highway, railway, waterway and airway, ensuring efficient and low-cost logistics.</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[20px]">The factory sits on Huanan 2nd Road, only 1 km from the expressway exit and within 50 km of Chongqing Jiangbei International Airport.</span>
        </li>
      </ul>
    </div>
  );
}

function HorizontalContainer() {
  return (
    <div className="absolute h-[665px] left-[133px] top-[204px] w-[1139px]" data-name="Horizontal container">
      <Map />
      <div className="absolute left-[372px] opacity-20 size-[612px] top-[9px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-20 pointer-events-none size-full" src={imgImage3} />
      </div>
      <Frame3 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute capitalize content-stretch flex flex-col gap-[20px] items-center left-[calc(25%+121px)] not-italic top-[147px] w-[495px]">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[37px] relative shrink-0 text-[#002144] text-[60px] tracking-[-1.2px] w-full">Project Overview</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium h-[26px] leading-[35px] relative shrink-0 text-[#454545] text-[13px] text-center tracking-[-0.26px] w-full">Home /Project Overview</p>
    </div>
  );
}

export default function ProjectOverviewPages() {
  return (
    <div className="bg-white border border-solid border-white relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="ProjectOverviewPages">
      <Frame />
      <VerticalContainer3 />
      <div className="absolute bg-white h-[928px] left-[-1px] top-[1003px] w-[1444px]" data-name="white bg" />
      <div className="absolute h-[768px] left-[-22px] top-[1162px] w-[1477px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage4} />
          <div className="absolute bg-gradient-to-b from-[35.096%] from-white inset-0 to-[rgba(255,255,255,0)]" />
        </div>
      </div>
      <Frame1 />
      <div className="absolute bg-[#f2f4f6] border border-[rgba(217,217,217,0.2)] border-solid h-[760px] left-[-1px] top-[250px] w-[1440px]" data-name="Text input" />
      <Frame2 />
      <HorizontalContainer />
      <Frame17 />
    </div>
  );
}