import { PEOPLE_URL } from '@/shared/constants';
import Image from 'next/image';

interface CampProps {
  backgroundImage: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, peopleJoined }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
        <div className='flexCenter gap-4' />
        <div className='flexCenter gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {PEOPLE_URL.map((url) => (
              <Image
                className='inline-block h-10 w-10 rounded-full'
                src={url}
                key={url}
                alt='person'
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className='bold-16 md:bold-20 text-white'>{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

export default CampSite;
