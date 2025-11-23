import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import toyImage1 from '../assets/toy1.png';
import toyImage2 from '../assets/toy2.png';
import toyImage3 from '../assets/toy3.png';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <Swiper
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="mySwiper rounded-xl shadow-lg"
            >
                <SwiperSlide>
                    <div className="flex flex-col items-center p-6">
                        <img
                            src={toyImage1}
                            alt="Toy Car"
                            className="w-60 h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-bold">Soft Toy</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col items-center p-6">
                        <img
                            src={toyImage2}
                            alt="Teddy Bear"
                            className="w-60 h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-bold">Educational toys</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col items-center p-6">
                        <img
                            src={toyImage3}
                            alt="Robot Toy"
                            className="w-60 h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-bold">Educational toys</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
