import { PEOPLE_URL } from '@/shared/constants';
import Image from 'next/image';

interface PeopleIconsdProps {
  peopleJoined: string;
}

const PeopleIcons = ({ peopleJoined }: PeopleIconsdProps) => {
  return (
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
  );
};

export default PeopleIcons;
