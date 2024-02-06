import style from './Hero.module.css'
import {useNavigate} from 'react-router-dom'
import thaiDish from '../../assets/images/thaiDish.webp'
import { SlLocationPin } from "react-icons/sl";

const Hero = () => {

    const navigate = useNavigate()

    const openMenu = () => {
        navigate('/menu')
    }
    
  return (
    <section className={style.heroSection}>
        <section className={style.heroContainer}>
            <section className={style.heroSectionText}>
                <div className={style.heroSectionTextIconContainer}>
                    <SlLocationPin className={style.heroSectionTextIcon}/>
                    <span>Gilroy, CA</span>
                </div>   
                <h1> Fine <span className={style.heroSectionSpan}>Thai</span> Cuisine</h1>
                <p>Discover the taste of Thailand right here!</p>
                <button 
                    className={style.heroSectionButton}
                    onClick={openMenu}
                    >Menu
                </button>
            </section>
            <div className={style.heroSectionImage}>
                <img src={thaiDish} alt={thaiDish} />
            </div>
        </section>
    </section>
  )
};

export default Hero;
