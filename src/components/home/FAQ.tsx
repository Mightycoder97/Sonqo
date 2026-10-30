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
    <section className="py-14 sm:py-20 lg:py-28 bg-cream/60">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Heading + Sticky Photo Card on Desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="text-[clamp(1.75rem,4vw+0.5rem,3rem)] font-serif font-extrabold text-secondary mb-3 sm:mb-4 tracking-tight leading-tight">
              {t('title')}
            </h2>
            <p className="text-text-light text-sm sm:text-lg mb-2 lg:mb-8">
              {t('subtitle')}
            </p>

            {/* Featured Photo Card (Hidden here on mobile, shown below accordions on mobile) */}
            <div className="hidden lg:block relative rounded-[28px] overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
              <ProtectedImage
                src="/tours/cusco/valle-sagrado-tradicional/01.jpg"
                alt="Valle Sagrado Cusco"
                fill
                className="object-cover"
                showCopyright={false}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-serif font-bold text-lg sm:text-xl leading-snug mb-3">
                  ¿Necesitas armar un itinerario a medida con tus amigos o pareja?
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-white text-secondary hover:bg-primary hover:text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hablar con un asesor</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Pill Accordions */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-3.5">
            {Array.from({ length: faqCount }).map((_, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-[20px] sm:rounded-[22px] overflow-hidden transition-all duration-300 border ${
                    isOpen
                      ? 'bg-white border-primary shadow-[0_12px_30px_rgba(139,102,232,0.14)]'
                      : 'bg-white/80 border-gray-200/80 hover:border-primary/40'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 sm:p-6 text-left transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-extrabold text-sm sm:text-lg pr-3 sm:pr-4 transition-colors leading-snug ${isOpen ? 'text-primary' : 'text-secondary'}`}>
                      {t(`items.${index}.question`)}
                    </span>
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-primary text-white rotate-180' : 'bg-cream text-secondary'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 sm:px-6 pb-5 sm:pb-6 text-text-light text-xs sm:text-base leading-relaxed">
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

