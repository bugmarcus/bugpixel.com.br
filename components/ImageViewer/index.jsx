import React, { useEffect, useRef } from 'react';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
import styles from './ImageViewer.module.scss';

function ImageViewer() {
  const viewerRef = useRef();

  useEffect(() => {
    const viewer = new Viewer(viewerRef.current, {
      // You can specify options here
    });

    return () => viewer.destroy();
  }, []);

  return (
    <div className={styles.galleryImage} ref={viewerRef}>
      <img src="../../src/assets/images/sample-01.jpg" alt="Sample 01" />
      <img src="../../src/assets/images/sample-02.jpg" alt="Sample 02" />
      {/* Add more images as needed */}
    </div>
  );
}

export default ImageViewer;
