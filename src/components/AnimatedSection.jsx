import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// contact me page
const sectionVariants = {
  visible: {
    opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' },
  },
  hidden: {
    opacity: 0, scale: 0.8, y: 80, transition: { duration: 0.4, ease: 'easeIn' },
  },
};

function AnimatedSection({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      console.log('in view');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={sectionVariants}
      className="animated-text"
    >
      {children}

    </motion.div>
  );
}

export default AnimatedSection;
