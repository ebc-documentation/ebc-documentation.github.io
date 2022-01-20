import React, { useCallback, useState, useRef } from 'react';
import styled from 'styled-components';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const StyledControlledZoomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & > div > button {
    display: none;
  }
`;

const StyledImageContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default function ZoomImageContainer({ img, alt = '', width, height }) {
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
        <StyledImageContainer
          width={width}
          height={height}
          onClick={handleZoom}
        >
          <img alt={alt} src={img} />
        </StyledImageContainer>
      </ControlledZoom>
    </StyledControlledZoomContainer>
  );
}
