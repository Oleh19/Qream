import { CampDescription, CampSite } from '@/widgets';

const Camp = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite backgroundImage='bg-bg-img-1' peopleJoined='190+ Joined' />
        <CampSite backgroundImage='bg-bg-img-2' peopleJoined='190+ Joined' />
      </div>

      <CampDescription />
    </section>
  );
};

export default Camp;
