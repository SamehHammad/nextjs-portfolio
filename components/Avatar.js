// next image
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src={'/react-portfolio-starter/avatar-1.png'}
        width={700}
        height={643}
        alt=''
        className='translate-z-0 w-full h-full'
        priority
      />
    </div>
  );
};

export default Avatar;
