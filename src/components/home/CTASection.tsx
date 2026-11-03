import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';

export default async function CTASection() {
  const t = await getTranslations('home.cta');

  return (
    <section className="py-10 sm:py-14 lg:py-18 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="relative rounded-3xl overflow-hidden py-10 sm:py-12 lg:py-14 px-5 sm:px-10 shadow-[0_20px_50px_rgba(139,102,232,0.22)]">
          {/* Vibrant Violet (#8B66E8) to Deep Petrol (#213E4C) Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary" />
          
          {/* Decorative glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-secondary/50 blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white mb-3 leading-tight tracking-tight">
              {t('title')}
            </h2>
            <p className="text-white/85 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
              <Link 
                href="/tours" 
                className="w-full sm:w-auto justify-center bg-secondary text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-white hover:text-secondary hover:shadow-xl transition-all inline-flex items-center gap-2 group shadow-lg"
              >
                {t('exploreTours')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contacto"
                className="w-full sm:w-auto justify-center bg-white/15 backdrop-blur-md border border-white/35 text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-white hover:text-primary transition-all inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {t('contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

