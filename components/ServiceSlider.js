// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from "swiper";

// service data
export const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Responsive Web Design",
    description:
      "Ensuring websites and applications seamlessly adapt to various screen sizes and devices, creating a consistent and user-friendly experience.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Implementing front-end practices that contribute to search engine optimization (SEO), such as optimizing HTML structure, incorporating relevant meta tags, and ensuring proper semantic markup to enhance the website's visibility and ranking on search engines",
  },
  {
    icon: <RxCrop />,
    title: "Performance Optimization",
    description:
      "Enhancing the speed and efficiency of websites through techniques like code minification and image compression, ensuring a smooth and fast user experience.",
  },
  {
    icon: <RxPencil2 />,
    title: "User Interface (UI)",
    description:
      "Crafting visually appealing and interactive elements, such as buttons and forms, to enhance the overall look and feel of websites or applications.",
  },
  {
    icon: <RxReader />,
    title: "Cross-Browser Compatibility",
    description:
      "Verifying that websites function consistently across different web browsers, resolving compatibility issues to provide a uniform experience for all users.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[280px] sm:h-[360px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="grow mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
