import { NAV_LINKS } from '@/shared/constants';
import LoginButton from '@/entities/NavbarEntities/LoginButton';
import Logo from '@/entities/UI/Logo';
import NavMenu from '@/entities/NavbarEntities/NavMenu';
import NavMobileMenu from '@/entities/NavbarEntities/NavMobileMenu';

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Logo href='/' />
      <NavMenu navLinks={NAV_LINKS} />
      <LoginButton />
      <NavMobileMenu />
    </nav>
  );
};

export default Navbar;
