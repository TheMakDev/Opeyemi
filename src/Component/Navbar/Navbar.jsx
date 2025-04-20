import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const menuRef = useRef();

    
    const openMenu = () => {
        setIsMenuOpen(true); 
        menuRef.current.style.right = "0"; 
        document.body.style.overflow = "hidden"; 
    };


    const closeMenu = () => {
        setIsMenuOpen(false); 
        menuRef.current.style.right = "-100vw"; 
        document.body.style.overflow = "auto"; 
    };

    
    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
        closeMenu();
    };

    return (
        <div className="navbar">
            <img src={logo} alt="Logo" />
            
            {!isMenuOpen && (
                <img 
                    src={menu_open} 
                    onClick={openMenu} 
                    alt="Menu Open" 
                    className="nav-mob-open" 
                />
            )}
            <ul ref={menuRef} className="nav-menu">
                <img 
                    src={menu_close} 
                    onClick={closeMenu} 
                    alt="Menu Close" 
                    className="nav-mob-close" 
                />
                <li><AnchorLink className="anchor-link" href="#home" onClick={() => handleMenuClick("home")}>
                    <p>Home</p></AnchorLink>{menu === "home" && <img src={underline} alt="" />}</li>
                <li><AnchorLink className="anchor-link" offset={90} href="#about" onClick={() => handleMenuClick("about")}>
                    <p>About Me</p></AnchorLink>{menu === "about" && <img src={underline} alt="" />}</li>
                <li><AnchorLink className="anchor-link" offset={90} href="#service" onClick={() => handleMenuClick("service")}>
                    <p>Services</p></AnchorLink>{menu === "service" && <img src={underline} alt="" />}</li>
                <li><AnchorLink className="anchor-link" offset={90} href="#work" onClick={() => handleMenuClick("work")}>
                    <p>Portfolio</p></AnchorLink>{menu === "work" && <img src={underline} alt="" />}</li>
                <li><AnchorLink className="anchor-link" offset={90} href="#contact" onClick={() => handleMenuClick("contact")}>
                    <p>Contact</p></AnchorLink>{menu === "contact" && <img src={underline} alt="" />}</li>
            </ul>

            <div className="nav-connect">
                <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={() => handleMenuClick("contact")}>
                    Get in touch
                </AnchorLink>
            </div>
        </div>
    );
};

export default Navbar;
