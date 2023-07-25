import React from 'react';
import images from '../photogrid';

function Photos(props) {
  // { items.map((item) => (
  //   <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
  //     <motion.h5>{item.subtitle}</motion.h5>
  //     <motion.h2>{item.title}</motion.h2>
  //   </motion.div>
  // )); }

  //   <AnimatePresence>
  //     {selectedId && (
  //     <motion.div layoutId={selectedId}>
  //       <motion.h5>{item.subtitle}</motion.h5>
  //       <motion.h2>{item.title}</motion.h2>
  //       <motion.button onClick={() => setSelectedId(null)} />
  //     </motion.div>
  //     )}
  //   </AnimatePresence>;
  const imgList = images.map((item) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <img id={item.id} key={item.id} src={item.image} alt="" />
  ));

  return (
    <div>
      <div className="text-section">
        <h2>here are my photos!</h2>
      </div>
      <div className="photo-grid">
        {imgList}
      </div>
    </div>
  );
}

export default Photos;
