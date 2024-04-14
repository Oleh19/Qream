import { FeatureItem } from '@/entities/FeatureEntities';
import { FEATURES } from '@/shared/constants';

const FeatureList = () => {
  return (
    <div className='z-20 flex w-full flex-col lg:w-[60%]'>
      <div className='relative'>
        <h2 className='bold-40 lg:bold-64'>Our Features</h2>
      </div>
      <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20'>
        {FEATURES.map((feature) => (
          <FeatureItem
            key={feature.title}
            title={feature.title}
            icon={feature.icon}
            description={feature.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;
