import Image from 'next/image';

const StarRating = () => {
  return (
    <div className='my-11 flex flex-wrap gap-5'>
      <div className='flex items-center gap-2'>
        {Array(5)
          .fill(1)
          .map((_, index) => (
            <Image
              src='/star.svg'
              key={index}
              alt='star'
              width={24}
              height={24}
            />
          ))}
      </div>

      <p className='bold-16 lg:bold-20 text-blue-70'>
        190k
        <span className='regular-16 lg:regular-20 ml-1'>Excellent Reviews</span>
      </p>
    </div>
  );
};

export default StarRating;
