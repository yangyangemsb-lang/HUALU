import svgPaths from "./svg-aivsp99s0v";
import clsx from "clsx";
import imgHeroContainer from "figma:asset/1763aa917d101ae5fdf2a95b295eeee3178d02df.png";
import imgImage from "figma:asset/752dcdfa47df9874d6765a4dd406dd7915486546.png";
import imgSectionImage from "figma:asset/6f26a8eb351ed95d2878d7b166b03c2a0a34d66d.png";
import imgSectionImage1 from "figma:asset/a9079ff9b79e9d1edb152b1733e30bc8bcb72ad3.png";
import imgImage1 from "figma:asset/9679e76023eb3e358422330f09d7a6bfd2c137ca.png";
import imgImage2 from "figma:asset/af16ed8c19b986d1cd908a2a3b8b94119d837d32.png";
import imgImage3 from "figma:asset/d3afbe9e81dd6e0abb912b835b3043ad296b1a69.png";
import imgImage4 from "figma:asset/14834e20e4671d0b7e865be68ca5cc15f5d8f8af.png";
import imgChemicalLogo from "figma:asset/2187cf2c55d40828671d1713abb168d541ac5c75.png";
import imgImage5 from "figma:asset/6b9df391b6c9f88ac3f22909da3dc5ebdc84a8b7.png";
import imgImage6 from "figma:asset/66d7e4606589bdcb773efc4c178fe42bbe44ac81.png";

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[457px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[24px] text-white w-[548px]">{children}</p>
    </div>
  );
}
type ButtonIconArrowLeftBackgroundImageProps = {
  additionalClassNames?: string;
};

function ButtonIconArrowLeftBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonIconArrowLeftBackgroundImageProps>) {
  return (
    <div className={clsx("absolute size-[80px] top-[1177px]", additionalClassNames)}>
      <div className="absolute inset-[-1.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 82">
          <g id="Button/Icon/Arrow/Left">{children}</g>
        </svg>
      </div>
    </div>
  );
}
type TextInputBackgroundImageProps = {
  additionalClassNames?: string;
};

function TextInputBackgroundImage({ additionalClassNames = "" }: TextInputBackgroundImageProps) {
  return (
    <div className={clsx("absolute h-0 left-[560px] w-[723px]", additionalClassNames)}>
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 723 1">
          <line id="Text input" stroke="var(--stroke-0, white)" x2="723" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}

function HeroContainer() {
  return (
    <div className="absolute h-[800px] left-0 top-0 w-[1440px]" data-name="Hero Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgHeroContainer} />
        <div className="absolute bg-gradient-to-b from-[12.125%] from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.42)]" />
      </div>
    </div>
  );
}

function HeroButton() {
  return (
    <div className="absolute border border-solid border-white h-[69px] left-[1093px] rounded-[45px] top-[647px] w-[240px]" data-name="Hero Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[22px] not-italic text-[24px] text-nowrap text-white top-[33.5px] tracking-[-0.48px] translate-y-[-50%] uppercase">
        <p className="leading-[normal]">our solution</p>
      </div>
      <div className="absolute h-[17px] left-[207px] top-[25px] w-[9px]">
        <div className="absolute inset-[-6.41%_-24.27%_-6.41%_-11.44%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2145 19.181">
            <path d={svgPaths.p9e47380} id="Vector 1" stroke="var(--stroke-0, white)" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute h-[800px] left-[-1px] rounded-[8px] top-[-1px] w-[1440px]" data-name="Hero">
      <HeroContainer />
      <HeroButton />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[77.5%_56.88%_8.75%_7.5%] justify-center leading-[0] not-italic text-[16px] text-justify text-white">
        <p className="leading-[20px]">We focus on customer challenges and needs, delivering competitive next-generation products and premium technical services — continuously creating lasting value.</p>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-['League_Spartan:Black',sans-serif] font-black font-bold h-[280px] leading-[1.059] left-[720.5px] not-italic text-[0px] text-center text-white top-[198px] tracking-[-2.3px] translate-x-[-50%] uppercase w-[1159px]">
        <span className="text-[149px]">the</span>
        <span className="text-[149px] tracking-[4.47px]">&nbsp;</span>
        <span className="text-[190px]">future</span>
        <span className="text-[149px]">{` of`}</span>
        <span className="text-[115px]"> </span>
        <span className="text-[115px] tracking-[1.15px]">{`green  innovation`}</span>
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex h-[64px] items-center justify-end left-[158px] rounded-[45px] top-[1655px] w-[226px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#33363f] border-solid inset-0 pointer-events-none rounded-[45px]" />
      <div className="absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[49px] text-[#454545] text-[20px] text-nowrap top-[32px] translate-y-[-50%] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">learn more</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[rgba(43,162,75,0.2)] content-stretch flex items-center left-[127px] p-[10px] rounded-[30px] top-[1346px] w-[227px]">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2ba24b] text-[20px] text-justify text-nowrap uppercase">
        <li className="ms-[30px]">
          <span className="leading-[normal]">Sustainability</span>
        </li>
      </ul>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute contents left-[-36px] top-[1021px]" data-name="Container">
      <div className="absolute h-[1000px] left-[-36px] top-[1021px] w-[1500px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage} />
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(-56.4354deg, rgba(255, 255, 255, 0) 32.005%, rgb(255, 255, 255) 67.398%)" }} />
        </div>
      </div>
      <Button />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[137px] not-italic text-[#454545] text-[16px] top-[1522px] tracking-[0.16px] translate-y-[-50%] w-[556px]">
        <p className="leading-[20px]">Hualu New Materials is located in Chongqing Changshou Economic and Technological Development Zone where a four-in-one developed transportaition network composed of highway.</p>
      </div>
      <p className="absolute capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[50px] left-[calc(50%-593px)] not-italic text-[50px] text-black top-[1411px] tracking-[-1px] w-[721px]">Aligned with Global ESG Goals</p>
      <Frame1 />
    </div>
  );
}

function SectionImage() {
  return (
    <div className="absolute h-[683px] left-[39px] rounded-[15px] top-[539px] w-[1362px]" data-name="Section Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[15px] size-full" src={imgSectionImage} />
    </div>
  );
}

function SectionImage1() {
  return (
    <div className="absolute h-[265px] left-[157px] rounded-[30px] top-[221px] w-[409px]" data-name="Section Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgSectionImage1} />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(43,162,75,0.2)] content-stretch flex items-center justify-center left-[127px] pl-[10px] pr-[28px] py-[10px] rounded-[30px] top-[60px]">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2ba24b] text-[20px] text-justify text-nowrap uppercase">
        <li className="ms-[30px]">
          <span className="leading-[normal]">about us</span>
        </li>
      </ul>
    </div>
  );
}

function PoweringASustainableFuture() {
  return (
    <div className="absolute contents left-[127px] top-[60px]" data-name="Powering a Sustainable Future">
      <SectionImage1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[696px] not-italic text-[#454545] text-[16px] text-justify top-[299px] tracking-[0.16px] w-[510px]">{`Hualu New Materials, backed by China National Chemical Engineering Group, is a leading developer and manufacturer of silica-based aerogel materials. We focus on R&D, production, and sales integration, aiming to create maximum value for customers while supporting green and low-carbon development.`}</p>
      <p className="absolute capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[50px] left-[calc(50%-593px)] not-italic text-[50px] text-black top-[118px] tracking-[-1px] w-[724px]">Powering a Sustainable Future</p>
      <Frame />
    </div>
  );
}

function HomePageSection() {
  return (
    <div className="absolute h-[1908px] left-[-1px] overflow-clip top-[799px] w-[1440px]" data-name="HomePageSection2">
      <Container />
      <SectionImage />
      <div className="absolute h-[508px] left-[690px] top-[601.5px] w-[401px]" data-name="Subtract">
        <div className="absolute inset-[0_-2%_-2.36%_0]" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 409 520">
            <g filter="url(#filter0_d_2_288)" id="Subtract">
              <path clipRule="evenodd" d={svgPaths.p27d15d00} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="520" id="filter0_d_2_288" width="409" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="4" dy="8" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.44 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_288" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_288" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[714px] not-italic text-[#002144] text-[28px] top-[926px] tracking-[-0.56px] w-[297px]">{`Certificates &Honors`}</p>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[108px] justify-center leading-[0] left-[714px] not-italic text-[#454545] text-[18px] top-[1031px] translate-y-[-50%] w-[347px]">
        <p className="leading-[1.5]">{`This top-grade certificate grants full qualification to serve all 21 industrial sectors in China, including EPC and project management.  >>>`}</p>
      </div>
      <PoweringASustainableFuture />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[rgba(43,162,75,0.2)] content-stretch flex items-center justify-center left-[161px] pl-[10px] pr-[23px] py-[10px] rounded-[30px] top-[1016px] w-[210px]">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2ba24b] text-[20px] text-justify text-nowrap uppercase">
        <li className="ms-[30px]">
          <span className="leading-[normal]">Our Products</span>
        </li>
      </ul>
    </div>
  );
}

function ButtonIconArrowLeft() {
  return (
    <ButtonIconArrowLeftBackgroundImage additionalClassNames="left-[1203px]">
      <circle cx="41" cy="41" id="Text input" r="40" stroke="var(--stroke-0, white)" strokeWidth="2" />
      <path d="M35.5 32L45 40.5L35.5 50" id="Vector 3" stroke="var(--stroke-0, white)" strokeWidth="2" />
    </ButtonIconArrowLeftBackgroundImage>
  );
}

function ButtonIconArrowLeft1() {
  return (
    <ButtonIconArrowLeftBackgroundImage additionalClassNames="left-[1108px]">
      <circle cx="41" cy="41" id="Text input" r="40" stroke="var(--stroke-0, white)" strokeWidth="2" />
      <path d="M45.5 32L36 40.5L45.5 50" id="Vector 4" stroke="var(--stroke-0, white)" strokeWidth="2" />
    </ButtonIconArrowLeftBackgroundImage>
  );
}

function Checkbox() {
  return (
    <div className="absolute contents left-[161px] top-[1016px]" data-name="Checkbox">
      <div className="absolute h-[520px] left-[161px] rounded-[30px] top-[1284px] w-[405px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage1} />
      </div>
      <div className="absolute h-[520px] left-[597px] rounded-[30px] top-[1284px] w-[405px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage2} />
      </div>
      <div className="absolute h-[520px] left-[1035px] rounded-[30px] top-[1284px] w-[405px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage3} />
      </div>
      <p className="absolute capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[50px] left-[calc(50%-559px)] not-italic text-[50px] text-white top-[1077px] tracking-[-1px] w-[445px]">High-performance aerogel solutions</p>
      <Frame3 />
      <ButtonIconArrowLeft />
      <ButtonIconArrowLeft1 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[189px] not-italic text-[20px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.35)] text-white top-[1674px] uppercase w-[342px]">Model Number: hUALU_ Pyshield Lite</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[629px] not-italic text-[20px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.35)] text-white top-[1674px] uppercase w-[342px]">Model Number: hUALU_ Pyshield pro</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1071px] not-italic text-[20px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.35)] text-white top-[1674px] uppercase w-[342px]">{`Model Number: hUALU_ Cryshield `}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(43,162,75,0.2)] content-stretch flex items-center justify-center left-[158px] pl-[10px] pr-[24px] py-[10px] rounded-[30px] top-[71px] w-[244px]">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2ba24b] text-[20px] text-justify text-nowrap uppercase">
        <li className="ms-[30px]">
          <span className="leading-[normal]">Our Technology</span>
        </li>
      </ul>
    </div>
  );
}

function TextInput() {
  return <BackgroundImage>{`Safety & Compliance`}</BackgroundImage>;
}

function TextInputContainer() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[457px]" data-name="Text input container">
      <TextInput />
    </div>
  );
}

function TextInputContainer1() {
  return (
    <div className="absolute content-stretch flex items-center left-[560px] top-[742px] w-[457px]" data-name="Text input container">
      <TextInputContainer />
    </div>
  );
}

function TextInputContainer2() {
  return (
    <div className="absolute contents left-[560px] top-[742px]" data-name="Text input container">
      <div className="absolute capitalize flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[560px] not-italic text-[#bac6d3] text-[14px] top-[839px] tracking-[-0.28px] translate-y-[-50%] w-[548px]">
        <p className="leading-[normal]">Meets international standards and certifications for safety, environment, and reliability.</p>
      </div>
      <TextInputContainer1 />
      <TextInputBackgroundImage additionalClassNames="top-[928px]" />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[457px]" data-name="Text input">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[24px] text-white w-[548px]">
        <p className="mb-0">Manufacturing</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function TextInputContainer3() {
  return (
    <div className="content-stretch flex flex-col h-[46px] items-start overflow-clip relative shrink-0 w-[457px]" data-name="Text input container">
      <TextInput1 />
    </div>
  );
}

function TextInputContainer4() {
  return (
    <div className="absolute content-stretch flex items-center left-[560px] top-[489px] w-[457px]" data-name="Text input container">
      <TextInputContainer3 />
    </div>
  );
}

function TextInputContainer5() {
  return (
    <div className="absolute contents left-[560px] top-[489px]" data-name="Text input container">
      <div className="absolute capitalize flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[normal] left-[560px] not-italic text-[#bac6d3] text-[14px] top-[581.5px] tracking-[-0.28px] translate-y-[-50%] w-[548px]">
        <p className="mb-0">Digitalized production with rigorous QA, enabling consistent quality and large‑scale output.</p>
        <p>&nbsp;</p>
      </div>
      <TextInputContainer4 />
      <TextInputBackgroundImage additionalClassNames="top-[673px]" />
    </div>
  );
}

function Input() {
  return <BackgroundImage>Thermal Performance</BackgroundImage>;
}

function Container1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Container">
      <Input />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex items-center left-[560px] top-[233px] w-[457px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function TextInputContainer6() {
  return (
    <div className="absolute contents left-[560px] top-[233px]" data-name="Text input container">
      <div className="absolute capitalize flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[560px] not-italic text-[#bac6d3] text-[14px] top-[323px] tracking-[-0.28px] translate-y-[-50%] w-[548px]">
        <p className="leading-[normal]">Best‑in‑class λ values with stable long‑term performance across extreme environments.</p>
      </div>
      <Container2 />
      <TextInputBackgroundImage additionalClassNames="top-[416px]" />
    </div>
  );
}

function TextInputContainer7() {
  return (
    <div className="absolute contents left-[158px] top-[71px]" data-name="Text input container">
      <p className="absolute capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[50px] left-[calc(50%-562px)] not-italic text-[50px] text-white top-[133px] tracking-[-1px] w-[445px]">Efficient, reliable, scalable</p>
      <Frame2 />
      <TextInputContainer2 />
      <TextInputContainer5 />
      <TextInputContainer6 />
    </div>
  );
}

function VerticalContainer() {
  return (
    <div className="absolute h-[1930px] left-[-1px] overflow-clip top-[2707px] w-[1440px]" data-name="Vertical container">
      <div className="absolute h-[1930px] left-0 top-0 w-[1440px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1930">
          <path d="M0 0H1440V1930H0V0Z" fill="var(--fill-0, #002144)" id="Rectangle 12" />
        </svg>
      </div>
      <Checkbox />
      <TextInputContainer7 />
    </div>
  );
}

function Tooltip() {
  return (
    <div className="absolute contents left-[-31px] top-[860px]" data-name="Tooltip">
      <div className="absolute h-[509px] left-[-31px] top-[860px] w-[1502px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="absolute h-[208px] left-[1199px] top-[1146px] w-[219px]" data-name="chemical logo">
        <img alt="" className="block max-w-none size-full" height="208" src={imgChemicalLogo} width="219" />
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[399px] justify-center leading-[1.5] left-[161px] not-italic text-[0px] text-white top-[1126.5px] translate-y-[-50%] w-[998px]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold mb-0 text-[48px]">Mission</p>
        <p className="mb-0 text-[24px]">We focus on our customers’ challenges and needs, delivering competitive new-type products and high-quality technical services to continuously create maximum value.</p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold mb-0 text-[48px]">Core Value</p>
        <p className="mb-0 text-[24px]">Always go one step further—exceed expectations and establish new best practices through continual innovation and execution.</p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold mb-0 text-[48px]">Brand Commitment</p>
        <p className="text-[24px]">Hualu New Materials — worthy of your trust.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[rgba(43,162,75,0.2)] content-stretch flex items-center left-[162px] pl-0 pr-[33px] py-[10px] rounded-[30px] top-[60px] w-[198px]">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2ba24b] text-[20px] text-justify uppercase w-[175px]">
        <li className="ms-[30px]">
          <span className="leading-[normal]">Case Studies</span>
        </li>
      </ul>
    </div>
  );
}

function Tooltip1() {
  return (
    <div className="absolute contents left-[161px] top-[60px]" data-name="Tooltip">
      <div className="absolute h-[434px] left-[834px] rounded-[30px] top-[334px] w-[444px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage5} />
      </div>
      <div className="absolute h-[434px] left-[161px] rounded-[30px] top-[334px] w-[636px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage6} />
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[657px] not-italic text-[#454545] text-[16px] text-justify top-[238px] tracking-[0.16px] translate-y-[-50%] w-[621px]">
        <p className="leading-[20px]">Hualu New Materials is located in Chongqing Changshou Economic and Technological Development Zone where a four-in-one developed transportaition network composed of highway.</p>
      </div>
      <p className="absolute capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[50px] left-[calc(50%-558px)] not-italic text-[50px] text-black top-[112px] tracking-[-1px] w-[721px]">Our Projects</p>
      <Frame4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[1485px] left-[-1px] overflow-clip top-[4637px] w-[1440px]" data-name="Container">
      <Tooltip />
      <Tooltip1 />
    </div>
  );
}

export default function HomePages() {
  return (
    <div className="bg-white border border-solid border-white relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="HomePages">
      <Hero />
      <HomePageSection />
      <VerticalContainer />
      <Container3 />
    </div>
  );
}