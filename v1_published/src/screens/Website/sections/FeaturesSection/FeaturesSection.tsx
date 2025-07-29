import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Feature cards data
  const featureCards = [
    {
      title: "Identificação de\nMedicamento",
      content: [
        "Princípio(s) Ativo(s) (DCB)",
        "Laboratório Fabricante",
        "Nome Comercial/Genérico/Similar",
        "Excipientes Relevantes",
        "Classe Terapêutica",
        "Forma Farmacêutica e Concentração",
      ],
      highlighted: true,
    },
    {
      title: "Posologia e \nAdministração",
      content: [
        "Doses por Indicação Clínica",
        "Esquemas de Administração",
        "Duração do Tratamento",
        "Instruções por Forma Farmacêutica",
        "Ajustes de Dose",
        "Critérios de Uso",
      ],
    },
    {
      title: " Segurança e Monitoramento",
      content: [
        "Contraindicações",
        "Advertências e Precauções",
        "Efeitos Adversos",
        "Uso em Populações Especiais",
        "Parâmetros de Monitoramento",
        "Informações de Superdosagem",
      ],
    },
    {
      title: "Informações\nTécnicas",
      content: [
        "Perfil Farmacocinético",
        "Mecanismo de Ação",
        "Espectro Antimicrobiano",
        "Armazenamento e Estabilidade",
        "Interações Medicamentosas",
        "Compatibilidades/Incompatibilidades",
      ],
    },
  ];

  // Top feature panels data
  const topFeaturePanels = [
    {
      title: "Diretrizes e Estudos clínicos",
      hasLeftDot: true,
    },
    {
      title: "Interações com medicamentos,\nalimentos e saúde",
      hasLeftDot: false,
    },
    {
      title: "+9.000 bulas ANVISA\nCuradoria base da FDA",
      hasRightDot: true,
    },
  ];

  return (
    <section className="flex items-center justify-center py-16 bg-black w-full">
      <div className="relative w-full max-w-[1293px] flex flex-col items-center">
        {/* Header text */}
        <div className="mb-16 [font-family:'Outfit',Helvetica] font-normal text-sm tracking-[4.20px] leading-[22.4px] whitespace-nowrap">
          <span className="text-[#e74f10] tracking-[0.59px]">{"{"}</span>
          <span className="text-white tracking-[0.59px]">
            {" "}
            Sua parceira em tecnologia{" "}
          </span>
          <span className="text-[#e74f10] tracking-[0.59px]">{"}"}</span>
        </div>

        {/* Top feature panels */}
        <div className="flex w-full justify-between gap-4 mb-14">
          {topFeaturePanels.map((panel, index) => (
            <div
              key={`panel-${index}`}
              className="relative w-[411px] h-[114px]"
            >
              <Card className="h-full bg-[#ffffff01] rounded-3xl overflow-hidden shadow-[inset_0px_8px_48px_-14px_#e74f1033]">
                <CardContent className="p-0 h-full">
                  <div className="h-full rounded-3xl overflow-hidden [background:url(..//bxrf8o4m8ho7rmso9llfduoqbk-png-2.png)_50%_50%_/_cover]">
                    <div className="w-full h-full rounded-3xl overflow-hidden">
                      <div className="relative h-full bg-[linear-gradient(180deg,rgba(14,15,20,0)_50%,rgba(14,15,20,1)_95%)] flex items-center justify-center">
                        <div className="[font-family:'Outfit',Helvetica] font-medium text-white text-2xl text-center tracking-[0.48px] leading-[28.8px] whitespace-pre-line">
                          {panel.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Left dot */}
              {panel.hasLeftDot && (
                <div className="absolute top-[51px] left-[-12px] w-3 h-3 bg-cor-primriabrand rounded-xl overflow-hidden shadow-[0px_0px_20px_12px_#e74f1080,0px_0px_4px_2px_#e74f10cc]">
                  <div className="h-3 rounded-xl border-2 border-solid border-white" />
                </div>
              )}

              {/* Right dot */}
              {panel.hasRightDot && (
                <div className="absolute top-[51px] right-[-12px] w-3 h-3 bg-cor-primriabrand rounded-xl overflow-hidden shadow-[0px_0px_20px_12px_#e74f1080,0px_0px_4px_2px_#e74f10cc]">
                  <div className="h-3 rounded-xl border-2 border-solid border-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="flex gap-6 w-full">
          {featureCards.map((card, index) => (
            <Card
              key={`card-${index}`}
              className={`flex flex-col w-[302px] p-8 rounded-3xl ${
                card.highlighted
                  ? "bg-[#ffffff05] border-none shadow-[inset_0px_8px_48px_-14px_#e74f1033] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-3xl before:[background:linear-gradient(90deg,rgba(205,65,0,1)_0%,rgba(238,143,112,1)_52%,rgba(255,204,185,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                  : "border border-solid border-[#171922]"
              }`}
            >
              <CardContent className="p-0 flex flex-col gap-6">
                <div className="mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium text-white text-2xl text-center tracking-[-0.48px] leading-[28.8px] whitespace-pre-line">
                  {card.title}
                </div>

                <div className="[font-family:'Outfit',Helvetica] font-normal text-white text-sm tracking-[-0.28px] leading-[22.4px] whitespace-pre-line">
                  {card.content.join("\n")}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
