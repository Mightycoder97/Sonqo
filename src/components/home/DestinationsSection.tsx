import Image from 'next/image';
import { createClient } from '@/lib/supabase/server';
import { Link } from '@/i18n/navigation';
import { MapPin, ChevronRight, Camera, CheckCircle2 } from 'lucide-react';

interface DestinationCard {
  id: string;
  name: string;
  slug: string;
  tour_count: number;
  cover_image: string;
}

const DEST_COVERS: Record<string, string> = {
  lima:     '/tours/lima/islas-palomino/01.jpg',
  cusco:    '/tours/cusco/machu-picchu-full-day/01.jpg',
  arequipa: '/tours/arequipa/city-tour-arequipa-half-day/01.jpg',
  puno:     '/tours/puno/puno-full-day-uros-taquile/01.jpg',
};

const DEST_DESCRIPTIONS: Record<string, string> = {
  lima:     'Capital gastronómica, costa pacífica y oasis de Huacachina',
  cusco:    'Ciudad imperial de los Incas, Valle Sagrado y Machu Picchu',
  arequipa: 'La Ciudad Blanca de sillar y el profundo Cañón del Colca',
  puno:     'El Lago Titicaca, Islas Flotantes de los Uros y Taquile',
};

const FALLBACK_DESTINATIONS: DestinationCard[] = [
  { id: 'cusco', name: 'Cusco', slug: 'cusco', tour_count: 28, cover_image: DEST_COVERS.cusco },
  { id: 'arequipa', name: 'Arequipa', slug: 'arequipa', tour_count: 11, cover_image: DEST_COVERS.arequipa },
  { id: 'lima', name: 'Lima', slug: 'lima', tour_count: 8, cover_image: DEST_COVERS.lima },
  { id: 'puno', name: 'Puno', slug: 'puno', tour_count: 7, cover_image: DEST_COVERS.puno },
];

const REAL_MOMENTS = [
  {
    src: '/imagenes/passenger_machupicchu.png',
    title: 'Grupo Sonqo en Machu Picchu',
    location: 'Santuario Histórico · Cusco',
    tag: 'Experiencia Verificada',
  },
  {
    src: '/imagenes/passenger_rainbow.png',
    title: 'Cumbre Vinicunca 5,036 m',
    location: 'Montaña de 7 Colores · Cusco',
    tag: 'Expedición Andina',
  },
  {
    src: '/tours/cusco/pachamanca-full-day/01.png',
    title: 'Turismo Vivencial y Pachamanca',
    location: 'Valle Sagrado · Cusco',
    tag: 'Cultura Viva',
  },
  {
    src: '/tours/cusco/matrimonio-andino-kasarakuy/01.png',
    title: 'Ceremonia Ancestral Andina',
    location: 'Comunidad Altoandina · Cusco',
    tag: 'Tradición Inca',
  },
  {
    src: '/tours/lima/paracas-ica-huacachina-full-day/01.png',
    title: 'Oasis de Huacachina y Dunas',
    location: 'Ica & Paracas · Costa Sur',
    tag: 'Full Day Aventura',
  },
  {
    src: '/tours/puno/puno-full-day-uros-taquile/01.jpg',
    title: 'Navegación en el Lago Titicaca',
    location: 'Islas Uros y Taquile · Puno',
    tag: 'Ruta del Sol',
  },
];

export default async function DestinationsSection() {
  const supabase = await createClient();

  const { data: destinations } = await supabase
    .from('destinations')
    .select('id, name, slug')
    .order('name');

  const { data: tourCounts } = await supabase
    .from('tours')
    .select('destination_id')
    .eq('is_active', true);

  const countMap: Record<string, number> = {};
  for (const tour of tourCounts || []) {
    if (tour.destination_id) {
      countMap[tour.destination_id] = (countMap[tour.destination_id] || 0) + 1;
    }
  }

  const destCards: DestinationCard[] =
    destinations && destinations.length > 0
      ? destinations.map((d) => ({
          id: d.id,
          name: d.name,
          slug: d.slug,
          tour_count: countMap[d.id] || 0,
          cover_image: DEST_COVERS[d.slug] || DEST_COVERS.cusco,
        }))
      : FALLBACK_DESTINATIONS;

  return (
    <section className="py-12 sm:py-16 bg-white" aria-labelledby="destinations-heading">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="max-w-2xl">
            <p className="text-primary font-bold uppercase tracking-widest text-[11px] mb-1.5">
              Rutas por Región
            </p>
            <h2 id="destinations-heading" className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-2">
              Explora los Destinos de Sonqo Perú Travel
            </h2>
            <p className="text-text-light text-xs sm:text-sm">
              Operación directa en Cusco, Arequipa, Puno y Lima con guías locales certificados y movilidad turística propia.
            </p>
          </div>
          <Link
            href="/tours"
            className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-bold hover:text-primary-dark transition-colors"
          >
            <span>Explorar todos los destinos</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14">
          {destCards.map((dest) => (
            <Link
              key={dest.id}
              href={`/tours?destino=${dest.slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[3/4] block shadow-sm hover:shadow-xl transition-all duration-300 border border-primary/10"
              aria-label={`Ver tours en ${dest.name}`}
            >
              <Image
                src={dest.cover_image}
                alt={dest.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <div className="flex items-center gap-1 text-primary-light text-[11px] font-bold mb-1 uppercase tracking-wider">
                  <MapPin className="w-3 h-3" />
                  <span>Perú</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold mb-1 leading-tight group-hover:text-primary-light transition-colors">
                  {dest.name}
                </h3>
                <p className="text-white/80 text-xs font-normal mb-3 leading-snug line-clamp-2">
                  {DEST_DESCRIPTIONS[dest.slug]}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-white/15">
                  <span className="text-white/75 text-[11px] font-semibold">
                    {dest.tour_count} {dest.tour_count === 1 ? 'experiencia' : 'experiencias'}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/15 group-hover:bg-primary flex items-center justify-center transition-colors">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Visual Gallery & Real Traveler References Strip */}
        <div className="bg-cream/60 rounded-[24px] p-5 sm:p-8 border border-primary/15">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 text-primary text-[11px] font-bold uppercase tracking-widest mb-1">
                <Camera className="w-3.5 h-3.5" /> Galería y Referencias Reales
              </span>
              <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-secondary">
                Momentos reales vividos por nuestros viajeros en ruta
              </h3>
            </div>
            <Link
              href="/experiencias"
              className="inline-flex items-center gap-1.5 bg-white text-secondary hover:bg-primary hover:text-white px-4 py-2 rounded-full text-xs font-bold border border-primary/20 transition-all shadow-xs shrink-0"
            >
              <span>Ver todas las fotos y referencias</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {REAL_MOMENTS.map((item, idx) => (
              <Link
                key={idx}
                href="/experiencias"
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm border-2 border-white block"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                <div className="absolute top-2 left-2">
                  <span className="inline-flex items-center gap-1 bg-primary/90 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    {item.tag}
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <p className="text-xs font-bold leading-tight mb-0.5">{item.title}</p>
                  <p className="text-[10px] text-white/75">{item.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
