import Image from 'next/image';

const FeathureImage = () => {
  return (
    <div className='flex flex-1 lg:min-h-[900px]'>
      <Image
        src='/phone.png'
        alt='phone'
        width={440}
        height={1000}
        className='feature-phone'
      />
    </div>
  );
};

export default FeathureImage;
