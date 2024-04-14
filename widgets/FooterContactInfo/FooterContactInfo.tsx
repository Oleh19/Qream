import Link from 'next/link';
import FooterColumn from '../../entities/FooterEntities/UI/FooterColumn';

interface ContactLink {
  label: string;
  href: string;
  value: string;
}

interface FooterContactInfoProps {
  contactInfo: {
    title: string;
    links: ContactLink[];
  };
}

const FooterContactInfo: React.FC<FooterContactInfoProps> = ({
  contactInfo,
}) => {
  return (
    <div className='flex flex-col gap-5'>
      <FooterColumn title={contactInfo.title}>
        {contactInfo.links.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className='flex gap-4 md:flex-col lg:flex-row'
          >
            <p className='whitespace-nowrap'>{link.label}:</p>
            <p className='medium-14 whitespace-nowrap text-blue-70'>
              {link.value}
            </p>
          </Link>
        ))}
      </FooterColumn>
    </div>
  );
};

export default FooterContactInfo;
