import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { useState, useEffect } from 'react';
import './DefaultLayout.css';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';

const DefaultLayout = () => {
  const [isSticky, setIsSticky] = useState(false);

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
    <div className="layout-container">
      <NavBar />
      <main className={`main-content ${isSticky ? 'sticky-offset' : ''}`}>
        <Outlet />
      </main>
      <Container>
        <Footer />
      </Container>
    </div>
  );
};

export default DefaultLayout;
