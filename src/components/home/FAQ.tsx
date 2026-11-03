'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ProtectedImage } from '@/components/ui/ProtectedImage';
import { Link } from '@/i18n/navigation';

const faqCount = 7;

export default function FAQ() {
  const t = useTranslations('home.faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-cream/60 scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading + Sticky Photo Card on Desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-primary text-[11px] font-bold uppercase tracking-widest block mb-1.5">
              Centro de Ayuda al Viajero
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-secondary mb-2.5 tracking-tight leading-tight">
              {t('title')}
            </h2>
            <p className="text-text-light text-xs sm:text-sm mb-2 lg:mb-6">
              {t('subtitle')}
            </p>

            {/* Featured Photo Card (Hidden here on mobile, shown below accordions on mobile) */}
            <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-lg border-[3px] border-white aspect-[4/3]">
              <ProtectedImage
                src="/tours/cusco/valle-sagrado-tradicional/01.jpg"
                alt="Valle Sagrado Cusco"
                fill
                className="object-cover"
                showCopyright={false}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif font-bold text-sm sm:text-base leading-snug mb-2.5">
                  ¿Necesitas armar un itinerario a medida con tus amigos o pareja?
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-white text-secondary hover:bg-primary hover:text-white px-4 py-2 rounded-full text-xs font-bold transition-colors shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Hablar con un asesor</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Pill Accordions */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
            {Array.from({ length: faqCount }).map((_, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                    isOpen
                      ? 'bg-white border-primary shadow-[0_8px_24px_rgba(139,102,232,0.12)]'
                      : 'bg-white/80 border-gray-200/80 hover:border-primary/40'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-bold text-xs sm:text-sm pr-3 transition-colors leading-snug ${isOpen ? 'text-primary' : 'text-secondary'}`}>
                      {t(`items.${index}.question`)}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-primary text-white rotate-180' : 'bg-cream text-secondary'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-3.5 sm:px-4 pb-4 text-text-light text-xs sm:text-sm leading-relaxed">
                        {t(`items.${index}.answer`)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Mobile Featured Photo Card (Shown after accordions on mobile/tablet) */}
            <div className="lg:hidden relative rounded-[24px] overflow-hidden shadow-xl border-4 border-white aspect-[16/10] mt-6">
              <ProtectedImage
                src="/tours/cusco/valle-sagrado-tradicional/01.jpg"
                alt="Valle Sagrado Cusco"
                fill
                className="object-cover"
                showCopyright={false}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/45 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif font-bold text-base sm:text-lg leading-snug mb-2.5">
                  ¿Necesitas armar un itinerario a medida con tus amigos o pareja?
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-white text-secondary hover:bg-primary hover:text-white px-4 py-2 rounded-full text-xs font-extrabold transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hablar con un asesor</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

