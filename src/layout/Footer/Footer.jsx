import style from './Footer.module.css'
import { BsYelp } from 'react-icons/bs';
import Logo from '../../components/Logo/Logo'

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <footer className={style.footer}>
        <Logo />  
        <div className={style.footerAddress}>
          <a 
            href='https://www.google.com/maps/place/Pineapple+Village/@37.0143715,-121.5947399,15z/data=!3m1!4b1!4m6!3m5!1s0x8091e3ccdede4863:0x28dbef3863509773!8m2!3d37.0143719!4d-121.5844402!16s%2Fg%2F1q629rgnj?entry=ttu' 
            target="_blank">
            769 1st St Gilroy, CA 95020
          </a>
        </div>
        <div className={style.footerHours}>
          <span>Sun - Thursday 11:00 AM - 9:30 PM</span>
          <span>Fri - Sat 11:00 AM - 10:00 PM</span>
        </div>
        <div>
          <a 
            href='https://www.yelp.com/biz/pineapple-village-gilroy' 
            target="_blank">
              <BsYelp className={style.footerSocialLink}/>
          </a>
        </div>
      </footer>
    </div>
  )
};

export default Footer;