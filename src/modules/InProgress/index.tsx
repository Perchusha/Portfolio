import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Wrapper } from './styled';

export const InProgress = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/hello');
    }, 3000);
  }, []);

  return <Wrapper>In progress...</Wrapper>;
};
