import React, { useState, useEffect } from 'react';
import { FiX, FiMenu } from 'react-icons/fi'
import { HeaderContainer } from './componentStyles';
import { MenuBlockType } from '../../utils/types/menuBlockTypes';

import { Link } from 'gatsby';

const Header = ({ menuBlock } : { menuBlock : MenuBlockType }) => {

  console.log("Header menuBlock", menuBlock);

  const { menuItems, logo } = menuBlock;
  
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const logoUrl = logo.asset.url; 

  const toggleMenu: () => void = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const toggleBodyScroll = () => {
      if (isMenuOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    };

    toggleBodyScroll();

    return () => {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  const isActive = ({ isCurrent }: { isCurrent: boolean }) => {
    return isCurrent ? { className: "clicked" } : {};
  };

  return (
    <HeaderContainer>
      <header>
        <nav>
          <Link to={`/`} className="logo">
            <img src={logoUrl} alt="Logo" />
          </Link>
          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <FiX className="hamburger-icon" /> : <FiMenu className="hamburger-icon" />}
          </div>
          <ul>
            {menuItems && menuItems.filter(item => !item.homePage).map((item, index) => ( 
              <li key={index} onClick={() => setIsMenuOpen(false)}>
                <Link to={item.slug} getProps={isActive}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="bottom-line"></div>
      </header>
      {isMenuOpen && (
        <nav className="mobile-nav">
          <div className="nav-links-container">
            {menuItems && menuItems.filter(item => !item.homePage).map((item, index) => (
              <Link to={item.slug} key={index} onClick={() => setIsMenuOpen(false)} getProps={isActive}>
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </HeaderContainer>
  )
}

export default Header;