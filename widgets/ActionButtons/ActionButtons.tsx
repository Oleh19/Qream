import Button from "@/entities/UI/Button";


const ActionButtons = () => {
  return (
    <div className='flex flex-col w-full gap-3 sm:flex-row'>
      <Button type='button' title='Download App' variant='btn_green' />
      <Button
        type='button'
        title='How we work?'
        icon='/play.svg'
        variant='btn_white_text'
      />
    </div>
  );
};

export default ActionButtons;
