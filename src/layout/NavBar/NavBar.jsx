import {Link, useNavigate} from "react-router-dom"
import style from './NavBar.module.css'
import {useState} from 'react'
import logo from '../../assets/logo.webp'

const NavBar = () => {
    const navigate = useNavigate()

    const [navExpanded, setNavExpanded] = useState(false)

    const openNav = () => {
        setNavExpanded(!navExpanded)
    }
    const closeNav = () => setNavExpanded(false)

  return (
    <header className={style.header}>
        <nav className={style.nav}>
            <div className={style.navLogo}>
                <Link 
                    to={'/'}>
                    <img 
                        src={logo} 
                        alt={logo} 
                    />
                </Link>
            </div>
            <ul 
                className={navExpanded ? `${style.navLinks} ${style.expanded}` : style.navLinks}
                >
                    <li>
                        <span 
                            className={style.navLink} 
                            onClick={() => { 
                                closeNav()
                                navigate('/') 
                            }}
                        >Home</span>
                    </li>
                    <li>
                        <span 
                            className={style.navLink} 
                            onClick={() => { 
                                closeNav()
                                navigate('/menu') 
                            }}
                        >Menu</span>
                    </li>
                    <li>
                        <span 
                            className={style.navLink}
                            onClick={() => { 
                                closeNav()
                                navigate('/about')
                            }}
                        >About</span>
                    </li>
                    <li>
                        <span
                            className={style.navLink} 
                            onClick={() => { 
                                closeNav()
                                navigate('/contact')
                            }}
                        >Contact</span>
                    </li>
                </ul>
                <div className={`${style.three} ${style.col}`}>
                    <div onClick={openNav} className={`${style.hamburger} ${style.burger} ${navExpanded? style.isActive : ''}`}>
                        <span className={style.line}></span>
                        <span className={style.line}></span>
                        <span className={style.line}></span>
                    </div>
                </div>
        </nav>
    </header>
  )
};

export default NavBar;
