import { Shield, Award, FileText, Star, ArrowRight, CheckCircle2, MapPin, Camera } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getBrandConfig } from '@/lib/brand';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('meta');
  const brand = getBrandConfig();
  return {
    title: t('aboutPage.title'),
    description: t('aboutPage.description'),
    alternates: {
      canonical: `${brand.domain}/es/nosotros`,
      languages: {
        'es': `${brand.domain}/es/nosotros`,
        'en': `${brand.domain}/en/nosotros`,
        'x-default': `${brand.domain}/es/nosotros`,
      },
    },
  };
}

const FIELD_GALLERY = [
  {
    src: '/imagenes/passenger_machupicchu.png',
    title: 'Grupos Guiados en Machu Picchu',
    subtitle: 'Santuario Histórico · Cusco',
  },
  {
    src: '/imagenes/passenger_rainbow.png',
    title: 'Expedición Montaña de 7 Colores',
    subtitle: 'Vinicunca 5,036 m · Cusco',
  },
  {
    src: '/imagenes/tren-machupicchu.png',
    title: 'Servicio Ferroviario a Aguas Calientes',
    subtitle: 'PeruRail & Inca Rail · Valle Sagrado',
  },
  {
    src: '/tours/cusco/laguna-humantay/01.jpg',
    title: 'Ruta Turquesa Laguna Humantay',
    subtitle: 'Cordillera de Vilcabamba · Cusco',
  },
  {
    src: '/tours/arequipa/canon-del-colca-2-dias-1-noche/01.jpg',
    title: 'Mirador Cruz del Cóndor',
    subtitle: 'Valle del Colca · Arequipa',
  },
  {
    src: '/tours/puno/puno-full-day-uros-taquile/01.jpg',
    title: 'Cultura Viva en el Lago Titicaca',
    subtitle: 'Islas Uros y Taquile · Puno',
  },
];

const VERIFIED_REVIEWS = [
  {
    name: 'Jenni T.',
    country: 'España',
    date: 'Noviembre, 2025',
    tour: 'Machu Picchu Full Day',
    platform: 'TripAdvisor',
    photo: '/imagenes/passenger_machupicchu.png',
    text: 'Viajamos a Perú con Sonqo Perú Travel. Todo excelente: la atención personalizada por WhatsApp, la puntualidad en los trenes y el guía oficial en la ciudadela. ¡100% recomendados!',
  },
  {
    name: 'Yadira H.',
    country: 'México',
    date: 'Diciembre, 2025',
    tour: 'Valle Sagrado + Machu Picchu 2D',
    platform: 'Google Reviews',
    photo: '/tours/cusco/valle-sagrado-vip/01.jpg',
    text: 'La mejor relación calidad-precio en Cusco. Nos acompañaron desde nuestra llegada al aeropuerto, aclarando cada duda antes del viaje y garantizando que todo saliera impecable.',
  },
  {
    name: 'Esteban C.',
    country: 'Colombia',
    date: 'Enero, 2026',
    tour: 'Montaña de 7 Colores Vinicunca',
    platform: 'TripAdvisor',
    photo: '/imagenes/passenger_rainbow.png',
    text: 'Realizamos la coordinación de todo el itinerario en Cusco y fue fantástico. El equipo lleva oxígeno, desayuno caliente y cuida cada detalle en altura. Volveremos sin dudarlo.',
  },
  {
    name: 'Carolina F.',
    country: 'Chile',
    date: 'Febrero, 2026',
    tour: 'Laguna Humantay & Maras Moray',
    platform: 'Google Reviews',
    photo: '/tours/cusco/laguna-humantay/02.jpg',
    text: 'El recorrido fue de ensueño. Nos encantó la paciencia del guía y las explicaciones históricas en cada sitio arqueológico. Movilidad moderna y muy segura.',
  },
  {
    name: 'Matías R.',
    country: 'Argentina',
    date: 'Febrero, 2026',
    tour: 'Paracas, Ica y Huacachina Full Day',
    platform: 'TripAdvisor',
    photo: '/tours/lima/paracas-ica-huacachina-full-day/01.png',
    text: 'Hicimos la ruta de la costa sur y luego volamos a Cusco con todo organizado por Sonqo. Puntualidad absoluta en cada recojo y excelente selección de guías.',
  },
  {
    name: 'Valeria M.',
    country: 'Perú',
    date: 'Marzo, 2026',
    tour: 'Cañón del Colca & Lago Titicaca',
    platform: 'Google Reviews',
    photo: '/tours/puno/puno-full-day-uros-taquile/01.jpg',
    text: 'Viajé con mi familia desde Lima y nos armaron un paquete completo por Arequipa, Puno y Cusco. Trato cálido, formal, con comprobantes y vouchers al instante.',
  },
];

export default async function NosotrosPage() {
  const t = await getTranslations('pages.about');
  const brand = getBrandConfig();

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Banner */}
      <div className="bg-secondary text-white py-14 sm:py-20 pt-28 sm:pt-32">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="inline-block bg-white/10 border border-white/20 text-primary-light text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Agencia Operadora Oficial en Cusco
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3 leading-tight">
            Sobre Nosotros
          </h1>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-xl mx-auto">
            Conectamos viajeros del mundo con la magia ancestral del Perú a través de experiencias auténticas, seguras y responsables.
          </p>
        </div>
      </div>

      {/* 2. Intro Section */}
      <section className="py-12 sm:py-16 max-w-3xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <div className="relative w-28 h-11">
            <Image
              src={brand.logo.lightBgSrc}
              alt={brand.logo.alt}
              fill
              className="object-contain"
              sizes="112px"
              priority
            />
          </div>
        </div>
        <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-secondary mb-4 leading-snug">
          Vive experiencias únicas en los destinos más increíbles del Perú
        </h2>
        <p className="text-text-light text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
          Descubre la magia del Perú con <strong>{brand.name}</strong>. Recorre destinos inolvidables en Cusco, Lima, Arequipa y Puno, sumérgete en su historia milenaria y disfruta de circuitos diseñados por expertos locales con asistencia personalizada 24/7.
        </p>
      </section>

      {/* 3. Valores Section (Con Fondo de Montaña de Colores) */}
      <section className="relative w-full overflow-hidden min-h-[420px] flex items-center py-14 sm:py-16 px-4 sm:px-8">
        <Image
          src="/tours/cusco/palcoyo-montana-de-colores-alternativa/01.png"
          alt="Valores de Sonqo Perú Travel"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary/90" />
        
        <div className="relative z-10 container mx-auto lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image Card on Desktop */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-white/80 shadow-xl">
                <Image
                  src="/imagenes/passenger_rainbow.png"
                  alt="Viajeros Sonqo en Vinicunca"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary px-2 py-0.5 rounded-full">
                    Operación Directa
                  </span>
                  <p className="text-xs font-semibold mt-1">Grupos reducidos y atención personalizada en ruta</p>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="lg:col-span-8 text-white">
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary-light mb-2">Nuestros Valores</h2>
              <p className="text-white/95 text-sm sm:text-base leading-relaxed font-light mb-6 max-w-2xl border-b border-white/20 pb-5">
                {t('companyNameVal')} opera bajo valores fundamentales que guían cada etapa de nuestro servicio turístico, compromiso comunitario y sostenibilidad ambiental.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <h3 className="font-serif text-base sm:text-lg mb-1.5 text-primary-light">Servicio Orientado al Viajero</h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
                    Priorizamos la seguridad, comodidad y satisfacción de nuestros pasajeros desde su llegada hasta el retorno a casa.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg mb-1.5 text-primary-light">Identidad y Cultura Viva</h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
                    Integramos tradiciones andinas auténticas y guías oficiales locales apasionados por el patrimonio del Cusco y del Perú.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg mb-1.5 text-primary-light">Responsabilidad Ambiental</h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
                    Minimizar nuestra huella ecológica en rutas de alta montaña y santuarios naturales es parte esencial de nuestra operación.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg mb-1.5 text-primary-light">Impacto Social Positivo</h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
                    Trabajamos directamente con familias, porteadores y artesanos de las comunidades altoandinas del Valle Sagrado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5. Compromiso de Sostenibilidad */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6">
              <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-1.5">Sostenibilidad Andina</span>
              <h2 className="text-xl sm:text-2xl font-serif text-secondary mb-3">Nuestro Compromiso con la Reforestación</h2>
              <p className="text-text-light text-xs sm:text-sm leading-relaxed mb-4">
                En <strong>{brand.name}</strong> estamos profundamente comprometidos con la conservación de los ecosistemas andinos. Por cada viajero que reserva con nosotros, destinamos recursos a proyectos de reforestación con árboles nativos de Queñua en las cuencas altoandinas del Cusco.
              </p>
            </div>
            <div className="md:col-span-6 relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/imagenes/reforestation.png"
                alt="Proyecto de Reforestación Cusco"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quiénes Somos Section */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Team / Destination image */}
            <div className="lg:col-span-5 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md group">
              <Image
                src="/imagenes/hero-machupicchu.png"
                alt={`Equipo ${brand.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-primary text-white font-bold text-[11px] uppercase tracking-wider py-1.5 px-3.5 rounded-xl shadow-md">
                Travelers&apos; Choice 2026
              </div>
            </div>

            {/* Quiénes somos Text */}
            <div className="lg:col-span-7">
              <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-1.5">Quiénes Somos</span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-secondary mb-4 leading-tight">
                Una agencia peruana hecha con el corazón (&ldquo;Sonqo&rdquo;)
              </h2>
              <p className="text-text-light text-xs sm:text-sm leading-relaxed mb-3.5">
                En quechua, <strong>&ldquo;Sonqo&rdquo;</strong> significa corazón. Somos <strong>{brand.name}</strong> ({brand.legalName}), una agencia de viajes y operadora de turismo receptivo con sede en la ciudad del Cusco, dedicada a diseñar experiencias memorables en todo el Perú.
              </p>
              <p className="text-text-light text-xs sm:text-sm leading-relaxed mb-5">
                Nuestro equipo de asesores, coordinadores logísticos y guías oficiales trabaja cuidando cada detalle: desde la emisión garantizada de boletos al Santuario de Machu Picchu y trenes turísticos hasta el acompañamiento permanente vía WhatsApp durante todo tu viaje.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100 text-center">
                <div className="bg-cream/60 rounded-xl p-3">
                  <p className="font-serif text-lg sm:text-xl font-bold text-primary">+520</p>
                  <p className="text-[11px] text-text-light">Reseñas 5★</p>
                </div>
                <div className="bg-cream/60 rounded-xl p-3">
                  <p className="font-serif text-lg sm:text-xl font-bold text-primary">+50</p>
                  <p className="text-[11px] text-text-light">Rutas en Perú</p>
                </div>
                <div className="bg-cream/60 rounded-xl p-3">
                  <p className="font-serif text-lg sm:text-xl font-bold text-primary">24/7</p>
                  <p className="text-[11px] text-text-light">Soporte en Ruta</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4.5. Galería de Operación y Rutas Reales */}
      <section className="py-14 bg-cream/40 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider mb-1">
                <Camera className="w-3.5 h-3.5" /> Nuestras Expediciones en Imágenes
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-secondary">
                Así vivimos cada ruta junto a nuestros viajeros
              </h2>
            </div>
            <Link
              href="/experiencias"
              className="text-xs font-bold text-primary hover:text-primary-dark inline-flex items-center gap-1"
            >
              <span>Ver galería completa de experiencias</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {FIELD_GALLERY.map((item, idx) => (
              <div
                key={idx}
                className="group relative aspect-[16/10] rounded-2xl overflow-hidden shadow-sm border border-primary/10 bg-white"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                  <p className="text-xs sm:text-sm font-bold leading-snug">{item.title}</p>
                  <p className="text-[11px] text-white/80 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-primary-light" />
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Certification Cards Panels */}
      <section className="py-14 sm:py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-10 flex flex-col items-center">
            <div className="relative w-14 h-14 mb-2.5 opacity-85">
              <Image
                src="/imagenes/agency_seal.png"
                alt="Sello de Agencia Oficial Autorizada"
                fill
                sizes="56px"
                className="object-contain"
              />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-secondary mb-2">
              Licencias y Permisos Oficiales
            </h2>
            <p className="text-text-light text-xs sm:text-sm max-w-md mx-auto font-normal">
              Operamos formalmente conforme a la normativa peruana para garantizar una experiencia 100% segura y respaldada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: RUC */}
            <div className="bg-white rounded-2xl p-5 border border-gray-150 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base text-secondary font-bold mb-3">Registro SUNAT (RUC)</h3>
                <div className="text-xs sm:text-sm text-text-light space-y-1.5 mb-3">
                  <p><span className="font-semibold text-secondary">Número de RUC:</span> {brand.ruc}</p>
                  <p><span className="font-semibold text-secondary">Razón Social:</span> {brand.legalName}</p>
                  <p><span className="font-semibold text-secondary">Partida Registral:</span> N° 11380723</p>
                </div>
              </div>
              <p className="text-[11px] text-gray-400 border-t border-gray-100 pt-3 leading-relaxed">
                Contribuyente ACTIVO y HABIDO ante SUNAT (CIIU 7911 - Actividades de Agencias de Viajes).
              </p>
            </div>

            {/* Card 2: DIRCETUR */}
            <div className="bg-white rounded-2xl p-5 border border-gray-150 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base text-secondary font-bold mb-3">Licencia GERCETUR / DIRCETUR</h3>
                <div className="text-xs sm:text-sm text-text-light space-y-1.5 mb-3">
                  <p><span className="font-semibold text-secondary">Operador Turístico:</span> Reg. N° 1245-2026/GR-CUSCO</p>
                  <p><span className="font-semibold text-secondary">Domicilio Fiscal:</span> Urb. Túpac Amaru, Cusco</p>
                </div>
              </div>
              <p className="text-[11px] text-gray-400 border-t border-gray-100 pt-3 leading-relaxed">
                Agencia de viajes y turismo autorizada en el Directorio Nacional de Prestadores de Servicios Turísticos Calificados.
              </p>
            </div>

            {/* Card 3: SERNANP */}
            <div className="bg-white rounded-2xl p-5 border border-gray-150 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base text-secondary font-bold mb-3">Permiso SERNANP & MINCUL</h3>
                <div className="text-xs sm:text-sm text-text-light space-y-1.5 mb-3">
                  <p><span className="font-semibold text-secondary">Santuario y Red Camino Inca:</span> Autorización N° 088-2026</p>
                </div>
              </div>
              <p className="text-[11px] text-gray-400 border-t border-gray-100 pt-3 leading-relaxed">
                Operación autorizada ante el Ministerio de Cultura y el Servicio Nacional de Áreas Naturales Protegidas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Asociaciones de Turismo (Compact Logos) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h3 className="text-center font-bold text-[11px] uppercase tracking-widest text-gray-400 mb-6 sm:mb-8">
            Asociaciones y Entidades de Respaldo en Perú
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => {
              const isJpeg = [3, 5, 7].includes(num);
              const ext = isJpeg ? 'jpeg' : 'png';
              return (
                <div key={num} className="relative h-8 w-20 sm:h-9 sm:w-22 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={`/imagenes/logos/${num}.${ext}`}
                    alt={`Logo Asociación ${num}`}
                    fill
                    className="object-contain"
                    sizes="88px"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Opiniones y Referencias Grid (TripAdvisor y Google) */}
      <section className="py-14 sm:py-18 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          
          <div className="text-center mb-12">
            <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-1.5">Referencias Reales</span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-secondary mb-2">
              Lo que opinan nuestros viajeros sobre {brand.name}
            </h2>
            <p className="text-text-light text-xs sm:text-sm max-w-md mx-auto">
              Reseñas verificadas de viajeros que recorrieron Cusco, Machu Picchu, Arequipa, Puno y Lima con nosotros.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left side: Rating summary cards */}
            <div className="lg:col-span-3 space-y-4">
              {/* TripAdvisor Card */}
              <div className="bg-white rounded-2xl p-5 border border-gray-150 shadow-xs text-center flex flex-col items-center">
                <span className="font-sans font-bold text-base text-secondary mb-1.5">Tripadvisor</span>
                <div className="flex gap-1 mb-1.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="w-3.5 h-3.5 rounded-full bg-green-500 inline-block"></span>
                  ))}
                </div>
                <div className="text-lg font-bold text-secondary mb-0.5">Excelente 5.0</div>
                <p className="text-[11px] text-text-light">Con base en +200 opiniones</p>
              </div>

              {/* Google Reviews Card */}
              <div className="bg-white rounded-2xl p-5 border border-gray-150 shadow-xs text-center flex flex-col items-center">
                <span className="font-sans font-bold text-base text-secondary mb-1.5">Google Reviews</span>
                <div className="flex gap-1 mb-1.5 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-lg font-bold text-secondary mb-0.5">Excelente 4.9</div>
                <p className="text-[11px] text-text-light">Con base en +320 reseñas</p>
              </div>
            </div>

            {/* Right side: 6 Testimonials with photo & tour reference */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {VERIFIED_REVIEWS.map((rev, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-4 border border-gray-150 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3 pb-2.5 border-b border-gray-100">
                      <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0">
                        <Image src={rev.photo} alt={rev.tour} fill sizes="40px" className="object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-xs text-secondary truncate">{rev.name} · {rev.country}</h4>
                        <span className="text-[10px] text-text-light block">{rev.date}</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary bg-cream px-2 py-0.5 rounded-full mb-2">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      {rev.tour}
                    </span>
                    <p className="text-text-light text-xs leading-relaxed">
                      {rev.text}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-gray-50 flex items-center justify-between text-[10px] text-text-light">
                    <span className="font-semibold text-emerald-700">{rev.platform}</span>
                    <span>★★★★★</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="text-center mt-10">
            <Link href="/tours" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2">
              <span>Ver todos los tours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
