import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function ZoomImageContainer({ img, alt = '' }) {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Zoom>
        <img alt={alt} src={img} />
      </Zoom>
    </div>
  );
}