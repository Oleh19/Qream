const FooterDescription = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p className='regular-14 w-full text-center text-gray-30'>
      {currentYear} | All rights reserved
    </p>
  );
};

export default FooterDescription;
