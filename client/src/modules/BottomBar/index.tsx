import { useDispatch, useSelector } from 'react-redux';
import { ITheme } from '../../redux/types';
import { setTheme } from '../../redux/actions';
import { selectTheme } from '../../redux/selectors';
import { StyledButton } from '../../components';
import { Wrapper } from './styled';

export const BottomBar = () => {
  const { key } = useSelector(selectTheme);
  const dispatch = useDispatch();

  const changeTheme = (theme: ITheme) => {
    dispatch(setTheme(theme));
  };

  return (
    <Wrapper>
      <StyledButton onClick={() => changeTheme('light')} $active={key === 'light'}>
        Light
      </StyledButton>
      <StyledButton onClick={() => changeTheme('dark')} $active={key === 'dark'}>
        Dark
      </StyledButton>
      <StyledButton onClick={() => changeTheme('green')} $active={key === 'green'}>
        Green
      </StyledButton>
      <StyledButton onClick={() => changeTheme('random')} $active={key === 'random'}>
        Exotic
      </StyledButton>
    </Wrapper>
  );
};
