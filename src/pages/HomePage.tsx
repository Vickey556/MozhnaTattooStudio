import { CustomReviews } from '../components/CustomReviews';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { ExpertiseSection } from '../components/home/ExpertiseSection';
import { MastersSection } from '../components/home/MastersSection';
import { AtmosphereSection } from '../components/home/AtmosphereSection';

export const HomePage = () => {
  return (
    <div className="bg-cover bg-fixed bg-center" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}background.jpg')` }}>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <MastersSection />
      <AtmosphereSection />
      <CustomReviews />
    </div>
  );
};
