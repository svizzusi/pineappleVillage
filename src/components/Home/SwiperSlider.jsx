import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {useEffect} from 'react'
import Data from './Data.jsx';


const SwiperSlider = () => {

useEffect(() => {
  console.log(Data)
}, []);

  return (
    <section className={'px-20'}>
      <section className={'max-w-[var(--maxWidth)] m-auto'}>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            400: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            520: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 50,
            },
          }}
        >
          {
            Data.map((data,index) => (
            <SwiperSlide key={index}>
              <div className={'max-w-72 rounded-3xl overflow-hidden bg-white'}>
                <div className={'h-56'}>
                  <img src={data.source} alt={data.alt}/>
                </div>
                <section className={'h-56 flex-col gap-2 px-4'}>
                  <div className={' flex justify-between content-center py-3.5 border-b border-b-neutral-200'}>
                    <h2 className={'font-medium text-xl'}>{data.heading}</h2>
                    <span className={'text-lg font-medium text-[var(--orange)]'}>${data.price}</span>
                  </div>
                  <div>
                    <p className={'text-base py-3'}>{data.description}</p>
                  </div>
                </section>
              </div>
            </SwiperSlide>
          ))
          }
        </Swiper>
      </section>
    </section>
  )
};

export default SwiperSlider;
