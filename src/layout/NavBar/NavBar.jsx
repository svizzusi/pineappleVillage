import {NavLink} from "react-router-dom"
import style from './NavBar.module.css'
import {useState} from 'react'
import Logo from "../../components/Logo/Logo";


const NavBar = () => {

    const [navExpanded, setNavExpanded] = useState(false)

    const openNav = () => {
        setNavExpanded(!navExpanded)
    }
    const closeNav = () => setNavExpanded(false)

    const activeNow = ({isActive}) => {
        return {
            color: isActive ? 'var(--orange)' : 'inherit',
            textDecoration: isActive ? 'underline' : 'inherit'
        }
    }

  return (
    <header className={style.header}>
        <nav className={style.nav}>
            <Logo />
            <div 
                className={navExpanded ? `${style.navLinks} ${style.expanded}` : style.navLinks}
                >
                <NavLink 
                    className={style.navLink}
                    style={activeNow} 
                    to='/'
                    onClick={() => { 
                        closeNav()
                    }}
                    >Home
                </NavLink>
                <NavLink 
                    className={style.navLink} 
                    style={activeNow}
                    to='/menu'
                    onClick={() => { 
                        closeNav()
                    }}
                    >Menu
                </NavLink>
                <NavLink
                    className={style.navLink}
                    style={activeNow}
                    to='/about'
                    onClick={() => { 
                        closeNav()
                    }}
                    >About
                </NavLink>
                <NavLink
                    className={style.navLink}
                    style={activeNow} 
                    to='/contact'
                    onClick={() => { 
                        closeNav()
                    }}
                    >Contact
                </NavLink>
            </div>
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
