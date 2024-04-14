import Link from 'next/link';
import FooterColumn from '../../entities/FooterEntities/FooterColumn';

interface LinkItem {
  href: string;
  label: string;
}

interface FooterLinkColumnProps {
  title: string;
  links: LinkItem[];
}

const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({
  title,
  links,
}) => {
  return (
    <div className='flex flex-col gap-5'>
      <FooterColumn title={title}>
        <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
          {links.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </ul>
      </FooterColumn>
    </div>
  );
};

export default FooterLinkColumn;
