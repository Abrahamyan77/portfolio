import { useState, useEffect } from 'react';
import { navBarMenu } from '../../data/NavBarMenu';
import Container from '../Container/Container';
import './NavBar.css';
import ResponsivMenu from '../ResponsivMenu/ResponsivMenu';
import { FaSearch } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <Container>
          <div className="navbar_content">
            <div className="logo">
              <span>INSTARTING &lt;/&gt;</span>
            </div>
            <div className="nav_list">
              <ul className="nav-menu">
                {navBarMenu.map((item) => (
                  <li key={item.id}>
                    <a href={item.path}>{item.name}</a>
                  </li>
                ))}
              </ul>
              {/* <MdDarkMode size={34} className="dark-mode-icon" /> */}
              <FaSearch size={20} className="search-icon" />
              <ResponsivMenu isOpen={isOpen} toggleMenu={toggleMenu} />

              <button className="hamburger-menu" onClick={toggleMenu}>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
              </button>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default NavBar;
