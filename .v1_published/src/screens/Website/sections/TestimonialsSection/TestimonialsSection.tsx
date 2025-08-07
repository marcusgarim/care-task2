import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const TestimonialsSection = (): JSX.Element => {
  // Form field data
  const formFields = [
    {
      id: "nome",
      label: "Nome",
      required: true,
      position: "top-[330px] left-[425px]",
      width: "w-[279px]",
    },
    {
      id: "telefone",
      label: "Telefone",
      required: true,
      position: "top-[398px] left-[425px]",
      width: "w-[279px]",
    },
    {
      id: "email",
      label: "Email",
      required: true,
      position: "top-[330px] left-[736px]",
      width: "w-[280px]",
    },
    {
      id: "empresa",
      label: "Empresa",
      required: true,
      position: "top-[398px] left-[736px]",
      width: "w-[280px]",
    },
    {
      id: "mensagem",
      label: "Mensagem",
      required: true,
      position: "top-[466px] left-[424px]",
      width: "w-[592px]",
    },
  ];

  // Footer links
  const footerLinks = [
    "Sobre a Docli.",
    "Nossos Serviços.",
    "Marcas.",
    "Contato.",
  ];

  // Language options
  const languages = ["En", "Por", "Es"];

  return (
    <section className="relative w-full bg-black bg-[url(/frame-1618873432.svg)] bg-[100%_100%] py-24">
      <div className="container mx-auto px-4">
        {/* Contact section header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4 text-sm tracking-[4.20px]">
            <span className="text-[#e74f10] tracking-[0.59px]">{"{"}</span>
            <span className="text-white tracking-[0.59px]"> contato </span>
            <span className="text-[#e74f10] tracking-[0.59px]">{"}"}</span>
          </div>
          <h2 className="text-[38px] text-neutral-50 font-medium tracking-[-0.76px] leading-[45.6px] max-w-[800px] mx-auto [font-family:'Outfit',Helvetica]">
            Revolucione a Experiência Clínica: O Futuro Começa com Seu Contato!
          </h2>
        </div>

        {/* Contact form */}
        <Card className="bg-transparent border-none max-w-[592px] mx-auto mb-16">
          <CardContent className="p-0">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {formFields.map((field) => (
                <div
                  key={field.id}
                  className={`flex flex-col ${field.id === "mensagem" ? "col-span-2" : ""}`}
                >
                  <div className="flex items-center gap-1 mb-2">
                    <label
                      htmlFor={field.id}
                      className="text-neutral-50 text-base [font-family:'Outfit',Helvetica] font-normal"
                    >
                      {field.label}
                    </label>
                    {field.required && (
                      <span className="text-cor-primriabrand text-sm [font-family:'Outfit',Helvetica] font-medium">
                        *
                      </span>
                    )}
                  </div>
                  <Input
                    id={field.id}
                    className="bg-transparent border-0 border-b border-neutral-50 rounded-none px-0 h-6 focus-visible:ring-0 focus-visible:border-cor-primriabrand"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-16">
              <Button className="bg-cor-primriabrand hover:bg-cor-secondria400 text-white rounded-full h-14 px-6 font-bold">
                <span>Falar conosco</span>
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full ml-6">
                  <ArrowUpRightIcon className="w-6 h-6 text-cor-primriabrand" />
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="flex flex-wrap justify-between gap-24 mt-24">
          {/* Left column */}
          <div className="flex flex-col w-full md:w-[560px] gap-20">
            <div className="flex flex-col gap-8">
              {/* Logo usando SVG */}
              <img 
                className="w-[104px] h-[39px]" 
                alt="Docli Logo" 
                src="/logo-care.svg" 
              />
              <div className="flex flex-col gap-4">
                <p className="text-cor-secondria100 text-base [font-family:'Outfit',Helvetica] font-normal leading-[22.4px] max-w-[420px]">
                  The first free end-to-end analytics service for the site,
                  designed to work with enterprises of various levels and
                  business segments.
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-cor-secondria100 text-xs [font-family:'Outfit',Helvetica] font-semibold leading-[18px]">
                    More about us
                  </span>
                  <div className="w-2.5 h-2.5 bg-cor-secondria100 rounded-[10px]" />
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between w-full">
              {/* Social Media com SVGs */}
              <div className="flex items-center gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img
                    className="w-6 h-6"
                    alt="Facebook"
                    src="/facebook.svg"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img
                    className="w-6 h-6"
                    alt="Instagram"
                    src="/instagram.svg"
                  />
                </a>
              </div>
              
              <div className="text-cor-secondria100 text-xs [font-family:'Outfit',Helvetica] font-normal leading-[16.8px]">
                © 2025 — Docli Todos os direitos reservados
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col w-full md:w-[560px] gap-20">
            <div className="flex flex-wrap gap-10">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-cor-secondria100 text-base [font-family:'Outfit',Helvetica] font-normal leading-[22.4px]"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex justify-between items-end">
              <div className="flex flex-col justify-between h-52">
                <div className="flex flex-col gap-4">
                  <h3 className="text-cor-secondria100 text-xl [font-family:'Outfit',Helvetica] font-medium tracking-[-0.20px] leading-[22px]">
                    Contato
                  </h3>
                  <div className="flex flex-col">
                    <a
                      href="tel:+5551981767734"
                      className="text-cor-secondria100 text-base [font-family:'Outfit',Helvetica] font-semibold leading-[20.8px]"
                    >
                      +55 (51) 98176-7734
                    </a>
                    <a
                      href="mailto:contato@docli.com.br"
                      className="text-cor-secondria100 text-base [font-family:'Outfit',Helvetica] font-semibold leading-[20.8px]"
                    >
                      contato@docli.com.br
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-cor-secondria100 text-xl [font-family:'Outfit',Helvetica] font-medium tracking-[-0.20px] leading-[22px]">
                    Localização
                  </h3>
                  <address className="text-cor-secondria100 text-base [font-family:'Outfit',Helvetica] font-normal leading-[20.8px] not-italic">
                    Av. Dr Nilo&nbsp;&nbsp;Paçanha, 1600 <br />
                    Boa Vista - Porto Alegre
                  </address>
                </div>
              </div>

              <div className="flex flex-col items-end gap-[15px]">
                <div className="text-cor-secondria100 text-xs [font-family:'Outfit',Helvetica] font-semibold text-right leading-[16.8px]">
                  Languages
                </div>
                <div className="flex gap-5">
                  {languages.map((lang, index) => (
                    <button
                      key={index}
                      className="text-cor-secondria100 text-sm [font-family:'Outfit',Helvetica] font-medium leading-[22.4px]"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};