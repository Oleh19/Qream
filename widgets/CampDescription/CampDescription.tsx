import Image from 'next/image';

const CampDescription = () => {
  return (
    <div className='flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6'>
      <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
        <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'>
          <strong>Feeling Lost</strong> And Not Knowing The Way?
        </h2>
        <p className='regular-14 xl:regular-16 mt-5 text-white'>
          Starting from the anxiety of the climbers when visiting a new climbing
          location, the possibility of getting lost is very large. That&apos;s
          why we are here for those of you who want to start an adventure
        </p>
        <Image
          src='/quote.svg'
          alt='camp-2'
          width={186}
          height={219}
          className='camp-quote'
        />
      </div>
    </div>
  );
};

export default CampDescription;
