// Photos from https://citizenofnowhe.re/lines-of-the-city
import './styles.css';
import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import photo1 from '../photos/1.jpg';
import photo2 from '../photos/2.jpg';
import photo3 from '../photos/3.jpg';
import photo4 from '../photos/4.jpg';
import photo5 from '../photos/5.jpg';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const photoMusicArray = [
  { photo: photo1 },
  { photo: photo2 },
  { photo: photo3 },
  { photo: photo4 },
  { photo: photo5 },
];

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const num = id + 1;

  return (
    <section>
      <div ref={ref}>
        <img className="img-page-img" src={photoMusicArray[id].photo} alt="photos of 2023" />
      </div>
      <motion.h7 style={{ y }}>{`#00${num}`}</motion.h7>
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

      {[0, 1, 2, 3, 4].map((image) => (
        <Image id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}

export default Photos;
