import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/selectors';
import { LinkedInIcon, GitHubIcon, ReactIcon, JavaScriptIcon, NodeJSIcon } from '../../components';
import Photo from '../../assets/Photo.png';
import { IWelcomeRedirectServices } from './types';
import {
  Wrapper,
  TitleSpan,
  TextSpan,
  Content,
  TextContent,
  LinksContainer,
  Info,
  PhotoContainer,
  TechStackContainer,
  TechImages,
} from './styled';

export const Welcome = () => {
  const { theme } = useSelector(selectTheme);

  const urls = {
    github: 'https://github.com/Perchusha',
    linkedin: 'https://www.linkedin.com/in/anton-perch-768578113',
    react: 'https://react.dev/',
    javascript: 'https://developer.mozilla.org/docs/Web/JavaScript',
    nodejs: 'https://nodejs.org/',
  };

  const linksHandler = (service: IWelcomeRedirectServices) => {
    if (urls[service]) window.open(urls[service], '_blank');
  };

  return (
    <Wrapper>
      <Content>
        <Info>
          <TextContent>
            <TitleSpan>Senior Front-End Engineer 👋🏻</TitleSpan>
            <TextSpan>
              Hi, I'm Anton Perch. A passionate Senior Front-end Engineer based in Warsaw, Poland 📍
            </TextSpan>
            <LinksContainer>
              <LinkedInIcon onClick={() => linksHandler('linkedin')} color={theme.primaryText} />
              <GitHubIcon onClick={() => linksHandler('github')} color={theme.primaryText} />
            </LinksContainer>
          </TextContent>
          <PhotoContainer>
            <img src={Photo} alt="It's me" />
          </PhotoContainer>
        </Info>
        <TechStackContainer>
          <TextSpan>Main Tech Stack:</TextSpan>
          <TechImages>
            <ReactIcon onClick={() => linksHandler('react')} color={theme.primaryText} />
            <JavaScriptIcon onClick={() => linksHandler('javascript')} color={theme.primaryText} />
            <NodeJSIcon onClick={() => linksHandler('nodejs')} color={theme.primaryText} />
          </TechImages>
        </TechStackContainer>
      </Content>
    </Wrapper>
  );
};
