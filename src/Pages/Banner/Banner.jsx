
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Basic Swiper styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/navigation"; // Navigation styles

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const slides = [
  {
    image: "https://i.ibb.co/w9ZQmBG/Bangladesh-court.jpg",
    title: "Find Your National Court",
    description: "Explore the best tribunal in our country.",
  },
  {
    image: "https://i.ibb.co/j9gKPg0t/real-2.jpg",         
    title: "Military Base ",
    description: "Experience the finest living spaces national Security.",
  },
  {
    image: "https://i.ibb.co/RTVykfYm/Hospital.jpg",
    title: "Invest in Your Future to the Health Sector",
    description: "Browse our exclusive health care center.",
  },
];














const Banner = () => {
  return (
    // <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12 bg-blue-50 min-h-screen">
    //   {/* Left Side - Image */}
    //   <div className="w-full md:w-1/2 flex justify-center">
    //     <img
    //       src="https://i.ibb.co/w36vhmF/standard-quality-control-concept-m.jpg"
    //       alt="Govt Service"
    //       className="w-3/4 md:w-[80%] lg:w-[70%] rounded-lg shadow-lg"
    //     />
    //   </div>

    //   {/* Right Side - Text */}
    //   <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-12">
    //     <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
    //       Govt Service for People
    //     </h1>
    //     <p className="mt-4 text-gray-600 text-lg md:text-xl leading-relaxed">
    //       Empowering citizens with accessible and efficient government services.
    //     </p>
    //     <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
    //       Learn More
    //     </button>
    //   </div>
    // </div>  


    <div className="w-full max-w-screen-lg mx-auto">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Text Content */}
              <div className="relative text-center text-white p-6">
                <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
                <p className="mt-2 text-lg md:text-xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
  
};

export default Banner;
