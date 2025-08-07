import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const FooterSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background com debug */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onError={(e) => console.error('Erro no vídeo:', e)}
        onLoadedData={() => console.log('Vídeo carregado com sucesso!')}
      >
        <source src="/background-1.mp4" type="video/mp4" />
        <source src="./background-1.mp4" type="video/mp4" />
        <source src="./public/background-1.mp4" type="video/mp4" />
        {/* Fallback case */}
        Seu navegador não suporta vídeo HTML5.
      </video>
      
      {/* Fallback background caso vídeo não carregue */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: "linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)"
        }}
      />
      
      {/* Background layers seguindo o CSS do Figma */}
      <div className="absolute w-full h-full left-0 top-0 bg-[#682408] opacity-50 z-10" />
      
      {/* Background circular pattern */}
      <div 
        className="absolute w-[800px] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 z-10"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(139, 69, 19, 0.3) 0%, rgba(139, 69, 19, 0.1) 40%, transparent 70%)",
          borderRadius: "50%"
        }}
      />
      
      {/* Vetor 2 - Background blur effect */}
      <div 
        className="absolute w-[1179px] h-[732px] left-[-35px] top-[314px] z-10"
        style={{ 
          background: "#702709",
          filter: "blur(150px)",
          opacity: 0.7
        }}
      />
      
      {/* Elipse 4 - Gradient blur effect */}
      <div 
        className="absolute w-[769px] h-[744px] right-[-200px] top-[-210px] z-10"
        style={{
          background: "linear-gradient(170.47deg, rgba(255, 255, 255, 0) 7.19%, #E74F10 62.8%)",
          filter: "blur(350px)",
          opacity: 0.8
        }}
      />
      
      {/* Final overlay gradient */}
      <div 
        className="absolute w-full h-full left-0 top-0 z-10"
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0) -30.7%, rgba(0, 0, 0, 0.8) 88.07%)"
        }}
      />

      {/* Header/Navigation */}
      <header className="relative z-30 w-full max-w-[1440px] mx-auto h-[104px] flex justify-between items-center px-28 py-6">
        
        {/* Logo - Usando SVG */}
        <div className="flex-none">
          <img 
            src="/logo-care.svg"
            alt="Docli Logo" 
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-0">
          
          {/* Home */}
          <Button
            variant="ghost"
            className="px-4 py-2.5 h-[42px] hover:bg-transparent"
          >
            <span className="font-['Outfit'] font-normal text-sm text-white">
              Home
            </span>
          </Button>

          {/* Quem somos? */}
          <Button
            variant="ghost"
            className="px-4 py-2.5 h-[42px] hover:bg-transparent"
          >
            <span className="font-['Outfit'] font-normal text-sm text-white">
              Quem somos?
            </span>
          </Button>

          {/* Nossos Serviços */}
          <Button
            variant="ghost"
            className="px-4 py-2.5 h-[42px] hover:bg-transparent"
          >
            <span className="font-['Outfit'] font-normal text-sm text-white">
              Nossos Serviços
            </span>
          </Button>

          {/* Contato */}
          <Button
            variant="ghost"
            className="px-4 py-2.5 h-[42px] hover:bg-transparent"
          >
            <span className="font-['Outfit'] font-normal text-sm text-white">
              Contato
            </span>
          </Button>
        </nav>

        {/* CTA Button */}
        <Button className="flex items-center gap-6 px-2 pl-6 h-14 bg-[#E74F10] hover:bg-[#E74F10]/90 rounded-[900px]">
          <span className="font-['Outfit'] font-bold text-base text-white">
            Falar conosco
          </span>
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-[90px]">
            <ArrowUpRightIcon className="w-6 h-6 text-[#E74F10]" />
          </div>
        </Button>
      </header>

      {/* Conteúdo Principal Centralizado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="text-center">
          
          {/* BEM VINDO À DOCLI */}
          <div className="mb-8">
            <div className="font-['Outfit',Helvetica] font-normal text-sm tracking-[4.20px] leading-[22.4px]">
              <span className="text-[#e74f10] tracking-[0.59px]">{"{"}</span>
              <span className="text-white tracking-[0.59px]"> BEM VINDO À DOCLI </span>
              <span className="text-[#e74f10] tracking-[0.59px]">{"}"}</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="font-['Outfit',Helvetica] text-white text-6xl leading-tight mb-8 max-w-5xl">
            Uma <span className="text-[#E74F10]">nova</span> era de <span className="text-[#E74F10]">Soluções</span>
            <br />
            <span className="text-[#E74F10]">Tecnológicas</span> para a <span className="text-[#E74F10]">Saúde.</span>
          </h1>

          {/* Description */}
          <p className="font-['Outfit',Helvetica] text-white text-lg leading-relaxed mb-12 max-w-4xl mx-auto">
            Construa o amanha com tecnologias integraveis que combinam o uso de IA com ferramentas de automação
            <br />
            de prescrições, transcrição e suporte à decisão clínica.
          </p>

          {/* Sign up button */}
          <Button 
            variant="outline"
            className="px-8 py-3 bg-transparent border border-[#E74F10] text-white rounded-full hover:bg-[#E74F10]/10 font-['Outfit',Helvetica] font-normal text-sm"
          >
            Sign up
          </Button>
        </div>
      </div>

      {/* Circular background element behind content */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 -z-10"
        style={{
          background: "radial-gradient(circle, rgba(231, 79, 16, 0.4) 0%, rgba(231, 79, 16, 0.2) 50%, transparent 100%)"
        }}
      />
    </section>
  );
};