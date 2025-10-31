import React, { useEffect, useState } from 'react'
import { GiProgression } from "react-icons/gi";
import { Link } from 'react-scroll';

const Header = () => {
const[Toggle, showMenu] = useState(false);

const [sticky, setSticky] = useState(false);

useEffect(()=>{
window.addEventListener('scroll', ()=>{
window.scrollY > 1 ? setSticky(true) : setSticky(false) ;
})
},[]);

return (
<div className={`header ${sticky? 'dark-nav' : '' }`}>
    <nav className="nav container">
        <Link to="/" className='nav_logo' style={{cursor:'pointer',color:'#ccc'}}>Hafiz Abu Bakar</Link>
        <div className={Toggle ? "nav_menu show-menu" : "nav_menu" }>
            <ul className="nav_list">
                <li className="nav_item">
                    <Link to="Website" smooth={true} offset={0} duration={500} className='nav_link'
                        style={{cursor:'pointer'}}>
                    <i className='uil uil-estate nav_icon'></i> Home
                    </Link>
                </li>

                <li className="nav_item">
                    <Link to="about" smooth={true} offset={-30} duration={500} className='nav_link'
                        style={{cursor:'pointer'}}>
                    <i className='uil uil-info-circle nav_icon'></i> About
                    </Link>
                </li>

                <li className="nav_item">
                    <Link to="skills" smooth={true} offset={-80} duration={500} className='nav_link'
                        style={{cursor:'pointer'}}>
                    <i className='uil uil-award nav_icon'></i> Skills
                    </Link>
                </li>

                <li className="nav_item">
                    <Link to="project" smooth={true} offset={-100} duration={500} className='nav_link'
                        style={{cursor:'pointer'}}>
                    <i className='nav_icon'>
                        <GiProgression />
                    </i>Projects
                    <p></p>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link to="services" smooth={true} offset={-70} duration={500} className='nav_link'
                        style={{cursor:'pointer'}}>
                    <i className='uil uil-setting nav_icon'></i> Services
                    </Link>
                </li>

                {/* <li className="nav_item">
                    <Link to="" smooth={true} offset={-30} duration={500} className='nav_link'
                        style={{cursor:'pointer'}}>
                    <i className='uil uil-envelope nav_icon'></i> Portfolio
                    <p></p>
                    </Link>
                </li> */}

            </ul>
            <i className='uil uil-times nav_close' onClick={()=> showMenu(!Toggle)}></i>
        </div>


        <div className="nav_toggle" onClick={()=> showMenu(!Toggle)} style={{color:'#ccc'}}>
            <i className='uil uil-apps'></i>
        </div>
    </nav>
</div>
)
}

export default Header