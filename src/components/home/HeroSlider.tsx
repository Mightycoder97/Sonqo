'use client';

import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { ChevronLeft, ChevronRight, Star, Compass, ShieldCheck, Camera } from 'lucide-react';
import { useTranslations } from 'next-intl';

const slideImages = [
  '/imagenes/hero-machupicchu-1.png?v=2',
  '/imagenes/hero-camino-inca.png?v=2',
  '/tours/cusco/montana-de-colores-vinicunca/01.jpg',
];

const floatingMainThumbs = [
  { src: '/imagenes/passenger_machupicchu.png', caption: 'Viajeros en Machu Picchu · Cusco' },
  { src: '/imagenes/passenger_rainbow.png', caption: 'Montaña de 7 Colores · 5,036 m' },
  { src: '/tours/cusco/laguna-humantay/01.jpg', caption: 'Laguna Humantay · Expedición' },
];

const floatingSecondaryThumbs = [
  { src: '/tours/puno/puno-full-day-uros-taquile/01.jpg', caption: 'Lago Titicaca · Puno' },
  { src: '/tours/arequipa/canon-del-colca-2-dias-1-noche/01.jpg', caption: 'Cañón del Colca · Arequipa' },
  { src: '/tours/lima/paracas-ica-huacachina-full-day/01.png', caption: 'Oasis Huacachina · Ica' },
];

const slideCtaLinks = ['/tours', '/tours', '/tours'];

export default function HeroSlider() {
  const t = useTranslations('home.hero');
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full h-full select-none touch-pan-y" ref={emblaRef}>
      <div className="flex h-full">
        {slideImages.map((image, index) => {
          const title = t(`slides.${index}.title`);
          const titleAccent = t(`slides.${index}.titleAccent`);
          const titleSuffix = t(`slides.${index}.titleSuffix`);
          const subtitle = t(`slides.${index}.subtitle`);
          const cta = t(`slides.${index}.cta`);
          const mainThumb = floatingMainThumbs[index % floatingMainThumbs.length];
          const secThumb = floatingSecondaryThumbs[index % floatingSecondaryThumbs.length];

          return (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full overflow-hidden">
              <Image
                src={image}
                alt={`${title} ${titleAccent}`}
                fill
                className="object-cover scale-105"
                style={{ objectPosition: 'center center' }}
                priority={index === 0}
                sizes="100vw"
                quality={85}
              />
              {/* Modern duotone gradient overlay with #213E4C and #8B66E8 */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#213E4C]/92 via-[#213E4C]/70 to-[#8B66E8]/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#213E4C]/85 via-transparent to-black/30" />

              {/* Split Modern Content */}
              <div className="absolute inset-0 container mx-auto px-4 lg:px-12 flex items-center justify-between pt-14 pb-12 sm:py-0">
                {/* Left Column: Balanced Typography + Trust References */}
                <div className="max-w-xl text-left z-10">
                  <div className="inline-flex items-center gap-2 bg-white/12 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[11px] font-semibold text-white/95 mb-3.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary-light" />
                    <span>Operador Oficial Autorizado en Cusco · RUC 20616667549</span>
                  </div>

                  <h2 className="text-[clamp(1.4rem,2.9vw+0.4rem,2.65rem)] font-bold text-white mb-3 sm:mb-4 tracking-tight leading-[1.15]">
                    {title}{' '}
                    <span className="inline-block bg-primary text-white px-2.5 sm:px-3.5 py-0.5 rounded-lg sm:rounded-xl shadow-md shadow-primary/30 transform -rotate-1">
                      {titleAccent}
                    </span>
                    {titleSuffix && <> {titleSuffix}</>}
                  </h2>

                  <p className="text-xs sm:text-sm md:text-base text-white/85 font-normal max-w-lg mb-5 sm:mb-6 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href={slideCtaLinks[index]}
                      className="bg-primary hover:bg-primary-dark text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg shadow-primary/35 hover:-translate-y-0.5 inline-flex items-center gap-2"
                    >
                      <Compass className="w-4 h-4" />
                      {cta}
                    </Link>
                    <Link
                      href="/experiencias"
                      className="bg-white/12 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all inline-flex items-center gap-2"
                    >
                      <Camera className="w-4 h-4 text-primary-light" />
                      <span>Ver Experiencias Reales</span>
                    </Link>
                  </div>

                  {/* Quick Verified References Pill */}
                  <div className="mt-5 flex flex-wrap items-center gap-4 text-[11px] sm:text-xs text-white/85">
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="font-bold text-white">4.9/5</span>
                      <span className="text-white/70">(+520 reseñas en TripAdvisor y Google)</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Dual Floating Visual Collage Card (Desktop) */}
                <div className="hidden lg:flex items-center gap-4 z-10 pr-4 relative">
                  {/* Secondary smaller photo card */}
                  <div className="relative w-44 h-56 rounded-2xl overflow-hidden border-2 border-white/85 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 mt-12">
                    <Image
                      src={secThumb.src}
                      alt={secThumb.caption}
                      fill
                      className="object-cover"
                      sizes="176px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] font-semibold text-white leading-tight">
                      {secThumb.caption}
                    </span>
                  </div>

                  {/* Main photo card */}
                  <div className="relative w-60 h-72 rounded-2xl overflow-hidden border-[3px] border-white/90 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <Image
                      src={mainThumb.src}
                      alt={mainThumb.caption}
                      fill
                      className="object-cover"
                      sizes="240px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="inline-block bg-primary/90 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1">
                        Viajeros Sonqo
                      </span>
                      <p className="text-xs font-semibold leading-snug">{mainThumb.caption}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation arrows positioned on bottom-right on tablet/desktop */}
      <div className="hidden sm:flex absolute right-6 sm:right-12 bottom-16 sm:bottom-28 items-center gap-2 z-20">
        <button
          onClick={scrollPrev}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-all cursor-pointer"
          aria-label={t('ariaLabels.previousSlide')}
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={scrollNext}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-all cursor-pointer"
          aria-label={t('ariaLabels.nextSlide')}
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <DotIndicators emblaApi={emblaApi} t={t} />
    </div>
  );
}

function DotIndicators({ emblaApi, t }: { emblaApi: ReturnType<typeof useEmblaCarousel>[1]; t: ReturnType<typeof useTranslations> }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  if (!emblaApi) return null;
  const count = emblaApi.scrollSnapList().length;

  return (
    <div className="absolute bottom-14 sm:bottom-28 left-4 sm:left-12 flex gap-2 z-10">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => emblaApi.scrollTo(i)}
          className={`h-2 rounded-full transition-all duration-300 !min-w-0 !min-h-0 ${
            i === selectedIndex ? 'w-8 bg-primary' : 'w-2 bg-white/50 hover:bg-white/80'
          }`}
          aria-label={t('ariaLabels.goToSlide', { number: i + 1 })}
        />
      ))}
    </div>
  );
}
