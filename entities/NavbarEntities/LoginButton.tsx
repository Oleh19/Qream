import Button from "../UI/Button";


const LoginButton = () => {
  return (
    <div className='lg:flexCenter hidden'>
      <Button
        type='button'
        title='Login'
        icon='/user.svg'
        variant='btn_dark_green'
      />
    </div>
  );
};

export default LoginButton;
