import { getTranslations } from 'next-intl/server';
import { ProtectedImage } from '@/components/ui/ProtectedImage';

export default async function SEOBlock() {
  const t = await getTranslations('home.seo');

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="bg-gradient-to-br from-cream via-white to-cream/60 rounded-[24px] sm:rounded-[32px] p-5 sm:p-10 lg:p-12 border border-primary/15 shadow-[0_12px_40px_rgba(139,102,232,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Side on Desktop / Bottom on Mobile: Offset Dual Image Collage */}
            <div className="order-2 lg:order-1 lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md h-[200px] sm:h-[290px]">
                {/* Main tilted photo */}
                <div className="absolute top-0 left-1 sm:left-0 w-[66%] h-[85%] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-xl border-4 border-white -rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
                  <ProtectedImage
                    src="/tours/cusco/montana-de-colores-vinicunca/01.jpg"
                    alt="Montaña de 7 Colores"
                    fill
                    className="object-cover"
                    showCopyright={false}
                    unoptimized
                  />
                </div>
                {/* Secondary overlapping photo */}
                <div className="absolute bottom-0 right-1 sm:right-0 w-[58%] h-[75%] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
                  <ProtectedImage
                    src="/tours/cusco/laguna-humantay/02.jpg"
                    alt="Laguna Humantay"
                    fill
                    className="object-cover"
                    showCopyright={false}
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Right Side on Desktop / Top on Mobile: Clean SEO Copy */}
            <div className="order-1 lg:order-2 lg:col-span-7 text-left">
              <h2 className="text-[clamp(1.4rem,3.5vw+0.5rem,2.35rem)] font-serif font-extrabold text-secondary mb-3 sm:mb-4 leading-tight tracking-tight">
                {t('title')}
              </h2>
              <p className="text-text-light text-sm sm:text-base lg:text-lg leading-relaxed">
                {t('content')}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

