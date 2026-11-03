import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import { getTranslations } from 'next-intl/server';
import FeaturedToursTabs from './FeaturedToursTabs';

export default async function FeaturedTours() {
  const t = await getTranslations('home.featured');
  const supabase = await createClient();
  
  // Fetch all active tours to categorize them in client-side tabs
  const { data: tours } = await supabase
    .from('tours')
    .select('id, slug, title, description, image_url, price_adult, tag')
    .eq('is_active', true);
    
  const displayTours = tours || [];

  const heroTitle = t('defaultTitle');
  const heroSubtitle = t('defaultSubtitle');

  return (
    <section className="py-10 sm:py-14 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-10">
          <div className="max-w-2xl">
            <span className="text-primary text-[11px] font-bold uppercase tracking-widest block mb-1.5">
              Catálogo Seleccionado
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-secondary mb-2 tracking-tight leading-tight">
              {heroTitle}
            </h2>
            <p className="text-text-light text-xs sm:text-sm">
              {heroSubtitle}
            </p>
          </div>
          <Link 
            href="/tours" 
            className="mt-3 md:mt-0 group flex items-center text-secondary font-bold text-xs sm:text-sm hover:text-primary transition-colors"
          >
            {t('viewAllTours')}
            <span className="ml-2 w-7 h-7 rounded-full border border-secondary flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        <FeaturedToursTabs tours={displayTours} />
      </div>
    </section>
  );
}
