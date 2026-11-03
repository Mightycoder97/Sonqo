'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, CheckCircle2, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

const testimonialMeta = [
  {
    rating: 5,
    photo: '/imagenes/passenger_machupicchu.png',
    tourRef: 'Machu Picchu Full Day',
    date: 'Enero 2026',
    platform: 'TripAdvisor',
  },
  {
    rating: 5,
    photo: '/imagenes/passenger_rainbow.png',
    tourRef: 'Montaña de 7 Colores',
    date: 'Febrero 2026',
    platform: 'Google Reviews',
  },
  {
    rating: 5,
    photo: '/tours/cusco/valle-sagrado-vip/01.jpg',
    tourRef: 'Valle Sagrado VIP & Maras',
    date: 'Febrero 2026',
    platform: 'TripAdvisor',
  },
  {
    rating: 5,
    photo: '/tours/cusco/laguna-humantay/01.jpg',
    tourRef: 'Laguna Humantay Full Day',
    date: 'Marzo 2026',
    platform: 'TripAdvisor',
  },
  {
    rating: 5,
    photo: '/tours/puno/puno-full-day-uros-taquile/01.jpg',
    tourRef: 'Islas Uros y Taquile · Puno',
    date: 'Marzo 2026',
    platform: 'Google Reviews',
  },
];

// Official TripAdvisor Owl Logo in SVG
function TripAdvisorLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3.167c-1.897 0-3.57 1.1-4.373 2.736a5.163 5.163 0 0 1 8.746 0c-.803-1.637-2.476-2.736-4.373-2.736zM3.46 11.233a3.543 3.543 0 0 1 3.54-3.543c1.954 0 3.54 1.587 3.54 3.543 0 1.954-1.586 3.54-3.54 3.54a3.543 3.543 0 0 1-3.54-3.54zm3.54 1.706a1.706 1.706 0 1 0 0-3.412 1.706 1.706 0 0 0 0 3.412zm6.98-1.706c0-1.956 1.586-3.543 3.54-3.543a3.543 3.543 0 0 1 3.54 3.543c0 1.954-1.586 3.54-3.54 3.54-1.954 0-3.54-1.586-3.54-3.54zm3.54 1.706a1.706 1.706 0 1 0 0-3.412 1.706 1.706 0 0 0 0 3.412zM12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.153 18.067c-.23.23-.46.368-.69.46a7.354 7.354 0 0 1-2.906.574c-1.334 0-2.436-.345-3.328-1.012-.892.667-1.994 1.012-3.328 1.012a7.354 7.354 0 0 1-2.906-.574c-.23-.092-.46-.23-.69-.46-.368-.368-.368-.782 0-1.15a13.344 13.344 0 0 1 2.392-1.932 5.23 5.23 0 0 1-.368-1.886c0-2.898 2.346-5.244 5.244-5.244s5.244 2.346 5.244 5.244c0 .667-.115 1.31-.368 1.886a13.344 13.344 0 0 1 2.392 1.932c.368.368.368.782 0 1.15z" />
    </svg>
  );
}

export default function Testimonials() {
  const t = useTranslations('home.testimonials');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.85;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-secondary py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Vibrant Violet & Petrol Mesh Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-20 w-[380px] h-[380px] rounded-full bg-primary/30 blur-[110px]" />
        <div className="absolute -bottom-24 right-0 w-[420px] h-[420px] rounded-full bg-primary/20 blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-8 gap-4">
          <div className="max-w-2xl">
            <span className="text-primary-light text-[11px] font-bold uppercase tracking-widest block mb-1.5">
              Referencias y Reseñas Verificadas
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white mb-2 tracking-tight leading-tight">
              {t('title')}
            </h2>
            <p className="text-white/75 text-xs sm:text-sm">
              {t('subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Summary Platform Badges */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-3.5 py-2 flex items-center gap-2 text-white">
              <TripAdvisorLogo className="w-4 h-4 text-[#00aa6c]" />
              <div className="text-xs leading-tight">
                <span className="font-bold">5.0 ★ TripAdvisor</span>
                <span className="block text-[10px] text-white/70">+200 opiniones</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-3.5 py-2 flex items-center gap-2 text-white">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <div className="text-xs leading-tight">
                <span className="font-bold">4.9 ★ Google</span>
                <span className="block text-[10px] text-white/70">+320 reseñas</span>
              </div>
            </div>

            <div className="hidden sm:flex gap-2 ml-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all cursor-pointer"
                aria-label={t('ariaLabels.previous')}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-xl bg-primary border border-primary flex items-center justify-center text-white hover:bg-white hover:text-secondary transition-all cursor-pointer shadow-lg shadow-primary/30"
                aria-label={t('ariaLabels.next')}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonialMeta.map((meta, index) => (
            <div
              key={index}
              className="snap-start shrink-0 w-[82vw] max-w-[310px] sm:max-w-none sm:w-[45%] lg:w-[31.5%] bg-white rounded-2xl p-4 sm:p-5 border border-white/20 shadow-[0_12px_30px_rgba(0,0,0,0.18)] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
            >
              <div>
                {/* Tour Reference Image Header */}
                <div className="relative h-32 w-full rounded-xl overflow-hidden mb-3.5">
                  <Image
                    src={meta.photo}
                    alt={meta.tourRef}
                    fill
                    sizes="(max-width: 640px) 82vw, 320px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/20 to-transparent" />
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-white">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-primary/90 px-2 py-0.5 rounded-full">
                      <MapPin className="w-2.5 h-2.5" />
                      {meta.tourRef}
                    </span>
                    <span className="text-[10px] text-white/80 font-medium">{meta.date}</span>
                  </div>
                </div>

                {/* Review header */}
                <div className="flex justify-between items-center mb-2.5">
                  <div className="flex gap-1 bg-cream px-2.5 py-1 rounded-full">
                    {Array.from({ length: meta.rating }).map((_, i) => (
                      <span key={i} className="w-2.5 h-2.5 rounded-full bg-primary inline-block" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    {meta.platform}
                  </span>
                </div>

                <h4 className="font-serif text-sm sm:text-base text-secondary mb-2 font-bold leading-snug">
                  &ldquo;{t(`items.${index}.title`)}&rdquo;
                </h4>
                <p className="text-text-light text-xs leading-relaxed mb-4 line-clamp-4">
                  {t(`items.${index}.text`)}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-xs shadow-sm shadow-primary/25 shrink-0">
                  {t(`items.${index}.name`).charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-secondary text-xs truncate">{t(`items.${index}.name`)}</p>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-wider">{t(`items.${index}.country`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
