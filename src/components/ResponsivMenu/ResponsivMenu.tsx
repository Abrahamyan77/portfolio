import React, { useState, useEffect } from 'react';
import { navBarMenu } from '../../data/NavBarMenu';
import { motion, AnimatePresence } from 'framer-motion';
import './ResponsiveMenu.css';

interface ResponseProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const ResponsivMenu = ({ isOpen, toggleMenu }: ResponseProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        toggleMenu();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, toggleMenu]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMenu}
          >
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="mobile-menu-list">
                {navBarMenu.map((item) => (
                  <motion.li
                    key={item.id}
                    className="mobile-menu-item"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: item.id * 0.1 }}
                  >
                    <a href={item.path} onClick={toggleMenu}>
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResponsivMenu;
