import React, { useState, useEffect } from 'react';
import { generateLightColorHex, generateDarkColorHex } from "../../utils";
import { Wrapper } from './style';

export const Root = () => {
  const [backgroundColor, setBackgroundColor] = useState('#FFF');
  const [fontColor, setFontColor] = useState('#000');

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundColor(generateDarkColorHex);
      setFontColor(generateLightColorHex);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <Wrapper background={backgroundColor} font={fontColor}>Hello world!</Wrapper>;
};
