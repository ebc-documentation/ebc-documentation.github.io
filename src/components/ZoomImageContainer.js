import React, { useCallback, useState, useRef } from 'react';
import styled from 'styled-components';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import ZoomInIcon from '@site/static/img/zoom_in.svg';

const StyledControlledZoomContainer = styled.div`
  position: relative;
  display: flex;

  & > div > button {
    display: none;
  }
`;

const StyledZoomIconContainer = styled.div`
  position: absolute;
  width: 1.65rem;
  top: auto;
  left: auto;
  bottom: 0;
  right: -3rem;
  cursor: pointer;
`;

export default function ZoomImageContainer({ img, alt = '' }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = () => {
    setIsZoomed((prev) => {
      return !prev;
    });
  };

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <StyledControlledZoomContainer>
      <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
        <img alt={alt} src={img} />
      </ControlledZoom>
      <StyledZoomIconContainer
        id="zoom-icon"
        isZoomed={isZoomed}
        onClick={handleZoom}
      >
        <ZoomInIcon />
      </StyledZoomIconContainer>
    </StyledControlledZoomContainer>
  );
}
