// Photos from https://citizenofnowhe.re/lines-of-the-city
import './styles.css';
import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <img className="img-page-img" src={`../photos/${id}.jpg`} alt="photos of 2023" />
      </div>
      <motion.h7 style={{ y }}>{`#00${id}`}</motion.h7>
    </section>
  );
}

function Photos() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}

export default Photos;
