import logo from '../../assets/images/logo.webp'
import {Link} from "react-router-dom"
import style from './Logo.module.css'

const Logo = () => {
  return (
    <>
        <div className={style.logo}>
                <Link 
                    to={'/'}>
                    <img 
                        src={logo} 
                        alt={logo} 
                    />
                </Link>
            </div>
    </>
  )
};

export default Logo;
