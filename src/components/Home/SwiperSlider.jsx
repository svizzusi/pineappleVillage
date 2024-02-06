import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import thaiDish1 from '../../assets/images/thaiDish1.jpeg'

const SwiperSlider = () => {
  return (
    <div className={'max-w-72 rounded background-color: rgb(3 7 18);'}>
      <div className={'h-56'}>
        <img src={thaiDish1} alt='thaiDish1'/>
      </div>
      <section className={'h-56 flex-col gap-2 px-4'}>
        <div className={'justify-between content-center border-b-neutral-600'}>
          <h2 className={'text-2xl'}>PadThai</h2>
          <span className={'text-lg color: var(--orange)'}>$12.00</span>
        </div>
        <div>
          <p className={'text-lg'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet, consequatur iure amet</p>
        </div>
      </section>
    </div>
  )
};

export default SwiperSlider;
