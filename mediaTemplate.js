
import {css} from 'styled-components';

const sizes = {
  giant: 2560,
  desktop: 1920,
  laptop: 1200,
  small: 1024,
  tablet: 768,
  phone: 376
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc
}, {});

export default media;
