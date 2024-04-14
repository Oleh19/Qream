import { CampBackground, PeopleIcons } from '@/entities/CampEntities';

interface CampProps {
  backgroundImage: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, peopleJoined }: CampProps) => {
  return (
    <CampBackground backgroundImage={backgroundImage}>
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
        <div className='flexCenter gap-4' />
        <PeopleIcons peopleJoined={peopleJoined} />
      </div>
    </CampBackground>
  );
};

export default CampSite;
