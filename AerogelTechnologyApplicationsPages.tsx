import svgPaths from "./svg-irow7flq7t";
import clsx from "clsx";
import imgRating from "figma:asset/6b52d42d434584d1cebc0d9ce1361d8406f9f34f.png";
import imgContainer from "figma:asset/39be03c8082f283b71c2484d518ce3a8e7deab1c.png";
import imgTooltip from "figma:asset/712e61e1ced81f27472fcd1655e251cb7f4c9623.png";
import imgSwitch from "figma:asset/ba56359207b8d94d72bb1f72cb09eb3b7aeffed3.png";
import imgSwitch1 from "figma:asset/db41f09d6bdcb51a00926b65f8049c2e6c67606e.png";
import imgCheckbox from "figma:asset/ba1a13425bdafd03b874a3973fdb064237559341.png";
import imgSwitch2 from "figma:asset/01ad26d8087fcc8781e477d4692c16aeb0f015ae.png";
import imgVerticalContainer from "figma:asset/8f5caf6f113073f0962697dae0d605f348bcb077.png";
import imgImage from "figma:asset/d32b4d941f08ece9914c332941ee9f4f160b7858.png";
import imgImage1 from "figma:asset/ad1f498fd5685e595f9ab702f090bb2de6d37a2d.png";
import imgImage2 from "figma:asset/a5b05b2729d3571d0029af9ad059de2ed92efb4c.png";
import imgImage3 from "figma:asset/027d49af4e89b98ac8bb2e04f72b3549541676fb.png";
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("[grid-area:1_/_1] relative size-[62px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
        {children}
      </svg>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("bg-white relative rounded-[16px] shrink-0 w-[281.75px]", additionalClassNames)}>
      <div className="overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[211.5px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function SectionTitle2({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <g id="Section Title">{children}</g>
    </Wrapper>
  );
}
type InputForm2TextInputProps = {
  additionalClassNames?: string;
};

function InputForm2TextInput({ additionalClassNames = "" }: InputForm2TextInputProps) {
  return (
    <div className={clsx("[grid-area:1_/_1] h-0 ml-[14.9px] relative w-[648px]", additionalClassNames)}>
      <div className="absolute inset-[-2px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 648 2">
          <line id="Text input" stroke="var(--stroke-0, #0B58A6)" strokeWidth="2" x2="648" y1="1" y2="1" />
        </svg>
      </div>
    </div>
  );
}
type CalendarHelperProps = {
  additionalClassNames?: string;
};

function CalendarHelper({ additionalClassNames = "" }: CalendarHelperProps) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("[grid-area:1_/_1] flex h-[31px] items-center justify-center mt-[342px] relative w-0", additionalClassNames)}>
      <div className="flex-none rotate-[90deg]">
        <div className="h-0 relative w-[31px]" data-name="Slider">
          <div className="absolute inset-[-3px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 3">
              <line id="Slider" stroke="var(--stroke-0, black)" strokeWidth="3" x2="31" y1="1.5" y2="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type Text6Props = {
  text: string;
  additionalClassNames?: string;
};

function Text6({ text, additionalClassNames = "" }: Text6Props) {
  return (
    <div className={clsx("absolute bg-[#f2f4f6] content-stretch flex gap-[9px] h-[44px] items-center justify-center px-[11px] py-[9px] rounded-[10px] w-[145px]", additionalClassNames)}>
      <div className="bg-white rounded-[5px] shrink-0 size-[25px]" data-name="Text input" />
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#454545] text-[14px] text-justify text-nowrap tracking-[-0.28px]">{text}</p>
    </div>
  );
}
type ButtonVideoDemonstrationTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonVideoDemonstrationText({ text, additionalClassNames = "" }: ButtonVideoDemonstrationTextProps) {
  return (
    <div className={clsx("absolute bg-black content-stretch flex flex-col h-[30px] items-center justify-center rounded-[30px] w-[174px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[30px]" />
      <p className="capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[-0.45px] w-full">{text}</p>
    </div>
  );
}
type ButtonVideoProps = {
  additionalClassNames?: string;
};

function ButtonVideo({ additionalClassNames = "" }: ButtonVideoProps) {
  return (
    <div className={clsx("absolute size-[80px] translate-x-[-50%]", additionalClassNames)}>
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(69, 69, 69, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <g id="ButtonVideo">
            <rect fill="var(--fill-0, #454545)" height="79" rx="39.5" width="79" x="0.5" y="0.5" />
            <rect height="79" rx="39.5" stroke="var(--stroke-0, white)" width="79" x="0.5" y="0.5" />
            <path d={svgPaths.p3ad99980} fill="var(--fill-0, white)" id="Vector 10" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type Text5Props = {
  text: string;
  additionalClassNames?: string;
};

function Text5({ text, additionalClassNames = "" }: Text5Props) {
  return (
    <div className={clsx("absolute bg-[#f2f4f6] content-stretch flex gap-[6px] h-[54px] items-center px-[54px] py-[13px] rounded-[15px] w-[305px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(217,217,217,0.2)] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.72] not-italic relative shrink-0 text-[#454545] text-[16px] text-justify text-nowrap tracking-[0.32px]">{text}</p>
      <Helper />
    </div>
  );
}

function Helper() {
  return (
    <Wrapper>
      <g id="ExpandRight">
        <path d="M9 6L15 12L9 18" id="Vector 9" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
      </g>
    </Wrapper>
  );
}
type Text4Props = {
  text: string;
  additionalClassNames?: string;
};

function Text4({ text, additionalClassNames = "" }: Text4Props) {
  return (
    <div className={clsx("absolute bg-[#f2f4f6] content-stretch flex gap-[9px] h-[44px] items-center justify-center px-[11px] py-[9px] rounded-[10px] w-[145px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(217,217,217,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-white rounded-[5px] shrink-0 size-[25px]" data-name="Text input" />
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#454545] text-[14px] text-justify text-nowrap tracking-[-0.28px]">{text}</p>
    </div>
  );
}
type Text3Props = {
  text: string;
  additionalClassNames?: string;
};

function Text3({ text, additionalClassNames = "" }: Text3Props) {
  return (
    <div className={clsx("absolute bg-white h-[24px] left-[16px] rounded-[1.67772e+07px] top-[17.5px]", additionalClassNames)}>
      <p className="absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[49.5px] not-italic text-[#0b58a6] text-[14px] text-center text-nowrap top-[4px] tracking-[-0.28px] translate-x-[-50%]">{text}</p>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <Wrapper1>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#454545] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[208px]">{text}</p>
    </Wrapper1>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <Wrapper1>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#454545] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[207px]">{text}</p>
    </Wrapper1>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="h-[24px] relative shrink-0 w-[211.5px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#0b58a6] text-[20px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">{text}</p>
      </div>
    </div>
  );
}

function InputFormContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[266px] items-start left-px pl-[24px] pr-0 py-[24px] top-[257px] w-[259.5px]" data-name="Input form container">
      <Text text="Petrochemical Industry" />
      <Text1 text="Thermal insulation for reactors, columns, tanks, boilers, steel structures and process pipelines, improving operational stability and reducing energy consumption." />
    </div>
  );
}

function Rating() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[259.5px]" data-name="Rating">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRating} />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[24px] left-[16px] rounded-[1.67772e+07px] top-[17.5px] w-[89.211px]" data-name="Text input">
      <p className="absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[44px] not-italic text-[#0b58a6] text-[14px] text-center text-nowrap top-[4px] tracking-[-0.28px] translate-x-[-50%]">INDUSTRY</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[256px] left-px overflow-clip top-px w-[259.5px]" data-name="Container">
      <Rating />
      <TextInput />
    </div>
  );
}

function Card() {
  return (
    <Wrapper2 additionalClassNames="h-[524px]">
      <InputFormContainer />
      <Container />
    </Wrapper2>
  );
}

function Container1() {
  return (
    <Wrapper1>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#454545] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[187px]">Applied to walls, roofs, floors, slabs and glass façades of residential and commercial buildings, delivering high-efficiency insulation with thinner envelope structures.</p>
    </Wrapper1>
  );
}

function VerticalContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[266px] items-start left-px pl-[24px] pr-0 py-[24px] top-[257px] w-[259.5px]" data-name="Vertical container">
      <Text text="Architecture" />
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[259.5px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-white h-[24px] left-[16px] rounded-[1.67772e+07px] top-[17.5px] w-[93.602px]" data-name="Container">
      <p className="absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[46.5px] not-italic text-[#0b58a6] text-[14px] text-center text-nowrap top-[4px] tracking-[-0.28px] translate-x-[-50%]">BUILDINGS</p>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="absolute h-[256px] left-px overflow-clip top-px w-[259.5px]" data-name="Checkbox">
      <Container2 />
      <Container3 />
    </div>
  );
}

function CheckboxContainer() {
  return (
    <Wrapper2 additionalClassNames="h-[524px]">
      <VerticalContainer />
      <Checkbox />
    </Wrapper2>
  );
}

function Button() {
  return (
    <div className="h-[48px] relative shrink-0 w-[211.5px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#0b58a6] text-[20px] top-[-0.5px] tracking-[-0.3125px] w-[171px]">Urban Heating Network System</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <Wrapper1>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#454545] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[209px]">Insulation and heat-loss control for steam and hot-water pipelines in district and urban heating networks, significantly reducing energy loss during transmission.</p>
    </Wrapper1>
  );
}

function InputForm() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[266px] items-start left-px pl-[24px] pr-0 py-[24px] top-[257px] w-[259.5px]" data-name="Input form">
      <Button />
      <Container4 />
    </div>
  );
}

function Tooltip() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[259.5px]" data-name="Tooltip">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTooltip} />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute bg-white h-[24px] left-[16px] rounded-[1.67772e+07px] top-[17.5px] w-[142.938px]" data-name="Text input">
      <p className="absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[70.5px] not-italic text-[#0b58a6] text-[14px] text-center text-nowrap top-[4px] tracking-[-0.28px] translate-x-[-50%]">DISTRICT HEATING</p>
    </div>
  );
}

function TooltipContainer() {
  return (
    <div className="absolute h-[256px] left-px overflow-clip top-px w-[259.5px]" data-name="Tooltip container">
      <Tooltip />
      <TextInput1 />
    </div>
  );
}

function Checkbox1() {
  return (
    <Wrapper2 additionalClassNames="h-[524px]">
      <InputForm />
      <TooltipContainer />
    </Wrapper2>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[266px] items-start left-px pl-[24px] pr-0 py-[24px] top-[257px] w-[259.5px]" data-name="Container">
      <Text text="Automobile" />
      <Text2 text="Used for exhaust systems, mufflers, front-end modules and battery packs of new energy vehicles, providing thermal insulation and fire protection to enhance safety and comfort." />
    </div>
  );
}

function Switch() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[259.5px]" data-name="Switch">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSwitch} />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="absolute bg-white h-[24px] left-[16px] rounded-[1.67772e+07px] top-[17.5px] w-[108.719px]" data-name="Text input">
      <p className="absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[54px] not-italic text-[#0b58a6] text-[14px] text-center text-nowrap top-[4px] tracking-[-0.28px] translate-x-[-50%]">AUTOMOTIVE</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[256px] left-px overflow-clip top-px w-[259.5px]" data-name="Button">
      <Switch />
      <TextInput2 />
    </div>
  );
}

function Card1() {
  return (
    <Wrapper2 additionalClassNames="h-[524px]">
      <Container5 />
      <Button1 />
    </Wrapper2>
  );
}

function VerticalContainer1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[396px] items-start left-px pl-[24px] pr-0 py-[24px] top-[257px] w-[259.5px]" data-name="Vertical container">
      <Text text="Military Industry" />
      <Text2 text="Provides thermal insulation, fire protection and structural protection for warships, armored vehicles, fighter jets, helicopters and missiles, as well as radar-absorbing and explosion-proof sound-absorbing materials." />
    </div>
  );
}

function Switch1() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[259.5px]" data-name="Switch">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSwitch1} />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white h-[24px] left-[16px] rounded-[1.67772e+07px] top-[16.5px] w-[81.789px]" data-name="Container">
      <p className="absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41px] not-italic text-[#0b58a6] text-[14px] text-center text-nowrap top-[5px] tracking-[-0.28px] translate-x-[-50%]">DEFENSE</p>
    </div>
  );
}

function SwitchContainer() {
  return (
    <div className="absolute h-[256px] left-px overflow-clip top-px w-[259.5px]" data-name="Switch container">
      <Switch1 />
      <Container6 />
    </div>
  );
}

function Card2() {
  return (
    <Wrapper2 additionalClassNames="h-[654px]">
      <VerticalContainer1 />
      <SwitchContainer />
    </Wrapper2>
  );
}

function VerticalContainer2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[396px] items-start left-px pl-[24px] pr-0 py-[24px] top-[257px] w-[259.5px]" data-name="Vertical container">
      <Text text="Aerospace" />
      <Text1 text="Applied to thermal insulation of spacecraft and aircraft bodies and components, insulation layers for space suits, and advanced uses such as cosmic particle capture." />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[259.5px]" data-name="Checkbox">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCheckbox} />
    </div>
  );
}

function CheckboxContainer1() {
  return (
    <div className="absolute h-[256px] left-px overflow-clip top-px w-[259.5px]" data-name="Checkbox container">
      <Checkbox2 />
      <Text3 text="AEROSPACE" additionalClassNames="w-[99.891px]" />
    </div>
  );
}

function Card3() {
  return (
    <Wrapper2 additionalClassNames="h-[654px]">
      <VerticalContainer2 />
      <CheckboxContainer1 />
    </Wrapper2>
  );
}

function VerticalContainer3() {
  return (
    <Wrapper1>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#454545] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[210px]">High-performance insulation layers for refrigerators, microwaves and other appliances, and lightweight insulation for cold-protective clothing, hiking shoes and tents, balancing comfort and energy efficiency.</p>
    </Wrapper1>
  );
}

function VerticalContainer4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[396px] items-start left-px pl-[24px] pr-0 py-[24px] top-[257px] w-[259.5px]" data-name="Vertical container">
      <Text text="Daily Consumption" />
      <VerticalContainer3 />
    </div>
  );
}

function Switch2() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[259.5px]" data-name="Switch">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSwitch2} />
    </div>
  );
}

function SwitchContainer1() {
  return (
    <div className="absolute h-[256px] left-px overflow-clip top-px w-[259.5px]" data-name="Switch container">
      <Switch2 />
      <Text3 text="CONSUMER" additionalClassNames="w-[97.531px]" />
    </div>
  );
}

function Checkbox3() {
  return (
    <Wrapper2 additionalClassNames="h-[654px]">
      <VerticalContainer4 />
      <SwitchContainer1 />
    </Wrapper2>
  );
}

function Container7() {
  return (
    <Wrapper1>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#454545] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[211px]">{`Electronics: Low-dielectric capacitor materials and protective layers for optoelectronic devices. Environment: Catalyst carriers and sound-damping materials. Medical & Pharma: Contrast agents, drug carriers and additives. Sensing: Cerenkov detectors and other advanced detection devices.`}</p>
    </Wrapper1>
  );
}

function VerticalContainer5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[396px] items-start left-px pl-[24px] pr-0 py-[24px] top-[257px] w-[259.5px]" data-name="Vertical container">
      <Text text="Other Fields" />
      <Container7 />
    </div>
  );
}

function VerticalContainer6() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[259.5px]" data-name="Vertical container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerticalContainer} />
    </div>
  );
}

function TextInput3() {
  return (
    <div className="absolute bg-white h-[24px] left-[16px] rounded-[1.67772e+07px] top-[17.5px] w-[190.695px]" data-name="Text input">
      <p className="absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[94.5px] not-italic text-[#0b58a6] text-[14px] text-center text-nowrap top-[4px] tracking-[-0.28px] translate-x-[-50%]">ADVANCED APPLICATIONS</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[256px] left-px overflow-clip top-px w-[259.5px]" data-name="Container">
      <VerticalContainer6 />
      <TextInput3 />
    </div>
  );
}

function Card4() {
  return (
    <Wrapper2 additionalClassNames="h-[654px]">
      <VerticalContainer5 />
      <Container8 />
    </Wrapper2>
  );
}

function Table() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[24px] items-start left-[108px] top-[4390px] w-[1199px]" data-name="Table">
      <Card />
      <CheckboxContainer />
      <Checkbox1 />
      <Card1 />
      <Card2 />
      <Card3 />
      <Checkbox3 />
      <Card4 />
    </div>
  );
}

function TextInputContainer() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Text input container">
      <div className="absolute bg-white border-[#2ba24b] border-[6px_0px_0px] border-solid h-[696px] left-0 rounded-[20px] shadow-[0px_7px_7px_0px_rgba(0,0,0,0.2)] top-0 w-[362px]" data-name="shadow" />
      <div className="absolute bg-black h-[198px] left-0 rounded-[15px] top-[6px] w-[362px]" data-name="Text input" />
    </div>
  );
}

function Temperature() {
  return (
    <Wrapper>
      <g id="Temperature">
        <path d={svgPaths.p2fe3af00} fill="var(--stroke-0, #2BA24B)" id="Vertical container" />
        <circle cx="12" cy="16" fill="var(--fill-0, #2BA24B)" id="Rating" r="2" />
      </g>
    </Wrapper>
  );
}

function Button200C() {
  return (
    <div className="absolute bg-[rgba(43,162,75,0.2)] content-stretch flex items-center justify-between left-[223px] p-[5px] rounded-[5px] top-[238px] w-[102px]" data-name="Button200C">
      <Temperature />
      <p className="capitalize font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2ba24b] text-[17px] text-center text-nowrap tracking-[-0.34px]">≤ 200°C</p>
    </div>
  );
}

function VedioCard() {
  return (
    <div className="absolute contents left-0 top-0" data-name="VedioCard1">
      <TextInputContainer />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[83px] leading-[1.72] left-[29px] not-italic text-[#454545] text-[16px] top-[318px] w-[301px]">Flexible aerogel composite for low-temperature pipelines and equipment.</p>
      <p className="absolute capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] left-[31px] not-italic text-[28px] text-black text-nowrap top-[230px] tracking-[-0.56px]">Pyshield Lite</p>
      <p className="absolute capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] left-[29px] not-italic text-[#454545] text-[17px] text-nowrap top-[267px] tracking-[-0.34px]">Flexible Insulation</p>
      <Text4 text="Flexible" additionalClassNames="left-[29px] top-[425px]" />
      <Text4 text="Low Temp" additionalClassNames="left-[188px] top-[425px]" />
      <Text4 text="Equipment" additionalClassNames="left-[188px] top-[485px]" />
      <Text4 text="Pipelines" additionalClassNames="left-[29px] top-[485px]" />
      <Text5 text="View Technical Data" additionalClassNames="left-[29px] top-[559px]" />
      <Button200C />
      <ButtonVideo additionalClassNames="left-[calc(50%-407.5px)] top-[54px]" />
      <ButtonVideoDemonstrationText text="Video Demonstration" additionalClassNames="left-[20px] top-[161px]" />
    </div>
  );
}

function TextInputContainer1() {
  return (
    <div className="absolute contents left-[405px] top-0" data-name="Text input container">
      <div className="absolute bg-white border-[#0b58a6] border-[6px_0px_0px] border-solid h-[696px] left-[406px] rounded-[20px] shadow-[0px_7px_7px_0px_rgba(0,0,0,0.2)] top-0 w-[362px]" data-name="Text input" />
      <div className="absolute bg-black h-[198px] left-[405px] rounded-[15px] top-[6px] w-[367px]" data-name="Text input" />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#f2f4f6] content-stretch flex gap-[9px] h-[44px] items-center justify-center left-[434px] px-[11px] py-[9px] rounded-[10px] top-[435px] w-[145px]" data-name="Button2-1">
      <div className="bg-white rounded-[5px] shrink-0 size-[25px]" data-name="Text input" />
      <div className="capitalize font-['Inter:Medium',sans-serif] font-medium h-[34px] leading-[normal] not-italic relative shrink-0 text-[#454545] text-[14px] text-justify tracking-[-0.28px] w-[76px]">
        <p className="mb-0">High Strength</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[#f2f4f6] content-stretch flex gap-[9px] h-[44px] items-center justify-center left-[434px] px-[11px] py-[9px] rounded-[10px] top-[502px] w-[145px]">
      <div className="bg-white rounded-[5px] shrink-0 size-[25px]" data-name="Text input" />
      <div className="capitalize font-['Inter:Medium',sans-serif] font-medium h-[22px] leading-[normal] not-italic relative shrink-0 text-[#454545] text-[14px] text-justify tracking-[-0.28px] w-[77px]">
        <p className="mb-0">Mainstream</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <SectionTitle2>
      <path d={svgPaths.p2fe3af00} fill="var(--stroke-0, #0B58A6)" id="Vertical container" />
      <circle cx="12" cy="16" fill="var(--fill-0, #0B58A6)" id="Container" r="2" />
    </SectionTitle2>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-[rgba(11,88,166,0.15)] content-stretch flex gap-[5px] items-center justify-center left-[629px] p-[5px] rounded-[5px] top-[238px]">
      <SectionTitle />
      <div className="capitalize flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-end leading-[0] not-italic relative shrink-0 text-[#0b58a6] text-[17px] text-nowrap tracking-[-0.34px]">
        <p className="leading-[normal]">≤ 650°C</p>
      </div>
    </div>
  );
}

function VedioCard1() {
  return (
    <div className="absolute contents left-[405px] top-0" data-name="VedioCard2">
      <TextInputContainer1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[83px] leading-[1.72] left-[435px] not-italic text-[#454545] text-[16px] top-[318px] w-[301px]">High-strength composite for mainstream industrial insulation applications.</p>
      <p className="absolute capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] left-[437px] not-italic text-[28px] text-black text-nowrap top-[230px] tracking-[-0.56px]">Pyshield Pro</p>
      <p className="absolute capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] left-[435px] not-italic text-[#454545] text-[17px] text-nowrap top-[267px] tracking-[-0.34px]">Industrial Standard</p>
      <Button4 />
      <Text6 text="Industrial" additionalClassNames="left-[597px] top-[435px]" />
      <Text6 text="Insulation" additionalClassNames="left-[597px] top-[502px]" />
      <Frame12 />
      <Text5 text="View Technical Data" additionalClassNames="justify-center left-[435px] top-[559px]" />
      <ButtonVideoDemonstrationText text="Video Demonstration" additionalClassNames="left-[425px] top-[161px]" />
      <ButtonVideo additionalClassNames="left-[calc(50%-2.5px)] top-[54px]" />
      <Frame10 />
    </div>
  );
}

function TextInputContainer2() {
  return (
    <div className="absolute contents left-[815px] top-0" data-name="Text input container">
      <div className="absolute bg-white border-[#d88a2e] border-[6px_0px_0px] border-solid h-[696px] left-[815px] rounded-[20px] shadow-[0px_7px_7px_0px_rgba(0,0,0,0.2)] top-0 w-[362px]" data-name="Text input" />
      <div className="absolute bg-black h-[198px] left-[815px] rounded-[15px] top-[6px] w-[362px]" data-name="Text input" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-[#f2f4f6] content-stretch flex gap-[9px] h-[44px] items-center justify-center left-[843px] px-[11px] py-[9px] rounded-[10px] top-[496px] w-[145px]">
      <div className="bg-white rounded-[5px] shrink-0 size-[25px]" data-name="Text input" />
      <div className="capitalize font-['Inter:Medium',sans-serif] font-medium h-[26px] leading-[normal] not-italic relative shrink-0 text-[#454545] text-[14px] text-justify tracking-[-0.28px] w-[63px]">
        <p className="mb-0">Extreme Temp</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function ButtonViewTechnicalData() {
  return (
    <div className="absolute bg-[#f2f4f6] content-stretch flex h-[54px] items-center justify-between left-[844px] px-[54px] py-[13px] rounded-[15px] top-[619px] w-[305px]" data-name="ButtonView Technical Data">
      <div aria-hidden="true" className="absolute border border-[rgba(217,217,217,0.2)] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.72] not-italic relative shrink-0 text-[#454545] text-[16px] text-justify text-nowrap tracking-[0.32px]">View Technical Data</p>
      <Helper />
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute contents left-[843px] top-[496px]" data-name="Card">
      <Frame13 />
      <Text6 text="Furnaces" additionalClassNames="left-[1007px] top-[496px]" />
      <Text6 text="Exhausts" additionalClassNames="left-[1007px] top-[560px]" />
      <Text4 text="Reactors" additionalClassNames="left-[843px] top-[560px]" />
      <ButtonViewTechnicalData />
    </div>
  );
}

function SectionTitle1() {
  return (
    <SectionTitle2>
      <path d={svgPaths.p2fe3af00} fill="var(--stroke-0, black)" id="Vertical container" />
      <circle cx="12" cy="16" fill="var(--fill-0, black)" id="Rating" r="2" />
    </SectionTitle2>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[rgba(216,138,46,0.15)] content-stretch flex gap-[5px] items-center justify-center left-[1038px] p-[5px] rounded-[5px] top-[238px]">
      <SectionTitle1 />
      <div className="capitalize flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-end leading-[0] not-italic relative shrink-0 text-[17px] text-black tracking-[-0.34px] w-[78px]">
        <p className="leading-[normal]">500–1000°C</p>
      </div>
    </div>
  );
}

function VedioCard2() {
  return (
    <div className="absolute contents left-[815px] top-0" data-name="VedioCard3">
      <TextInputContainer2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[107px] leading-[1.72] left-[844px] not-italic text-[#454545] text-[16px] top-[363px] w-[301px]">Engineered for extreme high-temperature environments such as furnaces, reactors, and exhaust systems.</p>
      <p className="absolute capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] left-[844px] not-italic text-[28px] text-black top-[230px] tracking-[-0.56px] w-[169px]">Pyshield Pro+</p>
      <div className="absolute capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] left-[844px] not-italic text-[#454545] text-[17px] text-nowrap top-[312px] tracking-[-0.34px]">
        <p className="mb-0">Extreme Heat Shield</p>
        <p>&nbsp;</p>
      </div>
      <Card5 />
      <Frame11 />
      <ButtonVideoDemonstrationText text="Video Demonstration" additionalClassNames="left-[835px] top-[161px]" />
      <ButtonVideo additionalClassNames="left-[calc(50%+407.5px)] top-[54px]" />
    </div>
  );
}

function TextInputContainer3() {
  return (
    <div className="absolute contents left-0 top-[744px]" data-name="Text input container">
      <div className="absolute bg-white border-[#9ed9b5] border-[6px_0px_0px] border-solid h-[696px] left-0 rounded-[20px] shadow-[0px_7px_7px_0px_rgba(0,0,0,0.2)] top-[744px] w-[362px]" data-name="Text input" />
      <div className="absolute bg-black h-[198px] left-0 rounded-[15px] top-[750px] w-[362px]" data-name="Text input" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[#f2f4f6] content-stretch flex gap-[9px] h-[54px] items-center justify-center left-[31px] px-[11px] py-[9px] rounded-[10px] top-[1191px] w-[145px]">
      <div className="bg-white rounded-[5px] shrink-0 size-[25px]" data-name="Text input" />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[44px] leading-[20px] not-italic relative shrink-0 text-[#454545] text-[16px] text-justify tracking-[0.16px] w-[81px]">Custom Shape</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[#f2f4f6] content-stretch flex gap-[9px] h-[54px] items-center justify-center left-[190px] px-[11px] py-[9px] rounded-[10px] top-[1191px] w-[145px]">
      <div className="bg-white rounded-[5px] shrink-0 size-[25px]" data-name="Text input" />
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#454545] text-[14px] text-justify text-nowrap tracking-[-0.28px]">Battery</p>
    </div>
  );
}

function Ito() {
  return (
    <Wrapper>
      <g id="Ito">
        <path d={svgPaths.p31a6e400} id="Button" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
        <path d="M9 6V2" id="Vector 219" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
        <path d="M9 22V18" id="Vector 220" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
        <path d="M15 22V18" id="Vector 221" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
        <path d="M22 15L18 15" id="Vector 222" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
        <path d="M6 15L2 15" id="Vector 223" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
        <path d="M6 9L2 9" id="Vector 224" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
        <path d={svgPaths.p2f399000} id="Ellipse 122" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
      </g>
    </Wrapper>
  );
}

function ButtonCustom() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.1)] content-stretch flex gap-[7px] items-center justify-center left-[221px] p-[5px] rounded-[5px] top-[983px]" data-name="ButtonCustom">
      <Ito />
      <p className="capitalize font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.34px]">Custom</p>
    </div>
  );
}

function VedioCard3() {
  return (
    <div className="absolute contents left-0 top-[744px]" data-name="VedioCard4">
      <TextInputContainer3 />
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[107px] leading-[1.72] left-[29px] not-italic text-[#454545] text-[16px] text-justify top-[1062px] w-[301px]">
        <p className="mb-0">Tailor-made aerogel materials: aerogel paper, molded parts, battery thermal shields, special thickness/shape/fireproof grades.</p>
        <p>&nbsp;</p>
      </div>
      <p className="absolute capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] left-[31px] not-italic text-[28px] text-black text-nowrap top-[974px] tracking-[-0.56px]">Pyshield TM</p>
      <p className="absolute capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] left-[29px] not-italic text-[#454545] text-[17px] text-nowrap top-[1011px] tracking-[-0.34px]">Customized Solutions</p>
      <Frame14 />
      <Frame15 />
      <Text6 text="Paper" additionalClassNames="left-[190px] overflow-clip top-[1266px]" />
      <Text6 text="Molded" additionalClassNames="left-[31px] overflow-clip top-[1266px]" />
      <Text5 text="View Technical Data" additionalClassNames="left-[29px] top-[1327px]" />
      <ButtonCustom />
      <ButtonVideoDemonstrationText text="Video Demonstration" additionalClassNames="left-[20px] top-[905px]" />
      <ButtonVideo additionalClassNames="left-[calc(50%-407.5px)] top-[798px]" />
    </div>
  );
}

function TextInputContainer4() {
  return (
    <div className="absolute contents left-[405px] top-[744px]" data-name="Text input container">
      <div className="absolute bg-white border-[#4a5565] border-[6px_0px_0px] border-solid h-[696px] left-[405px] rounded-[20px] shadow-[0px_7px_7px_0px_rgba(0,0,0,0.2)] top-[744px] w-[362px]" data-name="Text input" />
      <div className="absolute bg-black h-[198px] left-[405px] rounded-[15px] top-[750px] w-[362px]" data-name="Text input" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[#f2f4f6] content-stretch flex gap-[9px] h-[44px] items-center justify-center left-[594px] overflow-clip px-[11px] py-[9px] rounded-[10px] top-[1238px] w-[145px]">
      <div className="bg-white rounded-[5px] shrink-0 size-[25px]" data-name="Text input" />
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#454545] text-[14px] text-justify text-nowrap tracking-[-0.28px]">{`Pipelines   `}</p>
    </div>
  );
}

function Winter() {
  return (
    <Wrapper>
      <g id="Winter">
        <circle cx="12" cy="12" fill="var(--fill-0, #4A5565)" id="Slider" r="3" stroke="var(--stroke-0, #4A5565)" strokeWidth="2" />
        <path d={svgPaths.p32cf7d00} id="Vector 166" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeWidth="2" />
        <path d={svgPaths.pa982400} id="Vector 168" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeWidth="2" />
        <path d={svgPaths.p9a3e4e0} id="Vector 167" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeWidth="2" />
        <path d={svgPaths.paa8e400} id="Vector 169" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeWidth="2" />
      </g>
    </Wrapper>
  );
}

function Button198C() {
  return (
    <div className="absolute bg-[rgba(11,88,166,0.15)] content-stretch flex gap-[7px] items-center left-[626px] p-[5px] rounded-[5px] top-[982px]" data-name="Button -198C">
      <Winter />
      <p className="capitalize font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#4a5565] text-[17px] text-nowrap tracking-[-0.34px]">-198°C</p>
    </div>
  );
}

function VedioCard4() {
  return (
    <div className="absolute contents left-[405px] top-[744px]" data-name="VedioCard5">
      <TextInputContainer4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[83px] leading-[1.72] left-[434px] not-italic text-[#454545] text-[16px] text-justify top-[1062px] w-[301px]">Cryogenic aerogel composite designed for LNG pipelines, storage tanks, and low-temperature equipment.</p>
      <p className="absolute capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] left-[436px] not-italic text-[28px] text-black text-nowrap top-[974px] tracking-[-0.56px]">Cryshield</p>
      <p className="absolute capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] left-[434px] not-italic text-[#454545] text-[17px] text-nowrap top-[1011px] tracking-[-0.34px]">Flexible Insulation</p>
      <Text6 text="Cryogenic" additionalClassNames="left-[435px] overflow-clip top-[1178px]" />
      <Text6 text="LNG" additionalClassNames="left-[594px] overflow-clip top-[1178px]" />
      <Frame16 />
      <Text6 text="Tanks" additionalClassNames="left-[435px] overflow-clip top-[1238px]" />
      <Text5 text="View Technical Data" additionalClassNames="left-[434px] top-[1303px]" />
      <Button198C />
      <ButtonVideo additionalClassNames="left-[calc(50%-2.5px)] top-[798px]" />
    </div>
  );
}

function VedioSection() {
  return (
    <div className="absolute h-[1440px] left-[125px] top-[2653px] w-[1177px]" data-name="vedio section">
      <VedioCard />
      <VedioCard1 />
      <VedioCard2 />
      <VedioCard3 />
      <VedioCard4 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[rgba(43,162,75,0.2)] content-stretch flex h-[19px] items-center justify-center relative rounded-[15px] shrink-0">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold h-[13px] leading-[0] not-italic relative shrink-0 text-[#2ba24b] text-[11px] text-justify w-[101px]">
        <li className="ms-[16.5px]">
          <span className="leading-[1.2]">Our Products</span>
        </li>
      </ul>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-[125px] top-[2400px] w-[598px]" data-name="Container">
      <Frame19 />
      <p className="capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] min-w-full not-italic relative shrink-0 text-[40px] text-black tracking-[-0.8px] w-[min-content]">High-Performance Aerogel Composite Solutions</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[68px] leading-[20px] not-italic relative shrink-0 text-[#454545] text-[16px] text-justify tracking-[0.16px] w-[551px]">Hualu offers a full portfolio of aerogel composite materials designed for temperature ranges from −198°C to 1000°C, covering industrial, construction, energy, transportation, and aerospace needs.</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[67px] place-items-start relative" data-name="Button">
      <div className="[grid-area:1_/_1] border-4 border-[#828282] border-solid h-[54px] ml-0 mt-0 rounded-[25px] w-[307px]" data-name="Text input" />
      <p className="[grid-area:1_/_1] font-['Inter:Black',sans-serif] font-black h-[20px] leading-[1.65] ml-[15px] mt-[15px] not-italic relative text-[#828282] text-[0px] text-[16px] text-justify w-[275px]">
        <span>{`Condition: `}</span>
        <span className="text-[#f9866c]">DN30</span>
        <span className="text-[#f9866c]">0</span> <span className="capitalize">{`pipeline: `}</span>
        <span className="text-[#f9866c]">240°C</span>
      </p>
    </div>
  );
}

function Calendar() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Calendar">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[97px] leading-[20px] ml-[957px] mt-[219px] not-italic relative text-[#0b58a6] text-[16px] text-justify tracking-[0.16px] w-[218px]">Traditional materials require up to 3× more thickness to achieve the same R-value as nano-aerogel insulation.</p>
      <p className="[grid-area:1_/_1] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[47px] leading-[1.65] ml-0 mt-0 not-italic relative text-[#0b58a6] text-[32px] w-[975px]">Thickness Comparison: Achieving the Same Insulation Value</p>
      <CalendarHelper additionalClassNames="ml-[111px]" />
      <CalendarHelper additionalClassNames="ml-[343px]" />
      <CalendarHelper additionalClassNames="ml-[575px]" />
      <CalendarHelper additionalClassNames="ml-[814px]" />
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[37px] leading-[26px] ml-[25px] mt-[371px] not-italic relative text-[#828282] text-[16px] text-justify tracking-[-0.3125px] w-[184px]">Expanded Perlite – 128 mm</p>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[22px] leading-[26px] ml-[352px] mt-[371px] not-italic relative text-[#828282] text-[16px] text-center tracking-[-0.3125px] translate-x-[-50%] w-[184px]">Rock Wool – 82 mm</p>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[22px] leading-[26px] ml-[587px] mt-[371px] not-italic relative text-[#828282] text-[16px] text-center tracking-[-0.3125px] translate-x-[-50%] w-[184px]">Calcium Silicate – 68 mm</p>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[25px] leading-[1.72] ml-[706px] mt-[371px] not-italic relative text-[#0b58a6] text-[16px] text-justify w-[232px]">Aerogel Composites – 38 mm</p>
      <div className="[grid-area:1_/_1] h-[234px] ml-0 mt-[117px] relative w-[926px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <Button2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[532px] w-[1197px]">
      <Calendar />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[77px] leading-[1.65] relative shrink-0 text-[#0b58a6] text-[32px] w-full">{`Aerogel composites `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[50px] leading-[20px] relative shrink-0 text-[#454545] text-[16px] text-justify tracking-[0.16px] w-full">By combining nano-aerogel with flexible substrates such as glass fiber and ceramic fiber, CNCEC Hualu produces composite materials that maximize insulation performance while remaining lightweight and easy to install.</p>
    </div>
  );
}

function Temperature1() {
  return (
    <div className="[grid-area:1_/_1] ml-[176px] mt-[13px] relative size-[80px]" data-name="Temperature">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Temperature">
          <path d={svgPaths.p1904b00} fill="var(--stroke-0, white)" id="Text input" />
          <path d="M54 38.1543H61" id="Vector 509" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
          <path d="M54 28.1543H61" id="Vector 511" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
          <path d="M54 18.1543H67" id="Vector 512" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
          <circle cx="38" cy="57.1543" fill="var(--fill-0, white)" id="Text input_2" r="3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Card6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Card">
      <div className="[grid-area:1_/_1] bg-[#61b8d3] ml-0 mt-0 rounded-[25px] size-[270px]" data-name="Text input" />
      <div className="[grid-area:1_/_1] bg-white h-[182px] ml-0 mt-[100px] rounded-[25px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.25)] w-[270px]" data-name="Text input" />
      <p className="[grid-area:1_/_1] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.65] ml-[16px] mt-[22px] not-italic relative text-[16px] text-justify text-white w-[165px]">Maximum Efficiency, Minimum Thickness</p>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[164px] leading-[26px] ml-[36px] mt-[114px] not-italic relative text-[#33363f] text-[16px] text-justify tracking-[-0.3125px] w-[200px]">Achieves the same insulation effect with only ¼–½ the thickness of traditional materials, ideal for dense pipelines and confined spaces.</p>
      <Temperature1 />
    </div>
  );
}

function Humidity() {
  return (
    <Wrapper3 additionalClassNames="ml-[188px] mt-[21px]">
      <g id="Humidity">
        <path d={svgPaths.p15305900} id="Ellipse 69" stroke="var(--stroke-0, white)" strokeWidth="6" />
        <path d={svgPaths.p3a31ad00} id="Text input" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="6" />
      </g>
    </Wrapper3>
  );
}

function VerticalContainer7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Vertical container">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[270px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(7, 48, 95, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 270 270">
            <path d={svgPaths.p22c6e680} fill="var(--fill-0, #07305F)" id="Rectangle 4171" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[182px] ml-0 mt-[99px] relative w-[270px]">
        <div className="absolute inset-[-5.49%_-7.41%_-16.48%_-7.41%]" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 310 222">
            <g filter="url(#filter0_d_2_1936)" id="Rectangle 4172">
              <path d={svgPaths.p19ecfb00} fill="var(--fill-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="222" id="filter0_d_2_1936" width="310" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_1936" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_1936" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="[grid-area:1_/_1] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.65] ml-[17px] mt-[21px] not-italic relative text-[16px] text-justify text-white w-[148px]">{`Water-Repellent & Durable`}</p>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[164px] leading-[26px] ml-[36px] mt-[113px] not-italic relative text-[#33363f] text-[16px] text-justify tracking-[-0.3125px] w-[200px]">Hydrophobicity of up to 99% keeps out water and moisture, ensuring easy storage and a long service life.</p>
      <Humidity />
    </div>
  );
}

function Chield() {
  return (
    <Wrapper3 additionalClassNames="ml-[189px] mt-[21px]">
      <g id="Chield">
        <path d={svgPaths.p178bb300} id="Vector 4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="6" />
      </g>
    </Wrapper3>
  );
}

function Card7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Card">
      <div className="[grid-area:1_/_1] bg-[#0b58a6] ml-0 mt-0 rounded-[25px] size-[270px]" data-name="Container" />
      <div className="[grid-area:1_/_1] bg-white h-[182px] ml-0 mt-[100px] rounded-[25px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.25)] w-[270px]" data-name="Container" />
      <p className="[grid-area:1_/_1] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.65] ml-[21px] mt-[22px] not-italic relative text-[16px] text-justify text-white w-[146px]">Highest Safety Rating (A1)</p>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[164px] leading-[26px] ml-[36px] mt-[118px] not-italic relative text-[#33363f] text-[16px] text-justify tracking-[-0.3125px] w-[200px]">Inorganic, A1-class fire resistance helps protect pipes and equipment in case of fire or other hazards.</p>
      <Chield />
    </div>
  );
}

function SettingLine() {
  return (
    <Wrapper3 additionalClassNames="ml-[201px] mt-[14px]">
      <g id="SettingLine">
        <path d={svgPaths.pf21e00} fill="var(--stroke-0, white)" id="Text input" />
      </g>
    </Wrapper3>
  );
}

function Card8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Card">
      <div className="[grid-area:1_/_1] bg-[#2ba24b] ml-0 mt-0 rounded-[25px] size-[270px]" data-name="Text input" />
      <div className="[grid-area:1_/_1] bg-white h-[182px] ml-0 mt-[100px] rounded-[25px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.25)] w-[270px]" data-name="Text input" />
      <p className="[grid-area:1_/_1] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.65] ml-[22px] mt-[22px] not-italic relative text-[16px] text-justify text-white w-[165px]">{`Mechanical Flexibility & Strength`}</p>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[164px] leading-[26px] ml-[36px] mt-[118px] not-italic relative text-[#33363f] text-[16px] text-justify tracking-[-0.3125px] w-[200px]">Low density combined with flexibility, toughness, and compressive strength supports complex designs and installation requirements.</p>
      <SettingLine />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[43px] items-end leading-[0] relative shrink-0 w-full" data-name="Button">
      <Card6 />
      <VerticalContainer7 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[49px] items-start left-0 top-0 w-[1209px]" data-name="Frame">
      <Frame7 />
      <Button3 />
    </div>
  );
}

function VerticalContainer8() {
  return (
    <div className="absolute h-[928px] left-[125px] top-[1376px] w-[1209px]" data-name="Vertical container">
      <div className="absolute bg-[#f2f4f6] h-[1066px] left-[-125px] top-[-98px] w-[1440px]" data-name="Text input" />
      <Frame8 />
      <Frame />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[rgba(43,162,75,0.2)] content-stretch flex h-[19px] items-center justify-center p-[6px] relative rounded-[15px] shrink-0 w-[104px]">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold h-[13px] leading-[0] not-italic relative shrink-0 text-[#2ba24b] text-[11px] text-justify w-[109px]">
        <li className="ms-[16.5px]">
          <span className="leading-[1.2]">Our Technology</span>
        </li>
      </ul>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Frame18 />
      <p className="capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] min-w-full not-italic relative shrink-0 text-[40px] text-white tracking-[-0.8px] w-[min-content]">Advanced Nanoscale Insulation</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0 w-[584px]">
      <Frame3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[56px] leading-[20px] not-italic relative shrink-0 text-[#f2f4f6] text-[16px] tracking-[0.16px] w-full">Silica aerogel is one of the world’s lightest solids and the material with the lowest known thermal conductivity, enabling next-generation insulation and protection.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex h-[326px] items-start overflow-clip pointer-events-none relative shrink-0 w-[561px]">
      <div className="absolute h-[226px] right-[54px] rounded-[20px] top-[6px] w-[339px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[20px] size-full" src={imgImage1} />
        <div aria-hidden="true" className="absolute border-8 border-solid border-white inset-0 rounded-[20px]" />
      </div>
      <div className="absolute h-[139px] right-[340px] rounded-[20px] top-[134px] w-[197px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[20px] size-full" src={imgImage2} />
        <div aria-hidden="true" className="absolute border-8 border-solid border-white inset-[-8px] rounded-[28px]" />
      </div>
      <div className="absolute h-[110px] right-[14px] rounded-[20px] top-[194px] w-[139px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[20px] size-full" src={imgImage3} />
        <div aria-hidden="true" className="absolute border-8 border-solid border-white inset-[-8px] rounded-[28px]" />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[77px] items-center relative shrink-0 w-[1198px]">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function InputForm1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[205.25px] mt-[176px] place-items-start relative" data-name="Input form">
      <ul className="[grid-area:1_/_1] block font-['Inter:Medium',sans-serif] font-medium h-[443px] mt-0 not-italic relative text-[#454545] text-[16px] w-[397.264px]">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[3.55]">{`Thermal Conductivity: `}</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[3.55]">Density:</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[3.55]">Porosity:</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[3.55]">Particle Size:</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[3.55]">Specific Surface Area:</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[3.55]">Hydrophobicity:</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[3.55]">Fire Rating:</span>
        </li>
      </ul>
      <div className="[grid-area:1_/_1] font-['Inter:Medium',sans-serif] font-medium h-[443px] leading-[3.55] ml-[724.75px] mt-0 not-italic relative text-[#454545] text-[16px] text-right translate-x-[-100%] w-[174px]">
        <p className="mb-0">0.013–0.016 W/(K·m)</p>
        <p className="mb-0">1–30 kg/m³</p>
        <p className="mb-0">80–90%</p>
        <p className="mb-0">2–50 nm</p>
        <p className="mb-0">{` 600–1000 m²/g`}</p>
        <p className="mb-0">up to 99%</p>
        <p>A1-class</p>
      </div>
      <InputForm2TextInput additionalClassNames="mt-[47px]" />
      <InputForm2TextInput additionalClassNames="mt-[104px]" />
      <InputForm2TextInput additionalClassNames="mt-[332px]" />
      <InputForm2TextInput additionalClassNames="mt-[389px]" />
      <InputForm2TextInput additionalClassNames="mt-[275px]" />
      <InputForm2TextInput additionalClassNames="mt-[218px]" />
      <InputForm2TextInput additionalClassNames="mt-[161px]" />
    </div>
  );
}

function InputFormContainer1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Input form container">
      <div className="[grid-area:1_/_1] bg-[#f2f4f6] border border-[rgba(217,217,217,0.2)] border-solid h-[628px] ml-0 mt-0 rounded-[25px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.25)] w-[1210px]" data-name="Text input" />
      <p className="[grid-area:1_/_1] capitalize font-['Inter:Black',sans-serif] font-black leading-[1.65] ml-[406px] mt-[23px] not-italic relative text-[#0b58a6] text-[32px] text-justify w-[399px]">Core material properties</p>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[58px] leading-[20px] ml-[106px] mt-[84px] not-italic relative text-[#454545] text-[16px] text-justify tracking-[0.16px] w-[1000px]">Aerogel is an ultra-light solid 3-D nanomaterial with the lowest known thermal conductivity of any solid. Its fine, highly porous structure — with 2–50 nm particles, 80–90% porosity and a specific surface area of 600–1000 m²/g — creates a powerful thermal barrier at just 0.013–0.016 W/(K·m).</p>
      <InputForm1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#002144] content-stretch flex flex-col gap-[11px] items-start left-[-1px] pb-[73px] pl-[108px] pr-[121px] pt-[18px] top-[250px] w-[1440px]" data-name="Frame">
      <Frame6 />
      <InputFormContainer1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute capitalize content-stretch flex flex-col gap-[20px] items-center left-[calc(8.33%+99px)] not-italic top-[147px] w-[1003px]" data-name="Container">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[37px] relative shrink-0 text-[#002144] text-[60px] tracking-[-1.2px] w-full">{`Aerogel Technology & Applications`}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium h-[26px] leading-[35px] relative shrink-0 text-[#454545] text-[13px] text-center tracking-[-0.26px] w-full">{`Home / Aerogel Technology & Applications`}</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[rgba(43,162,75,0.2)] content-stretch flex h-[19px] items-center justify-center p-[9px] relative rounded-[30px] shrink-0 w-[150px]">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold h-[13px] leading-[0] not-italic relative shrink-0 text-[#2ba24b] text-[11px] text-justify w-[148px]">
        <li className="ms-[16.5px]">
          <span className="leading-[1.2]">Application Industries</span>
        </li>
      </ul>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Frame17 />
      <p className="capitalize font-['Inter:Bold',sans-serif] font-bold leading-[42px] min-w-full not-italic relative shrink-0 text-[40px] text-black tracking-[-0.8px] w-[min-content]">Where We Innovate</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[108px] overflow-clip top-[4190px] w-[551px]" data-name="Frame">
      <Frame9 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[45px] leading-[20px] not-italic relative shrink-0 text-[#454545] text-[16px] text-justify tracking-[0.16px] w-full">Empowering industries from petrochemicals to aerospace with high-performance aerogel insulation and protection.</p>
    </div>
  );
}

export default function AerogelTechnologyApplicationsPages() {
  return (
    <div className="bg-white border border-solid border-white relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="AerogelTechnologyApplicationsPages">
      <Table />
      <VedioSection />
      <Container9 />
      <VerticalContainer8 />
      <Frame1 />
      <Container10 />
      <Frame2 />
    </div>
  );
}