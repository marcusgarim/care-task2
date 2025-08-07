import {
  ArrowUpRightIcon,
  ChevronDownIcon,
  MousePointerClickIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Define the dot positions for better maintainability
  const dots = [
    { top: "top-[474px]", left: "left-[352px]" },
    { top: "top-[447px]", left: "left-[1278px]" },
    { top: "top-[193px]", left: "left-[362px]" },
    { top: "top-[333px]", left: "left-[119px]" },
    { top: "top-[466px]", left: "left-[949px]" },
    { top: "top-[243px]", left: "left-[995px]" },
  ];

  return (
    <section className="relative w-full bg-black py-16">
      {/* Background image bg-2.png na parte inferior */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[60%] bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/bg-2.png')",
          backgroundPosition: "center bottom"
        }}
      />
      
      <div className="container mx-auto px-7 relative z-10">
        {/* Section Tag */}
        <div className="mb-10 font-['Outfit',Helvetica] font-normal text-sm tracking-[4.20px] leading-[22.4px]">
          <span className="text-[#e74f10] tracking-[0.59px]">{"{"}</span>
          <span className="text-white tracking-[0.59px]">
            {" "}
            SUA PARCEIRA EM TECNOLOGIA{" "}
          </span>
          <span className="text-[#e74f10] tracking-[0.59px]">{"}"}</span>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Heading */}
          <h2 className="font-['Outfit',Helvetica] text-white text-[56px] leading-[67.2px]">
            <span className="font-light">Múltiplas </span>
            <span className="font-bold">soluções</span>
            <span className="font-light"> para </span>
            <span className="font-bold">inovação</span>
            <span className="font-light"> rápida e de </span>
            <span className="font-bold">ponta</span>
          </h2>

          {/* Right Column - Description and Button */}
          <div className="flex flex-col gap-8">
            {/* Description */}
            <p className="font-corpo-de-texto-p1 text-white leading-[var(--corpo-de-texto-p1-line-height)]">
              Otimize o atendimento com uma plataforma integrada que combina IA
              para automação&nbsp;&nbsp;de prescrições, transcrição e suporte à
              decisão clínica.
            </p>

            {/* CTA Button */}
            <Button className="h-14 bg-cor-primriabrand hover:bg-cor-primriabrand/90 rounded-[900px] pl-6 pr-2 py-2 flex items-center gap-6 w-fit">
              <span className="font-['Outfit',Helvetica] font-bold text-white text-base">
                Falar conosco
              </span>
              <div className="flex w-10 h-10 items-center justify-center bg-white rounded-[90px]">
                <ArrowUpRightIcon className="w-6 h-6 text-black" />
              </div>
            </Button>
          </div>
        </div>

        {/* Mouse over instruction */}
        <div className="flex items-center gap-2 mb-16">
          <MousePointerClickIcon className="w-5 h-5 text-white" />
          <p className="font-['Sora',Helvetica] font-normal text-white text-base tracking-[-0.32px] leading-[19.2px]">
            Passe o mouse sobre cada passo para saber mais.
          </p>
        </div>
      </div>

      {/* Background with dots and central element */}
      <div className="relative w-full h-[757px] bg-[url('/mask-group.svg')] bg-[100%_100%]">
        <img
          className="w-full h-[407px] mt-36"
          alt="Group"
          src="/group-47217.png"
        />

        {/* Decorative dots */}
        {dots.map((dot, index) => (
          <div
            key={`dot-${index}`}
            className={`absolute w-3 h-3 ${dot.top} ${dot.left} bg-cor-primriabrand rounded-md shadow-[inset_0px_6px_2.8px_#ffffff40,0px_0px_20px_#e74f10e6]`}
          />
        ))}

        {/* Central circular element */}
        <Card className="absolute w-[408px] h-[408px] top-[131px] left-1/2 -translate-x-1/2 bg-black rounded-[204px] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] border-none">
          <CardContent className="p-0 flex items-center justify-center h-full">
            <div className="relative w-[271px] h-[271px] bg-cor-secondria400 rounded-[135.5px] shadow-[inset_0px_69px_67.9px_#ffffff40,inset_-74px_-89px_245.3px_#000000b2,inset_46px_-20px_63.7px_#000000] flex items-center justify-center">
              <ChevronDownIcon className="absolute bottom-6 w-6 h-6 text-white" />
            </div>
          </CardContent>
        </Card>

        {/* Section number */}
        <div className="absolute top-60 left-1/2 -translate-x-1/2 font-['Outfit',Helvetica] font-normal text-white text-sm tracking-[4.20px] leading-[22.4px]">
          {"{"} 02 {"}"}
        </div>

        {/* Feature title */}
        <div className="absolute top-[298px] left-1/2 -translate-x-1/2 font-['Outfit',Helvetica] font-bold text-white text-xs tracking-[3.60px] leading-[19.2px]">
          DOCLI VOICE
        </div>

        {/* Feature description */}
        <div className="absolute w-44 top-[329px] left-1/2 -translate-x-1/2 font-['Outfit',Helvetica] font-normal text-white text-sm text-center tracking-[-0.28px] leading-[16.8px]">
          Assistente de voz que realiza transcrição em tempo real, com 99% de
          precisão.
        </div>
      </div>
    </section>
  );
};