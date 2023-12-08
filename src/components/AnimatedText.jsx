import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// contact me page
const textVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  hidden: { opacity: 0, y: 30, transition: { duration: 0.4, ease: 'easeIn' } },
};

function AnimatedText({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      console.log('in view');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={textVariants}
      className="animated-text"
    >
      {children}

    </motion.div>
  );
}

export default AnimatedText;
