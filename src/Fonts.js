import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face{
        font-family:"SF-Pro";
        url(./assets/fonts/SF-Pro-Text-Bold.otf) format("opentype");
      }
      `}
  />
);

export default Fonts;
