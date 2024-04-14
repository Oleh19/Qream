import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  href: string;
}

const Logo: React.FC<LogoProps> = ({ href }) => {
  return (
    <Link href={href}>
      <Image src='/logo.svg' alt='logo' width={74} height={29} />
    </Link>
  );
};

export default Logo;
