"use client";
import React, { useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Image from "next/image";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// ButtonProps type definition removed for JavaScript compatibility

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Is my data safe with Schedulify?',
      answer: 'Absolutely. We use bank-grade encryption (SSL/TLS) and secure cloud storage to ensure your data is always protected. Regular backups and compliance with industry security standards keep your information safe.'
    },
    {
      question: 'Do you support teams and organizations?',
      answer: 'Yes. We offer Team and Enterprise plans with advanced collaboration, shared calendars, role-based permissions, and dedicated account management.'
    },
    {
      question: 'Will Schedulify work on all devices?',
      answer: 'Yes. Schedulify is a web-based platform, fully responsive across desktops, tablets, and smartphones. You can access your schedules and content anytime, anywhere.'
    },
    {
      question: 'Does Schedulify support recurring tasks or events?',
      answer: 'Yes! You can set up recurring schedules, reminders, and automated workflows to save time and stay organized.'
    },
    {
      question: 'Do you offer customer support?',
      answer: 'Yes. Our support team is available via email and live chat on paid plans. Enterprise customers receive priority 24/7 support.'
    }
  ];

  return (
    <section className="relative min-h-screen py-16 md:py-20 px-4 md:px-6 overflow-hidden flex items-center justify-center">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#002E89]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#002E89]/15 rounded-full blur-[150px]" />

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left side - Image */}
          <div className="flex-shrink-0 w-full max-w-[450px] md:max-w-[550px] lg:w-[600px] h-auto aspect-square relative z-10">
            <Image
              src="/images/question-mark-low-poly-design 1.png"
              alt="FAQ Question mark illustration"
              width={600}
              height={600}
              className="object-contain w-full h-full" />
          </div>

          {/* Right side - FAQ Content */}
          <div className="flex-1 w-full">
            {/* Main container with border */}
            <div className="bg-[#002E89]/10 backdrop-blur-sm border border-[#002E89]/30 rounded-3xl p-8 md:p-12">
              {/* FAQs Badge */}
              <div className="flex justify-left mb-8">
                <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-6 py-2 rounded-full border border-gray-600/30">
                  FAQs
                </span>
              </div>

              {/* Heading
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 leading-tight">
              Have Questions? Here Are Quick Answers
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-white text-center mb-12">
              To Some Of The Most Common Queries
            </p> */}

              {/* FAQ Items */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-[#002E89]/10 backdrop-blur-sm border border-[#002E89]/20 rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    {/* Question */}
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                      className="w-full flex items-center gap-4 p-6 text-left hover:bg-[#002E89]/20 transition-colors"
                    >
                      {/* Question mark icon */}
                      <div className="flex-shrink-0 w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center border border-gray-600/30">
                        <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                      </div>

                      {/* Question text */}
                      <span className="flex-1 text-lg text-gray-200 font-medium">
                        {faq.question}
                      </span>

                      {/* Toggle icon */}
                      <div className="flex-shrink-0">
                        {openIndex === index ? (
                          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-8 h-8 bg-[#002E89]/30 rounded-lg flex items-center justify-center border border-[#002E89]/40">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </button>

                    {/* Answer */}
                    {openIndex === index && (
                      <div className="px-4 pb-6 pl-14 md:px-6 md:pl-20">
                        <p className="text-gray-400 text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
