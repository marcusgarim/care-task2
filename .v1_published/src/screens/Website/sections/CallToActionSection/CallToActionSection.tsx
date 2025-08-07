import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  // Feature list data
  const features = [
    "Calculadora de medicamentos",
    "Calculadora de ESCORES clinicos",
    "Alertas de segurança",
    "Ajuste por condição Clínica",
  ];

  // Tagged sections data
  const taggedSections = [
    "Análise preditiva de interações",
    "processamento de bulas",
    "monitoramento contínuo",
  ];

  return (
    <section className="flex items-center gap-[130px] pl-20 pr-0 py-20 w-full bg-black">
      <div className="flex flex-col w-[411px] h-[710px] items-start gap-10">
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="flex flex-col items-start gap-4 w-full" />
          </div>

          <div className="inline-flex items-center gap-2">
            <img className="w-5 h-5" alt="Ads click" src="/ads-click.png" />

            <div className="w-fit font-['Outfit',Helvetica] font-normal text-white text-sm text-center tracking-[-0.28px] leading-[16.8px] whitespace-nowrap">
              Passe o mouse sobre cada passo para saber mais.
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[29px] flex-1 w-full">
          <div className="w-full mt-[-1.00px] font-['Outfit',Helvetica] font-normal text-cor-primriabrand text-sm tracking-[4.20px] leading-[22.4px]">
            <span className="font-bold text-[#e74f10] tracking-[0.59px]">
              {"{"} Dosagem inteligente&nbsp;&nbsp;{"}"}
            </span>
          </div>

          <div className="w-[411px] font-['Outfit',Helvetica] font-normal text-neutral-400 text-xl tracking-[-0.40px] leading-8">
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                {feature}
                {index < features.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>

          {taggedSections.map((section, index) => (
            <div
              key={index}
              className="w-full font-['Outfit',Helvetica] font-normal text-transparent text-sm tracking-[4.20px] leading-[22.4px]"
            >
              <span className="text-[#e74f10] tracking-[0.59px]">{"{"} </span>
              <span className="text-white tracking-[0.59px]">{section} </span>
              <span className="text-[#e74f10] tracking-[0.59px]">{"}"}</span>
            </div>
          ))}
        </div>

        <Button className="h-14 inline-flex items-center justify-center gap-6 pl-6 pr-2 py-2 bg-cor-primriabrand rounded-[900px]">
          <span className="font-['Outfit',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
            Falar conosco
          </span>

          <div className="flex w-10 h-10 items-center justify-center gap-2 p-2 bg-white rounded-[90px]">
            <img
              className="w-6 h-6"
              alt="Element arrow arrow up"
              src="/24px-arrow-arrow-up-rightarrow-up-right.svg"
            />
          </div>
        </Button>
      </div>

    </section>
  );
};
