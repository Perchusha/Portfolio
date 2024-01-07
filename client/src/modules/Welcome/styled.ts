import styled from 'styled-components';

export const Content = styled.div`
  width: 50%;
  min-width: 300px;
  height: auto;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > *:not(:last-child) {
    margin-bottom: 2vmin;
  }
`;

export const TitleSpan = styled.span`
  font-weight: 700;
  font-size: ${({ theme }) => theme.titleSize};
`;

export const TextSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize};
  font-weight: 400;
`;

export const DescriptionSpan = styled.span`
  font-size: ${({ theme }) => theme.descriptionSize};
  font-weight: 400;
  font-style: italic;
`;

export const LinksContainer = styled.div`
  svg {
    cursor: pointer;
  }

  svg:not(:last-child) {
    margin-right: 2vmin;
  }
`;

export const PhotoContainer = styled.div`
  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
  width: 32vmin;
  height: 32vmin;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    animation: morph 8s ease-in-out infinite;
  }
`;

export const TechStackContainer = styled.div`
  margin-top: 8vmin;
  display: flex;
  align-items: center;
`;

export const TechImages = styled.div`
  display: flex;

  svg {
    margin-left: 8vmin;
    cursor: pointer;
  }
`;
