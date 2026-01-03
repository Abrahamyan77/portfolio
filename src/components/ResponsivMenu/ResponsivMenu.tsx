import React from 'react';
// import './ResponsivMenu.css';
import { motion, AnimatePresence } from 'framer-motion';

const ResponsivMenu = () => {
  return (
    <AnimatePresence>
      {
        <motion.div
          className="responsiv_menu"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </motion.div>
      }
    </AnimatePresence>
  );
};

export default ResponsivMenu;
