import { useServices } from '../hooks/useServices';
import { ServicesSlider } from '../components/services/ServicesSlider';
import { DiscountSection } from '../components/services/DiscountSection';

export const ServicesPage = () => {
  const { services, loading } = useServices();

  if (loading) {
    return <div className="min-h-screen pt-32 pb-24 flex items-center justify-center font-serif text-[#EBEBDF]">Завантаження...</div>;
  }

  return (
    <div className="pt-14 pb-32 px-4 min-h-[calc(100vh-100px)] relative overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <ServicesSlider services={services} />
        <DiscountSection />
      </div>
    </div>
  );
};