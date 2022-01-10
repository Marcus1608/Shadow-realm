import React, { useEffect } from 'react';
import './LoadingPage.scss';
import { motion } from 'framer-motion';

export const LoadingPage = () => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      window.location.replace('/landing');
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const textVariant = {
    top: {
      y: '-80vh',
    },

    bottom: {
      y: '80vh',
    },

    originalPosition: {
      y: '-50%',
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div>
      <div className="logo-container">
        <img src="imgs/shadowrealm.jpg" alt="" />

        <motion.section
          className="shadow"
          variants={textVariant}
          initial="top"
          animate="originalPosition"
        >
          Shadow
        </motion.section>
        <motion.section
          className="realm"
          variants={textVariant}
          initial="bottom"
          animate="originalPosition"
        >
          Realm
        </motion.section>

        <figure className="loading-logo">
          <p>SR</p>
        </figure>
      </div>
    </motion.div>
  );
};

export default LoadingPage;
