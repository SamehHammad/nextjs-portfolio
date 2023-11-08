// testimonial slider data
export const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Анна Иванова',
    position: 'Сайт: www.aquaphor.ru',
    message:
      'Мы считаем, что дизайн сайта - это не просто красивые картинки и цвета, это инструмент, который помогает привлечь внимание и удержать пользователя на сайте. Мы создаем уникальные дизайны, которые соответствуют вашей бренд-идентичности и являются удобными для пользователей.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Юлия Константинова',
    position: 'Сайт: grainholding.ru',
    message:
      'Мы понимаем, что каждый бизнес уникален и требует индивидуального подхода. Поэтому мы готовы разработать сайт, который будет соответствовать вашим потребностям и целям. Мы общаемся с клиентами, чтобы понять их бизнес-процессы и создаем сайты, которые помогают достигать поставленных задач.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Егор Алексеев',
    position: 'Сайт: mesee.ru',
    message:
      'Наша веб студия предлагает полный спектр услуг по созданию сайтов: от разработки дизайна до написания контента и настройки SEO. Мы учитываем все потребности бизнеса и создаем сайты, которые привлекают клиентов и увеличивают продажи.',
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';
// next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;