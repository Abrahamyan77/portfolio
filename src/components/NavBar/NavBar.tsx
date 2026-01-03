import React from 'react';
import { navBarMenu } from '../../data/NavBarMenu';
import Container from '../Container/Container';
import { MdDarkMode } from 'react-icons/md';
import './NavBar.css';
import ResponsivMenu from '../ResponsivMenu/ResponsivMenu';

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Container>
          <div className="navbar_content">
            <div>Logo</div>
            <ul>
              {navBarMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
            <MdDarkMode size={24} style={{ cursor: 'pointer' }} />
            {/* <div>{humburger menu}</div> */}
          </div>
        </Container>
      </nav>
      {/* {Mobile slider }  Reasponsiv Menui */}
      {/* <ResponsivMenu /> */}
    </>
  );
};

export default NavBar;
