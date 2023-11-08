// links
import Link from 'next/link';

// icons
import {
  RiCopperCoinFill,
  RiTelegramFill,
  RiWhatsappLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-2xl'>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiCopperCoinFill />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiTelegramFill />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiWhatsappLine />
      </Link>
    </div>
  );
};

export default Socials;