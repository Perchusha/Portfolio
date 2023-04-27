import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { generateLightColorHex, generateDarkColorHex } from '../../utils';
import { Wrapper } from './style';

export const Hello = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>('#FFF');
  const [fontColor, setFontColor] = useState<string>('#000');

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundColor(generateDarkColorHex);
      setFontColor(generateLightColorHex);
    }, 500);

    setTimeout(() => {
      navigate('/inProgress');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper background={backgroundColor} font={fontColor}>
      Hello world!
    </Wrapper>
  );
};
