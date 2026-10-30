'use client';

import { useState } from 'react';
import { useRouter, Link } from '@/i18n/navigation';
import { Calendar as CalendarIcon, Users, MapPin, Search, MessageCircle, Compass, Tag } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getBrandConfig } from '@/lib/brand';

export default function BookingWidget() {
  const t = useTranslations('home.booking');
  const brand = getBrandConfig();
  const router = useRouter();
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('2');
  const [tripType, setTripType] = useState('');
  const [coupon, setCoupon] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.append('q', destination);
    if (date) params.append('date', date);
    if (passengers) params.append('passengers', passengers);
    if (tripType) params.append('tripType', tripType);
    if (coupon) params.append('coupon', coupon);
    
    router.push(`/tours?${params.toString()}`);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const cleanPhone = brand.contact.cleanPhone;
    const selectedTripType = tripType ? t(`tripTypes.${tripType}`) : 'Cualquiera';
    
    const textMessage = `¡Hola ${brand.name}! Me interesa planificar un viaje.\n\n` +
      `📍 Destino/Tour: ${destination || 'Por definir'}\n` +
      `📅 Fecha: ${date || 'Por definir'}\n` +
      `👥 Pasajeros: ${passengers}\n` +
      `🏔️ Tipo de viaje: ${selectedTripType}\n` +
      (coupon ? `🎫 Cupón: ${coupon}\n` : '') +
      `\n¿Tienen disponibilidad y tarifas para estas fechas?`;
      
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-[22px] sm:rounded-[32px] shadow-[0_20px_50px_rgba(33,62,76,0.16)] p-3.5 sm:p-6 mx-auto max-w-5xl xl:max-w-7xl relative z-20 mt-[-36px] sm:mt-[-50px] border-2 border-primary/20">
      {/* Upper bar with quick link to all packages */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 sm:pb-3.5 mb-3 sm:mb-4">
        <Link 
          href="/tours" 
          className="text-[11px] sm:text-sm font-extrabold text-secondary hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-wider"
        >
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
            <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </span>
          <span className="truncate">{t('availabilityHeader')}</span>
        </Link>
      </div>

      <form onSubmit={handleSearch} className="grid grid-cols-2 xl:flex xl:flex-row items-stretch xl:items-center xl:divide-x divide-gray-100 gap-2 sm:gap-2.5 xl:gap-0">
        
        {/* Destino / Actividad (Full width on mobile) */}
        <div className="col-span-2 xl:flex-1 px-3 sm:px-5 xl:px-4 py-2 sm:py-3 w-full flex items-center bg-gray-50/70 xl:bg-transparent hover:bg-gray-50 transition-colors cursor-pointer group rounded-xl xl:rounded-none xl:rounded-l-[1rem]">
          <MapPin className="text-primary w-4 h-4 sm:w-5 sm:h-5 mr-2.5 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col w-full min-w-0">
            <label htmlFor="destination" className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1 cursor-pointer truncate">{t('destinationLabel')}</label>
            <input 
              id="destination"
              type="text" 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder={t('destinationPlaceholder')} 
              className="w-full bg-transparent border-none outline-none text-text-main font-semibold placeholder:text-text-light placeholder:font-normal focus:ring-0 p-0 leading-tight text-xs sm:text-base xl:text-sm truncate"
            />
          </div>
        </div>

        {/* Tipo de Viaje (Half width on mobile) */}
        <div className="col-span-1 xl:flex-1 px-3 sm:px-5 xl:px-4 py-2 sm:py-3 w-full flex items-center bg-gray-50/70 xl:bg-transparent hover:bg-gray-50 transition-colors cursor-pointer group rounded-xl xl:rounded-none">
          <Compass className="text-primary w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col w-full min-w-0">
            <label htmlFor="tripType" className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1 cursor-pointer truncate">{t('tripTypeLabel')}</label>
            <select 
              id="tripType"
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-text-main font-semibold focus:ring-0 p-0 leading-tight cursor-pointer appearance-none group-hover:text-primary transition-colors text-xs sm:text-base xl:text-sm truncate"
            >
              <option value="" className="text-text-light font-normal">{t('tripTypePlaceholder')}</option>
              {['adventure', 'cultural', 'family', 'archaeological', 'private'].map(type => (
                <option key={type} value={type} className="text-text-main font-semibold">{t(`tripTypes.${type}`)}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Fechas (Half width on mobile) */}
        <div className="col-span-1 xl:flex-1 px-3 sm:px-5 xl:px-4 py-2 sm:py-3 w-full flex items-center bg-gray-50/70 xl:bg-transparent hover:bg-gray-50 transition-colors cursor-pointer group rounded-xl xl:rounded-none">
          <CalendarIcon className="text-primary w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col w-full relative min-w-0">
            <label htmlFor="date" className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1 cursor-pointer truncate">{t('dateLabel')}</label>
            <div className="relative w-full">
              <input 
                id="date"
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={`w-full bg-transparent border-none outline-none font-semibold focus:ring-0 p-0 leading-tight appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer z-10 text-xs sm:text-base xl:text-sm ${date ? 'text-text-main' : 'text-transparent'}`}
              />
              {!date && (
                <span className="absolute inset-0 pointer-events-none text-text-main font-semibold group-hover:text-primary transition-colors flex items-center flex-1 text-xs sm:text-base xl:text-sm truncate">
                  {t('datePlaceholder')}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Pasajeros (Half width on mobile) */}
        <div className="col-span-1 xl:flex-1 px-3 sm:px-5 xl:px-4 py-2 sm:py-3 w-full flex items-center bg-gray-50/70 xl:bg-transparent hover:bg-gray-50 transition-colors cursor-pointer group rounded-xl xl:rounded-none">
          <Users className="text-primary w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col w-full min-w-0">
            <label htmlFor="passengers" className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1 cursor-pointer truncate">{t('passengersLabel')}</label>
            <select 
              id="passengers"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-text-main font-semibold focus:ring-0 p-0 leading-tight cursor-pointer appearance-none group-hover:text-primary transition-colors text-xs sm:text-base xl:text-sm truncate"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num} className="text-text-main">{t('passengerOption', { count: num })}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Cupón (Half width on mobile) */}
        <div className="col-span-1 xl:flex-1 px-3 sm:px-5 xl:px-4 py-2 sm:py-3 w-full flex items-center bg-gray-50/70 xl:bg-transparent hover:bg-gray-50 transition-colors cursor-pointer group rounded-xl xl:rounded-none">
          <Tag className="text-primary w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col w-full min-w-0">
            <label htmlFor="coupon" className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1 cursor-pointer truncate">{t('couponLabel')}</label>
            <input 
              id="coupon"
              type="text" 
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder={t('couponPlaceholder')} 
              className="w-full bg-transparent border-none outline-none text-text-main font-semibold placeholder:text-text-light placeholder:font-normal focus:ring-0 p-0 leading-tight text-xs sm:text-base xl:text-sm truncate"
            />
          </div>
        </div>

        {/* Botones de Acción (Side-by-side on mobile & tablet, stacked on xl) */}
        <div className="col-span-2 xl:col-auto pt-1 xl:py-3 xl:pl-5 w-full xl:w-auto shrink-0 grid grid-cols-2 xl:flex xl:flex-col gap-2 sm:gap-2.5 items-stretch justify-center">
          <button 
            type="submit" 
            className="bg-primary hover:bg-primary-dark text-white rounded-full py-2.5 px-4 sm:px-5 flex items-center justify-center transition-colors shadow-md gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold cursor-pointer min-h-[44px]"
            aria-label={t('searchAriaLabel')}
          >
            <Search className="w-4 h-4 shrink-0" />
            <span className="truncate">{t('searchButton')}</span>
          </button>
          
          <button 
            type="button"
            onClick={handleWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full py-2.5 px-4 sm:px-5 flex items-center justify-center transition-colors shadow-md gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span className="truncate">{t('whatsappButton')}</span>
          </button>
        </div>

      </form>
    </div>
  );
}
