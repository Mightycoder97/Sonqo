import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { ProtectedImage } from '@/components/ui/ProtectedImage';
import { ShieldCheck, Award, Users, Headphones } from 'lucide-react';

export default async function SEOBlock() {
  const t = await getTranslations('home.seo');

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="bg-gradient-to-br from-cream via-white to-cream/60 rounded-[22px] sm:rounded-[28px] p-5 sm:p-8 lg:p-10 border border-primary/15 shadow-[0_10px_32px_rgba(139,102,232,0.07)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
            
            {/* Left Side on Desktop: Triple Image Collage */}
            <div className="order-2 lg:order-1 lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md h-[220px] sm:h-[280px]">
                {/* Main tilted photo */}
                <div className="absolute top-0 left-0 w-[62%] h-[78%] rounded-2xl overflow-hidden shadow-lg border-[3px] border-white -rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
                  <ProtectedImage
                    src="/tours/cusco/montana-de-colores-vinicunca/01.jpg"
                    alt="Montaña de 7 Colores Cusco"
                    fill
                    className="object-cover"
                    showCopyright={false}
                    unoptimized
                  />
                  <span className="absolute bottom-2 left-2 bg-secondary/85 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
                    Vinicunca · Cusco
                  </span>
                </div>

                {/* Secondary top-right photo */}
                <div className="absolute top-2 right-0 w-[44%] h-[52%] rounded-2xl overflow-hidden shadow-lg border-[3px] border-white rotate-2 hover:rotate-0 transition-transform duration-500 z-20">
                  <ProtectedImage
                    src="/imagenes/passenger_machupicchu.png"
                    alt="Viajeros Sonqo en Machu Picchu"
                    fill
                    className="object-cover"
                    showCopyright={false}
                    unoptimized
                  />
                  <span className="absolute bottom-1.5 left-1.5 bg-primary/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
                    Machu Picchu
                  </span>
                </div>

                {/* Third bottom-right overlapping photo */}
                <div className="absolute bottom-0 right-4 w-[56%] h-[62%] rounded-2xl overflow-hidden shadow-xl border-[3px] border-white rotate-1 hover:rotate-0 transition-transform duration-500 z-30">
                  <ProtectedImage
                    src="/tours/cusco/laguna-humantay/02.jpg"
                    alt="Laguna Humantay Cusco"
                    fill
                    className="object-cover"
                    showCopyright={false}
                    unoptimized
                  />
                  <span className="absolute bottom-2 left-2 bg-secondary/85 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
                    Laguna Humantay
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side on Desktop: Clean SEO Copy + Verified Credentials */}
            <div className="order-1 lg:order-2 lg:col-span-7 text-left">
              <span className="inline-block text-primary text-[11px] font-bold uppercase tracking-widest mb-1.5">
                Agencia Operadora Oficial en Perú
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[1.65rem] font-serif font-bold text-secondary mb-3 leading-snug tracking-tight">
                {t('title')}
              </h2>
              <p className="text-text-light text-xs sm:text-sm lg:text-[15px] leading-relaxed mb-5">
                {t('content')}
              </p>

              {/* 4 Verified Reference & Credential Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-primary/10">
                <div className="bg-white/90 rounded-xl p-2.5 border border-primary/10 flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-secondary leading-none">+520 Reseñas</p>
                    <p className="text-[10px] text-text-light mt-0.5">4.9★ Verificadas</p>
                  </div>
                </div>
                <div className="bg-white/90 rounded-xl p-2.5 border border-primary/10 flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-secondary leading-none">DIRCETUR</p>
                    <p className="text-[10px] text-text-light mt-0.5">Reg. Oficial Cusco</p>
                  </div>
                </div>
                <div className="bg-white/90 rounded-xl p-2.5 border border-primary/10 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-secondary leading-none">RUC Activo</p>
                    <p className="text-[10px] text-text-light mt-0.5">20564458385</p>
                  </div>
                </div>
                <div className="bg-white/90 rounded-xl p-2.5 border border-primary/10 flex items-center gap-2">
                  <Headphones className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-secondary leading-none">Soporte 24/7</p>
                    <p className="text-[10px] text-text-light mt-0.5">En toda tu ruta</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Compact Institutional References & Associations Strip */}
          <div className="mt-6 pt-5 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-light text-center sm:text-left">
              Respaldo Institucional y Certificaciones en Perú:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => {
                const isJpeg = [3, 5, 7].includes(num);
                const ext = isJpeg ? 'jpeg' : 'png';
                return (
                  <div key={num} className="relative h-6 w-14 sm:h-7 sm:w-16 grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <Image
                      src={`/imagenes/logos/${num}.${ext}`}
                      alt={`Certificación Turística ${num}`}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
