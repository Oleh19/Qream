import Image from 'next/image';

const NavMobileMenu = () => {
  return (
    <Image
      src='menu.svg'
      alt='menu'
      width={32}
      height={32}
      className='inline-block cursor-pointer lg:hidden'
    />
  );
};

export default NavMobileMenu;
