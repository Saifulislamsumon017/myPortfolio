import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Emily Johnson',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!',
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!',
    },
    {
      id: 3,
      name: 'Sarah Thompson',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!',
    },
    {
      id: 4,
      name: 'David Rodriguez',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!',
    },
    {
      id: 5,
      name: 'Lisa Patel',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!',
    },
  ];

  return (
    <div id="testimonials" className="py-10 bg-gray-100 relative">
      <h1 className="text-center text-2xl lg:text-4xl font-bold">
        What our Customer Say
      </h1>
      <div className="max-w-6xl mx-auto py-10 px-5">
        <Swiper
          style={{
            '--swiper-pagination-color': '#EF4444',
            '--swiper-pagination-bullet-inactive-color': '#999999',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-size': '10px',
            '--swiper-pagination-bullet-horizontal-gap': '6px',
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          className="mySwiper"
        >
          {testimonials.map(item => (
            <SwiperSlide key={item.id}>
              <div className="border border-gray-400 shadow-md rounded-lg flex flex-col p-4 bg-white">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      fill={i < item.rating ? 'currentColor' : 'none'}
                      strokeWidth={1.5}
                      className="w-5 h-5 text-yellow-500"
                    />
                  ))}
                </div>
                <p className="py-3">{item.text}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-red-500 text-lg">
                      {item.name}
                    </h3>
                    <p className="text-sm mt-1">CEO, Webelite Builders</p>
                  </div>
                  <Quote className="text-red-400" />
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Pagination */}
          <div className="swiper-pagination relative mt-8 gap-1"></div>
        </Swiper>
      </div>

      {/* Extra CSS override */}
      <style>{`
        .mySwiper .swiper-pagination {
          position: relative !important;
          bottom: auto !important;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
