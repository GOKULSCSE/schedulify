"use client";
import { Button } from "@/app/ui/Button"
import { HoverBorderGradient } from "@/app/ui/HoverBorderGradient"
import { ChevronDown, ArrowRight } from "lucide-react"
import MagicBento from "@/components/boxsection.js/page"
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className=" flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}>
      <div
        className="py-0 md:py-0 w-full relative"
        style={{
          perspective: "1000px",
        }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center">
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-2 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl">
      <div
        className=" h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ">
        {children}
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className=" relative overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover  bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-home-dark.png')"
        }}
      ></div>

      {/* Left Corner SVG */}
      <div className="absolute top-0 left-0 z-20">
        <img 
          src="/svg/Group 1.svg" 
          alt="Left decoration" 
          className="w-60 h-auto opacity-80"
        />
      </div>

      {/* Right Corner SVG */}
      <div className="absolute top-0 right-0 z-20">
        <img 
          src="/svg/Group 2.svg" 
          alt="Right decoration" 
          className="w-60 h-auto opacity-80"
        />
      </div>

      {/* Header */}
      <header >
        <nav className="relative z-50 mt-6 mx-6 lg:mx-8">
          <div className="flex items-center justify-between">
            {/* Left side - Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/logo/Group 7.png" 
                alt="Schedulify Logo" 
                className="h-8 w-auto"
              />
            </div>
            
            {/* Center - Navigation Menu */}
            <div className="hidden lg:flex items-center gap-2 px-6 py-4">
              <Button variant="nav-active" size="sm">
              Home
              </Button>
              
              <Button variant="nav-item" className="px-4 py-2 flex items-center gap-1">
              Features
                
              </Button>
              
              <Button variant="nav-item" className="px-4 py-2 flex items-center gap-1">
                Integrations
                
              </Button>
              
              <Button variant="nav-item" className="px-4 py-2 flex items-center gap-1">
              Pricing
                
              </Button>
              
              <Button variant="nav-item" className="px-4 py-2">
              Blog
              </Button>
              
              <Button variant="nav-item" className="px-4 py-2">
              CTA
              </Button>
            </div>
            
            {/* Right side - Login & Sign Up */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="login" size="sm">
                Login
                <ArrowRight className="w-4 h-4" />
              </Button>
              
              <Button variant="signup" size="sm">
                Sign In
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button variant="ghost" size="sm">
                Menu
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-24 px-4 text-center">
        {/* Badge */}
        <div className="mb-8">
          <span className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white px-4 py-2 rounded-full text-sm font-medium">
            Run Your Business on Autopilot
          </span>
          
        </div>
        

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Next-Gen Tools for<br />
          
            High-Performing Teams
         
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl mb-4 max-w-2xl">
          All-in-one SaaS solution designed to simplify your daily operations
        </p>
        <p className="text-gray-400 text-base md:text-lg mb-12 max-w-xl">
          Whether you're managing projects, collaborating with teams
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <div className="flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-6 py-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent text-white placeholder-gray-400 outline-none flex-1 min-w-[200px]"
            />
          </div>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-black dark:bg-black text-white flex items-center space-x-2"
          >
            <span>Request a Demo</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </HoverBorderGradient>
        </div>

        {/* Dashboard Preview with Scroll Effect */}
        <ContainerScroll
          titleComponent={
            <div className="text-center mb-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Experience the Power
              </h2>
              <p className="text-gray-300 text-lg">
                See how Schedulify transforms your scheduling workflow
              </p>
            </div>
          }
        >
          <img 
            src="/images/dashboard-dark.webp" 
            alt="Dashboard Preview" 
            className="w-full h-full object-cover rounded-2xl"
          />
        </ContainerScroll>
      </div>
    </main>
  )
}
