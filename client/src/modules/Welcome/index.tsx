import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/selectors';
import { LinkedInIcon, GitHubIcon, ReactIcon, JavaScriptIcon, NodeJSIcon } from '../../components';
import Photo from '../../assets/Me.jpg';
import { IWelcomeRedirectServices } from './types';
import {
  TitleSpan,
  TextSpan,
  Content,
  TextContent,
  LinksContainer,
  Info,
  PhotoContainer,
  TechStackContainer,
  TechImages,
  DescriptionSpan,
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
    <Content>
      <Info>
        <TextContent>
          <TitleSpan>Senior Front-End Engineer 👋🏻</TitleSpan>
          <TextSpan>
            Hello! My name is Anton Perch, I am a Senior Full-Stack engineer based in Warsaw, Poland
            📍
          </TextSpan>
          <DescriptionSpan>
            This portfolio is just a small project to catch your attention. Its purpose is not to
            demonstrate how skilled I am (you will figure that out on your own). It is meant for me
            to occasionally practice solving various tasks that come to mind.
          </DescriptionSpan>
          <LinksContainer>
            <LinkedInIcon onClick={() => linksHandler('linkedin')} color={theme.primaryTextColor} />
            <GitHubIcon onClick={() => linksHandler('github')} color={theme.primaryTextColor} />
          </LinksContainer>
        </TextContent>
        <PhotoContainer>
          <img src={Photo} alt="It's me" />
        </PhotoContainer>
      </Info>
      <TechStackContainer>
        <TextSpan>Main Tech Stack:</TextSpan>
        <TechImages>
          <ReactIcon onClick={() => linksHandler('react')} color={theme.primaryTextColor} />
          <JavaScriptIcon
            onClick={() => linksHandler('javascript')}
            color={theme.primaryTextColor}
          />
          <NodeJSIcon onClick={() => linksHandler('nodejs')} color={theme.primaryTextColor} />
        </TechImages>
      </TechStackContainer>
    </Content>
  );
};
