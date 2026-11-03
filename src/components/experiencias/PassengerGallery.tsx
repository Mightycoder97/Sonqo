'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { useCallback } from 'react';

const IMAGES = [
  {
    src: '/imagenes/passenger_machupicchu.png',
    alt: 'Viajeros de Sonqo Perú Travel en la ciudadela inca de Machu Picchu',
    location: 'Machu Picchu · Cusco',
  },
  {
    src: '/imagenes/passenger_rainbow.png',
    alt: 'Grupo Sonqo en la cumbre de la Montaña de 7 Colores (Vinicunca)',
    location: 'Vinicunca 5,036 m · Cusco',
  },
  {
    src: '/tours/cusco/laguna-humantay/01.jpg',
    alt: 'Expedición guiada hacia las aguas turquesas de la Laguna Humantay',
    location: 'Laguna Humantay · Cusco',
  },
  {
    src: '/tours/cusco/pachamanca-full-day/01.png',
    alt: 'Experiencia de turismo vivencial y gastronomía tradicional andina',
    location: 'Valle Sagrado · Cusco',
  },
  {
    src: '/tours/lima/paracas-ica-huacachina-full-day/01.png',
    alt: 'Aventura en dunas y oasis de la Huacachina e Islas Ballestas',
    location: 'Paracas & Huacachina · Ica',
  },
  {
    src: '/tours/puno/puno-full-day-uros-taquile/01.jpg',
    alt: 'Navegación cultural por las Islas de los Uros y Taquile en el Titicaca',
    location: 'Lago Titicaca · Puno',
  },
];

export default function PassengerGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="space-y-6">
      <div className="relative group max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {IMAGES.map((img, idx) => (
              <div key={idx} className="relative flex-[0_0_100%] aspect-[4/3] sm:aspect-[16/9] w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="bg-primary/95 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 mb-1.5 border border-white/10">
                    <MapPin className="w-3 h-3" />
                    {img.location}
                  </span>
                  <h3 className="font-serif text-base sm:text-xl font-bold leading-snug">{img.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-text-main flex items-center justify-center shadow-md transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 cursor-pointer"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-4 h-4 text-text-main" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-text-main flex items-center justify-center shadow-md transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 cursor-pointer"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-4 h-4 text-text-main" />
        </button>
      </div>

      {/* Thumbnail Reference Grid below Carousel */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
        {IMAGES.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => emblaApi?.scrollTo(idx)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-primary/15 shadow-xs cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.location}
              fill
              sizes="160px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
            <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[9px] font-bold text-white truncate text-left">
              {img.location}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
