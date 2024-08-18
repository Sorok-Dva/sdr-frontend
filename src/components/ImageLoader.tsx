import styled, { keyframes } from 'styled-components'

type ImageLoaderProps = {
  height: string;
  width?: string;
  borderRadius?: string;
}

export const imageLoaderFrames = keyframes`
  100% {
    transform: translateX(100%);
  }
`

const ImageLoader = styled.div<ImageLoaderProps>`
  border-radius: ${p => p.borderRadius ? p.borderRadius : '4px'};
  width: ${p => p.width ? p.width : '100%'};
  height: ${p => p.height};
  background-color: #ddd;
  position: relative;

  &:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      #ffffff00 0,
      #ffffff33 20%,
      #ffffff80 60%,
      #ffffff00
    );
    animation: ${imageLoaderFrames} 1.5s infinite;
    content: '';
  }
`

export default ImageLoader
