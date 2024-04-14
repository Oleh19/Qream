import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/shared/constants';
import FooterContactInfo from '@/widgets/FooterContactInfo/FooterContactInfo';
import FooterLinkColumn from '@/widgets/FooterLinkColumn/FooterLinkColumn';
import FooterSocials from '@/widgets/FooterSocials/FooterSocials';
import { FooterLine } from '@/entities/FooterEntities';
import { FooterDescription } from '@/entities/FooterEntities';
import Logo from '@/entities/UI/Logo';

const Footer = () => {
  return (
    <footer className='flexCenter mb-4'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Logo href={'/'} />

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns, index) => (
              <FooterLinkColumn
                title={columns.title}
                links={columns.links}
                key={index}
              />
            ))}

            <FooterContactInfo contactInfo={FOOTER_CONTACT_INFO} />
            <FooterSocials socialLinks={SOCIALS} />
          </div>
        </div>

        <FooterLine />
        <FooterDescription />
      </div>
    </footer>
  );
};

export default Footer;
