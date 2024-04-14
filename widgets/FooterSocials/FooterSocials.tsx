import Image from 'next/image';
import FooterColumn from '../../entities/FooterEntities/FooterColumn';

interface SocialLink {
  src: string;
  label: string;
}

interface FooterSocialsProps {
  socialLinks: {
    title: string;
    links: SocialLink[];
  };
}

const FooterSocials: React.FC<FooterSocialsProps> = ({ socialLinks }) => {
  return (
    <div className='flex flex-col gap-5'>
      <FooterColumn title={socialLinks.title}>
        <ul className='regular-14 flex gap-4 text-gray-30'>
          {socialLinks.links.map((link, index) => (
            <li key={index}>
              <Image
                src={link.src}
                alt={link.label || ''}
                width={24}
                height={24}
              />
            </li>
          ))}
        </ul>
      </FooterColumn>
    </div>
  );
};

export default FooterSocials;
