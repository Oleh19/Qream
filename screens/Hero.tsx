import { Header, StarRating, SubscriptionForm } from '@/entities/HeroEntities';
import { ActionButtons } from '@/widgets';

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      <div className='hero-map' />
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <Header />
        <StarRating />
        <ActionButtons />
      </div>
      <SubscriptionForm />
    </section>
  );
};

export default Hero;
