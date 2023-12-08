// work slider data
import { FaCode, FaRegEye } from "react-icons/fa";

export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Admin Dashbord",
          path: "/dashboard.jpg",
          demo: "https://admin-dashboard-sameh.vercel.app/dashboard/",
          code: "https://github.com/SamehHammad/admin-dashboard",
        },
        {
          title: "Chat GPT ",
          path: "/chatGPT.jpg",
          demo: "https://chat-gpt-n7gk.vercel.app/",
          code: "https://github.com/SamehHammad/chatGPT",
        },
        {
          title: "Healthify",
          path: "/healthify.jpg",
          demo: "https://healthify-ahmedelayk.vercel.app/",
          code: "https://github.com/SamehHammad/Healthify-GP-web-app",
        },
        {
          title: "Amazon Clone",
          path: "/amazon.jpg",
          demo: "https://clone-8c822.firebaseapp.com/",
          code: "https://github.com/SamehHammad/amazon-clone",
        },
      ],
    },
    {
      images: [
        {
          title: "Almnarah Trans",
          path: "/almnarah.jpg",
          demo: "https://almanara-transs.vercel.app/",
          code: "https://github.com/SamehHammad/almanara-trans",
        },
        {
          title: "Mobile Store (IMOB)",
          path: "/imob.jpg",
          demo: "https://mobile-store-tau.vercel.app/",
          code: "https://github.com/SamehHammad/mobile-store",
        },
        {
          title: "Tic Tac Toe",
          path: "/tic.jpg",
          demo: "https://tic-tac-toe-blue-five.vercel.app/",
          code: "https://github.com/SamehHammad/tic-tac-toe",
        },
        {
          title: "Tech Store",
          path: "/tech.jpg",
          demo: "https://samehhammad.github.io/tech/",
          code: "https://github.com/SamehHammad/tech",
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
// next image
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-grabbing">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group h-[100%] ">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute w-full bottom-[0] translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center flex-col gap-y-4 gap-x-2 tracking-[0.2em]">
                          {/* title  */}
                          <div className="delay-200 ">{image.title}</div>
                          {/* icons */}
                          <div className="flex text-[45px] w-full text-black justify-around translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            <Link href={image.code}>
                              <FaCode />
                            </Link>
                            <Link href={image.demo}>
                              <FaRegEye />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
