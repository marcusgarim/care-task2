import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = (): JSX.Element => {
  // Feature points data
  const featurePoints = [
    {
      id: 1,
      title: "Economia de tempo:",
      description: " Permite consultas mais eficientes",
    },
    {
      id: 2,
      title: "Facilidade de uso:",
      description: " Operação intuitiva sem interrupção do fluxo de trabalho",
    },
    {
      id: 3,
      title: "Conformidade:",
      description:
        " Dados organizados diretamente no prontuário, evitando perda de informações.",
    },
    {
      id: 4,
      title: "Conformidade:",
      description:
        " Dados organizados diretamente no prontuário, evitando perda de informações.",
    },
  ];

  // Highlight badges data
  const highlightBadges = [
    {
      id: 1,
      text: "Treinada por Brasileiros",
    },
    {
      id: 2,
      text: "Integrável em qualquer sistema",
    },
    {
      id: 3,
      text: "Disponível em Espanhol",
    },
  ];

  // Playground badges data
  const playgroundBadges = [
    {
      id: 1,
      text: "Integração do Doc.Pilot com a Livia",
      top: "top-[27px]",
      left: "left-[133px]",
    },
    {
      id: 2,
      text: "Tecnologias 100% plug and play",
      top: "top-[164px]",
      left: "left-[799px]",
    },
  ];

  return (
    <section className="flex items-center justify-center gap-2.5 px-2.5 py-[68px] bg-black relative">
      <div className="relative w-full max-w-[1280px]">
        {/* Section Header */}
        <div className="absolute top-[55px] left-0 font-normal text-transparent text-sm tracking-[4.20px] leading-[22.4px] whitespace-nowrap">
          <span className="text-[#e74f10] tracking-[0.59px]">{"{"}</span>
          <span className="text-white tracking-[0.59px]"> DOCLI VOICE </span>
          <span className="text-[#e74f10] tracking-[0.59px]">{"}"}</span>
        </div>

        {/* Main Feature Description */}
        <div className="absolute w-[519px] top-[291px] left-0 font-normal text-white text-lg tracking-[0] leading-[28.8px]">
          <span className="font-normal text-white text-lg tracking-[0] leading-[28.8px]">
            Economia de{" "}
          </span>
          <span className="font-bold">30%</span>
          <span className="font-normal text-white text-lg tracking-[0] leading-[28.8px]">
            {" "}
            do tempo do médico em consultas e evoluções de pacientes.
          </span>
        </div>

        {/* Doc-Pilot Cards */}
        <div className="absolute w-[628px] h-[350px] top-0 left-[652px]">
          <div className="absolute w-[628px] h-[294px] top-14 left-0 bg-[#d9d9d91a] rounded-3xl" />

          <Card className="flex flex-col w-[343px] items-start gap-4 p-4 absolute top-0 left-[143px] bg-neutralwhite rounded-xl border border-solid border-[#f2f5f4] shadow-[14px_27px_45px_4px_#7090b033]">
            <CardContent className="p-0 space-y-4 w-full">
              <div className="flex items-start gap-2 relative self-stretch w-full">
                <img
                  className="relative w-[38px] h-[38px]"
                  alt="Avatar"
                  src="/avatar.svg"
                />

                <div className="flex flex-col h-[38px] items-start justify-center relative flex-1 grow">
                  <div className="relative w-fit mt-[-2.00px] font-bold text-neutral-800 text-sm tracking-[0] leading-[22.4px] whitespace-nowrap">
                    Doc-Pilot
                  </div>

                  <div className="inline-flex items-start gap-2 relative mb-[-1.00px]">
                    <div className="relative w-fit mt-[-1.00px] font-medium text-neutral-600 text-xs tracking-[0] leading-[normal]">
                      01/08/2024
                    </div>

                    <div className="relative w-fit mt-[-1.00px] font-medium text-neutral-600 text-xs tracking-[0] leading-[normal]">
                      07:18:26
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between relative self-stretch w-full">
                <div className="flex w-[86px] h-8 items-center justify-center gap-0.5 relative bg-alert-colorssuccess rounded-[45px]">
                  {Array.from({ length: 15 }).map((_, index) => {
                    const heights = [
                      "h-0.5",
                      "h-2",
                      "h-3.5",
                      "h-1",
                      "h-4",
                      "h-3.5",
                      "h-2.5",
                      "h-2.5",
                      "h-2.5",
                      "h-3.5",
                      "h-2.5",
                      "h-4",
                      "h-2.5",
                      "h-1",
                      "h-0.5",
                    ];
                    return (
                      <div
                        key={index}
                        className={`relative w-0.5 ${heights[index]} bg-white rounded-[1px]`}
                      />
                    );
                  })}
                </div>

                <div className="flex w-8 h-8 items-center justify-center gap-0.5 relative bg-alert-colorssuccess rounded-[45px] overflow-hidden">
                  <img
                    className="relative w-6 h-6"
                    alt="Element shapes circle"
                    src="/24px-shapes-circle-check.svg"
                  />
                </div>
              </div>

              <div className="relative self-stretch font-medium text-neutral-700 text-sm tracking-[0] leading-[22.4px]">
                Beber água suficiente é essencial para manter o corpo
                funcionando corretamente.
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col w-[343px] items-start gap-4 p-4 absolute top-[202px] left-[143px] bg-neutralwhite rounded-xl border border-solid border-[#f2f5f4] shadow-[14px_27px_45px_4px_#7090b033]">
            <CardContent className="p-0 space-y-4 w-full">
              <div className="flex items-start gap-2 relative self-stretch w-full">
                <img
                  className="relative w-[38px] h-[38px]"
                  alt="Avatar"
                  src="/avatar.svg"
                />

                <div className="flex flex-col h-[38px] items-start justify-center relative flex-1 grow">
                  <div className="relative w-fit mt-[-2.00px] font-bold text-neutral-800 text-sm tracking-[0] leading-[22.4px] whitespace-nowrap">
                    Doc-Pilot
                  </div>

                  <div className="inline-flex items-start gap-2 relative mb-[-1.00px]">
                    <div className="relative w-fit mt-[-1.00px] font-medium text-neutral-600 text-xs tracking-[0] leading-[normal]">
                      01/08/2024
                    </div>

                    <div className="relative w-fit mt-[-1.00px] font-medium text-neutral-600 text-xs tracking-[0] leading-[normal]">
                      07:18:28
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative self-stretch font-medium text-neutral-700 text-sm tracking-[0] leading-[22.4px]">
                Calibração Concluída com Sucesso!
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Points */}
        {featurePoints.map((feature, index) => (
          <React.Fragment key={feature.id}>
            <div
              className={`absolute w-3 h-3 ${
                index === 0
                  ? "top-[438px] left-0"
                  : index === 1
                    ? "top-[439px] left-[326px]"
                    : index === 2
                      ? "top-[439px] left-[652px]"
                      : "top-[439px] left-[978px]"
              } 
                            bg-cor-primriabrand rounded-xl overflow-hidden shadow-[0px_0px_20px_12px_#e74f1080,0px_0px_4px_2px_#e74f10cc]`}
            >
              <div className="h-3 rounded-xl border-2 border-solid border-white" />
            </div>
            <div
              className={`absolute w-[274px] top-[429px] ${
                index === 0
                  ? "left-7"
                  : index === 1
                    ? "left-[354px]"
                    : index === 2
                      ? "left-[680px]"
                      : "left-[1006px]"
              } 
                            font-normal text-white text-lg tracking-[0] leading-[28.8px]`}
            >
              <span className="font-bold">{feature.title}</span>
              <span className="font-normal text-white text-lg tracking-[0] leading-[28.8px]">
                {feature.description}
              </span>
            </div>
          </React.Fragment>
        ))}

        {/* Highlight Badges */}
        {highlightBadges.map((badge, index) => (
          <Badge
            key={badge.id}
            className={`flex w-[411px] items-center justify-center gap-2.5 px-6 py-3 absolute top-[626px] ${
              index === 0
                ? "left-0"
                : index === 1
                  ? "left-[435px]"
                  : "left-[869px]"
            } bg-[#ffffff05] rounded-[900px] border-[none] backdrop-blur-[13.25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13.25px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[900px] before:[background:linear-gradient(90deg,rgba(205,65,0,1)_0%,rgba(238,143,112,1)_52%,rgba(255,204,185,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none`}
          >
            <div className="relative w-fit mt-[-1.00px] font-medium text-white text-2xl text-center tracking-[0.48px] leading-[28.8px] whitespace-nowrap">
              {badge.text}
            </div>
          </Badge>
        ))}

        {/* Playground Section */}
        <div className="absolute w-[1280px] h-[242px] top-[845px] left-0 bg-[url(/playgraund.svg)] bg-[100%_100%]">
          {playgroundBadges.map((badge) => (
            <Badge
              key={badge.id}
              className={`inline-flex items-center justify-center gap-2.5 px-6 py-3 absolute ${badge.top} ${badge.left} bg-[#ffffff05] rounded-[900px] border-[none] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[900px] before:[background:linear-gradient(90deg,rgba(205,65,0,1)_0%,rgba(238,143,112,1)_52%,rgba(255,204,185,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none`}
            >
              <div className="relative w-fit mt-[-1.00px] font-medium text-white text-2xl tracking-[0.48px] leading-[38.4px] whitespace-nowrap">
                {badge.text}
              </div>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
