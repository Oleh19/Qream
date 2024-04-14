import { ReactNode } from 'react';

interface CampSiteImageProps {
  backgroundImage: string;
  children: ReactNode;
}

const CampBackground = ({ backgroundImage, children }: CampSiteImageProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      {children}
    </div>
  );
};

export default CampBackground;
