import FeatureImage from '@/entities/FeatureEntities/FeatureImage';
import FeatureList from '../FeatureList/FeatureList';

const FeatureSection = () => {
  return (
    <div className='max-container padding-container relative w-full flex justify-end'>
      <FeatureImage />
      <FeatureList />
    </div>
  );
};

export default FeatureSection;
