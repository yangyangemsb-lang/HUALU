import svgPaths from "./svg-xerxukv00k";
import clsx from "clsx";
import imgSectionImage1 from "figma:asset/a9079ff9b79e9d1edb152b1733e30bc8bcb72ad3.png";
import imgIconIndustrialLayoutTechnologyFocus1 from "figma:asset/d864ff710d3c169c62b016e78df45ae73c3bd62d.png";
import imgIconIndustrialLayoutTechnologyFocus2 from "figma:asset/729a838575015d369087cfc8a49bdf4b6a349b42.png";
import imgCertificateIcon from "figma:asset/494631e59681cdb033ed8d00406607bb4362af42.png";
import { imgSectionImage } from "./svg-rid2l";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("[grid-area:1_/_1] bg-[#002144] content-stretch flex items-center justify-center ml-0 mt-0 p-[10px] relative", additionalClassNames)}>
      <div className="relative shrink-0 size-[30px]" data-name="icon-Industrial Layout & Technology Focus  1">
        {children}
      </div>
    </div>
  );
}
type RollAdvanceHelperProps = {
  additionalClassNames?: string;
};

function RollAdvanceHelper({ additionalClassNames = "" }: RollAdvanceHelperProps) {
  return (
    <div className={clsx("[grid-area:1_/_1] mt-0 relative size-[20px]", additionalClassNames)}>
      <div className="absolute inset-[0_2.45%_9.55%_2.45%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0211 18.0902">
          <path d={svgPaths.p2e993580} id="Star 2" stroke="var(--stroke-0, #2BA24B)" />
        </svg>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[758px] top-[97px]" data-name="MaskGroup">
      <div className="absolute h-[611px] left-[758px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[546px_611px] rounded-[25px] top-[97px] w-[1106.503px]" data-name="Section Image" style={{ maskImage: `url('${imgSectionImage}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[25px] size-full" src={imgSectionImage1} />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start px-[8px] py-[9px] relative shrink-0 size-[49px]">
      <div className="absolute left-0 size-[49px] top-0">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 33, 68, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
            <path d={svgPaths.p1d5576f0} fill="var(--fill-0, #002144)" id="Star 1" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
      <div className="flex h-[23.296px] items-center justify-center relative shrink-0 w-[29.971px]" style={{ "--transform-inner-width": "23.8125", "--transform-inner-height": "29" } as React.CSSProperties}>
        <div className="flex-none rotate-[357.393deg]">
          <p className="capitalize font-['Inter:Regular',sans-serif] font-normal h-[22px] leading-[29px] not-italic relative text-[32px] text-center text-white tracking-[-0.64px] w-[29px]">✓</p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-[#2ba24b] content-stretch flex flex-col gap-[16px] h-[133px] items-center justify-center left-[1181px] rounded-[15px] top-[601px] w-[150px]">
      <Frame20 />
      <p className="capitalize font-['Inter:Bold',sans-serif] font-bold h-[39px] leading-[19px] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.26px] w-[108px]">National Hi-Tech Enterprise</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[1181px] top-[601px]" data-name="Group16">
      <Frame21 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bg-[#002144] content-stretch flex h-[52px] items-center left-[109px] px-[27px] py-[6px] rounded-[35px] top-[595px] w-[163px]" data-name="Group7">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[35px]" />
      <p className="capitalize font-['Inter:Bold',sans-serif] font-bold h-[40px] leading-[42px] not-italic relative shrink-0 text-[15px] text-justify text-white tracking-[-0.45px] w-[104px]">Learn More</p>
      <div className="h-0 relative shrink-0 w-[15.245px]">
        <div className="absolute inset-[-7.36px_-6.56%_-7.36px_0]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2446 14.7279">
            <path d={svgPaths.p1bcf61c0} fill="var(--stroke-0, white)" id="Arrow 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-[rgba(43,162,75,0.2)] content-stretch flex h-[16px] items-center left-[109px] rounded-[15px] top-[196px] w-[121px]">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2ba24b] text-[11px] text-justify w-[114px]">
        <li className="ms-[16.5px]">
          <span className="leading-[1.2]">Corporate Profile</span>
        </li>
      </ul>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[760px] relative shrink-0 w-[1442px]" data-name="Frame1">
      <MaskGroup />
      <Group4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[65px] leading-[20px] left-[109px] not-italic text-[#454545] text-[16px] text-justify top-[327px] tracking-[0.16px] w-[593px]">{`CNCEC Hualu New Materials Co., Ltd. was founded leveraging Hualu Engineering & Technology’s strengths in R&D and engineering execution, serving as a core vehicle to implement the diversified strategy in new materials.`}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[109px] not-italic text-[#454545] text-[16px] text-justify top-[484px] tracking-[0.16px] w-[593px]">A ternary equity structure was formed by CNCEC, Wanhua Chemical and an employee shareholding platform, representing a milestone of the company’s mixed ownership reform.</p>
      <p className="absolute capitalize font-['Inter:Bold',sans-serif] font-bold h-[41px] leading-[42px] left-[109px] not-italic text-[15px] text-black text-justify top-[446px] tracking-[-0.45px] w-[412px]">{`Shareholding Structure & Mixed Ownership Reform`}</p>
      <Group />
      <p className="absolute capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] left-[calc(50%-612px)] not-italic text-[40px] text-black top-[224px] tracking-[-0.8px] w-[610px]">About CNCEC Hualu New Materials</p>
      <Frame19 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame1 />
    </div>
  );
}

function WhiteYearBg() {
  return (
    <div className="absolute contents left-[459px] top-[199px]" data-name="WhiteYearBg">
      <div className="absolute bg-white h-[86px] left-[459px] rounded-[10px] top-[199px] w-[570px]" data-name="Timeline Background" />
      <div className="absolute bg-white h-[86px] left-[459px] rounded-[10px] top-[326px] w-[570px]" data-name="Timeline Background" />
      <div className="absolute bg-white h-[86px] left-[459px] rounded-[10px] top-[453px] w-[570px]" data-name="Timeline Background" />
      <div className="absolute bg-white h-[86px] left-[459px] rounded-[10px] top-[580px] w-[570px]" data-name="Timeline Background" />
      <div className="absolute bg-white h-[86px] left-[459px] rounded-[10px] top-[707px] w-[570px]" data-name="Timeline Background" />
      <div className="absolute bg-white h-[86px] left-[459px] rounded-[10px] top-[834px] w-[570px]" data-name="Timeline Background" />
    </div>
  );
}

function DotBlue() {
  return (
    <div className="absolute h-[669px] left-[411px] top-[200px] w-[20px]" data-name="DotBlue">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 669">
        <g id="DotBlue">
          <path d={svgPaths.p3c1f4850} fill="var(--fill-0, #002144)" id="Ellipse 4" stroke="var(--stroke-0, white)" />
          <circle cx="10" cy="140" fill="var(--fill-0, #002144)" id="Ellipse 5" r="9.5" stroke="var(--stroke-0, white)" />
          <circle cx="10" cy="270" fill="var(--fill-0, #002144)" id="Ellipse 6" r="9.5" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.p227e9d00} fill="var(--fill-0, #002144)" id="Ellipse 7" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.p69f8470} fill="var(--fill-0, #002144)" id="Ellipse 8" stroke="var(--stroke-0, white)" />
          <circle cx="10" cy="659" fill="var(--fill-0, #002144)" id="Ellipse 9" r="9.5" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function YearContent() {
  return (
    <div className="absolute contents left-[476px] not-italic text-justify top-[205px]" data-name="YearContent">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[23px] leading-[1.65] left-[476px] text-[#002144] text-[20px] top-[205px] tracking-[0.2px] w-[67px]">1965</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[23px] leading-[1.65] left-[476px] text-[#002144] text-[20px] top-[333px] tracking-[0.2px] w-[67px]">1969</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[23px] leading-[1.65] left-[476px] text-[#002144] text-[20px] top-[461px] tracking-[0.2px] w-[189px]">1984</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[23px] leading-[1.65] left-[476px] text-[#002144] text-[20px] top-[589px] tracking-[0.2px] w-[67px]">1996</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[23px] leading-[1.65] left-[476px] text-[#002144] text-[20px] top-[717px] tracking-[0.2px] w-[87px]">2003</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[23px] leading-[1.65] left-[476px] text-[#002144] text-[20px] top-[845px] tracking-[0.2px] w-[87px]">2020</p>
      <p className="absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[477px] text-[#454545] text-[14px] top-[242px] tracking-[-0.28px] w-[496px]">Establishment of the No.6 Design Institute under the Ministry of Chemical Industry.</p>
      <p className="absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[477px] text-[#454545] text-[14px] top-[370px] tracking-[-0.28px] w-[496px]">Move to Maoling, Xianyang, Shaanxi</p>
      <p className="absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[477px] text-[#454545] text-[14px] top-[498px] tracking-[-0.28px] w-[533px]">Merger of the No.6 Design Institute under the Ministry of Chemical Industry with Shaanxi Chemical Engineering Design Institute and relocation to Xi’an</p>
      <p className="absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[477px] text-[#454545] text-[14px] top-[626px] tracking-[-0.28px] w-[496px]">Reorganization and renaming to China Hualu Engineering Corporation</p>
      <p className="absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[477px] text-[#454545] text-[14px] top-[754px] tracking-[-0.28px] w-[496px]">{`Formation of Hualu Engineering & Technology Co., Ltd.`}</p>
      <p className="absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[477px] text-[#454545] text-[14px] top-[882px] tracking-[-0.28px] w-[496px]">Establishment of CNCEC Hualu New Materials Co., Ltd.</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[rgba(43,162,75,0.2)] h-[16px] left-[656px] rounded-[15px] top-[31px] w-[121px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[15px] relative size-full">
          <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2ba24b] text-[11px] w-[116px]">
            <li className="ms-[16.5px]">
              <span className="leading-[1.2]">Company History</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[1118px] relative shrink-0 w-[1440px]" data-name="Frame2">
      <div className="absolute bg-[#f2f4f6] border border-[rgba(217,217,217,0.2)] border-solid h-[1111px] left-0 top-0 w-[1440px]" data-name="gery bc" />
      <WhiteYearBg />
      <div className="absolute flex h-[650px] items-center justify-center left-[421px] top-[210px] w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[650px]">
            <div className="absolute inset-[-1px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 650 2.00024">
                <path d="M3.71753e-07 1L650 1.00024" id="Line 4" stroke="var(--stroke-0, #2BA24B)" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <DotBlue />
      <YearContent />
      <div className="absolute bg-white h-[97px] left-[420px] rounded-[10px] top-[983px] w-[610px]" data-name="Description Background" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[61px] leading-[20px] left-[432px] not-italic text-[#454545] text-[16px] top-[992px] tracking-[0.16px] w-[576px]">Originated from the former No.6 Design Institute of the Ministry of Chemical Industry in 1965, the company experienced relocation, merger, restructuring and renaming, and evolved into an internationally oriented EPC contractor and a national hi-tech enterprise.</p>
      <p className="absolute capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] left-[calc(50%+0.5px)] not-italic text-[40px] text-black text-center top-[71px] tracking-[-0.8px] translate-x-[-50%] w-[661px]">{`Legacy & Transformation of Hualu (1965–Present)`}</p>
      <Frame15 />
    </div>
  );
}

function RollAdvance() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="RollAdvance">
      <RollAdvanceHelper additionalClassNames="ml-0" />
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[1.65] ml-[26px] mt-0 not-italic relative text-[13px] text-justify text-white tracking-[-0.13px] w-[148px]">Engineering Excellence</p>
      <RollAdvanceHelper additionalClassNames="ml-[256px]" />
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[1.65] ml-[282px] mt-0 not-italic relative text-[13px] text-justify text-white tracking-[-0.13px] w-[170px]">New Materials Ecosystem</p>
      <RollAdvanceHelper additionalClassNames="ml-[508px]" />
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[1.65] ml-[534px] mt-0 not-italic relative text-[13px] text-justify text-white tracking-[-0.13px] w-[112px]">{`R&D Innovation`}</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="bg-[#002144] content-stretch flex h-[50px] items-center justify-between leading-[0] px-[621px] py-[15px] relative shrink-0 w-[2628px]" data-name="Group14">
      {[...Array(2).keys()].map((_, i) => (
        <RollAdvance key={i} />
      ))}
    </div>
  );
}

function Frame17() {
  return (
    <Wrapper additionalClassNames="rounded-[45px] size-[55px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconIndustrialLayoutTechnologyFocus1} />
    </Wrapper>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group8">
      <Frame17 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[32px] leading-[1.65] relative shrink-0 text-[20px] text-black tracking-[0.2px] w-full">{`Industrial Layout & Technology Focus`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[82px] leading-[20px] relative shrink-0 text-[#454545] text-[16px] text-justify tracking-[0.16px] w-full">{`A 300,000 m³/year silica-based nano aerogel composite project is planned, forming a fully integrated new materials ecosystem covering talent training, R&D, production and sales along the extended silica industrial chain.`}</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[602px]">
      <Group1 />
      <Frame9 />
    </div>
  );
}

function Frame16() {
  return (
    <Wrapper additionalClassNames="h-[54px] rounded-[35px] w-[55px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconIndustrialLayoutTechnologyFocus2} />
    </Wrapper>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group9">
      <Frame16 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[32px] leading-[1.65] relative shrink-0 text-[20px] text-black tracking-[0.2px] w-full">Strategic Cooperation</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[60px] leading-[20px] relative shrink-0 text-[#454545] text-[16px] text-justify tracking-[0.16px] w-full">Strategic agreements have been signed with Chongqing Municipal Government and CNCEC to advance nano-aerogel composites industrialization projects.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex gap-[14px] grow items-start min-h-px min-w-px relative shrink-0">
      <Group2 />
      <Frame11 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[55px] items-start overflow-clip relative shrink-0 w-[1211px]" data-name="Frame">
      <Frame10 />
      <Frame12 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] h-[234px] items-center relative shrink-0 w-full">
      <Group3 />
      <Frame />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[rgba(43,162,75,0.2)] content-stretch flex h-[16px] items-center justify-center relative rounded-[15px] shrink-0 w-[134px]">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold h-[13px] leading-[0] not-italic relative shrink-0 text-[#2ba24b] text-[11px] text-justify w-[117px]">
        <li className="ms-[16.5px]">
          <span className="leading-[1.2]">Our Qualifications</span>
        </li>
      </ul>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-center relative shrink-0 w-[441px]">
      <Frame18 />
      <p className="capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] min-w-full not-italic relative shrink-0 text-[40px] text-white tracking-[-0.8px] w-[min-content]">{`Certificates & Honors`}</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[478px]">
      <div className="relative shrink-0 size-[70px]" data-name="Certificate Icon">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCertificateIcon} />
      </div>
      <div className="font-['Inter:Bold',sans-serif] font-bold h-[57px] leading-[1.2] not-italic relative shrink-0 text-[0px] text-[25px] text-center text-white tracking-[-0.75px] w-full">
        <p className="mb-0">Comprehensive Grade A Qualification for</p>
        <p>
          <span>{`Engineering `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold not-italic tracking-[-0.75px]">Design</span>
        </p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#07305f] relative rounded-[15px] shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-center pb-[20px] pt-[13px] px-[31px] relative w-full">
          <Frame8 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[16px] text-white tracking-[0.16px] w-[min-content]">{`Hualu holds the Comprehensive Grade A Qualification for Engineering Design – the highest design qualification in China, enabling it to undertake projects across all 21 industrial sectors and corresponding EPC & PM services.`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#002144] content-stretch flex flex-col gap-[25px] h-[580px] items-center overflow-clip pb-[66px] pt-[67px] px-[415px] relative shrink-0 w-[1440px]" data-name="Frame">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col h-[814px] items-center relative shrink-0 w-[2628px]">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[2755px] items-center left-[-1px] top-[129px] w-[1440px]">
      <p className="capitalize font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[37px] not-italic relative shrink-0 text-[#002144] text-[60px] tracking-[-1.2px] w-[273px]">About Us</p>
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium h-[26px] leading-[35px] not-italic relative shrink-0 text-[#454545] text-[13px] tracking-[-0.26px] w-[109px]">Home / About Us</p>
      <Frame3 />
      <Frame2 />
      <Frame13 />
    </div>
  );
}

export default function AboutUsPages() {
  return (
    <div className="bg-white border border-solid border-white relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="AboutUsPages">
      <Frame14 />
    </div>
  );
}